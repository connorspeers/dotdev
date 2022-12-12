/** @jsxImportSource https://esm.sh/preact@10.11.3 */

import { cx } from "../../dom.ts";
import { render } from "https://esm.sh/preact@10.11.3";
import { useState } from "https://esm.sh/preact@10.11.3/hooks";

type TrackState = "ooh" | "meh";

interface Track {
  id: string;
  date: string;
  datetime: string;
  state: TrackState | null;
}

export function jukebox(root: HTMLElement) {
  const tracks: Track[] = [];
  const sources = document.querySelectorAll(".sources");
  for (const dt of Array.from(sources)) {
    const time = dt.querySelector("time")!;
    const date = time.innerText;
    const datetime = time.getAttribute("datetime")!;
    for (const li of Array.from(dt.querySelectorAll("li"))) {
      const id = li.querySelector("a")!.href.split("/track/")[1];
      const state = self.localStorage.getItem(`jukebox-${id}`);
      tracks.push({
        id,
        date,
        datetime,
        state: (
          state && (["ooh", "meh"].includes(state)) ? state as TrackState
          : null
        ),
      });
    }
  }

  document.querySelector(".app")!.innerHTML = "";
  render(<App tracks={tracks} />, root);
}

function App({ tracks: _tracks }: {
  tracks: Track[];
}) {
  const [tracks, setTracks] = useState(_tracks);

  const newTracks = tracks.filter(t => !t.state);

  const update = (track: Track) => {
    if (track.state) {
      self.localStorage.setItem(`jukebox-${track.id}`, track.state);
    } else {
      self.localStorage.removeItem(`jukebox-${track.id}`);
    }
    setTracks(tracks.map(t => (
      t.id === track.id ? track
      : t
    )));
  };

  return <>
    {!!newTracks.length && (
      <NewTracks
        top={newTracks[0]}
        next={newTracks[1]}
        update={update}
      />
    )}
    {!newTracks.length && (
      <OldTracks
        tracks={tracks}
        update={update}
      />
    )}
  </>;
}

function NewTracks({ top, next, update }: {
  top: Track;
  next?: Track;
  update: (track: Track) => void;
}) {
  const [state, setState] = useState<TrackState | null>(null);

  const _swipe = (newState: TrackState) => {
    if (state) {
      return; // They click fast
    }
    setState(newState);
    setTimeout(() => {
      setState(null);
      update({ ...top, state: newState });
    }, 300); // Transition duration from CSS
  };

  return <>
    <p class={cx("new-message", state && !next && "hide")}>
      New songs!
    </p>
    <div class="new wrap">
      {
        // Using the "key" prop prevents Preact from re-using iframe elements,
        // which would cause all kinds of problems
      }
      {next && (
        <Spotify
          key={next.id}
          id={next.id}
          class={cx("new-track", !state && "next")}
          hidden
        />
      )}
      <Spotify
        key={top.id}
        id={top.id}
        class={cx("new-track", state)}
      />
      <div style="height:352px">&nbsp;</div> {/* Placeholder */}
      <nav class={cx("new-buttons", !next && state && "fade")}>
        <button
          onClick={() => _swipe("meh")}
        >meh</button>
        <button
          style="font-weight:700; background:var(--green)"
          onClick={() => _swipe("ooh")}
        >ooh!</button>
      </nav>
    </div>
  </>;
}

function OldTracks({ tracks, update }: {
  tracks: Track[];
  update: (track: Track) => void;
}) {
  const [state, setState] = useState<TrackState>("ooh");
  const [leaving, setLeaving] = useState(false);

  const ooh = tracks.filter(t => t.state === "ooh");
  const meh = tracks.filter(t => t.state === "meh");

  const transition = (newState: TrackState) => {
    if (state === newState) {
      return;
    }
    setLeaving(true);
    setTimeout(() => {
      setLeaving(false);
      setState(newState);
    }, 100); // Matches CSS animation duration
  };

  return <>
    <nav
      class="nav"
      style={`
        --nav-color: var(${state === "ooh" ? "--green" : "--dark-gray"});
      `}
    >
      <button
        class={cx(state === "meh" && !leaving && "active")}
        onClick={() => transition("meh")}
      >meh</button>
      <button
        class={cx(state === "ooh" && !leaving && "active")}
        style="font-weight:700"
        onClick={() => transition("ooh")}
      >ooh!</button>
    </nav>
    <div class={cx("old", leaving && "leaving")}>
      <section
        class={cx(
          "wrap flow old-list",
          state === "ooh" && "active",
        )}
      >
        {ooh.map(t => (
          <Spotify class="old-track" id={t.id} small />
        ))}
      </section>
      <section
        class={cx(
          "wrap flow old-list",
          state === "meh" && "active",
        )}
      >
        {meh.map(t => (
          <Spotify class="old-track" id={t.id} small />
        ))}
      </section>
    </div>
  </>;
}

function Spotify({ id, class: cls, hidden, small }: {
  class: string;
  id: string;
  hidden?: boolean;
  small?: boolean;
}) {
  return <>
    <div class={cx("spotify", cls)}>
      <iframe
        src={`https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`}
        width="100%"
        height={small ? "152" : "352"}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        aria-hidden={hidden}
        allowFullScreen
      ></iframe>
    </div>
  </>;
}

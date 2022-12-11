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
      tracks.push({
        id,
        date,
        datetime,
        state: null,
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

  return <>
    {!!newTracks.length && (
      <NewTracks
        top={newTracks[0]}
        next={newTracks[1]}
        swipe={(state: TrackState) => {
          const update = { ...newTracks[0], state };
          setTracks(tracks.map(t => (
            t.id === newTracks[0].id ? update
            : t
          )));
        }}
      />
    )}
  </>;
}

function NewTracks({ top, next, swipe }: {
  top: Track;
  next?: Track;
  swipe: (state: TrackState) => void;
}) {
  const [state, setState] = useState<TrackState | null>(null);

  const _swipe = (newState: TrackState) => {
    if (state) {
      return; // They click fast
    }
    setState(newState);
    setTimeout(() => {
      setState(null);
      swipe(newState);
    }, 300); // Transition duration from CSS
  };

  return <>
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
        style="color:#aaa"
        onClick={() => _swipe("meh")}
      >meh.</button>
      <button
        style="background:var(--green)"
        onClick={() => _swipe("ooh")}
      >ooh!</button>
    </nav>
  </>;
}

function Spotify({ id, class: cls, hidden }: {
  class: string;
  id: string;
  hidden?: boolean;
}) {
  return (
    <iframe
      class={cls}
      style="border-radius:12px"
      src={`https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`}
      width="100%"
      height="352"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      aria-hidden={hidden}
      allowFullScreen
    ></iframe>
  )
}

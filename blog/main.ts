import { tin, http } from "./deps.ts";

function redirect(to: string) {
  return (req: Request) => {
    const curr = new URL(req.url);
    const next = new URL(to, curr.origin);
    return Response.redirect(next.href);
  };
}

const app = tin.router({
  "index": redirect("/hello-world-2022"),
  "*": tin.assets(),
});

http.serve(app, {
  onError: err => {
    if (err instanceof Deno.errors.NotFound) {
      return new Response("404 not found", { status: 404 });
    }

    console.error(err);
    return new Response("500 internal server error", { status: 500 });
  },
})

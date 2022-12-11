import { tin, http } from "./deps.ts";

const app = tin.router({
  "*": tin.assets("public", {
    prep: true,
    watch: true,
  }),
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

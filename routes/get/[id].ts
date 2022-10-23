import create from "../../assets/create.ts";
import Names from "../../assets/names.ts";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req, ctx) {
    const name = Names.find((x) =>
      (x.email.toLowerCase() === ctx.params.id.toLowerCase()) ||
      (x.phone === ctx.params.id)
    );

    if (!name) return new Response("", { status: 404 });

    const cert = create(name.name, name.college);

    return Promise.resolve(new Response(cert));
  },
};

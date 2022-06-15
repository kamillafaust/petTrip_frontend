import { rest } from "msw";

export const handlers = [
  rest.get("/cities/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { label: "São José", id: 1 },
        { label: "Biguaçu", id: 2 },
      ])
    );
  }),
];

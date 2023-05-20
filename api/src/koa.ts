import Koa from "koa";
import koaRouter from "koa-router";
const app = new Koa();
const router = new koaRouter();
import { pokedex } from "./pokedex.js";

router
  .get("/pokedexdata", (ctx) => {
    ctx.body = pokedex;
  })
  .get("/pokedexdata/name/:name", (ctx) => {
    console.log(ctx);
    const pokemon = pokedex.find((pokemon) => {
      return pokemon.name.toLowerCase() === ctx.params.name;
    });
    if (pokemon) return (ctx.body = pokemon);

    ctx.response.status = 400;
    ctx.response.message = "Invalid request!";
  })
  .get("/pokedexdata/id/:id", (ctx) => {
    const pokemon = pokedex.find((pokemon) => {
      return pokemon.id === ctx.params.param;
    });
    if (pokemon) return (ctx.body = pokemon);

    ctx.response.status = 400;
    ctx.response.message = "Invalid request!";
  })
  .get("/pokedexdata/type/:type", (ctx) => {
    const pokemon = pokedex.filter((pokemon) => {
      const lowerTypes = pokemon.types.map((type) => type.toLowerCase());
      return lowerTypes.includes(ctx.params.type);
    });
    if (pokemon.length != 0) return (ctx.body = pokemon);

    ctx.response.status = 400;
    ctx.response.message = "Invalid request!";
  })
  .get("/pokedexdata/ability/:ability", (ctx) => {
    const pokemon = pokedex.filter((pokemon) => {
      return pokemon.ability.toLowerCase() === ctx.params.ability;
    });
    if (pokemon.length != 0) return (ctx.body = pokemon);

    ctx.response.status = 400;
    ctx.response.message = "Invalid request!";
  })
  .get(/.*/, (ctx) => {
    ctx.response.status = 400;
    ctx.response.message = "Invalid request";
  });

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log("hello"));

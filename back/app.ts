import fastify, { FastifyServerOptions } from "fastify";
import fastifyCors from "@fastify/cors";
import dbConnector from "./lib/dbConnector";
import job from "./routes/job/job";
import shift from "./routes/shift/shift";
import user from "./routes/user/user";

export default (opt: FastifyServerOptions = {}) => {
  const server = fastify(opt);
  server.register(fastifyCors, {
    origin: "http://localhost:3000",
  });
  server.register(dbConnector);

  server.register(user, { prefix: "api/user" });
  server.register(job, { prefix: "api/job" });
  server.register(shift, { prefix: "api/shift" });

  return server;
};

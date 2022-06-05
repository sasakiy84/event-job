import { FastifyPluginCallback } from "fastify";

const job: FastifyPluginCallback = (server, _, done) => {
  server.get("/", async (request, reply) => {
    return await server.db.job.findMany({ include: { responsible: true } });
  });

  server.post("/", async () => {
    return await server.db.job.create({
      data: {
        name: "example",
        responsible: {
          connect: {
            id: 1,
          },
        },
      },
    });
  });

  done();
};

export default job;

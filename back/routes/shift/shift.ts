import { FastifyPluginCallback } from "fastify";

const shift: FastifyPluginCallback = (server, _, done) => {
  server.get("/", async (request, reply) => {
    return await server.db.shift.findMany({
      include: { user: true, job: true },
    });
  });

  server.post("/", async () => {
    return await server.db.shift.create({
      data: {
        job: {
          connect: { id: 1 },
        },
        user: {
          connect: { id: 1 },
        },
        startHour: 1,
        startDay: 1,
        startMin: 30,
      },
    });
  });

  done();
};

export default shift;

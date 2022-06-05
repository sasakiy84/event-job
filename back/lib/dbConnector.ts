import fastifyPlugin from "fastify-plugin";
import { PrismaClient } from "@prisma/client";
import { FastifyPluginCallback } from "fastify";

declare module "fastify" {
  export interface FastifyInstance {
    db: PrismaClient;
  }
}

const dbPlugin: FastifyPluginCallback = (fastify, _opts, done) => {
  const prisma = new PrismaClient();
  fastify.decorate("db", prisma);
  fastify.addHook("onClose", async () => {
    await prisma.$disconnect();
  });

  done();
};

export default fastifyPlugin(dbPlugin);

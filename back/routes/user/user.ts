import { FastifyPluginCallback } from "fastify";
import { FromSchema } from "json-schema-to-ts";
import { createUserDto, getUserByIdDto } from "./user.dto";

const user: FastifyPluginCallback = (server, _opt, done) => {
  server.get("/", async (_request, _reply) => {
    return await server.db.user.findMany({
      include: {
        profile: true,
      },
    });
  });

  server.get<{ Params: FromSchema<typeof getUserByIdDto> }>(
    "/:userId",
    {
      schema: {
        params: getUserByIdDto,
      },
    },
    async (request, _reply) => {
      return await server.db.user.findFirst({
        where: {
          id: request.params.userId,
        },
      });
    }
  );

  server.post<{ Body: FromSchema<typeof createUserDto> }>(
    "/",
    {
      schema: {
        body: createUserDto,
      },
    },
    async (request, _reply) => {
      const body = request.body;
      return await server.db.user.create({
        data: {
          name: body.name,
          email: body.email,
          profile: {
            create: { bio: body.bio },
          },
        },
      });
    }
  );

  done();
};

export default user;

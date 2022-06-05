import { FastifyPluginCallback } from "fastify";
import {
  createUserRequestDto,
  createUserRequestDtoType,
  getUserByIdDtoRequestType,
  getUserByIdRequestDto,
  getUserByIdResponseDto,
  getUserByIdResponseDtoType,
  getUsersResponseDto,
  getUsersResponseDtoType,
} from "../../../types/user.type";

const user: FastifyPluginCallback = (server, _opt, done) => {
  server.get<{ Reply: getUsersResponseDtoType }>(
    "/",
    {
      schema: {
        response: getUsersResponseDto,
      },
    },
    async (_request, _reply) => {
      const users: getUsersResponseDtoType = await server.db.user.findMany({
        include: {
          profile: true,
        },
      });
      return users;
    }
  );

  server.get<{
    Params: getUserByIdDtoRequestType;
    Reply: getUserByIdResponseDtoType;
  }>(
    "/:userId",
    {
      schema: {
        params: getUserByIdRequestDto,
        response: getUserByIdResponseDto,
      },
    },
    async (request, _reply) => {
      const user: getUserByIdResponseDtoType = await server.db.user.findFirst({
        where: {
          id: request.params.userId,
        },
        include: {
          profile: true,
        },
      });
      return user;
    }
  );

  server.post<{ Body: createUserRequestDtoType }>(
    "/",
    {
      schema: {
        body: createUserRequestDto,
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

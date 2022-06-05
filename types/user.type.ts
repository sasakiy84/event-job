import { FromSchema } from "json-schema-to-ts";

export const createUserRequestDto = {
  type: "object",
  additionalProperties: false,
  properties: {
    name: {
      type: "string",
    },
    email: { type: "string" },
    bio: { type: "string" },
  },
  required: ["name", "email", "bio"],
} as const;

export type createUserRequestDtoType = FromSchema<typeof createUserRequestDto>;

export const getUserByIdRequestDto = {
  type: "object",
  additionalProperties: false,
  properties: {
    userId: {
      type: "number",
    },
  },
  required: ["userId"],
} as const;

export type getUserByIdDtoRequestType = FromSchema<
  typeof getUserByIdRequestDto
>;

const User = {
  type: "object",
  required: ["name", "id", "email", "profile"],
  additionalProperties: false,
  properties: {
    name: {
      type: "string",
    },
    id: {
      type: "number",
    },
    email: {
      type: "string",
    },
    profile: {
      type: "object",
      required: ["bio"],
      additionalProperties: false,
      properties: {
        bio: {
          type: "string",
        },
      },
    },
  },
} as const;

export const getUserByIdResponseDto = User;

export type getUserByIdResponseDtoType = FromSchema<
  typeof getUserByIdResponseDto
>;

export const getUsersResponseDto = {
  type: "array",
  items: User,
} as const;

export type getUsersResponseDtoType = FromSchema<typeof getUsersResponseDto>;

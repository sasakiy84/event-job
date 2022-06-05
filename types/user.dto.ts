export const createUserDto = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    email: { type: "string" },
    bio: { type: "string" },
  },
  required: ["name", "email", "bio"],
} as const;

export const getUserByIdDto = {
  type: "object",
  properties: {
    userId: {
      type: "number",
    },
  },
  required: ["userId"],
} as const;

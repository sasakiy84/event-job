import app from "./app";

const server = app({
  logger: true,
});

server.listen(4000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

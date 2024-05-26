import dbConnection from "./utils/dbConnection";
import config from "./app/config";
import app from "./app";
const server = async () => {
  await dbConnection(config.database_url as string);

  app.listen(config.port, () => {
    console.log(`App is listening on port ${config.port}`);
  });
};

server();

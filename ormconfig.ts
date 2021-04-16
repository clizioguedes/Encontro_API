import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  name: "default",
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ["./src/models/**.ts"],
  migrations: ["./src/database/migrations/**.ts"],
  cli: {
    migrationsDir: "src/database/migrations",
  },
};

export = config;

// CRIAR AS MIGRATIONS
// yarn typeorm migration:create -n CreateProfile
// yarn typeorm migration:create -n CreateUser

// RODAR AS MIGRATIONS
// yarn typeorm migration:run

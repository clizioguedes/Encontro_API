import createConnection from "../database";
import request from "supertest";
import { app } from "../app";

describe("User", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });
  it(" Cadastrando usuario no sistema", async () => {
    const response = await request(app).post("/users").send({
      name: "example@example.com",
      phone: "84998182121",
    });
    expect(response.status).toBe(201);
  });

  it("Usuario com phone ja cadastrado", async () => {
    const response = await request(app).post("/users").send({
      name: "example@example.com",
      phone: "84998182121",
    });
    expect(response.status).toBe(400);
  });
});

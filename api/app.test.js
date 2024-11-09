import { describe, expect, test, beforeEach } from "vitest";
import request from "supertest";
import createApp from "./app.js";
import normalRepository from "./repositories/normalRepository.js";

describe("App", () => {
  let app;

  beforeEach(() => {
    app = createApp({
      repository: normalRepository,
    });
  });

  //Obtener todos los usuarios
  test("GET /api/users", async () => {
    const response = await request(app).get("/api/users");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      { id: 1, name: "John Doe", isAdmin: true },
      { id: 2, name: "Jane Doe", isAdmin: false },
      { id: 3, name: "Jim Doe", isAdmin: false },
    ]);
  });

  test("GET /api/users", async () => {
    const response = await request(app).get("/api/users");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      { id: 1, name: "John Doe", isAdmin: true },
      { id: 2, name: "Jane Doe", isAdmin: false },
      { id: 3, name: "Jim Doe", isAdmin: false },
    ]);
  });

  test("POST /api/users", async () => {
    const userData = {
      name: "Gabriel",
    };
    const response = await request(app).post("/api/users").send(userData);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("name", "Gabriel");
    expect(response.body).toHaveProperty("id");
    expect(response.body).toMatchObject({
      id: expect.any(Number),
      name: "Gabriel",
    });
  });

  test("PUT /api/users", async () => {
    const userData = {
      name: "Gabriel",
      isAdmin: true,
    };
    const response = await request(app).put("/api/users/2").send(userData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name", "Gabriel");
    expect(response.body).toHaveProperty("id");
    expect(response.body).toMatchObject({
      id: expect.any(Number),
      name: "Gabriel",
    });
  });

  test("DELETE /api/users", async () => {
    const userData = {
      name: "Gabriel",
      isAdmin: true,
    };
    const response = await request(app).put("/api/users/2").send(userData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name", "Gabriel");
    expect(response.body).toHaveProperty("id");
    expect(response.body).toMatchObject({
      id: expect.any(Number),
      name: "Gabriel",
    });
  });
});

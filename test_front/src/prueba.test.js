import { test, expect } from "vitest";
import { createTitle } from "./prueba";

test("createTitle", () => {
  const title = createTitle("Hello World");
  expect(title.textContent).toBe("Hello World");
});

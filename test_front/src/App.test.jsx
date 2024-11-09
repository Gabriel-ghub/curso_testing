import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";
import userEvent from "@testing-library/user-event";

//Los métodos que empiezan con get... son SiNCRONOS

//Los métodos que empiezan con find... son ASÍNCRONOS

//Los métodos que empiezan con query... no fallan es, por ejemplo, si quiero eliminar un mensaje de error y ver que ya no esta visible.

describe("App", () => {
  test("Debería renderizar un titulo", () => {
    render(<App />);
    const title = screen.getByRole("heading", {
      level: 1,
    });

    expect(title.textContent).toBe("Vite + React");
  });

  test("Debería renderizar un titulo", () => {
    render(<App />);
    const title = screen.getByRole("heading", {
      level: 1,
    });

    //Para poder utilizar el tobeIntheDocument, debemos instalar "@testing-library/jest-dom/vitest", e importarlo.
    expect(title).toBeInTheDocument();
  });

  test("Debería incrementar el contado al hacer click en el boton", async () => {
    render(<App />);

    const button = screen.getByRole("button", { name: "count is 0" });

    await userEvent.click(button);

    const buttonIncremented = screen.getByRole("button", {
      name: "count is 1",
    });

    //Para poder utilizar el tobeIntheDocument, debemos instalar "@testing-library/jest-dom/vitest", e importarlo.
    expect(buttonIncremented).toBeInTheDocument();
  });
});

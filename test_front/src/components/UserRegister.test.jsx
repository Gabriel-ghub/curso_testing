import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserRegister } from "./userRegister";

describe("UserRegister", () => {
  test("Debería completar el formulario y llamar a la funcion onRegister", async () => {
    const mockOnRegister = vi.fn();
    render(<UserRegister onRegister={mockOnRegister} />);

    const inputName = screen.getByLabelText("Nombre");
    const inputEmail = screen.getByLabelText("Email");
    const inputPassword = screen.getByLabelText("Contraseña");

    const submitButton = screen.getByRole("button", { name: "Registrarse" });

    await userEvent.type(inputName, "Gabriel");
    await userEvent.type(inputEmail, "romerogabriel.ad@gmail.com");
    await userEvent.type(inputPassword, "12345678");

    await userEvent.click(submitButton);

    expect(mockOnRegister).toBeCalledWith({
      name: "Gabriel",
      email: "romerogabriel.ad@gmail.com",
      password: "12345678",
    });
  });

  test("Deberia completar el formulario con error y mostrar el alert", async () => {
    const mockOnRegister = vi.fn();
    render(<UserRegister onRegister={mockOnRegister} />);

    const inputName = screen.getByLabelText("Nombre");
    const inputEmail = screen.getByLabelText("Email");
    //No le vamos pasar el input para que falle.
    const inputPassword = screen.getByLabelText("Contraseña");

    const submitButton = screen.getByRole("button", { name: "Registrarse" });

    await userEvent.type(inputName, "Gabriel");
    await userEvent.type(inputEmail, "romerogabriel.ad@gmail.com");

    await userEvent.click(submitButton);
    const alertError = screen.getByText("Todos los campos son requeridos");
    expect(alertError).toBeInTheDocument();
    expect(mockOnRegister).not.toBeCalled();
  });
});

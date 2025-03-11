import { AuthContext } from "../../src/auth";
import { render, screen } from "@testing-library/react";
import PublicRoute from "../../src/router/PublicRoute";
import { MemoryRouter, Route, Routes } from "react-router";
import AppRouter from "../../src/router/AppRouter";

describe("Pruebas en <AppRouter />", () => {
  test("Debe de mostrar el login si no esta autenticado", () => {
    render(
      <AuthContext.Provider value={{ logged: false }}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    // screen.debug();

    expect(screen.getAllByText("Login").length).toBe(2);
  });

  test("debe de mostrar el componente de Marvel si está autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Strider",
        id: "ABC",
      },
    };

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText("Marvel")).toBeTruthy();
  });
});

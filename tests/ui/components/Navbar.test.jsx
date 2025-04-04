import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../src/ui/components";
import { AuthContext } from "../../../src/auth";
import { MemoryRouter, useNavigate } from "react-router";

const mockedUseNavigate = jest.fn();

jest.mock('react-router', ()=>({
    ...jest.requireActual('react-router'),
    useNavigate: ()=> mockedUseNavigate,
}))

describe("Pruebas en <Navbar />", () => {
  const contextValue = {
    logged: true,
    user: {
      name: "Strider",
      id: "ABC",
    },
    logout: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe de mostrar el nombre del usuario", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText(contextValue.user.name)).toBeTruthy();
  });

  test("debe de llamar el logout y navigate cuando se hace click en el botón", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logoutBtn = screen.getByRole("button");
    fireEvent.click(logoutBtn);

    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});

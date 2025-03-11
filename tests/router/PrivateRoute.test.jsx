import { render, screen } from "@testing-library/react";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router";


describe("Pruebas en <PublicRoute />", () => {
    test("debe de mostrar el children si está autenticado", () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
              name: "Strider",
              id: "ABC",
            },
          };

        render(
          <AuthContext.Provider value={contextValue}>
            <MemoryRouter >
            <PrivateRoute>
              <h1>Ruta privada</h1>
            </PrivateRoute>
            </MemoryRouter>
          </AuthContext.Provider>
        );
    
        expect(screen.getByText("Ruta privada")).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/");
      });
})
import { Navigate, Route, Routes } from "react-router";

import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* <Route path="login/*" element={ */}
        <Route path="login" element={
          <PublicRoute>
            <LoginPage />
            {/* <Routes>
              <Route path="/*" element={<Navigate to="/login" />} />
            </Routes> */}
          </PublicRoute>
      } />
        {/* <Route path="login" element={<LoginPage />} /> */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
        {/* <Route path="/*" element={<HeroesRoutes />} /> */}
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}
      </Routes>
    </>
  );
};

export default AppRouter;

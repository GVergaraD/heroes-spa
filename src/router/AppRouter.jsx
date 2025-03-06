import { Navigate, Route, Routes } from "react-router";

import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";

const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}
      </Routes>
    </>
  );
};

export default AppRouter;

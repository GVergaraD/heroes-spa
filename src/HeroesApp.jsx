import { AuthProvider } from "./auth";
import AppRouter from "./router/AppRouter";

const HeroesApp = () => {
  return (
    <div>
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
    </div>
  );
};

export default HeroesApp;

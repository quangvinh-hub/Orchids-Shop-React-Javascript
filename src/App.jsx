import { ThemeProvider } from "./contexts/ThemeContext";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <div>
          <AppRoutes />
        </div>
      </ThemeProvider>
    </>
  );
}

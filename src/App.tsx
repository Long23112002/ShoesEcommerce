import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <ToastContainer />
      <AppRoutes />
    </>
  );
}

export default App;

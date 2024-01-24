import { RouterProvider } from "react-router-dom";
import "boxicons";
import router from "./routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

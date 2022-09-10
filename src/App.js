import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import CoursesContextProvider from "./contexts/CoursesContext";

function App() {
  return (
    <CoursesContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CoursesContextProvider>
  );
}

export default App;

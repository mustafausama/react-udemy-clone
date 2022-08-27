import { ToastContainer } from "react-toastify";
import CoursesSelection from "./components/CoursesSelection";
import CoursesContextProvider from "./contexts/CoursesContext";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <CoursesContextProvider>
        <CoursesSelection />
      </CoursesContextProvider>
      <ToastContainer />
    </div>
  );
}

export default App;

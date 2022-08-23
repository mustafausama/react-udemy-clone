import Courses from "./components/Courses";
import CoursesContextProvider from "./contexts/CoursesContext";

function App() {
  return (
    <div className="App">
      <CoursesContextProvider>
        <Courses />
      </CoursesContextProvider>
    </div>
  );
}

export default App;

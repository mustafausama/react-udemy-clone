import CoursesSelection from "./components/CoursesSelection";
import CoursesContextProvider from "./contexts/CoursesContext";

function App() {
  return (
    <div className="App">
      <CoursesContextProvider>
        <CoursesSelection />
      </CoursesContextProvider>
    </div>
  );
}

export default App;

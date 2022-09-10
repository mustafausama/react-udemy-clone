import Homepage from "../pages/Home/Homepage";
import CourseDetails from "../pages/Course/CourseDetails";

export const routes = [
  {
    path: "*",
    element: <Homepage />
  },
  {
    path: "search",
    element: <Homepage />
  },
  {
    path: "course/:id",
    element: <CourseDetails />
  }
];

export const filterCourses = (courses, keyword) => {
  const res = {};
  Object.keys(courses).forEach((category) => {
    res[category] = { ...courses[category] };
    res[category].courses = courses[category].courses.filter(({ title }) =>
      title.toLowerCase().includes(keyword.toLowerCase())
    );
  });
  return res;
};

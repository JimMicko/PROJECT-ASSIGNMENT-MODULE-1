import { sort, search, newsList } from "./main.js";

// //Example testing for search function
test("Search function testing", () => {
  expect(search(newsList)).toEqual(["What films should an aspiring journalist watch?"]);
});

test("Sort Ascending function testing", () => {
  const result=sort("ascending")
  expect(newsList).toBe(result);
});

test("Sort Descending function testing", () => {
  const result=sort("descending")
  expect(newsList).toBe(result);
});
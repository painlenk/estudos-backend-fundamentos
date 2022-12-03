const express = require("express");

const app = express();

app.use(express.json());

let dataCourses = ["NodeJS", "Express", "NextJS"];

app.get("/courses", (request, response) => {
  return response.json(dataCourses);
});

app.post("/courses", (request, response) => {
  const { course } = request.body;
  dataCourses.push(course);

  return response.json(dataCourses);
});

app.put("/courses/:id", (request, response) => {
  const { id } = request.params;
  const { course } = request.body;

  if (!dataCourses[id]) {
    return response.status(404).send("not found");
  }

  dataCourses[id] = course;
  return response.status(201).json(dataCourses);
});

app.patch("/courses/:id", (request, response) => {
  const { id } = request.params;
  const { course } = request.body;

  if (!dataCourses[id]) {
    return response.status(404).send("not found");
  }

  dataCourses[id] = course;
  return response.status(201).json(dataCourses);
});

app.delete("/courses/:id", (request, response) => {
  const { id } = request.params;

  if (!dataCourses[id]) {
    return response.status(404).json("not found");
  }

  dataCourses.splice(id, 1);
  return response.status(200).json(dataCourses);
});

app.listen(3333);

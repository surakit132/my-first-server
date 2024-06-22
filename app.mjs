import express from "express";

const app = express();
const port = 3001;

app.get("/profiles", (req, res) => {
  const profile = {
    data: {
      name: "john",
      age: 20,
    },
  };

  return res.status(200).json(profile);
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

const express = require("express");
const cors = require("cors");
const authMiddleware = require("./configs/auth-middleware");
const customerRouter = require("./routes/customer-route");
const app = express();
app.use(cors());

const books = [
  {
    id: 1,
    name: "Harry Potter",
    image:
      "https://pmpub-catalogue.s3-eu-west-1.amazonaws.com/covers/web/9781781100240.jpg",
  },
  {
    id: 2,
    name: "Clean Code",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG+L._SX374_BO1,204,203,200_.jpg",
  },
  {
    id: 3,
    name: "Javascript: The good parts",
    image: "https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg",
  },
];

// app.use("/", authMiddleware);
app.use("/customers", customerRouter)

app.get("/books", (request, response) => {
  return response.send({ books });
});

app.listen(3001, () => console.log("The server is running at PORT 3001"));

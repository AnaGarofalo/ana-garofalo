import express from "express";
import routes from "./routes/routes.js";
import { SERVER_PORT } from "./config.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/app", routes);

app.use((req, res, next) => {
  res.status(404).send({
    message: "Not found",
  });
});

app.listen(SERVER_PORT, () => {
  console.log(`Aplicación escuchando en puerto ${SERVER_PORT}`);
});

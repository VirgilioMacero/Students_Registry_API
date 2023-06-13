import express from "express"
import dotenv from "dotenv"
import {Routes} from "./routes/User.Routes.js"


dotenv.config()

const app = express();

const router = express.Router();


app.use(router);
app.use(express.json())

Routes(app)


app.listen(3000, () => {
  console.log("App Listening on port 3000");
});

import app from "./app";
import dotenv from "dotenv";
import "./models/Video";
import "./models/User";
import "./models/Comment";
import "./db";

dotenv.config();

const PORT = process.env.PORT;

const handlelistener = () => {
    console.log(`listening localhost:${PORT}`);
}
app.listen(PORT,handlelistener);
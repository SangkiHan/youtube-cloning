import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

mongoose.connect(process.env.MONGO_URL,
{
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useFindAndModify : false
});

const db = mongoose.connection;

const handleopen = () => {
    console.log("Connected to mongod server");
};
const handlerror = (error) => {
    console.log(`disconnect by ${error}`);
};


db.once('open',handleopen);
db.on('error',handlerror);

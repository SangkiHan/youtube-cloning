import express from "express";
import morgan from "morgan";
import bodyparser from "body-parser";
import cookieparser from "cookie-parser";
import helmet from "helmet";
import userRouter from "./router/userRouter";
import videoRouter from "./router/videoRouter";
import globalRouter from "./router/globalRouter";
import routes from "./routes";
import pug from "pug";
import {localmiddleware} from "./middleware";

const app = express();

app.use(cookieparser());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));
app.set('view engine' , 'pug');
app.use("/uploads",express.static("uploads"));
app.use("/static",express.static("static"));

app.use(localmiddleware);

app.use(routes.home,globalRouter);
app.use(routes.user,userRouter);
app.use(routes.videos,videoRouter);

export default app;
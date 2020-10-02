import express from "express";
import routes from "../routes";
import { videos, upload, videoDetail, deleteVideo, editVideo, postupload, posteditVideo } from "../Controllers/videoController";
import { uploadVideo } from "../middleware";

const videoRouter = express.Router();

videoRouter.get(routes.deleteVideo(),deleteVideo);
videoRouter.get(routes.videos,videos);
videoRouter.get(routes.upload,upload);
videoRouter.post(routes.upload,uploadVideo,postupload);
videoRouter.get(routes.editVideo(),editVideo);
videoRouter.post(routes.editVideo(),posteditVideo);
videoRouter.get(routes.videoDetail(),videoDetail);

export default videoRouter;
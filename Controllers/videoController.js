import routes from "../routes";
import Video from "../models/Video";

export const home = async(req,res) => {
    try{
        const video = await (await Video.find({})).sort();
        res.render("home",{pageTitle:"home", video});
    }catch(error){
        res.render("home",{pageTitle:"home", video:[]});
        console.log(error);
    }
};
export const search =async (req,res) => {
    const {
        query:{term:Searchingby}
    } = req;
    let videos = [];
    try{
        videos = await Video.find({
            title:{$regex:Searchingby, $options : "i"}
      })
    }catch(error){
        console.log(error);
    }
    res.render("search",{Searchingby,videos});
};
export const videos = (req,res) => res.render("videos");
export const upload = (req,res) => res.render("upload");
export const postupload = async (req,res) => {
    const {
        body:{title,description},
        file:{path}
    } =req;

    const newVideo = await Video.create({
        fileUrl : path,
        title,
        description
    })
    res.redirect(routes.videoDetail(newVideo.id));
};
export const editVideo = async(req,res) => {
    const {
        params : {id}
    } = req;
    try{
        const video = await Video.findById(id);
        res.render("editvideo",{video});
    }catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
    
};
export const posteditVideo = async (req,res) => {
    const {
        params : {id},
        body : {title,description}
    } =req;
    console.log(req.params);
    try{
        const video = await Video.findOneAndUpdate({_id:id},{title,description})
        res.redirect(routes.videoDetail(id));
    }catch(error){
        res.redirect(routes.home);
        console.log(error);
    }
};
export const deleteVideo = async (req,res) => {
    const {
        params : {id}
    } =req;
    try{
        await Video.findOneAndRemove({_id:id});
    }catch(error){
        console.log(error); 
    }
    res.redirect(routes.home);
};
export const videoDetail = async (req,res) => {
    const {
        params : {id}
    } =req;
    try{
    const video = await Video.findById(id);
    res.render("videodetail",{pageTitle:"videoDetail",video})
    }catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
};
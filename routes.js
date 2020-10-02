
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

const USER = "/user";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const USER_DETAIL = "/:id";

const VIDEOS = "/videos";
const VIDEO_DETAIL = "/:id";
const UPLOAD = "/upload";
const DELETE_VIDEO = "/:id/delete";
const EDIT_VIDEO = "/:id/edit";

const routes = {
    home : HOME,
    join : JOIN,
    login : LOGIN,
    logout : LOGOUT,
    search : SEARCH,
    user : USER,
    userDetail : (id) =>{
        if(id){
            return `user/${id}`
        }
        else{
            return USER_DETAIL
        }
    },
    editProfile : EDIT_PROFILE,
    changePassword : CHANGE_PASSWORD,
    videos : VIDEOS,
    upload : UPLOAD,
    videoDetail : (id) =>{
        if(id){
            return `/videos/${id}`
        }
        else{
            return VIDEO_DETAIL
        }
    },
    deleteVideo : (id) => {
        if(id){
            return `/videos/${id}/delete`;
        }else{
            return DELETE_VIDEO;
        }
    },
    editVideo : (id) => {
        if(id){
            return `/videos/${id}/edit`;
        }
        else{
            return EDIT_VIDEO;
        }
    }
}

export default routes;

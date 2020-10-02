import routes from "../routes";
import User from "../models/User";

export const getjoin = (req,res) => res.render("join");
export const postjoin = async (req,res) => {
    const {
        body : {name,email,password1,password2}
    } = req;
    if(password1 !== password2){
        res.render("join",{pageTitle:"join"})
    }
    else{
        try{
            const user = await User.create({
                name,
                email
            })
            await User.register(user,passowrd1);
        }catch(error){
            console.log(error);
        }
        res.redirect(routes.home);
    }
};
export const getlogin = (req,res) => res.render("login");
export const postlogin = (req,res) => {
    res.redirect(routes.home);
};
export const logout = (req,res) => res.render("logout");
export const user = (req,res) => res.render("user");
export const editProfile = (req,res) => res.render("editprofile");
export const changePassword = (req,res) => res.render("changepassword");
export const userDetail = (req,res) => {
    res.render("userdetail")
};

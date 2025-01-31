//cookies
const userAuth=(req,res,next)=>{
  let{token}=req.cookies;
if(token){
 return   next();
}else{
    return res.redirect('/login');
}
   
};
module.exports = userAuth;


const adminMiddleware = async(req,res,next)=>{
try {
    console.log("Checked user is admin or not: ",req.user);
    const adminRole = req.user.isAdmin;
    res.status(200).json({message:req.user.isAdmin});
    
    if(!adminRole){
        res.status(403).json({message: "Access denied. User is not an Admin"});
    }
    
    next();
} catch (error) {
    next(error);
}
}

module.exports = adminMiddleware;
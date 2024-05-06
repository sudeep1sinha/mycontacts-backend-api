const {constants}=require("../constant");
const errorHandler = (err , res ,req , next)=>{
    const statusCode= res.statusCode ? res.statusCode:500;
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
                title:"Validation Failed",
                message:err.message, 
                stactTrace:err.stack,
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title:"not found",
                message:err.message, 
                stactTrace:err.stack,
            });
        case constants.UNAUTHORISED:
            res.json({
                title:"UNAUTHORISED",
                message:err.message, 
                stactTrace:err.stack,
            });
        case constants.FORBIDDEN:
            res.json({
                title:"FORBIDDEN",
                message:err.message, 
                stactTrace:err.stack,
            });
        case constants.SERVER_ERROR:
            res.json({
                title:"SERVER_ERROR",
                message:err.message, 
                stactTrace:err.stack,
            });
            
                
                
        default:
            console.log("No error all good!")
            break;
        
    
        }
    


};
module.exports=errorHandler;
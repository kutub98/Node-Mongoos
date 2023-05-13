async function getUser(){
    try{
        // undefined.find()
        const EmailHandler = new Error("This Email already already Exits")
        throw EmailHandler
    }catch(error){
        // console.log(error);
        errorHandler(error)
    }
}

// getUser()


function errorHandler(error){
    // to know specific error message
    const {name, message, stack} = error;

    // for keeping store error message for future 
    // Logger.error({
    //     name, message, stack
    // })

    console.log("Internal Server Error");

}

module.exports.errorHandler =errorHandler;
module.exports.getUser =getUser;

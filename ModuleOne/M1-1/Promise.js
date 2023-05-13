
const myPromise = new Promise((accepted, declined) =>{
const user = {id: 1}
 if(!user){
    declined("You're request has been Declined")
 }else{
    setTimeout(()=>{
        accepted({name: "Jhon"})
    },1000)
 }
})


const userIds =  ["1", 2, 3,4, 5]
let userData = []
for(let i =0; i <userIds.length; i++){
    const userID = userData[i]
    // myPromise.then(res => {
    //     userData.push(res) // for sending all promise one by one
    // })
    userData.push(myPromise) // for sending all promise in one time
    
}

Promise.all(userData)
.then(res => console.log("Found in Promise All",res))
.catch(error => console.log(error))

console.log(userData);




myPromise
.then(res => console.log("Found in then",res))
.catch(error => console.log(error))

// const myPromise = new Promise((Accepted, Declined) => {
//     const user = null;
//     if (!user) {
//         Declined("Your request has been declined.");
//     } else {
//       setTimeout(() => {
//         Accepted("Congratulations! Your request has been accepted.");
//       }, 1000);
//     }
//   });
  


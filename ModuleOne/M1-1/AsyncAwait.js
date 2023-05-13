
const promise = new Promise((Accept, Declined)=> {
    const userID = {name: "kutub1"}
    if(userID){
        setTimeout(()=>{
            Accept("Congratulation! Kutub")
        },1000)
    }else{
        Declined("Declined")
    }
})
promise.then(res => console.log("Found in then",res)).catch(error => console.log(error))
console.log('HElLO');

async function getData(){
    const res = await promise
    console.log("found in async",res);
}

getData()


fetch("")
.then(res => console.log(res))
.catch(error => console.log(error))

async function getUser(){
    const res = await fetch()
    const user = await res.json()

    const resTwo = await fetch(`www.example.com/${user.id}`)
    const product = await resTwo.json()
}
let p = new Promise((resolve,reject) =>{
    let a = 1+1;
    if(a == 2){
        resolve("sucess")
    }else{
        reject("failed")
    }
})


p.then((message)=>{
    console.log("This is in the then " + message)
}).catch((message)=>{
    console.log("this is in the catch " + message)
})


//transform the callback function to a promise function

// function watchTutorialCallback(callback, errorCallback) {
//     let userLeft = false
//     let userWatchingCatMeme = false
  
//     if (userLeft) {
//       errorCallback({
//         name: 'User Left', 
//         message: ':('
//       })
//     } else if (userWatchingCatMeme) {
//       errorCallback({
//         name: 'User Watching Cat Meme',
//         message: 'Cat Wins' 
//       })
//     } else {
//       callback('Thumbs up and Subscribe')
//     }
//   }

//   watchTutorialCallback(message => {
//     console.log(message)
//   }, error => {
//     console.log(error.name + ' ' + error.message)
//   })

function watchTutorialPromise(){

    let userLeft = false
    let userWatchingCatMeme = true

    return new Promise((resolve,reject)=>{
        if(userLeft){
            reject({
                name: "User left",
                message: ":("
            })
        }else if(userWatchingCatMeme){
            reject({
                name:"User watching cat meme",
                message:"Cat Wins"
            })
        }else{
            resolve("Thumbs up and subscribe!!!")
        }
    })
}

watchTutorialPromise().then((message) =>{
    console.log(message)
}).catch((error) =>{
    console.log(error.name + " " + error.message)
})
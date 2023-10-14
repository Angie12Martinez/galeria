const container = document.querySelector(".container");


const funkos = [
    { name: "Blue", image: "images/funko_1.png"},
    { name: "Four", image: "images/funko_2.jpg"},
    { name: "Cool", image: "images/funko_3.jpg"},
    { name: "Three", image: "images/funko_4.jpg"},
    { name: "Winner", image: "images/funko_5.jpg"},
    { name: "Two", image: "images/funko_6.jpg"}
]

const showFunkos = () => {
    let output = ""

     funkos.forEach(
         ({name, image}) =>
          (output +=  `
                       <div class="card">
                            <img class="card-avatar" src=${image}>
                            <h1 class="card-tittle">${name}</h1>
                       </div>
                      `)
     )

    container.innerHTML = output
        
}

document.addEventListener("DOMContentLoaded", showFunkos)

if("serviceWorker" in navigator){
    console.log("Si soporta SW");
    window.addEventListener("load", function(){
            navigator.serviceWorker.register("/serviceWorker.js")
            .then(res => console.log("service Worker se registro correctamente"))
            .catch(err => console.log("serviceWorker no se registro"+err))
    })
 }
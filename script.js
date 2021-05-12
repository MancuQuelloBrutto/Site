var instagram = document.querySelector(".instagram")
var discord = document.querySelector(".discord")
var steam = document.querySelector(".steam")
var paypal = document.querySelector(".donazioni")

instagram.addEventListener("click", ()=> {
    window.open("https://www.instagram.com/mancuquellobrutto/");
    console.log("Apertura link")
});
discord.addEventListener("click", ()=> {
    window.open("https://discord.gg/5KKkAM6Pt2")
    console.log("Apertura link")
})
steam.addEventListener("click", ()=>{
    window.open("https://steamcommunity.com/id/MancuQuelloVero/")
    console.log("Apertura link")
})
paypal.addEventListener("click", () =>{
    window.open("https://paypal.me/ManueleBarone?locale.x=it_IT")
    console.log("Apertura link")
})
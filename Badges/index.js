const ButtonD = document.querySelector(".clicked");
const Toggle = document.querySelector(".Neog_BadgesFour");


ButtonD.addEventListener("click",()=>{
    console.log("hi")
     if(Toggle.style.display === "block"){
         Toggle.style.display = "none";
     }else{
         Toggle.style.display = "block";
     }
})
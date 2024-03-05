const form = document.querySelector("#loginForm"),
loginBtn = document.querySelector("#loginBtn"),
chkBox = document.querySelector("#chkbox");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const obj = {
        username: e.target[0].value,
        password: e.target[0].value
    }
    console.log(obj);

    if(chkBox){
        // coocke.setItem("logon", JSON.stringify(obj));
        
        // let val = document.getElementById("cookie-value");
    let uName = JSON.parse(document.cookie).username;
    let psss = JSON.parse(document.cookie).password;
    if(e.target[0].value == uName)
        console.log('same')
    } else {
        document.cookie = `${JSON.stringify(obj)}; SameSite=Lax;`
        console.log(chkBox)
    }
})

    // if (window.innerWidth < 768) {
    //     console.log("winsow "+ window.innerWidth);
    //     document.querySelector(".container").style.width = "100%";
    // } else {
    //     console.log(window.innerWidth)
    //     document.querySelector(".container").style.width = "30%";
    // }


    window.addEventListener("unload",()=>{
        document.querySelector('.load').style.display = "block";
    })


var p, l;
window.addEventListener("load",()=>{
    document.querySelector('.load').style.display = "none";

    if (navigator.onLine) {
        p = navigator.platform;
        l = navigator.language;
        console.log(p);
        console.log(l);
    }
    
})
window.addEventListener("online", (e)=>{
    e.preventDefault();
    window.location.reload();
    console.log("online");
})

    window.addEventListener("offline",()=>{
    document.querySelector("body").innerHTML ="<h1>Your are currently offline</h1>";
})
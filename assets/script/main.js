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

window.addEventListener("online", ()=>{
    console.log("online");
    window.location.reload();
})

window.addEventListener("offline",()=>{
    document.querySelector("body").innerHTML ="Your are currently offline";
})
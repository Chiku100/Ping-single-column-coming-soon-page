let form=document.querySelector("#myForm");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let email=form['email'].value;
    if(!isValid(email)){
        document.querySelector(".msg").classList.remove("error");
        document.getElementById("email").style.border="1px solid red";
    }else{
        document.querySelector(".msg").classList.add("error");
    }
    function isValid(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    } 
})
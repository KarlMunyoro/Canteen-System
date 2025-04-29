document.addEventListener('DOMContentLoaded', ()=>{
    let login = document.getElementById('loginbtn')
    let user=document.getElementById('username')
    let pass=document.getElementById('password')
    login.addEventListener('click', loginfunction)
    document.addEventListener('keydown', loginfunction2)

    function loginfunction2(e){
        if(e.key==='Enter'){
            if(user.value==='admin' && pass.value==='zahra'){
                window.location.href="main/main.html";
            }
            else{
                alert("Wrong username or password!")
            }
        }
    }

    function loginfunction(){
        if(user.value==='admin' && pass.value==='zahra'){
            window.location.href="main/main.html";
        }
        else{
            alert("Wrong username or password!")
        }
    }
})
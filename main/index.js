document.addEventListener('DOMContentLoaded', ()=>{
    let reloadchoice=document.getElementById('reloadpage')
    let logout=document.getElementById('logout')
    logout.addEventListener('click', logoutfunc)
    reloadchoice.addEventListener('click', reload)

    function reload(){
        location.reload();
    }

    function logoutfunc(){
        window.location.href='/docs/index.html'
    }
})
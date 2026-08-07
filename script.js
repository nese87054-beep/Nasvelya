// Menü yumuşak geçiş
document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener("click",function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });
    });
});


// Sayfa yüklenince animasyon
window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


// Navbar arka planı
window.addEventListener("scroll",()=>{

    const nav=document.querySelector(".navbar");

    if(window.scrollY>80){
        nav.style.background="rgba(5,5,18,.92)";
    }else{
        nav.style.background="rgba(7,7,20,.65)";
    }

});

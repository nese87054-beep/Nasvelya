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
document.querySelectorAll(".writer-slider, .book-slider, .deneme-slider, .story-slider").forEach(slider => {

    const container = slider.querySelector(
        ".writer-container, .book-container, .deneme-container, .story-container"
    );

    slider.querySelector(".left").onclick = () => {
        container.scrollBy({
            left: -360,
            behavior: "smooth"
        });
    };

    slider.querySelector(".right").onclick = () => {
        container.scrollBy({
            left: 360,
            behavior: "smooth"
        });
    };

});

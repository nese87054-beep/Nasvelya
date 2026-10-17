 // Menü yumuşak geçiş
document.querySelectorAll('.menu a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        // Hedef bölüm yoksa sayfada hata oluşturma
        if (!target) {
            console.warn("Menü hedefi bulunamadı:", targetId);
            return;
        }

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Sayfa yüklenince animasyon
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Navbar arka planı
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (!nav) return;

    if (window.scrollY > 80) {
        nav.style.background = "rgba(5,5,18,.92)";
    } else {
        nav.style.background = "rgba(7,7,20,.65)";
    }
});

// Slider okları
document.querySelectorAll(
    ".writer-slider, .book-slider, .deneme-slider, .story-slider"
).forEach(slider => {
    const container = slider.querySelector(
        ".writer-container, .book-container, .deneme-container, .story-container"
    );

    if (!container) return;

    const left = slider.querySelector(".left");
    const right = slider.querySelector(".right");

    if (left) {
        left.onclick = () => container.scrollBy({
            left: -360,
            behavior: "smooth"
        });
    }

    if (right) {
        right.onclick = () => container.scrollBy({
            left: 360,
            behavior: "smooth"
        });
    }
});

    slider.querySelector(".right").onclick = () => {
        container.scrollBy({
            left: 360,
            behavior: "smooth"
        });
    };

});

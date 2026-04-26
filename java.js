document.addEventListener("DOMContentLoaded", () => {
    // Sahifadagi barcha animatsiya qilinadigan seksiyalarni tanlash (o'zbekcha klass bilan)
    const animatedSections = document.querySelectorAll('.bolim-animatsiyasi');

    // Intersection Observer yaratish
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element ko'rinishida bo'lganda 'visible' (korinarli) klassini qo'shish
                entry.target.classList.add('visible');
                // Bir marta ishlagandan keyin kuzatishni to'xtatish
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Elementning 10% qismi ko'ringanda ishlaydi
    });

    // Har bir seksiya uchun kuzatuvchini ishga tushirish
    animatedSections.forEach(section => {
        observer.observe(section);
    });
});
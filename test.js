let headings = Array.from(document.querySelectorAll('article h1'), function (el) {
    console.log(`le titre ${el.textContent} est à ${Math.ceil(el.getBoundingClientRect().top)} px du Haut`)
    return {
        "pos": el.getBoundingClientRect().top,
        "text": el.textContent
    }
});

const delta = 50;

window.addEventListener("scroll", function () {
    if (window.pageYOffset <= headings[0].pos) {
        document.querySelector(".current-section").classList.remove("show");
    } else {
        document.querySelector(".current-section").classList.add("show");
        let borneInf, borneSup
        for (let { pos, text } of headings) {

            if (window.pageYOffset >= pos - delta) {
                borneInf = text;
                document.querySelector(".current-section .name").textContent = text;
            } else {
                borneSup = text;
                console.log(`le scrool est entre [${borneInf}, ${borneSup}]`)
                break;
            }
        }
    }
}, false);
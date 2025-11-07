let allWords = [

    "Love",

    "Je t'aime",

    "Te amo",

    "Amour",

    "Amore",

    "Ti amo",

    "Σ'αγαπώ",

    "Ich liebe dich",

    "Te quiero",

    "Eu te amo",

    "Saya cinta kamu",

    "Aishiteru",

    "Wo ai ni",

    "Ani ohevet otcha",

    "Main tumse pyar karta hoon",

    "Ngiyakuthanda",

    "Ek het jou lief",

    "Te iubesc",

    "Volim te",

    "Ti voglio bene",

    "Jeg elsker deg",

    "Jeg elsker dig",

    "Jag älskar dig",

    "Kocham cię",

    "Seni seviyorum",

    "Mahal kita",

    "Amo-te",

    "Mi amas vin",

    "Ik hou van jou",

    "Ani nenu ninnu premisthunnanu",

    "Mo nifẹ rẹ",

    "Ndinokuda",

    "Nakupenda",

    "Taim i ngra leat",

    "Obicham te",

    "Ya tebya lyublyu",

    "Ngo oiy ney",

    "Te sakam",

    "Ua ou te alofa ia te oe",

    "Ke aloha nei au iā oe",

    "Saya sayang awak",

    "Phom rak khun",

    "Chit pa de",

    "Kuv hlub koj",

    "Mi ta stimabo",

    "Is breá liom tú",

    "Maite zaitut"

];

document.addEventListener("DOMContentLoaded", () => {

    const wordContainer = document.querySelector(".word");

    if (!wordContainer) {

        console.warn("No se encontró ningún elemento con la clase .word. Añadí la comprobación para evitar errores.");

        return;

    }

    // define variable for animation target

    let animate = { word: wordContainer };

    // set CSS property (string is fine)

    animate.word.style.setProperty("--particles", String(allWords.length));

    // clear any existing children (optional, safe for reruns)

    animate.word.innerHTML = "";

    allWords.forEach((word, i) => {

        const span = document.createElement("span");

        span.style.setProperty("--n", String(i + 1));

        span.innerText = word;

        animate.word.appendChild(span);

    });

});
 
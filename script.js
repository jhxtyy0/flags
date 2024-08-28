// Array di sigle dei paesi e territori
const countryCodes = [
    "us", "it", "fr", "de", "es", "jp", "cn", "br", "ru", "in", "au", "ca", "mx", "kr", "za", "nl", "se", "no",
    "fi", "dk", "pl", "tr", "ar", "cl", "pe", "co", "ve", "eg", "sa", "ae", "il", "ng", "gh", "ke", "dz", "ma",
    "tn", "hk", "tw", "sg", "my", "ph", "vn", "th", "bd", "pk", "lk", "mm", "la", "kh", "mn", "bt", "kw",
    "om", "qa", "bh", "jo", "sy", "lb", "iq", "ir", "af", "tm", "uz", "kz", "tj", "ge", "am", "by", "ua", "md",
    "lt", "lv", "ee", "cz", "sk", "ro", "bg", "rs", "hr", "si", "ba", "mk", "me", "al", "mt", "cy", "lu",
    "mc", "sm", "ad", "va", "mu", "sc", "na", "bw", "sz", "lr", "sl", "cm", "cg", "cd", "gq", "dj", "so", "sd",
    "ss", "ne", "ch", "li", "nf", "ax", "mq", "pf", "nc", "tv", "ck", "to", "ws",
    "nu", "tk", "as", "gu", "mp", "pr", "vi", "sx", "cw"
];

// Funzione per selezionare una bandiera a caso
function getRandomFlag() {
    const randomIndex = Math.floor(Math.random() * countryCodes.length);
    return countryCodes[randomIndex];
}

// Funzione per mostrare la bandiera
function displayRandomFlag() {
    const flagCode = getRandomFlag();
    const flagImage = document.getElementById('flag-image');
    flagImage.src = `flag-icons-main/flags/4x3/${flagCode}.svg`;
    flagImage.alt = `Bandiera di ${flagCode}`;
    return flagCode;
}

let correctAnswers = 0;
let currentFlagCode = displayRandomFlag();

// Gestione del form di indovinare
document.getElementById('guess-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const userGuess = document.getElementById('guess-input').value.trim().toLowerCase();
    const countryNames = getCountryNames(currentFlagCode); // Ottieni tutti i nomi possibili
let resultText;
    if (countryNames.some(name => name.toLowerCase() === userGuess)) {
        resultText = 'Corretto!';
        correctAnswers++; // Increment the correct answer count
        document.getElementById('score').textContent = `${correctAnswers}`;
    } else {
        resultText = `Sbagliato! Era ${countryNames.join(' o ')}.`;
        correctAnswers = 0;
    }
    document.getElementById('score').textContent = `${correctAnswers}`; // Aggiorna il punteggio
    document.getElementById('result').textContent = resultText;
    currentFlagCode = displayRandomFlag(); // Mostra una nuova bandiera
    document.getElementById('guess-input').value = ''; // Pulisci l'input
});

// Funzione per mappare la sigla del paese al nome (mappa aggiornata)
function getCountryNames(code) {
    const countryMap = {
        "us": ["USA", "Stati Uniti"],
        "it": ["Italia"],
        "fr": ["Francia"],
        "de": ["Germania"],
        "es": ["Spagna"],
        "jp": ["Giappone"],
        "cn": ["Cina"],
        "br": ["Brasile"],
        "ru": ["Russia"],
        "in": ["India"],
        "au": ["Australia"],
        "ca": ["Canada"],
        "mx": ["Messico"],
        "kr": ["Corea del Sud"],
        "za": ["Sudafrica"],
        "nl": ["Paesi Bassi"],
        "se": ["Svezia"],
        "no": ["Norvegia"],
        "fi": ["Finlandia"],
        "dk": ["Danimarca"],
        "pl": ["Polonia"],
        "tr": ["Turchia"],
        "ar": ["Argentina"],
        "cl": ["Cile"],
        "pe": ["Perù"],
        "co": ["Colombia"],
        "ve": ["Venezuela"],
        "eg": ["Egitto"],
        "sa": ["Arabia Saudita"],
        "ae": ["Emirati Arabi Uniti"],
        "il": ["Israele"],
        "ng": ["Nigeria"],
        "gh": ["Ghana"],
        "ke": ["Kenya"],
        "dz": ["Algeria"],
        "ma": ["Marocco"],
        "tn": ["Tunisia"],
        "hk": ["Hong Kong"],
        "tw": ["Taiwan"],
        "sg": ["Singapore"],
        "my": ["Malesia"],
        "ph": ["Filippine"],
        "vn": ["Vietnam"],
        "th": ["Thailandia"],
        "bd": ["Bangladesh"],
        "pk": ["Pakistan"],
        "lk": ["Sri Lanka"],
        "mm": ["Birmania", "Myanmar"],
        "la": ["Laos"],
        "kh": ["Cambogia"],
        "mn": ["Mongolia"],
        "bt": ["Bhutan"],
        "kw": ["Kuwait"],
        "om": ["Oman"],
        "qa": ["Qatar"],
        "bh": ["Bahrain"],
        "jo": ["Giordania"],
        "sy": ["Siria"],
        "lb": ["Libano"],
        "iq": ["Iraq"],
        "ir": ["Iran"],
        "af": ["Afghanistan"],
        "tm": ["Turkmenistan"],
        "uz": ["Uzbekistan"],
        "kz": ["Kazakhstan"],
        "tj": ["Tagikistan"],
        "ge": ["Georgia"],
        "am": ["Armenia"],
        "by": ["Bielorussia"],
        "ua": ["Ucraina"],
        "md": ["Moldova"],
        "lt": ["Lituania"],
        "lv": ["Lettonia"],
        "ee": ["Estonia"],
        "cz": ["Repubblica Ceca"],
        "sk": ["Slovacchia"],
        "ro": ["Romania"],
        "bg": ["Bulgaria"],
        "rs": ["Serbia"],
        "hr": ["Croazia"],
        "si": ["Slovenia"],
        "ba": ["Bosnia ed Erzegovina"],
        "mk": ["Macedonia del Nord"],
        "me": ["Montenegro"],
        "al": ["Albania"],
        "mt": ["Malta"],
        "cy": ["Cipro"],
        "lu": ["Lussemburgo"],
        "mc": ["Monaco"],
        "sm": ["San Marino"],
        "ad": ["Andorra"],
        "va": ["Vaticano"],
        "mu": ["Mauritius"],
        "sc": ["Seychelles"],
        "na": ["Namibia"],
        "bw": ["Botswana"],
        "sz": ["Eswatini", "Swaziland"],
        "lr": ["Liberia"],
        "sl": ["Sierra Leone"],
        "cm": ["Camerun"],
        "cg": ["Congo"],
        "cd": ["DCR"],
        "gq": ["Guinea Equatoriale"],
        "dj": ["Djibouti", "Gibuti"],
        "so": ["Somalia"],
        "sd": ["Sudan"],
        "ss": ["Sudan del Sud"],
        "ne": ["Niger"],
        "ch": ["Svizzera"],
        "li": ["Liechtenstein"],
        "nf": ["Isola Norfolk"],
        "ax": ["Isole Aland"],
        "mq": ["Martinica"],
        "pf": ["Polinesia Francese"],
        "nc": ["Nuova Caledonia"],
        "tv": ["Tuvalu"],
        "ck": ["Isole Cook"],
        "to": ["Tonga"],
        "ws": ["Samoa"],
        "nu": ["Niue"],
        "tk": ["Tokelau"],
        "as": ["Samoa Americana"],
        "gu": ["Guam"],
        "mp": ["Isole Marianne Settentrionali"],
        "pr": ["Porto Rico"],
        "vi": ["Isole Vergini Americane"],
        "sx": ["Sint Maarten"],
        "cw": ["Curaçao"]
    };
    return countryMap[code] || [];
}

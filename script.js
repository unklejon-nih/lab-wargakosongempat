VANTA.NET({
el: "#bg",
mouseControls: true,
touchControls: true,
gyroControls: false,
minHeight: 200,
minWidth: 200,
scale: 1,
scaleMobile: 1
});

const names = [
"ABAS",
"ADITYA PRATAMA",
"AGUNG PRAYOGA",
"AHMAD SHIHABUDIN BAHRI",
"AISYAH PUTRI MARIMBI",
"ALISA JANTIANI",
"ARMAN",
"ASEP APRIANA",
"CANTIKA PUSPITA SARI",
"CHANDRA WIGUNA PRAMUDIPTHA",
"CHIKA SISILIA PUTRI",
"DIMYATI NATAKUSUMA",
"GILANG RAMADHAN",
"HERI FEBRIAN SEMBIRING",
"M FARRAS ALWAN",
"MUHAMAD FAUZI",
"MUHAMAD RAFFI AKBAR MAULANA",
"NADIA",
"NAILA RAHMA KHAIRUNISA",
"NURLINA JULIANINGSIH",
"RAHMA AYU KARUNIA ILAHI",
"RAPITAH",
"RIBBY MAULIDA PRAMUDIVA",
"RIKHWAN FAUZAN",
"SAEPUL",
"SAHRUL GUNAWAN",
"ULFAH FAUZIAH"
];

const greetings = [
"Assalamualaikum",
"Hello",
"Hola",
"Bonjour",
"Konnichiwa",
"Annyeonghaseyo",
"Namaste",
"Marhaban",
"Nǐ Hǎo",
"Halo"
];

const greetingFonts = {
"Assalamualaikum":"Cinzel",
"Hello":"Inter",
"Hola":"Montserrat",
"Bonjour":"Playfair Display",
"Konnichiwa":"Space Grotesk",
"Annyeonghaseyo":"Poppins",
"Namaste":"Cinzel",
"Marhaban":"Playfair Display",
"Nǐ Hǎo":"Montserrat",
"Halo":"Inter"
};

const nameFonts = [
"Inter",
"Playfair Display",
"Cinzel",
"Space Grotesk",
"Montserrat",
"Poppins"
];

function sleep(ms){
return new Promise(resolve => setTimeout(resolve, ms));
}

async function showText(content,time=1000,font=null){

const el = document.getElementById("text");

el.style.opacity = "0";

await sleep(300);

el.innerHTML = content;

if(font){
el.style.fontFamily = font;
}

if(greetingFonts[content]){
el.style.fontFamily = greetingFonts[content];
}

el.style.opacity = "1";

await sleep(time);
}

async function startIntro(){

await showText("Hi.",2000);

for(const greet of greetings){
await showText(greet,700);
}

for(const person of names){


const randomFont =
  nameFonts[Math.floor(Math.random()*nameFonts.length)];

await showText(person,400,randomFont);


}

await showText("Mereka berbeda.",1200);
await showText("Mereka memiliki cerita.",1200);
await showText("Mereka memiliki mimpi.",1200);
await showText("Namun...",1500);

const reveal = [
"W",
"WA",
"WAR",
"WARG",
"WARGA",
"KOSONG",
"EMPAT"
];

for(const item of reveal){
await showText(item,600);
}

document.getElementById("text").style.display = "none";

document.getElementById("finalTitle").style.display = "block";

celebration();
}

function celebration(){

const duration = 4000;
const end = Date.now() + duration;

(function frame(){


confetti({
  particleCount:5,
  spread:120,
  startVelocity:40,
  origin:{
    x:Math.random(),
    y:Math.random()-0.2
  }
});

if(Date.now() < end){
  requestAnimationFrame(frame);
}


})();
}

function goHome(){

gsap.to("#finalTitle",{
scale:8,
opacity:0,
duration:1.2,


onComplete:()=>{

  document.getElementById("intro").style.display="none";

  document.getElementById("home").style.display="flex";

  gsap.from(".hero-image",{
    scale:2,
    opacity:0,
    duration:3,
    ease:"power4.out"
  });

  gsap.from(".hero-content",{
    y:120,
    opacity:0,
    duration:2
  });

}


});
}

document.addEventListener("click",(e)=>{

if(e.target.id === "homeIcon"){
goHome();
}

});

startIntro();

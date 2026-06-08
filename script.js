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
"Kami"
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
"Kami":"Inter"
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

el.style.opacity="0";
el.style.filter="blur(10px)";
el.style.transform="scale(.95)";

await sleep(80);

el.innerHTML=content;

if(font){
el.style.fontFamily=font;
}

if(greetingFonts[content]){
el.style.fontFamily=greetingFonts[content];
}

el.style.opacity="1";
el.style.filter="blur(0)";
el.style.transform="scale(1)";

await sleep(time);

}

async function startIntro(){

await showText("Hi.",1000);

for(const greet of greetings){
await showText(greet,300);
}

for(const person of names){


const randomFont =
  nameFonts[Math.floor(Math.random()*nameFonts.length)];

await showText(person,300,randomFont);


}

await showText("Mereka berbeda.",800);
await showText("Mereka memiliki cerita.",800);
await showText("Mereka memiliki mimpi.",800);
await showText("Namun...",1000);

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
await showText(item,400);
}

document.getElementById("text").style.display="none";

const finalTitle =
document.getElementById("finalTitle");

finalTitle.style.display="block";

await sleep(500);

gsap.to("#finalTitle",{
scale:1.3,
opacity:0,
duration:1.5,
ease:"power2.inOut"
});

await sleep(1200);

showBootSequence();



}

startIntro();

async function showBootSequence(){

document.getElementById("finalTitle").style.display="none";

document.getElementById("bootScreen").style.display="flex";

const lines = [

"> SYSTEM INITIALIZED",
"",
"> 27 INDIVIDUALS DETECTED",
"",
"> MEMORY ARCHIVE READY",
"",
"> LIBENTER CONIUNGIMUR"

];

const bootText = document.getElementById("bootText");
bootText.innerHTML="";

for(const line of lines){

bootText.innerHTML += line + "\n";

await sleep(350);

}

document.getElementById("continueText").style.display="block";

}

async function startMemoryMode(){

document.getElementById("bootScreen")
.style.display="none";

const mode =
document.getElementById("memoryMode");

const img =
document.getElementById("memoryImage");

const caption =
document.getElementById("memoryCaption");

mode.style.display="flex";

for(const memory of memories){

await new Promise(resolve=>{

img.onload = resolve;

img.src = memory.img;

});

caption.innerHTML = memory.text;

gsap.fromTo(
"#memoryImage",
{
opacity:0,
scale:1.12
},
{
opacity:1,
scale:1,
duration:.4
}
);

gsap.fromTo(
"#memoryCaption",
{
opacity:0,
y:20
},
{
opacity:1,
y:0,
duration:.4
}
);

await sleep(700);

}

flashToHome();

}

document.addEventListener("click",(e)=>{

if(
document.getElementById("bootScreen").style.display==="flex"
){

startMemoryMode();

}

});

function enterHome(){

document.getElementById("memoryMode")
.style.display="none";

document.getElementById("home")
.style.display="flex";

gsap.from("#home",{

opacity:0,
scale:1.03,
duration:1.5,
ease:"power2.out"

});

}



const memories = [

{img:"assets/memories/1.webp",text:"LEARNING"},
{img:"assets/memories/2.webp",text:"BUILDING"},
{img:"assets/memories/3.webp",text:"GROWING"},
{img:"assets/memories/4.webp",text:"SHARING"},
{img:"assets/memories/5.webp",text:"LAUGHING"},
{img:"assets/memories/6.webp",text:"SURVIVING"},
{img:"assets/memories/7.webp",text:"CONNECTING"},
{img:"assets/memories/8.webp",text:"REMEMBERING"},
{img:"assets/memories/9.webp",text:"TOGETHER"},
{img:"assets/memories/10.webp",text:"LIBENTER CONIUNGIMUR"}

];

function flashToHome(){

gsap.to("#flash",{

opacity:1,
duration:.2,

onComplete:()=>{

gsap.to("#flash",{

opacity:0,
duration:.6,

onComplete:()=>{

enterHome();

}

});

}

});

}


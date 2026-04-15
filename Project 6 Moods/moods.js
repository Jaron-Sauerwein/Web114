/*Jaron Sauerwein April 15th, 2026*/

const quote = document.querySelector("#quote");
const title = document.querySelector("#title");

const happyBtn = document.querySelector("#happyBtn");
const calmBtn = document.querySelector("#calmBtn");
const angryBtn = document.querySelector("#angryBtn");
const sleepyBtn = document.querySelector("#sleepyBtn");

const moods = {
    happy: {
        name: "Happy",
        bg: "#EFF51D",
        text: "#F2650C",
        quote: "Everything feels fun and jubilant!"
    },

    calm: {
        name: "Calm",
        bg: "#490CF2",
        text: "#C4A7DB",
        quote: "You're feeling contented and mellow."
    },

    angry: {
        name: "Angry",
        bg: "#000000",
        text: "#F00713",
        quote: "You're not in a healthy mood. You should step away and give yourself time to cool down."
    },

    sleepy: {
        name: "Sleepy",
        bg: "#3D033D",
        text: "#A4F5F5",
        quote: "Your eyelids are heavy and everything feels softer and more comfy. You'll feel refreshed when you wake up."
    },
}

function changeMood(moodName){
    const mood = moods[moodName];

    document.body.style.backgroundColor = mood.bg;

    document.body.style.color = mood.text;

    quote.textContent = mood.quote;

    title.textContent = mood.name.toUpperCase();

    console.log("Mood selected: ", moodName);
    console.log("Mood settings: ", mood);
}

function handleHappyClick(){
    changeMood("happy");
}

function handleCalmClick(){
    changeMood("calm");
}

function handleAngryClick(){
    changeMood("angry");
}

function handleSleepyClick(){
    changeMood("sleepy");
}

happyBtn.addEventListener("click", handleHappyClick);
calmBtn.addEventListener("click", handleCalmClick);
angryBtn.addEventListener("click", handleAngryClick);
sleepyBtn.addEventListener("click", handleSleepyClick);
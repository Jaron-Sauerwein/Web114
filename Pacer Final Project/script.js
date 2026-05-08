
/*First, we have the findYourPacer function that quizzes new users to find their ideal trim level Pacer. 
This makes use of confirm statements, variables, and if statements.*/

function findYourPacer(){
    alert("Welcome to the official website of the new AMC Pacer! How about we find the right trim for you? (Click OK for Yes or Cancel for No)");

    let wantsSport = confirm("Do you want a sport driving experience with bucket seats, a shifter console, and a sports steering wheel?");

    if (wantsSport){
        alert("Get ready to tear up the road! The adrenaline-raising Pacer X is the Pacer for you!");
        return "Pacer X";
    }

    let wantsLuxury = confirm("Do you want a plush, luxury car ride with accoutrements like power windows, AM/FM 8-Track stereo, and deep pile carpeting?");

    if (wantsLuxury){
        alert("Prepare to be pampered! The prestigous Pacer D/L is the model for you!");
        return "Pacer D/L";
    }

    alert("You are a true individual - the only way to get the exact Pacer you want is to start with our base model Pacer and add options to fit your exacting taste!");
    return "Pacer base model";
}

//Here's where we call the findYourPacer function.

findYourPacer();

/*Now we're going to get started setting up the exterior color selector.
For this task we are using DOM manipulation in the form of the querySelector.
We're also using const here to create set it and forget it variables for each color.
Then we'll need to reference this below to attach the color itself.*/

const classicblack = document.querySelector("#classicblack");
const darkcoacoa = document.querySelector("#darkcoacoa");
const autumnred = document.querySelector("#autumnred");
const brandywine = document.querySelector("#brandywine");
const burnishedbronze = document.querySelector("#burnishedbronze");
const azteccopper = document.querySelector("#azteccopper");
const goldenjade = document.querySelector("#goldenjade");
const sandtan = document.querySelector("#sandtan");
const siennaorange = document.querySelector("#siennaorange");
const firecrackerred = document.querySelector("#firecrackerred");
const nauticalblue = document.querySelector("#nauticalblue");
const mediumblue = document.querySelector("#mediumblue");
const brilliantblue = document.querySelector("#brilliantblue");
const limefire = document.querySelector("#limefire");
const marineaqua = document.querySelector("#marineaqua");
const evergreen = document.querySelector("#evergreen");
const seaspraygreen = document.querySelector("#seaspraygreen");
const silverfrost = document.querySelector("#silverfrost");
const sunshineyellow = document.querySelector("#sunshineyellow");
const alpinewhite = document.querySelector("#alpinewhite");

/*Here we define the exterior const variable. 
Inside, we set each color to a corresponding background color using hexcodes pulled from a Pacer brochure.
This gives our earlier querySelector a color to reference.*/

const exterior = {
    classicblack: {
        bg: "#020202",
    },
    
    darkcoacoa: {
      bg: "#370e0a",
    },
    
    autumnred: {
        bg:"#8a142e",
    },
    
    brandywine: {
        bg:"#5b1426",
    },

    burnishedbronze: {
        bg:"#bf7140",
    },

    azteccopper: {
        bg:"#c26546",
    },

    goldenjade: {
        bg:"#9b953f",
    },

    sandtan: {
        bg:"#f0b23b",
    },

    siennaorange: {
        bg:"#c24c26",
    },

    firecrackerred: {
        bg:"#dd1325",
    },

    nauticalblue: {
        bg:"#1e0f26",
    },

    mediumblue: {
        bg:"#11a9c8",
    },

    brilliantblue: {
        bg:"#109ee8",
    },

    limefire: {
        bg:"#57ae60",
    },

    marineaqua: {
        bg:"#139794",
    },

    evergreen: {
        bg:"#232927",
    },

    seaspraygreen: {
        bg:"#66cca5",
    },

    silverfrost: {
        bg:"#b6b191",
    },

    sunshineyellow: {
        bg:"#fadc0a",
    },

    alpinewhite: {
        bg:"#f3efd2",
    }
};

/*Now we're going to do much the same thing but with the interior colors, also pulled from the brochure.
Since these don't share names with any exterior colors they can have fairly straightforward variable names.*/

const black = document.querySelector("#black");
const tan = document.querySelector("#tan");
const berry = document.querySelector("#berry");
const blue = document.querySelector("#blue");
const brown = document.querySelector("#brown");
const beige = document.querySelector("#beige");
const white = document.querySelector("#white");

/*Again, using hexcodes pulled from the brochure we're setting up an interior function with the necessary colors.
Notice that we've set up the interior colors to change the text color rather than the background.
This allows users to test their desired interior color in combination with their desired exterior color on the website.*/

const interior = {
    black: {
        text: "#090101"
    },

    tan: {
        text: "#c07055"
    },

    berry: {
        text: "#632b30"
    },

    blue: {
        text: "#143848"
    },

    brown: {
        text:"#33191a"
    },

    beige: {
        text:"#f1b641"
    },

    white: {
        text:"#fcf4c5" 
    }
};

/*Now we're back to exterior - and here's where the real fun begins!
We're setting up a changeExterior function that is commanded to change the background color of the document's body.
We then make that equivalent to our exterior variable.
Now we only need one more series of functions to get the exterior colors up and working.*/

function changeExterior(changeExterior){
    const exteriors = exterior[changeExterior];
    
    document.body.style.backgroundColor = exteriors.bg;
}

/*Finally, to complete our exterior color transformation we need a handle function for each exterior color, which will then call the eariler function and pass in the color of choice.*/

function handleClassicBlack(){
    changeExterior("classicblack");
}

function handleDarkCoacoa(){
    changeExterior("darkcoacoa");
}

function handleAutumnRed(){
    changeExterior("autumnred");
}

function handleBrandywine(){
    changeExterior("brandywine");
}

function handleBurnishedBronze(){
    changeExterior("burnishedbronze");
}

function handleAztecCopper(){
    changeExterior("azteccopper");
}

function handleGoldenJade(){
    changeExterior("goldenjade");
}

function handleSandTan(){
    changeExterior("sandtan");
}

function handleSiennaOrange(){
    changeExterior("siennaorange");
}

function handleFirecrackerRed(){
    changeExterior("firecrackerred");
}

function handleNauticalBlue(){
    changeExterior("nauticalblue");
}

function handleMediumBlue(){
    changeExterior("mediumblue");
}

function handleBrilliantBlue(){
    changeExterior("brilliantblue");
}

function handleLimefire(){
    changeExterior("limefire");
}

function handleMarineAqua(){
    changeExterior("marineaqua");
}

function handleEvergreen(){
    changeExterior("evergreen");
}

function handleSeasprayGreen(){
    changeExterior("seaspraygreen");
}

function handleSilverFrost(){
    changeExterior("silverfrost");
}

function handleSunshineYellow(){
    changeExterior("sunshineyellow");
}

function handleAlpineWhite(){
    changeExterior("alpinewhite");
}

classicblack.addEventListener("click", handleClassicBlack);
darkcoacoa.addEventListener("click", handleDarkCoacoa);
autumnred.addEventListener("click", handleAutumnRed);
brandywine.addEventListener("click", handleBrandywine);
burnishedbronze.addEventListener("click", handleBurnishedBronze);
azteccopper.addEventListener("click", handleAztecCopper);
goldenjade.addEventListener("click", handleGoldenJade);
sandtan.addEventListener("click", handleSandTan);
siennaorange.addEventListener("click", handleSiennaOrange);
firecrackerred.addEventListener("click", handleFirecrackerRed);
nauticalblue.addEventListener("click", handleNauticalBlue);
mediumblue.addEventListener("click", handleMediumBlue);
brilliantblue.addEventListener("click", handleBrilliantBlue);
limefire.addEventListener("click", handleLimefire);
marineaqua.addEventListener("click", handleMarineAqua);
evergreen.addEventListener("click", handleEvergreen);
seaspraygreen.addEventListener("click", handleSeasprayGreen);
silverfrost.addEventListener("click", handleSilverFrost);
sunshineyellow.addEventListener("click", handleSunshineYellow);
alpinewhite.addEventListener("click", handleAlpineWhite);

/*Of course we need to do the same function with the interior colors.
Again, our only real difference on these functions are setting it to text color rather than background.*/

function changeInterior(changeInterior){
    const interiors = interior[changeInterior];
    
    document.body.style.color = interiors.text;
}

//The interior variable also gets a handle function for each interior color.

function handleBlack(){
    changeInterior("black");
}

function handleTan(){
    changeInterior("tan");
}

function handleBerry(){
    changeInterior("berry");
}

function handleBlue(){
    changeInterior("blue");
}

function handleBrown(){
    changeInterior("brown");
}

function handleBeige(){
    changeInterior("beige");
}

function handleWhite(){
    changeInterior("white");
}

/*Finally, here are teh EventListeners that set up the interior colors on each click.*/

black.addEventListener("click", handleBlack);
tan.addEventListener("click", handleTan);
berry.addEventListener("click", handleBerry);
blue.addEventListener("click", handleBlue);
brown.addEventListener("click", handleBrown);
beige.addEventListener("click", handleBeige);
white.addEventListener("click", handleWhite);

"use strict"

//Now we're using the carpics variable to set up photos for our photo gallery that shows off the cars.
//Each has a source that leads to the picture, a short title, and a matching alt and description that tell users about the car.

const carpics =[
    {
    src: "mediumbluemetallicdl.jpeg",
    title: "Medium Blue Metallic Pacer D/L",
    alt: "The luxurious D/L model in fetching Medium Blue Metallic, shown here with optional Turbine-Style Wheels.",
    description: "The luxurious D/L model in fetching Medium Blue Metallic, shown here with optional Turbine-Style Wheels.",
},
{
    src: "silverfrosttwotone.jpeg",
    title: "Silver Frost Pacer X",
    alt: "The Pacer offers a two-tone paint package, shown here in Silver Frost and Classic Black on a Pacer X.",
    description: "The Pacer offers a two-tone paint package, shown here in Silver Frost and Classic Black on a Pacer X.",
},
{
    src: "basketweavebench.jpeg",
    title: "Basket Weave Interior",
    alt: "A number of decor interior packages are available on Pacer, including this trending Basket Weave pattern.",
    description: "A number of decor interior packages are available on Pacer, including this trending Basket Weave pattern.",
},
{ 
    src: "classicblackx.avif",
    title: "Classic Black Pacer X",
    alt: "Classic Black never goes out of style, as this Pacer X showcases.",
    description: "Classic Black never goes out of style, as this Pacer X showcases.",
},
{
    src: "autumnredx.jpeg",
    title: "Autumn Red Pacer X",
    alt: "Sporty Pacer X looks great in mellow Autumn Red. This car also shows off the optional Rallye Mag Wheels.",
    description: "Sporty Pacer X looks great in mellow Autumn Red. This car also shows off the optional Rallye Mag Wheels.",
},
{
    src: "nauticalbluedl.jpeg",
    title: "Nautical Blue Pacer D/L",
    alt: "Loaded up with options, this Nautical Blue Pacer D/L is a compact luxury machine.",
    description: "Loaded up with options, this Nautical Blue Pacer D/L is a compact luxury machine.",
},
{
    src: "goldenjade.jpeg",
    title: "Golden Jade Pacer",
    alt: "You have the freedom to build your Pacer as you want it! For example, this Golden Jade Pacer has the Volcano Mag Wheels for a sport effect without the extra cost of the performance goodies of the X package.",
    description: "This Golden Jade Pacer has the Volcano Mag Wheels for a sport effect without the extra cost of the X package.",
},
{
    src:"ontheroad.jpg",
    title:"Pacer Pulling Power",
    alt:"As this base model Alpine White pacer shows, the Pacer is built with enough grunt to tow 3500 lbs.",
    description:"As this base model Alpine White pacer shows, the Pacer is built with enough grunt to tow 3500 lbs.",
},
{
    src:"azteccoppertwotone.jpeg",
    title:"Two Tone Copper Pacer",
    alt:"The Pacer is avaliable in trending two tone color combinations, like this D/L in glamourous Aztec Copper over Dark Coacoa Brown.",
    description:"The Pacer is avaliable in trending two tone color combinations, like this D/L in glamourous Aztec Copper over Dark Coacoa Brown.",
},
{
    src:"evergreenx.jpeg",
    title:"Evergreen Pacer X",
    alt:"The Pacer X looks like a true sleeper in this reserved Evergreen shade.",
    description:"The Pacer X looks like a true sleeper in this reserved Evergreen shade.",
},
{
    src:"seaspraygreendl.jpeg",
    title:"Seaspray Green Pacer D/L",
    alt:"This stylish Pacer D/L shows off our unique Seaspray Green shade, along with luxury styled wheelcovers.",
    description:"This stylish Pacer D/L shows off our unique Seaspray Green shade, along with luxury styled wheelcovers.",
},
{
    src:"limegreendl.jpeg",
    title:"Limefire Pacer D/L",
    alt:"This sumptuous Pacer D/L catches the eye in the striking Limefire paint color. It also features styled road wheels.",
    description:"This sumptuous Pacer D/L catches the eye in the striking Limefire paint color. It also features styled road wheels.",
},
{
    src:"sandtandl.jpeg",
    title:"Sand Tan Pacer D/L",
    alt:"This Pacer shows off the popular Sand Tan exterior shade and the wheelcovers that come standard on Pacer D/L.",
    description:"This Pacer shows off the popular Sand Tan exterior shade and the wheelcovers that come standard on Pacer D/L.",
},
{
    src:"siennaorangesportstripe.jpeg",
    title:"Sienna Orange Base Model With Dealer Sport Stripe",
    alt:"Ordered through Arrow Motor Sales in Chicago, this base Pacer shows how your AMC dealer can spruce up the basic Pacer to meet your needs. This car gained a non-factory sport stripe over its factory Sienna Orange paintwork.",
    description:"Ordered through Arrow Motor Sales in Chicago, this base Pacer shows a dealer option sport stripe over its factory Sienna Orange paintwork.",
},
{
    src:"75pacerxred.jpeg",
    title:"Firecracker Red Pacer X",
    alt:"The AMC Pacer X looks superb in eye-catching Firecraker Red.",
    description:"The AMC Pacer X looks superb in eye-catching Firecraker Red.",
},
{
    src:"75pacerxredint.jpeg",
    title:"Pacer X Interior",
    alt:"The Pacer X's interior emphasizes lateral support for the ultimate in performance, while never sacrificing comfort.",
    description:"The Pacer X's interior emphasizes lateral support for the ultimate in performance, while never sacrificing comfort.",
},
{
    src:"mediumbluevinyltop.jpeg",
    title:"Pacer D/L with Option Vinyl Top",
    alt:"In the optional Exterior Decor Package, the Pacer offers a classy vinyl top, shown here on a Brilliant Blue Pacer D/L.",
    description:"In the optional Exterior Decor Package, the Pacer offers a classy vinyl top, shown here on a Brilliant Blue Pacer D/L.",
}
];

/*I'm also keeping a console log of the car pictures so that you can check against the number and be sure that all of the pictures in the gallery are working as intended.*/


console.log([carpics.length]);

//We set up a variable to set the index to zero.

let currentIndex = 0;

/*Then we use a querySelector to manipulate the DOM and insert the photo into gallery, the description into caption, and the title into h4.*/

const carImage = document.querySelector("#gallery");
const descriptionDisplay = document.querySelector("#caption");
const titleDisplay = document.querySelector("#h4");

/*Now we set up a next and previous button to use to change the photo.
Again, this uses query select and the ids next and prev in the html.*/

const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

/*Then a showCar function is used to pass all of the necessary information in from the earlier functions to the html tags.*/

function showCar(index){
    const carpic = carpics[index];
    
    carImage.style.opacity = 0;

    setTimeout(changeImage, 400);

   function changeImage(){
    carImage.src = carpic.src;
    carImage.alt = carpic.alt;

    
    descriptionDisplay.textContent = carpic.description;


    titleDisplay.textContent = carpic.title;
    carImage.style.opacity = 1;
   }


    


}

//Then we set showCar to currentIndex so that the gallery can follow along with the user.

showCar(currentIndex);

//Then we need a handlePrevClick and a handleNextClick function that use basic mathematics to move the gallery selection with each click forward or backwards.

function handlePrevClick(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = carpics.length - 1;
    }
    showCar(currentIndex);
}



function handleNextClick(){
    currentIndex++;
    if(currentIndex >= carpics.length){
        currentIndex = 0;
    }
    showCar(currentIndex);
}

/*Lastly, we set up the nextButton and the prevButton to event listeners so that we can handle the clicks. With that, the gallery is done!*/

nextButton.addEventListener("click", handleNextClick);
prevButton.addEventListener("click", handlePrevClick);
//Set array of review sites you'd like to use.
var reviewSites = [
    "https://www.google.com/search?q=SK+Motorsport,+1999+Iowa+St,+Bellingham,+WA+98229&ludocid=2572613230962149428#lrd=0x5485a38bea214067:0x23b3c21a6ff80834,3"
]

//Pull in any varialbes passed to this page
var curLocation = window.location.href;

//Button actions
document.getElementsByClassName("good")[0].onclick = function(){
    randMax = reviewSites.length;

    //Remember the reviewSites object starts at 0 so we're not adding anything to this like you might normally do.
    randNum = Math.floor(Math.random() * randMax);

    document.location = reviewSites[randNum];
};

document.getElementsByClassName("bad")[0].onclick = function(){
    console.log("bad stuff");
};
//Set array of review sites you'd like to use.
smplReview = {
    reviewSites: [
        "https://www.google.com/search?q=SK+Motorsport,+1999+Iowa+St,+Bellingham,+WA+98229&ludocid=2572613230962149428#lrd=0x5485a38bea214067:0x23b3c21a6ff80834,3"
    ],
    clientLogo: "https://www.skmotorsport.com/wp-content/themes/skmotorsport2/images/skmotorsportlogo.png",
    clientUrl: "https://www.skmotorsport.com",
    variables: {
    },
    ratingFloor: 4,
    ratingSendToForm: true,
    ratingStars: false,
    debug: true
};

//Pull in any variables passed to this page via this anonymous function.  This should be the first thing that is run to make sure 
(function(){   
    var parseURI = window.location.href.split(/[?]/g)[1];

    if (parseURI != undefined) {
        parseURI = parseURI.split("&");
        
        for (i=0; i < parseURI.length; i++) {
            var tempVar = parseURI[i].split(/[=]/g);
            smplReview.variables[tempVar[0]] = tempVar[1];
        }
    };
})();

//Page styling
document.getElementById("header").innerHTML = "<a href='" + smplReview.clientUrl + "'><img src='" + smplReview.clientLogo + "' /></a>";

var reviewAction = function(type) {
    if (type === "good") {
        randMax = smplReview.reviewSites.length;
    
        //Remember the reviewSites object starts at 0 so we're not adding anything to this like you might normally do.
        randNum = Math.floor(Math.random() * randMax);
    
        document.location = smplReview.reviewSites[randNum];
    } else {
        document.getElementById("container").innerHTML = "<h1>We're sorry to hear that!</h1><div id='sorry'>Please tell us what we can do better:</div>";
    
        var sorry = document.getElementById("sorry");
    
        sorry.innerHTML = sorry.innerHTML + "<form action='https://www.skmotorsport.com/mailReview.php' name='review' method='get'><div><textarea name='review' class='form-control' placeholder='Enter you review here...' rows='5'></textarea></div><input type='submit' name='submit' value='Submit'></form>";
    };
};

//Add in appropriate rating method based on configuration
if(smplReview.ratingStars === true) {
    document.getElementById("smplRating").innerHTML = "Stars go here";
    
    if (smplReview.variables.rating != undefined && smplReview.ratingFloor > smplReview.variables.rating) {
        if (smplReview.ratingSendToForm === true) {
            reviewAction("bad");
        }
    }
} else {
    document.getElementById("smplRating").innerHTML = "<button class=\"button good\"><span>Good </span></button><button class=\"button bad\"><span>Bad </span></button>";

    //Button actions
    document.getElementsByClassName("good")[0].onclick = function(){
        reviewAction("good");
    };
    document.getElementsByClassName("bad")[0].onclick =  function(){
        reviewAction("bad");
    };

    if (smplReview.variables.rating != undefined && smplReview.ratingFloor > smplReview.variables.rating) {
        if (smplReview.ratingSendToForm === true) {
            reviewAction("bad");
        }
    }
};
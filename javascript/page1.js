// Initialize Firebase
var config = {
    apiKey: "AIzaSyCS4KuIbLP5fBej1eOxbNdS3ssOQijwadg",
    authDomain: "test1-49f56.firebaseapp.com",
    databaseURL: "https://test1-49f56.firebaseio.com",
    projectId: "test1-49f56",
    storageBucket: "test1-49f56.appspot.com",
    messagingSenderId: "373692440483"
  };
  firebase.initializeApp(config);

  var resultCounter = 0;
  var map;
  var markers = [];
  var database = firebase.database();
  var tl = new TimelineMax({repeat:600, repeatDelay:1, yoyo:true});


tl.staggerTo("h1,h2", 0.2, {className:"+=superShadow", top:"-=10px", ease:Power1.easeIn}, "0.3", "start")
// tl.staggerTo("h2", 0.5, {className:"+=superShadow", top:"-=10px", ease:Power1.easeIn}, "0.3", "start")


function validateForm() {
    var x = $('#job-input').val().trim();
    console.log("x", x); 
    var y = $('#city-input').val().trim();
    console.log("y", y); 
    var z = $('#state-input').val().trim();
    console.log("z", z); 

    if (x == "" || y == "" || z == "")  {       
      $("#search-results").append('<div id="error"> Please fill out the appropriate sections. </div>');
    } 
    else {
      $("#error").empty();
      getData();
    }
}

//function googleMapLat {
  // database.ref().limitToLast(10).on("value", function(snapshot) {
// var sv = snapshot.val();

//       // Console.loging the last user's data
//       // console.log(sv.location);
//       // console.log(sv.latitude);
//       // console.log(sv.longitude);
//      latitudes = sv.latitude;

//       // locations = sv.location;
//       // latitudes = sv.latitude;
//       // longitudes = sv.longitude;
//       // Handle the errors

//       // console.log("I am here: loation" + location);
//     });

//   });//snapshot

// console.log(sv.);
// console.log(latitudes);
// console.log(longitudes); 
// }

function initMap() {
  var options = {
    zoom: 10,
    center: {lat: 37.773972, lng: -122.431297}
  };
    
  var map = new google.maps.Map(document.getElementById('map'), options);
    
  database.ref().limitToLast(10).on("child_added", function(snapshot) {
    var sv = snapshot.val();
    // console.log("ddd" + response);
    //console.log(sv.longitude);

    // flacation=[sv.company, sv.latitude, sv.longitude];
    // console.log("re+++" + flacation);
        
      // for (var i = 0; i < 10; i++) {
        // console.log(sv.latitude);
          // console.log(sv.longitude);
        var tribeca = {lat: sv.latitude, lng: sv.longitude};
        var marker = new google.maps.Marker({
          position: tribeca,
          map: map,
          // title: sv.company,
        // };
        // function addMarker(coords){
        //   var marker = new google.maps.Marker({
        //     position:coords,
        //     map:map,
        });

        var companies = sv.company;

        var infowindow = new google.maps.InfoWindow({
          content: companies
        })
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
  });
}


function getData() {
  var jobTitle = $("#job-input").val().trim();
  title = formatQueryString(jobTitle);

  var location = $("#city-input").val().trim();
  city = formatQueryString(location);

  var state = $("#state-input").val().trim();
  state = formatQueryString(state);

  var radius = $('input[type="radio"]:checked').val();

  // Insert before queryURL if jsonp doesn't work - "https://cors-anywhere.herokuapp.com/"
  var queryURL = "https://api.indeed.com/ads/apisearch?publisher=1665103808901378&q="+title+"&l="+city+"%2C+"+state+"&sort=&radius="+radius+"&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json"


  //Call on Indeed queryURL
  $.ajax({
    url: queryURL,
    dataType: "jsonp",
    method: "GET"
    }).done(function(response) {
           
    answer = response;

    //Iterate through Indeed response
    for (var i=0; i<response.results.length; i++) {
      resultCounter++;

      //Appends new divs
      var resultSection = $("<div>");
      var url = response.results[i].url;
      resultSection.addClass= ("text-center");
      resultSection.attr("id", "result-" + resultCounter);
      $("#result").append(resultSection);
      $("#result-" + resultCounter)
        .append("<h2>" + 
          resultCounter + "<strong> " + response.results[i].jobtitle 
          + "</strong></h2>");
      $("#result-" + resultCounter)
        .append("<p>" + response.results[i].formattedLocation + "</p>");
      $("#result-" + resultCounter)
        .append("<h4>" + response.results[i].company + "</h4><br>");

      //Define search result terms
      var newSearch = {
        job_title: response.results[i].jobtitle,
        location: response.results[i].formattedLocation,
        company: response.results[i].company,
        latitude: response.results[i].latitude,
        longitude: response.results[i].longitude,
        dateAdded: firebase.database.ServerValue.TIMESTAMP,
      };
      database.ref().push(newSearch);
    
    } //Close for loop

  }); //Close ajax response

} //Close getData function


function formatQueryString(str) {
    var finalString;
    var splitString = str.split(" ");

    if (splitString.length > 1) {
      finalString = splitString.join("+");
    }
    else {
      finalString = str;    
    }
    return finalString;
 }

//Calls document functions
$(document).ready(function(){


$("#submit-button").on("click", function(event) {
  event.preventDefault();
  validateForm();

});//onclick

}); // document on ready
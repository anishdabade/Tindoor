// $(document).ready(function(){



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
  // var locations="";
  // var latitudes="";
  // var longitudes="";
  var flacation = [];

  var map;
 
 var markers = [];
  
  var database = firebase.database();

 // Grab the input from text

 // $("input[name='radius-5']").click(function(){
 //    var radius = $("input[name='radius-5']:checked").val();
 //   });
  
 //   $("input[name='radius-10']").click(function(){
 //    var radius = $("input[name='radius-10']:checked").val();
 //   });

 //  $("input[name='radius-15']").click(function(){
 //    var radius = $("input[name='radius-15']:checked").val();
 //   });

 //  $("input[name='radius-20']").click(function(){
 //    var radius = $("input[name='radius-20']:checked").val();
 //   });

 // Select the year of experience

 //Select the location

 //Select the radius in miles

 function formatQueryString(str) {
    var finalString;
    var splitString = str.split(" ");
    // console.log(splitString);

    if (splitString.length > 1) {
      finalString = splitString.join("+");
      // console.log(splitString.length);
    }

    else {
      finalString = str;
        
    }


    return finalString;
 };


$("#submit-button").on("click", function(event){

  var jobTitle = $("#job-input").val().trim();
  title = formatQueryString(jobTitle);

  var location = $("#city-input").val().trim();
  city = formatQueryString(location);

  var state = $("#state-input").val().trim();
  state = formatQueryString(state);

  // console.log(title);
  // console.log(city);
  // console.log(state);
// "https://cors-anywhere.herokuapp.com/"

var queryURL = "https://api.indeed.com/ads/apisearch?publisher=1665103808901378&q="+title+"&l="+city+"%2C+"+state+"&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json"
// console.log(queryURL);

// $('#test').html(queryURL);

 $.ajax({
    url: queryURL,
    dataType: "jsonp",
    method: "GET"
    }).done(function(response) {
      console.log(response);
// console.log(jobTitle);
// console.log(location);       
answer = response;
for (var i=0; i<response.results.length; i++){

  resultCounter++;
  var resultSection = $("<div>");
  var url = response.results[i].url;
  resultSection.addClass= ("text-center");
  resultSection.attr("id", "result-" + resultCounter);
  $("#result-1").append(resultSection);
  
  $("#result-" + resultCounter)
    .append("<h2>" + 
      resultCounter + "<strong> " + response.results[i].jobtitle 
      + "</strong></h2>");
  $("#result-" + resultCounter)
    .append("<p>" + response.results[i].formattedLocation + "</p>");
  $("#result-" + resultCounter)
    .append("<h4>" + response.results[i].company + "</h4><br>");



  var newSearch = {
    job_title: response.results[i].jobtitle,
    location: response.results[i].formattedLocation,
    company: response.results[i].company,
    latitude: response.results[i].latitude,
    longitude: response.results[i].longitude,
    dateAdded: firebase.database.ServerValue.TIMESTAMP,
  };
database.ref().push(newSearch);

  // console.log(newSearch.job_title);
  // console.log(newSearch.location);
  // console.log(newSearch.company);
  // console.log(newSearch.latitude);
  // console.log(newSearch.longitude);
};
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

  });//response

// console.log(sv.);
// console.log(latitudes);
// console.log(longitudes); 

});//onclick






database.ref().limitToLast(10).on("child_added", function(snapshot) {
var sv = snapshot.val();

// console.log(sv.company);
// console.log(sv.latitude);
// console.log(sv.longitude);

flacation=[sv.company, sv.latitude, sv.longitude];

// console.log(flacation);
});

// });


function initMap() {
        var options = {
          zoom: 3,
          center: {lat: 30.395605, lng: -97.74725}
          };
        
        var map = new google.maps.Map(document.getElementById('map'), options);
        
         database.ref().limitToLast(10).on("child_added", function(snapshot) {
          var sv = snapshot.val();

// console.log(sv.company);
// console.log(sv.latitude);
// console.log(sv.longitude);

        flacation=[sv.company, sv.latitude, sv.longitude];

        console.log("re+++" + flacation);
          });
        //
        
        function addMarker(coords){
          var marker = new google.maps.Marker({
            position:coords,
            map:map,

        });
        }
};























  // $("#result-1").append(resultSection);
  
  // var jobTitle = (response.results[i].jobtitle).val().trim();
  // console.log("Job title: "+jobTitle);
  // var location = (response.results[i].city).val().trim();
  // var state = (response.results[i].state).val().trim();
  // (response.results[i].snippet).val().trim();

  // var locationCity = response.results[i].city;
  // var locationState = response. results[i].state;
  // var jobDescription = response.results[i].snippet;

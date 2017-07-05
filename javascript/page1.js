$(document).ready(function(){

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBRke64vqW-1wHuxDisMWsBqzHlCNwAp8Y",
    authDomain: "tindoor-9854b.firebaseapp.com",
    databaseURL: "https://tindoor-9854b.firebaseio.com",
    projectId: "tindoor-9854b",
    storageBucket: "",
    messagingSenderId: "331610741215"
  };
  firebase.initializeApp(config);


 // Grab the input from text

 $("input[name='radius']").click(function(){
    var radius = $("input[value='5']:checked").val();
   });
  
   $("input[name='radius']").click(function(){
    var radius = $("input[value='10']:checked").val();
   });

  $("input[name='radius']").click(function(){
    var radius = $("input[value='15']:checked").val();
   });

  $("input[name='radius']").click(function(){
    var radius = $("input[value='20']:checked").val();
   });



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
  console.log("Query URL: "+queryURL);

 $.ajax({
    url: queryURL,
    dataType: "jsonp",
    method: "GET"
    }).done(function(response) {
    

for (var i=0; i<response.length; i++){

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

};

//go to page 2 and display above results.
  // $("#result-1").append(resultSection);
  
  // var jobTitle = (response.results[i].jobtitle).val().trim();
  // console.log("Job title: "+jobTitle);
  // var location = (response.results[i].city).val().trim();
  // var state = (response.results[i].state).val().trim();
  // (response.results[i].snippet).val().trim();

  // var locationCity = response.results[i].city;
  // var locationState = response. results[i].state;
  // var jobDescription = response.results[i].snippet;

});
});

})

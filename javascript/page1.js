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

 $("input[name='radius-5']").click(function(){
    var radius = $("input[name='radius-5']:checked").val();
   });
  
   $("input[name='radius-10']").click(function(){
    var radius = $("input[name='radius-10']:checked").val();
   });

  $("input[name='radius-15']").click(function(){
    var radius = $("input[name='radius-15']:checked").val();
   });

  $("input[name='radius-20']").click(function(){
    var radius = $("input[name='radius-20']:checked").val();
   });

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
console.log(queryURL);

$('#test').html(queryURL);

 $.ajax({
    url: queryURL,
    dataType: "jsonp",
    method: "GET"
    }).done(function(response) {
      console.log(response);
// console.log(jobTitle);
// console.log(location);       

for (var i=0; i<response.length; i++){

  // var jobTitle = (response.results[i].jobtitle).val().trim();
  // console.log("Job title: "+jobTitle);
  // var location = (response.results[i].city).val().trim();
  // var state = (response.results[i].state).val().trim();
  // (response.results[i].snippet).val().trim();

  // var locationCity = response.results[i].city;
  // var locationState = response. results[i].state;
  // var jobDescription = response.results[i].snippet;
};

  });
});
})
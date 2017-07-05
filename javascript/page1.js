// <<<<<<< HEAD
// // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyBRke64vqW-1wHuxDisMWsBqzHlCNwAp8Y",
//     authDomain: "tindoor-9854b.firebaseapp.com",
//     databaseURL: "https://tindoor-9854b.firebaseio.com",
//     projectId: "tindoor-9854b",
//     storageBucket: "",
//     messagingSenderId: "331610741215"
//   };
//   firebase.initializeApp(config);


//  var jobTitle = response.results[i].jobtitle;
//   var locationCity = response.results[i].city;
//   var locationState = response. results[i].state;
//   var jobDescription = response.results[i].snippet;

//  // Grab the input from text
//   var jobTitle = $("#job-input").val().trim();
//   var location = $("#city-input").val().trim();
//   var state = $("#state-input").val().trim();

//  $("input[name='radius-5']").click(function(){
//     var radius = $("input[name='radius-5']:checked").val();
//    });
  
//    $("input[name='radius-10']").click(function(){
//     var radius = $("input[name='radius-10']:checked").val();
//    });

//   $("input[name='radius-15']").click(function(){
//     var radius = $("input[name='radius-15']:checked").val();
//    });

//   $("input[name='radius-20']").click(function(){
//     var radius = $("input[name='radius-20']:checked").val();
//    });

//  // Select the year of experience

//  // selsect the location

//  //Select the radius in miles

//  var queryURL = "http://api.indeed.com/ads/apisearch?publisher=1665103808901378&q="+ jobTitle +"&l="+ location +"%2C+"+state+"&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json"


//  $.ajax({
//     url: queryURL,
//     method: "GET"
//     }).done(function(response) {
//       console.log(response);
//        });
//   /*
//   1) Grab the input fro min
//   /*








//===========================================================

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
        //put ajax function reference here
    }
  }

 


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

 function getData() {
  var jobTitle = $("#job-input").val().trim();
  title = formatQueryString(jobTitle);

  var location = $("#city-input").val().trim();
  city = formatQueryString(location);

  var state = $("#state-input").val().trim();
  state = formatQueryString(state);

    // $('#radius-answer').on('change', function(){
    //   var radius = $('input[type="radio"]:checked','#radius-answer' ).val();

    // });
  var radius = $('input[type="radio"]:checked').val();
    // console.log(title);
    // console.log(city);
    // console.log(state);
  // "https://cors-anywhere.herokuapp.com/"
  // console.log("I am here =" + radius);
  var queryURL = "https://api.indeed.com/ads/apisearch?publisher=1665103808901378&q="+title+"&l="+city+"%2C+"+state+"&sort=&radius="+radius+"&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json"
    // console.log(queryURL);

    // $('#test').html(queryURL);

    //user_form validation


  $.ajax({
    url: queryURL,
    dataType: "jsonp",
    method: "GET"
    }).done(function(response) {
      
    // console.log(jobTitle);
    // console.log(location);       
    answer = response;
  for (var i=0; i<response.results.length; i++) {
    resultCounter++;
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
  }
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
 }

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
 }

$(document).ready(function(){


$("#submit-button").on("click", function(event) {
  event.preventDefault();
  validateForm();

//   var jobTitle = $("#job-input").val().trim();
//   title = formatQueryString(jobTitle);

//   var location = $("#city-input").val().trim();
//   city = formatQueryString(location);

//   var state = $("#state-input").val().trim();
//   state = formatQueryString(state);

//     // $('#radius-answer').on('change', function(){
//     //   var radius = $('input[type="radio"]:checked','#radius-answer' ).val();

//     // });
//   var radius = $('input[type="radio"]:checked').val();
//     // console.log(title);
//     // console.log(city);
//     // console.log(state);
//   // "https://cors-anywhere.herokuapp.com/"
//   // console.log("I am here =" + radius);
//   var queryURL = "https://api.indeed.com/ads/apisearch?publisher=1665103808901378&q="+title+"&l="+city+"%2C+"+state+"&sort=&radius="+radius+"&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json"
//     // console.log(queryURL);

//     // $('#test').html(queryURL);

//     //user_form validation


//   $.ajax({
//     url: queryURL,
//     dataType: "jsonp",
//     method: "GET"
//     }).done(function(response) {
      
//     // console.log(jobTitle);
//     // console.log(location);       
//     answer = response;
//   for (var i=0; i<response.results.length; i++) {
//     resultCounter++;
//     var resultSection = $("<div>");
//     var url = response.results[i].url;
//     resultSection.addClass= ("text-center");
//     resultSection.attr("id", "result-" + resultCounter);
//     $("#result").append(resultSection);
  
//     $("#result-" + resultCounter)
//       .append("<h2>" + 
//         resultCounter + "<strong> " + response.results[i].jobtitle 
//         + "</strong></h2>");
//     $("#result-" + resultCounter)
//       .append("<p>" + response.results[i].formattedLocation + "</p>");
//     $("#result-" + resultCounter)
//       .append("<h4>" + response.results[i].company + "</h4><br>");



//     var newSearch = {
//       job_title: response.results[i].jobtitle,
//       location: response.results[i].formattedLocation,
//       company: response.results[i].company,
//       latitude: response.results[i].latitude,
//       longitude: response.results[i].longitude,
//       dateAdded: firebase.database.ServerValue.TIMESTAMP,
//     };
//     database.ref().push(newSearch);

//     // console.log(newSearch.job_title);
//     // console.log(newSearch.location);
//     // console.log(newSearch.company);
//     // console.log(newSearch.latitude);
//     // console.log(newSearch.longitude);
//   }
// // database.ref().limitToLast(10).on("value", function(snapshot) {
// // var sv = snapshot.val();

// //       // Console.loging the last user's data
// //       // console.log(sv.location);
// //       // console.log(sv.latitude);
// //       // console.log(sv.longitude);
// //      latitudes = sv.latitude;

// //       // locations = sv.location;
// //       // latitudes = sv.latitude;
// //       // longitudes = sv.longitude;
// //       // Handle the errors

// //       // console.log("I am here: loation" + location);
// //     });

//   });//response

// console.log(sv.);
// console.log(latitudes);
// console.log(longitudes); 

});//onclick






              // database.ref().limitToLast(10).on("child_added", function(snapshot) {
              // var sv = snapshot.val();

              // // console.log(sv.company);
              // // console.log(sv.latitude);
              // // console.log(sv.longitude);

              // flacation=[sv.company, sv.latitude, sv.longitude];

              // // console.log(flacation);
              // });

               //});
}); // document on ready

    function initMap() {
        var options = {
          zoom: 4,
          center: {lat: 30.395605, lng: -97.74725}
          };
        
       var map = new google.maps.Map(document.getElementById('map'), options);
        
        database.ref().limitToLast(10).on("child_added", function(snapshot) {
          var sv = snapshot.val();
          // console.log("ddd" + response);


// console.log(sv.longitude);

       // flacation=[sv.company, sv.latitude, sv.longitude];

       // console.log("re+++" + flacation);
        
        //
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























  // $("#result-1").append(resultSection);
  
  // var jobTitle = (response.results[i].jobtitle).val().trim();
  // console.log("Job title: "+jobTitle);
  // var location = (response.results[i].city).val().trim();
  // var state = (response.results[i].state).val().trim();
  // (response.results[i].snippet).val().trim();

  // var locationCity = response.results[i].city;
  // var locationState = response. results[i].state;
  // var jobDescription = response.results[i].snippet;


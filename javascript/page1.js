

//  $(document).ready(function(){

// var config = {
//     apiKey: "AIzaSyCVVTxve00RmgEsxMZAZRBpVvyySQX3ITw",
//     authDomain: "tindoor-4b472.firebaseapp.com",
//     databaseURL: "https://tindoor-4b472.firebaseio.com",
//     projectId: "tindoor-4b472",
//     storageBucket: "tindoor-4b472.appspot.com",
//     messagingSenderId: "234607706939"
//   };
//   firebase.initializeApp(config);


//  // Grab the input from text

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

//  //Select the location

//  //Select the radius in miles

//  function formatQueryString(str) {
//     var finalString;
//     var splitString = str.split(" ");
//     // console.log(splitString);

//     if (splitString.length > 1) {
//       finalString = splitString.join("+");
//       // console.log(splitString.length);
//     }

//     else {
//       finalString = str;
        
//     }


//     return finalString;
//  };


// $("#submit-button").on("click", function(event){
//   event.preventDefault();

//   var jobTitle = $("#job-input").val().trim();
//   var title = formatQueryString(jobTitle);

//   var location = $("#city-input").val().trim();
//   var city = formatQueryString(location);

//   var state1 = $("#state-input").val().trim();
//   var state = formatQueryString(state1);

//   // console.log(title);
//   // console.log(city);
//   // console.log(state);
// // "https://cors-anywhere.herokuapp.com/"
// // "https://cors.now.sh/"
// //var queryURL = "https://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC&limit=10";
// var queryURL = "https://cors.now.sh/" + "https://api.indeed.com/ads/apisearch?publisher=1665103808901378&q="+title+"&l="+city+"%2C+"+state+"&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json"
// //var queryURL = "http://service.dice.com/api/rest/jobsearch/v1/simple.json?text=java&city=New+York,+NY";
// console.log(queryURL);




//  $.ajax({
//     url: queryURL,
//     //dataType: "jsonp",
//     method: "GET",
//     success: function(response) {
//       console.log("I am here");
//       console.log(response);
//     }
//     // headers: {
//     //               'Access-Control-Allow-Origin': '*'
//     //             },
//     // crossDomain: true
//     }).fail(function(response, status, e) {
//       console.log("Error occured - " + response);
//       console.log(response);

//   });


// });
// });










function validate()
{
    if(   document.getElementById("exampleInputEmail1").value == "anish.dabade@gmail.com"
       && document.getElementById("exampleInputPassword1").value == "workshop" )
    {
        //alert( "validation succeeded" );
      
          return window.open(url, 'page1.html');
        //window.location.href='page1.html';
       
    }
    else
    {
        alert( "validation failed" );
        //location.href="fail.html";
    }
}




// $(document).ready(function(){



// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCVVTxve00RmgEsxMZAZRBpVvyySQX3ITw",
    authDomain: "tindoor-4b472.firebaseapp.com",
    databaseURL: "https://tindoor-4b472.firebaseio.com",
    projectId: "tindoor-4b472",
    storageBucket: "tindoor-4b472.appspot.com",
    messagingSenderId: "234607706939"
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


$("#submit-button").on("click", function(event) {

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

var queryURL = "https://cors.now.sh/" + "https://api.indeed.com/ads/apisearch?publisher=1665103808901378&q="+title+"&l="+city+"%2C+"+state+"&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json"
//var queryURL = "https://cors.now.sh/"+"http://service.dice.com/api/rest/jobsearch/v1/simple.json?text=java&country=US&age=21&page=2";
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
database.ref('/' + jobTitle).push(newSearch);

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
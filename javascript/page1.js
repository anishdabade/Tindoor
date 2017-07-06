

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

function refreshMap()
        {               
            if (vis)            
            {
                trafficLayer.setMap(null)
                vis = false;
            }
            else
            {
                trafficLayer.setMap(map);
                vis = true;
            }            
        }

//   function toggleBounce() {
//   if (marker.getAnimation() !== null) {
//     marker.setAnimation(null);
//   } else {
//     marker.setAnimation(google.maps.Animation.BOUNCE);
//   }
// }

function initMap() {

  var options = {
    zoom: 10,
    center: {lat: 37.773972, lng: -122.431297}
  };
    
  var map = new google.maps.Map(document.getElementById('map'), options);
    //setMapOnAll(null);


  database.ref().limitToLast(10).on("value", function(snapshot) {
    clearMarkers();
    var sv = snapshot.val();
    // console.log("ddd" + response);
    //console.log(sv.longitude);

    // flacation=[sv.company, sv.latitude, sv.longitude];
    // console.log("re+++" + flacation);
        
      // for (var i = 0; i < 10; i++) {
        // console.log(sv.latitude);
          // console.log(sv.longitude);
        var tribeca = {lat: parseFloat(sv.latitude), lng: parseFloat(sv.longitude)};

        
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
        markers.push(marker);
        console.log(markers);


        // Removes the markers from the map, but keeps them in the array.
      


         // submit button
        // marker.addListener('click', toggleBounce);
        // console.log(marker);

        // trafficLayer = new google.maps.TrafficLayer();

        //     trafficLayer.setMap(map);
        //     vis = true;
        //     setInterval(function ()
        //     {
        //         refreshMap();
        //     }, 3000);

        var companies = sv.company;

        var infowindow = new google.maps.InfoWindow({
          content: companies
        })
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
  });
}




function clearMarkers() {

  
        markers = [];
       
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
  var queryURL = "https://cors.now.sh/"+"https://api.indeed.com/ads/apisearch?publisher=1665103808901378&q="+title+"&l="+city+"%2C+"+state+"&sort=&radius="+radius+"&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json";


// $('#test').html(queryURL);

  //Call on Indeed queryURL
  $.ajax({
    url: queryURL,
    dataType: "jsonp",
    method: "GET"
    }).done(function(response) {
<<<<<<< HEAD
           
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
      database.ref().set(newSearch);
    
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

// Initialize Firebase
 //  var config = {
 //    apiKey: "AIzaSyBRke64vqW-1wHuxDisMWsBqzHlCNwAp8Y",
 //    authDomain: "tindoor-9854b.firebaseapp.com",
 //    databaseURL: "https://tindoor-9854b.firebaseio.com",
 //    projectId: "tindoor-9854b",
 //    storageBucket: "",
 //    messagingSenderId: "331610741215"
 //  };
 //  firebase.initializeApp(config);


 // // var jobTitle = response.results[i].jobtitle;
 // //  var locationCity = response.results[i].city;
 // //  var locationState = response. results[i].state;
 // //  var jobDescription = response.results[i].snippet;

 // Grab the input from text
  


 // $("input[name='radius-5']").on("click",function(){
 //    var radius = $("input[name='radius-5']:checked").val();
 //   });
  
 //   $("input[name='radius-10']").on("click",function(){
 //    var radius = $("input[name='radius-10']:checked").val();
 //   });

 //  $("input[name='radius-15']").on("click",function(){
 //    var radius = $("input[name='radius-15']:checked").val();
 //   });

 //  $("input[name='radius-20']").on("click",function(){
 //    var radius = $("input[name='radius-20']:checked").val();
 //   });

 // Select the year of experience

 // selsect the location

 //Select the radius in miles

 $("#submit-button").on("click",function() {

  var jobTitle = $("#job-input").val().trim();
  var location = $("#city-input").val().trim();
  var state = $("#state-input").val().trim();

  console.log(jobTitle);
  console.log(location);
  console.log(state);
  var queryURL = "https://cors-anywhere.herokuapp.com/" + "https://api.indeed.com/ads/apisearch?publisher=1665103808901378&q="+ jobTitle +"&l="+ location +"%2C+"+ state +"&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json";
var queryURL="https://cors-anywhere.herokuapp.com/" + "http://api.indeed.com/ads/apisearch?publisher=1665103808901378&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json";
  

console.log(queryURL);


 // $(document).ready(function(){

  
    $.ajax({
    url: queryURL,
    method: "GET"
    }).done(function(response) {
      console.log(response);
       });
   // });
  
  
   });
 
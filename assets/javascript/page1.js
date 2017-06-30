



  
  

  

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


  // var jobTitle = response.results[i].jobtitle;
  // var locationCity = response.results[i].city;
  // var locationState = response. results[i].state;
  // var jobDescription = response.results[i].snippet;

  // Grab the input from text
  var jobTitle = $("#job-input").val().trim();
  var location = $("#city-input").val().trim();
  var state = $("#state-input").val().trim();

  $("input[name='radius']").click(function(){ 
    var radius = $("input[name='radius']:checked").val();
   });
   
   $("input[name='radius']").click(function(){ 
    var radius = $("input[name='radius']:checked").val();
   });

   $("input[name='radius']").click(function(){ 
    var radius = $("input[name='radius']:checked").val();
   });

   $("input[name='radius']").click(function(){ 
    var radius = $("input[name='radius']:checked").val();
   });

  // Select the year of experience

  // selsect the location

  //Select the radius in miles

  //var queryURL = "http://api.indeed.com/ads/apisearch?publisher=1665103808901378&q="+ jobTitle +"&l="+ location +"%2C+"+state+"&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json"

  var queryURL = "http://api.indeed.com/ads/apisearch?publisher=1665103808901378&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json";
// $("#submit-button").on("click",function(event) {
  // event.preventDefault();
  $.ajax({
    url: queryURL,
    method: "GET"
    }).done(function(response) {
      console.log(response);
       });


    
  // });
  
  /*
  1) Grab the input fro min
  /*
//On click of the search button
 //Get the data from the search input
  //do the next steps
 /*global fetch*/

var SearchButton = document.getElementById('SearchButton')

SearchButton.onclick = getUserInput;

console.log(getUserInput)

function getUserInput(){
    var SearchInput = document.getElementById('SearchInput');
    console.log(SearchInput.value);
    callToWeatherAPI(SearchInput.value)
}
//Ability to call to the API
 //Send our input data to the API
 //Parse JSON data
 //shore the user the field they may be interested in
 
function callToWeatherAPI(input){
    var apiUrl = 'api.openweathermap.org/data/2.5/weather?q=' + input + '&APPID=7e0c824c43f04a1148b6b7fd8a250d66'; //includes my key and the input the user enters
    
    //Fetch is an API. Do more research online
    fetch(apiUrl).then(
        function(response){
            return response.json();
            })
            .then(function(myJson) {
                showDataToUser(myJson);
                console.log(myJson);
            });
}

function showDataToUser(data){//data is the format of what we received from the API from line 27
    var contentElement = document.getElementById('content')
    var temp = data.Search[0].temp;
   
    contentElement.innerHTML = '<h3>' + temp + '</h3>';
}


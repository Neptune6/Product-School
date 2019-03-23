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
    callToOMDBAPI(SearchInput.value)
}
//Ability to call to the API
 //Send our input data to the API
 //Parse JSON data
 //shore the user the field they may be interested in
 
function callToOMDBAPI(input){
    var apiUrl = 'https://www.omdbapi.com/?apikey=5b181cf4&s=' + input; //includes my key and the input the user enters
    
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
    var title = data.Search[0].Title;
    contentElement.innerHTML = '<h3>' + title + '</h3>';
}


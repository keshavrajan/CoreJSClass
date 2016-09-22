// In the index.html file there is a button.  When the button is
// clicked kick off an HTTP GET request to the following URL:
//
//   /api/artists
//
// The response text will be a JSON-encoded array of objects.  Inspect
// the response using the browser debugger and then insert the objects
// into the DOM.  Each artist in the response should be used to create
// a new <li> element in the existing <ul> container (the one with the
// ID of "artists").  Display the name of each artist inside the newly
// created <li> elements.
//
// BONUS #1:
//
// Clicking one of the <li> elements should display all information
// about the clicked artist in the <ul> with the ID of "details".
// (Hint: make another HTTP request to /api/artists/N where N is the
// artist ID.)
//
// BONUS #2:
//
// After displaying a list of artist details, also display a list of
// album names.  A list of albums can be fetched using the following
// URL:
//     /api/artists/N/albums
//
(function() {
	var button = document.querySelector("body > div > button");
	var artistsElement = document.getElementById("artists");
	var detailsElement = document.getElementById("details");
	var req = new XMLHttpRequest();
	var albumReq = new XMLHttpRequest();

	req.addEventListener("load", function(e) {
		if (req.status == 200) 
		{
			console.log(req.responseText);
			showArtistNames(JSON.parse(req.responseText));
		}
	});

	button.addEventListener("click", function(event) {
		req.open("GET", "/api/artists");
		req.send(null);
	});

	var showArtistNames = function(response) {

		for(var i=0; i < response.length; i++)
		{
			var artistItem = document.createElement("li");
			artistItem.textContent = response[i].name;
			artistsElement.appendChild(artistItem);
			addArtistItemEventListener(artistItem, response[i]);
		}
	};

	var addArtistItemEventListener = function(element, artistDetails) {
		element.addEventListener("click", function(event) {
			showDetails(artistDetails);
			getAlbums(artistDetails);
		});
	};

	var showDetails = function(artistDetails) {
		detailsElement.innerHTML = '';
		for(var prop in artistDetails)
		{
			var detailsItem = document.createElement("li");
			detailsItem.textContent = artistDetails[prop];
			detailsElement.appendChild(detailsItem);
		}
	};

	albumReq.addEventListener("load", function(e) {
		if (albumReq.status == 200) 
		{
			console.log(albumReq.responseText);
			//showAlbums(JSON.parse(albumReq.responseText));
		}
	});

	var getAlbums = function(artistDetails) {
		albumReq.open("GET", "/api/artists/" + artistDetails.ID + "/albums");
		albumReq.send(null);
	};


	/*var Artists = function(){
		this.artists = document.getElementById("artists");
	};

	Artists.prototype.wrap = function(element) {
		if(element.tagName === "LI")
		{
			return element;
		}
		var wrapper = document.createElement("li");
		wrapper.appendChild(element);
		return wrapper;
	};

	Artists.prototype.insert = function(element) {
		if(element === null)
		{
			throw "you have a busted selector";
		} 
		this.artists.appendChild(this.wrap(element));
	};

	var artists = new Artists();*/


  // Your code here.

})();

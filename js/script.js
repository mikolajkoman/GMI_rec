var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "e99f47a137594f51af8c95d7fb06c295",
  'begin_date': "20160628",
  'end_date': "20170629"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
	var arr = [],
		nodeList = result.response.docs,
		section = document.querySelector(".articlesWrap"),

		button  = document.querySelector("button");
		
    		for(var i = 0; i < nodeList.length; i++){

				arr.push(nodeList[i]);
				var article = document.createElement("div"),
					header = document.createElement("header"),
					paragraph = document.createElement("article"),
					footer = document.createElement("footer"),
					headerText = document.createTextNode(nodeList[i].pub_date.slice(0, 10)+ "  " + nodeList[i].pub_date.slice(11, 16)),
					paragraphText = document.createTextNode(nodeList[i].lead_paragraph),
					a = document.createElement("a"),
					button = document.querySelector("button");

				article.classList.add("col-lg-3");
				article.appendChild(header);
					header.appendChild(headerText);
				article.appendChild(paragraph);
					paragraph.appendChild(paragraphText);
				article.appendChild(footer);
					footer.appendChild(a);
					a.innerHTML = "read more...";
					a.setAttribute("href", nodeList[i].web_url);
				section.appendChild(article);

			}
	    console.log("i załadowało : " );
	button.addEventListener("click", function (e) {
	    var x = document.getElementById("myDate").value;
	    	console.log("i załadowało : " + x);
		// url += '?' + $.param({
		//   'api-key': "e99f47a137594f51af8c95d7fb06c295",
		//   'begin_date': x,
		//   'end_date': x
		// });

    console.log("i nic : " + x);
	});

}).fail(function(err) {
  throw err;
});
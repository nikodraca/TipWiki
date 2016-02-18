var elements = document.links; // Grab all links on page (still an issue with not grabbing all links)

function info(json) {

    rv = null;

    // Turn link into JSON object
    $.ajax({
      url: json,
      dataType: 'json',
      async: false, // VERY BAD, this is why it is slow, will find solution 

      success: function(data) {
        rv = data.query.pages[0].extract; // Return 1st sentence of article
        
              }
        });

    return rv;

}


for (var i=0; i<elements.length; i++) {
    if ((elements[i].href).indexOf("wiki") > -1) { // Look for links to lead to articles

        var str = elements[i].href.split("wiki/")[1]; // Extract parameter for API call
        var strx = str.replace(" ","_").replace("?","%3F"); // Replace certain characters to make successful API Call
        var json = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles="+strx+"&exsentences=1&formatversion=2"; // Wikipedia endpoint


        if (info(json) == "This is a redirect from a topic that does not have its own page to a section of a page on the subject.")
        {
          elements[i].title = "Not available due to redirect." // There are still lots of other redirects not being caught, will fix
        }

        else
        {
          elements[i].title = info(json); // If no errors, change title attribute of link (change tooltip content)   
        }  

    }

}
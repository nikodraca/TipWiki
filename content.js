var elements = document.links;

function info(json) {

    rv = null;

    $.getJSON(json ,function(data) {
        rv = data.query.pages;
        // need to access next pageID


        // JSON example:
        // {
        //   "batchcomplete": "",
        //   "query": {
        //     "pages": {
        //       "18737268": {
        //         "pageid": 18737268,
        //         "ns": 0,
        //         "title": "SolarCity",
        //         "extract": "SolarCity is an American provider of energy services, headquartered in San Mateo, California."
        //       }
        //     }
        //   }
        // }

    });

    return rv;

}



for (var i=0; i<elements.length; i++) {
    var str = elements[i].href.split("wiki/")[1];
    var json = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles="+str+"&exsentences=1";

    console.log(json);



}
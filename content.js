var elements = document.links;

function info(jsonx) {
    var rv = null;

    $.getJSON(jsonx ,function(data) {
        $.each(data.query.pages, function(x, item)
            {
                rv = item.extract;
                console.log(rv);
                return false;
            });

    });

    console.log(rv);
    return rv;
}



for (var i=0; i<elements.length; i++) {
    var str = elements[i].href.split("wiki/")[1];
    var json = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles="+str+"&exsentences=1";


    elements[i].title = info(json);


}
var elements = document.links;

function info(json) {
    var rv = null;

    $.getJSON(json ,function(data) {
        $.each(data.query.pages, function(x, item)
            {
                debugger;
                rv = item.extract;
                console.log(rv);
                return false;
            });

    });

    return rv;
}



for (var i=0; i<elements.length; i++) {
    var str = elements[i].href.split("wiki/")[1];
    var json = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles="+str+"&exsentences=1";

    // console.log(json.query);

    elements[i].title = info(json);


}
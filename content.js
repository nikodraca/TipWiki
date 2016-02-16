var elements = document.links;

function info(json) {
    var rv = null;

    $.getJSON(json ,function(data) {
        $.each(data.query.pages, function(x, item)
            {
                // item.title;
                rv = "test";
            });

    });

    return rv;
}



for (var i=0; i<elements.length; i++) {
    var str = elements[i].href.split("wiki/")[1];
    var json = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles="+str+"&exsentences=1";


    elements[i].title = info(json);




// $.getJSON(json ,function(data) {
//                                 $.each(data.query.pages, function(x, item)
//                                     {
//                                         console.log(item.title);
//                                     });



//     });


}
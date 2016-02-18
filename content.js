var elements = document.links;

function info(json) {

    rv = null;

    $.ajax({
      url: json,
      dataType: 'json',
      async: false,

      success: function(data) {
        rv = data.query.pages[0].extract;

              }
        });

    return rv;

}


for (var i=0; i<elements.length; i++) {
    if ((elements[i].href).indexOf("wiki") > -1) {
        var str = elements[i].href.split("wiki/")[1];
        var strx = str.replace(" ","_");
        var json = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles="+strx+"&exsentences=1&formatversion=2";
        elements[i].title = info(json);     
    }

}
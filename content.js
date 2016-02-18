var elements = document.links;
console.log("active");

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
        var strx = str.replace(" ","_").replace("?","%3F");
        var json = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles="+strx+"&exsentences=1&formatversion=2";
        
        if (info(json) == "This is a redirect from a topic that does not have its own page to a section of a page on the subject."){
          elements[i].title = "Not available due to redirect."
        }
        else{
          elements[i].title = info(json);   
        }  
    }

}
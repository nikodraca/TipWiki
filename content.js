(function () {
  var elements = document.links;
  Array.prototype.forEach.call(elements, function (elem) {
    var urlParse = elem.href.match(/https\:\/\/en\.wikipedia\.org\/wiki\/([A-z0-9_\-]+)/);
    if(urlParse && urlParse.length){
      var jsonURL = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles="+urlParse[1]+"&exsentences=1&formatversion=2";
      $.ajax({
        url: jsonURL,
        dataType: 'json',
        success: function(data) {
          var rv = data.query.pages[0].extract; // Return 1st sentence of article
          elem.title = rv;
        },
        fail: function (failData) {
          console.error(failData);
          elem.title = "Not Available";
        }
      });
    }
  })
})();


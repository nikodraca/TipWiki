var elements = document.links;

// function: get_info(link) -> info


for (var i=0; i<elements.length; i++) {
    elements[i].title = elements[i].href;
    // elements[i].title = get_info(elements[i].href);

}


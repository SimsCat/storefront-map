function create_marker_str(title, desc, pic) {
    // TODO: add accessible in future
    var processed_str = "<h1>".concat(title, "</h1>")
    if (desc !== null) {
        processed_str = processed_str.concat("<p>", desc, "</p>")
    }
    if (pic !== null) {
        processed_str = processed_str.concat("<img src='", pic, "' width=100% height=100% />")
    }
    return processed_str;
}

// Create Marker list given json
function create_marker_list(current_store_list) {
    var current_markers = []
    current_store_list.forEach(function (item, index) {
        console.log(item, index);
        console.log(item.title, item.x, item.y, item.description, create_marker_str(
                item.title,
                item.description,
                item.picture
            ));
        var marker = L.marker([item.x, item.y], {
            title: item.title,
            icon: redIcon,
        }).bindPopup(
            create_marker_str(
                item.title,
                item.description,
                item.picture
            )
        ).addTo(map);
        current_markers.push(marker);
    });
    return current_markers
}
function create_marker_str(title, desc, pictures) {
    // TODO: add accessible in future
    var processed_str = "<h1>".concat(title, "</h1>")
    if (desc !== null) {
        processed_str = processed_str.concat("<p>", desc, "</p>");
    }
    if (pictures !== null) {
        pictures.forEach(function (pic, index) {
            processed_str = processed_str.concat(
                "<img src='", pic, "' width=100% height=100% />"
            );
        });

    }
    return processed_str;
}

// Create Marker list given json
// TODO: Pass in correct colour icon
function create_marker_list(current_store_list, matching_icon) {
    var current_markers = []
    var marker_str;
    current_store_list.forEach(function (item, index) {
        console.log(item, index);
        marker_str = create_marker_str(
            item.title,
            item.description,
            item.pictures
        );
        //console.log(item.title, item.x, item.y, item.description, marker_str);
        var marker = L.marker([item.x, item.y], {
            title: item.title,
            icon: matching_icon,
        }).bindPopup(
            marker_str
        ).addTo(map);
        current_markers.push(marker);
    });
    return current_markers
}
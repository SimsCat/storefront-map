function get_wheelchair_rating_text(rating) {
    // Get Wheelchair mapping and get the rating text
    var rating_text = wheelchair_key_mapping["rating"][rating]["text"];
    return rating_text;
}

function get_wheelchair_rating_colour(rating) {
    // Get Wheelchair mapping and get the rating text-colour
    var rating_colour = wheelchair_key_mapping["rating"][rating]["colour"];
    return rating_colour;
}

function get_wheelchair_version_str(version) {
    // Get Wheelchair version as a string if null
    if (version == null) {
        return "V0";
    } else {
        return version;
    }
}

function create_wheelchair_str(wheelchair) {
    // Combine wheelchair substrings to create the final string
    var rating_text = get_wheelchair_rating_text(wheelchair.rating);
    var rating_colour = get_wheelchair_rating_colour(wheelchair.rating);
    var wheelchair_version_str = get_wheelchair_version_str(wheelchair.version)
    // console.log("rating_text ", rating_text)
    var processed_str = "<p style='color:".concat(
        rating_colour,
        "'><i class='fa-solid fa-wheelchair'></i> ",
        "Rating: ", 
        wheelchair.rating,
        ": ",
        rating_text,
        " | ",
        wheelchair_version_str,
        "</p>"
        );
    
    return processed_str;
}

function create_marker_str(title, desc, pictures, wheelchair) {
    // Add Title
    var processed_str = "<h1>".concat(title, "</h1>")
    // Add Wheelchair info
    var wheelchair_str = create_wheelchair_str(wheelchair);
    processed_str = processed_str.concat(
        wheelchair_str
    );
    // Add Desc
    if (desc !== null) {
        processed_str = processed_str.concat("<p>", desc, "</p>");
    }
    // Add Pics
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
function create_marker_list(current_store_list, matching_icon) {
    // discontinued
    var current_markers = []
    var marker_str;
    current_store_list.forEach(function (item, index) {
        console.log(item, index);
        marker_str = create_marker_str(
            item.title,
            item.description,
            item.pictures,
            item.wheelchair
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
    return current_markers;
}

function convert_title_to_key(title) {
    // need to declare as String to avoid errors
    title = String(title)
    // lower case all
    var lower_title = title.toLowerCase();
    // remove special chars
    var key = lower_title.replace(/[^\w\s]/gi, "");
    // replace space with _
    key = key.replace(/[\s]/gi, "_");
    return key;
}

function convert_stores_togeos(stores) {
    // convert to geogjson
    var current_geos = []
    stores.forEach(function (item, index) {

        var current_geo = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [item.y, item.x]
            },
            "properties": {
                "title": item.title,
                "pictures": item.pictures,
                "description": item.description,
                "wheelchair": item.wheelchair,
                //"popupContent": "shrugtest-donotuseanduseotherfunction",
                //"Owner Full Name": "",
                //"Owner State ID": "",
                //"OWner P#": "",
                // deal with coloured icon
            }
        }
        current_geos.push(current_geo)
    });
    return current_geos
}

function update_stores_togeos(stores) {
    // convert to geogjson
    var current_geos = []
    stores.forEach(function (item, index) {
        item_properties = item.properties;

        var current_geo = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": item.geometry.coordinates
            },
            "properties": {
                "key": convert_title_to_key(item_properties.title),
                "title": item_properties.title,
                "pictures": item_properties.pictures,
                "description": item_properties.description,
                "wheelchair": item_properties.wheelchair,
                //"popupContent": "shrugtest-donotuseanduseotherfunction",
                //"Owner Full Name": "",
                //"Owner State ID": "",
                //"OWner P#": "",
                // deal with coloured icon
            }
        }
        current_geos.push(current_geo)
        //console.log("geojson for ", item.title, geojson);
    });
    //console.log("geojsons ", current_geos);
    return current_geos
}

function onEachFeature(feature, layer) {
    // if properties exist (as it should), create marker_str
    if (feature.properties) {
        marker_str = create_marker_str(
            feature.properties.title,
            feature.properties.description,
            feature.properties.pictures,
            feature.properties.wheelchair
        )
        //console.log("onEachFeature check marker_str: ", marker_str)
        layer.bindPopup(
            marker_str
        );
    }
};

function create_geoJSON_layer(geo_list, icon) {
    return L.geoJSON(geo_list, {
        onEachFeature: onEachFeature,
        pointToLayer: function (feature, latlng) {
            return L.marker(
                latlng, {
                        icon: icon,
                    }
                );
        }
    }).addTo(map);
}

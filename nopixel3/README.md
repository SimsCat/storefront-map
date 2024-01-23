# storefront-map
A Map of all the stores in Nopixel

Forms link for users to submit update requests: https://forms.gle/vCxQKJSVGqoJoWtYA

## How to run

### Requirements:
#### General
- Code Editor i.e. VS Code

#### Linux:

#### Windows:
- XAMPP (for easiest local web server)

### Linux
- Use any basic Python web server or Apache/Nginx setup.

### Windows:
- Edit XAMPP-Apache config and change `DocumentRoot` to where this repo is.

## Add/Edit/Delete Storefronts
Depending on the type of store it is:
- Go to `configs/<type_of_store>.json`,
- To Add: copy any JSON object in the list, paste it at the end and edit it,
    - Validate JSON to make sure it is fine
- To Edit: Find JSON object in the list, edit it,
    - Validate JSON to make sure it is fine
- To Delete: Find JSON object in the list, delete it,
    - Validate JSON to make sure it is fine

Adding Emojis to title:
- Get the unicode from the below links to the wiki and usage,
- See example for Shrugway and have fun! 

## TODO:
- Add Wheelchair ratings per store based on Lucky to preadsheet,
- Need to add a favicon.ico,
- Change categories to match the one in storefront guidelines,
- See if scroll/zoom lag can be fixed or smoothened,
- See if the Map can be safely compressed further,
- See if Icons can also be in compressed format.
- Add map accessibility info: https://leafletjs.com/examples/accessibility/
- See if it is possible to do https://lsstorefronts.com/<storename> - we may need to add a key field for each store and then everyone can us their link with marker showing. - https://leafletjs.com/reference.html#util-getparamstring ?
- Tootip: https://leafletjs.com/reference.html#tooltip,


# Useful links:
- IMG compressor: https://www.compress2go.com/
- LeafletJS: ADDLINKHERE
- Unicode (for Emojis) Wiki: https://unicode.org/emoji/charts/full-emoji-list.html
- Unicode Usage: https://www.w3schools.com/charsets/ref_emoji.asp
- Used to try smooth scroll/zoom: https://leafletjs.com/examples/zoom-levels/ https://gis.stackexchange.com/questions/298618/leaflet-on-mouse-wheel-event-change-zoom-by-delta 
- Search box: https://github.com/stefanocudini/leaflet-search


## Contributors
SimsCat (NoPixel WL - Tommy Melarky)

HamishLacmane (NoPixel WL - Attendant)

# storefront-map
A Map of all the stores in Nopixel

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

## TODO:
- Add Wheelchair accessibility as a JSON dict and work with Lucky to process it,
- Change categories to match the one in storefront guidelines,
- See if scroll/zoom lag can be fixed or smoothened,
- See if the Map can eb safely compressed further,
- See if Icons can also be in compressed format

# Useful links:
IMG compressor: https://www.compress2go.com/

LeafletJS: ADDLINKHERE

## Contributors
SimsCat (NoPixel WL - Tommy Melarky)

HamishLacmane (NoPixel WL - Attendant)

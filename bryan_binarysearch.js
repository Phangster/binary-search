//spilt the array into half search for the name, if it is inside take it. If not throw it away

const jsonfile = require('jsonfile');

const file = 'phonebook.json'

function sortBy(object){
    object.sort(function(a,b) {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();
      return (a < b) ? -1 : 1;
    })
    return object;
    console.log(object)
}

function binarySearch(items, input){

    while ( items.length > 1 ) {
        
        var startIndex = 0, 
        stopIndex = items.length-1, 
        midPoint = Math.floor((stopIndex - startIndex)/2);

        if (items[midPoint].name.toLowerCase() === input.toLowerCase()){
            // console.log('true')
            console.log('You have found me! ' + items[midPoint].name)
            return true;
        } else {

            if(items[midPoint].name.toLowerCase() > input.toLowerCase()){
                items = items.slice(0, midPoint);
                // console.log('Items in the LOWER', items)
            } else {
                items = items.slice(midPoint);
                // console.log('Items in the UPPER', items)
            }
        }
    }
    console.log('Oh no there is no one named ' + input + ' found!');
    return false;
}


jsonfile.readFile(file, (err, obj) => {
   
    // binarySearch(sortBy(obj), 'Merill')
    binarySearch(sortBy(obj), 'Bryan')

    // binarySearch(obj, "Cathleen") // => true

})


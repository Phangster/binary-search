const nameList = [
    'Aaron',
    'Andy',
    'Batman',
    'Betsy',
    'Boba',
    'Bonnie',
    'Clarence',
    'Daisy',
    'Elektra',
    'Flash'
];



var binarySearch = function(nameList, name) {
    
    let halfSet=[];

    for(i=0; i<nameList.length/2; i++) {
        halfSet.push(nameList[i])
    }
    console.log(halfSet)

    for(i=0; i<halfSet.length; i++) {
        if (halfSet[i]===name) {
            console.log("We found " + name + "!")
            return;
        } else { 
            nameList.shift()
        }
    }
    
    
    
    
    console.log(nameList)
    if(nameList.length > 1) {
      return binarySearch(nameList, name);
    } else {
      return ("sorry not found");
    }

}

// binarySearch(nameList, 'Betsy'); //=> true
binarySearch(nameList, 'Elektra'); //=> false
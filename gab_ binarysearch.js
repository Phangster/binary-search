function binarySearch(array, input) {
    while (array.length > 1) {
      let midPoint = Math.floor(array.length / 2);
      let midData = array[midPoint];
      if ( midData.toLowerCase() === input.toLowerCase() ) {
          console.log('true!!!');
          return true;
      } else {
          if ( midData.toLowerCase() > input.toLowerCase() ) {
              // take first half
              array = array.slice(0, midPoint);
          } else {
              // take second half
              array = array.slice(midPoint);
          }
      }
    }
    console.log('falseeee!!');
    return false;
  }
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
  binarySearch(nameList, 'Daisy'); //=> true
  binarySearch(nameList, 'Bruce'); //=> false
  const PHONEBOOK = require('./phonebook.json');



  
  function binarySearchObject(array, attr, input) {
    array = array.sort( (a,b) => {
      if ( a[attr] > b[attr] ) { return 1 }
      if ( a[attr] < b[attr] ) { return -1 }
      return 0;
    });
    while (array.length > 1) {
      let midPoint = Math.floor(array.length / 2);
      let midData = array[midPoint][attr];
      if ( midData === input ) {
          console.dir( array[midPoint] );
          return array[midPoint];
      } else {
          if ( midData > input ) {
              // take first half
              array = array.slice(0, midPoint);
          } else {
              // take second half
              array = array.slice(midPoint);
          }
      }
    }
    console.log('falseeee!!');
    return false;
  }
  binarySearchObject(PHONEBOOK, 'id', 495); // true
  binarySearchObject(PHONEBOOK, 'id', 2000); // false
  binarySearchObject(PHONEBOOK, 'name', 'Rubi'); // true
  binarySearchObject(PHONEBOOK, 'name', 'Gabriel'); // false
  binarySearchObject(PHONEBOOK, 'phone', 43790573); // true
  binarySearchObject(PHONEBOOK, 'phone', 00000000); // false
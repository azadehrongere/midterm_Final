// Fill out the `filterUsersByState` function so that it returns a
// filtered list of users by the `state` variable passed in. Use the array `filter()` method.
// Ignore the `module.exports` at the bottom. You can run this file by using
// `nodemon question-2.js` or `node question-2.js` and seeing your results in the terminal.
// Alternatively, you can try out your implementation somewhere else and copy your
// solution back into this file.


var users = [
  {
    name: 'David',
    address: {
      state: 'CA'
    }
  },
  {
    name: 'Jeff',
    address: {
      state: 'TX'
    }
  },
  {
    name: 'Sandra',
    address: {
      state: 'NY'
    }
  },
  {
    name: 'Nevil',
    address: {
      state: 'CA'
    }
  }
];


var usersInCA = users.filter(function(name){
  if (name.address.state ==='CA'){
    return true;
  } else{
    return false;
  }
});

var usersInTX = users.filter(function(name){
  if (name.address.state ==='TX'){
    return true;
  } else{
    return false;
  }
});

var usersInNY = users.filter(function(name){
  if (name.address.state ==='NY'){
    return true;
  } else{
    return false;
  }
});


console.log(usersInCA);
console.log(usersInTX);
console.log(usersInNY);

module.exports = usersInCA;

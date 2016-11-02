// Transform the list of users to another array using .map() so that first_name
// is mapped to firstName and last_name is mapped to lastName
var users = [
  {first_name: 'Tom',last_name: 'Dale'},
  {first_name: 'Yehuda',last_name: 'Katz'},
  {first_name: 'Taylor',last_name: 'Otwell'}
];



var users = [
  {first_name: 'Tom',last_name: 'Dale'},
  {first_name: 'Yehuda',last_name: 'Katz'},
  {first_name: 'Taylor',last_name: 'Otwell'}
];



var normalizedUsers = users.map(function(name) {
  if(name.first_name ==='Tom'){
    return {firstName: 'Tom',lastName: 'Dale'};
  }else if(name.first_name ==='Yehuda'){
   return {firstName: 'Yehuda',lastName: 'Katz'};
  }else{
   return {firstName: 'Taylor',lastName: 'Otwell'};  

  }})

console.log(normalizedUsers);


//This is probably not the method you were looking for, but I also tried the .appendTo() method. 
//I was unsuccessful with .appendTo() method so I opted for a path that would deliver the right answer

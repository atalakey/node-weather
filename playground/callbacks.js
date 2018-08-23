/*
  A callback function is a function that gets passed as
  an argument to another function and is executed after
  some event happens.
*/

var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Vikram'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(31, (user) => {
  console.log(user);
});

// Admin rights feature with JavaScript Double Ternary Operator
function adminControls(user) {
     /*if (user) {
       if (user.admin) {
        console.log('showing admin controls...');
       } else {
        console.log('You need to be an admin');
       }
     } else {
       console.log('You need to be logged in');
    }  */
  
    console.log(user ? user.admin ? "showing admin controls" : "You need to be an admin"
    : "you need to be logged in") ;
  }
  
  var userOne = {
    name: "Kristine",
    admin: true
  };
  
  adminControls(userOne);

  var userTwo = {
    name: "Mary Jane",
    admin: false
  };

  adminControls(userTwo);

  var userThree = null;

  adminControls(userThree);
  
  
  
  

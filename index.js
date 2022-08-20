function saveToLocalStorage(event){

  event.preventDefault();

  const name=event.target.username.value;
  const email=event.target.emailId.value;

  const obj ={
    name : name,
    email : email
  }

  localStorage.setItem("userDetails"+email,JSON.stringify(obj));
  showNewUserOnScreen(obj);
}

//Adding user details to dom
function showNewUserOnScreen(user){

  const parentNode = document.getElementById('listOfUser');

  const childHTML = `<li> ${user.name} - ${user.email} </li>`;

  parentNode.innerHTML =parentNode.innerHTML+childHTML+'<button>Edit</button>  <button>Delete</button>';
}

let loginForm = document.getElementById("signup");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let p1 = document.getElementById("password");
  let p2 = document.getElementById("confPass");
  if(p1.value === p2.value){
    alert("correct")
  }
  else{
    alert("Passwords dont match!")
  }
});
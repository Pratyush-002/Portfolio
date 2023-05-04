const loginForm = document.getElementById("form-input");


loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let username = document.getElementById("username");
    let comment = document.getElementById("comment");
    let email = document.getElementById("email")
  
    if (username.value == "" || comment.value == "" || email.value =="") {
      alert("Ensure you input a value in all the fields!");
    } else {
      alert("This form has been successfully submitted!");
      console.log(
        `This form has a username of ${username.value} and comment of ${comment.value}`
      );
  
      username.value = "";
      comment.value = "";
      email.value = "";
    }
  });

const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
  document.querySelector(".header-list").classList.toggle("hello");
  navMenu.classList.toggle("hello");
})
  
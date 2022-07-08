document.querySelector(".login_button").addEventListener("click", (e) => {
  let id = document.querySelector(".input_id").value;
  let pw = document.querySelector(".input_password").value;
  let $formChild = document.querySelector(".login_form").children;

  $formChild[1].style.display = id.length === 0 ? "block" : "none";
  $formChild[3].style.display = pw.length === 0 ? "block" : "none";
  document.querySelector(".login_form").children[4].style.display = "none";
});

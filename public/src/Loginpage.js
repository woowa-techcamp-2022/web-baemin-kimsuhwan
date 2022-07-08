document.querySelector(".login_button").addEventListener("click", (e) => {
  let id = document.querySelector(".input_id").value;
  let pw = document.querySelector(".input_password").value;
  let $formChild = document.querySelector(".login_form").children;

  $formChild[1].style.display = id.length === 0 ? "block" : "none";
  $formChild[3].style.display = pw.length === 0 ? "block" : "none";
  document.querySelector(".login_form").children[4].style.display = "none";
});

/*
function ajax_send(data) {
  data = JSON.stringify(data);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/login");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(data);

  xhr.addEventListener("load", (e) => {
    let result = JSON.parse(xhr.responseText);
    document.querySelector(".login_form").children[4].style.display =
      result.state === "fail" ? "block" : "none";
    if (result.state === "ok") {
      console.log("로그인 완료. 세션도 넣었음.");
    }
  });
}*/

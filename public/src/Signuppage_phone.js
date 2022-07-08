let $input_tlno = document.querySelector("#input_tlno");
let $get_number = document.querySelector(".get_number");
let $next_button = document.querySelector(".next_button");
let $warning_text = document.querySelector(".warning_text");
let $secure_number = document.querySelector(".secure_number");
let $input_secure_number = document.querySelector("#input_secure_number");
let $resend_secure_number = document.querySelector(".resend_secure_number");

$input_tlno.addEventListener("input", onInput);

$get_number.addEventListener("click", async (e) => {
  const region_number = $input_tlno.value.slice(0, 3);
  if (region_number === "010" && $input_tlno.value.length === 13) {
    $warning_text.style.display = "none";
    $secure_number.style.display = "flex";
    $get_number.disabled = true;
    setTimeout(() => {
      $input_secure_number.value = getRandomNumber();
      $next_button.disabled = false;
    }, 2000);
  } else {
    $warning_text.style.display = "block";
    $secure_number.style.display = "none";
  }
});

$resend_secure_number.addEventListener("click", async (e) => {
  setTimeout(() => {
    $input_secure_number.value = getRandomNumber();
    $next_button.disabled = false;
  }, 2000);
});

$next_button.addEventListener("click", (e) => {
  location.href = "/signup_email";
});

function onInput(e) {
  const region_number = $input_tlno.value.slice(0, 3);
  if (region_number !== "010" || $input_tlno.value.length < 13) {
    $get_number.disabled = false;
    $next_button.disabled = true;
  }
  e.target.value = e.target.value
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
    .replace(/(\-{1,2})$/g, "");
}

function getRandomNumber() {
  let randomNumber = "";
  for (let i = 0; i < 4; i++) {
    randomNumber += String(Math.floor(Math.random() * 10));
  }
  return randomNumber;
}

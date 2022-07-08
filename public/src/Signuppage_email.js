let $input_email = document.querySelector(".input_email");
let $email_validation_button = document.querySelector(
  ".email_validation_button"
);

let $input_nickname = document.querySelector(".input_nickname");
let $input_password = document.querySelector(".input_password");
let $input_birth = document.querySelector(".input_birth");

let $nickname_check = document.querySelector(".nickname_check");
let $password_check = document.querySelector(".password_check");
let $birth_check = document.querySelector(".birth_check");

let $warning_email = document.querySelector("#warning_email");
let $warning_nickname = document.querySelector("#warning_nickname");
let $warning_password = document.querySelector("#warning_password");
let $warning_birth = document.querySelector("#warning_birth");

let $success_button = document.querySelector(".success_button");

let successDataRecord = new Map();

$email_validation_button.addEventListener("click", (e) => {
  setTimeout(() => {
    if ($input_email.value.split("@").length > 1) {
      $nickname_check.style.display = "flex";
      $password_check.style.display = "flex";
      $birth_check.style.display = "flex";
      $warning_email.style.display = "none";
      successDataRecord.set("id", $input_email.value);
      successInputCheck();
    } else {
      $nickname_check.style.display = "none";
      $password_check.style.display = "none";
      $birth_check.style.display = "none";
      $warning_email.style.display = "block";
      successDataRecord.delete("id");
      successInputCheck();
    }
  }, 2000);
});

$input_nickname.addEventListener("blur", (e) => {
  if (e.target.value.length === 0) {
    $warning_nickname.style.display = "block";
    successDataRecord.delete("nickname");
  } else {
    $warning_nickname.style.display = "none";
    successDataRecord.set("nickname", e.target.value);
  }
  successInputCheck();
});

$input_password.addEventListener("blur", (e) => {
  let species = new Set();
  if (e.target.value.length < 10) {
    $warning_password.style.display = "block";
    successDataRecord.delete("password");
    return;
  }
  for (let i = 0; i < e.target.value.length; i++) {
    if (/\d{1}/.test(e.target.value[i])) {
      species.add("숫자");
    } else if (/[a-z]{1}/.test(e.target.value[i])) {
      species.add("소문자");
    } else if (/[A-Z]{1}/.test(e.target.value[i])) {
      species.add("대문자");
    } else {
      species.add("특수문자");
    }
  }
  if (species.size === 2) {
    $warning_password.style.display = "none";
    successDataRecord.set("password", $input_password.value);
  } else {
    $warning_password.style.display = "block";
    successDataRecord.delete("password");
  }
  successInputCheck();
});

$input_birth.addEventListener("input", onInput);
$input_birth.addEventListener("blur", (e) => {
  let [year, month, day] = e.target.value.split(".");
  let date = new Date();

  if (
    (year < date.getFullYear() &&
      Number(month) <= 12 &&
      Number(day) <= new Date(Number(year), Number(month), 0).getDate()) ||
    (year == date.getFullYear() &&
      month <= date.getMonth() + 1 &&
      day <= date.getDate())
  ) {
    $warning_birth.style.display = "none";
    successDataRecord.set("birth", e.target.value);
  } else {
    $warning_birth.style.display = "block";
    successDataRecord.delete("birth");
  }

  successInputCheck();
});

function onInput(e) {
  e.target.value = e.target.value
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g, "$1.$2.$3")
    .replace(/(\.{1,2})$/g, "");
}

function successInputCheck() {
  $success_button.disabled = successDataRecord.size === 4 ? false : true;
}

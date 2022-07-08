const $checkTotal = document.querySelector("#check_total");
const $checkBoxes = document.querySelectorAll(".checkbox");
const $submitButton = document.querySelector(".submit_button");
const checkRecord = new Set();

//전체동의 박스를 체크했다면, 나머지 체크박스 다 체크.
//해제한 것이라면, 나머지들도 다 해제

document.querySelector(".form_container").addEventListener("click", (e) => {
  //label과 input의 중복이벤트 방지
  if (e.target.class === "checkbox") return;

  let $clicked_agree = e.target.closest(".agree_label");
  let $clicked_age = e.target.closest(".age_label");

  if ($clicked_agree) hasClosestCheckBox($clicked_agree);
  else if ($clicked_age) {
    $clicked_age.children[0].checked = true;
    checkRecord.add("select_age");
  }

  $submitButton.className = `submit_button${
    checkRecord.size === $checkBoxes.length - 1 ? " active" : ""
  }`;
});

//하단의 submit_button이 활성화 시, 해당 버튼을 클릭하면 다음 페이지로 이동
document.querySelector(".submit_button").addEventListener("click", (e) => {
  if (e.target.className.split(" ").length > 1) {
    location.href = "/signup_phone";
  }
});

function hasClosestCheckBox(clickLabel) {
  //지금 확인한 agree_label의 첫번째 자식이 input checkbox라면?
  if (
    clickLabel.children.length > 0 &&
    clickLabel.children[0].tagName === "INPUT"
  ) {
    let $closestCheckBox = clickLabel.children[0];
    $closestCheckBox.checked = !$closestCheckBox.checked;
    /*
    누른 버튼이
      - 전체동의 버튼이라면 하단의 체크박스들을 다 클릭.
      - 전체동의 버튼이 아니라면 하나만 체크하기.
    */
    if ($closestCheckBox.id === "check_total") {
      $checkBoxes.forEach((checkbox) => {
        onClick($checkTotal.checked, checkbox);
      });
    } else {
      onClick($closestCheckBox.checked, $closestCheckBox);
    }
  }
}

function onClick(verifyNodeChecked, targetNode) {
  targetNode.checked = verifyNodeChecked;
  //check_public, check_sns는 선택 체크박스이기 때문에 checkRecord에 추가하지 않음.
  if (!(targetNode.id === "check_public" || targetNode.id === "check_sns")) {
    verifyNodeChecked
      ? checkRecord.add(targetNode.id)
      : checkRecord.delete(targetNode.id);
  }
}

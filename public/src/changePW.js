function passwordChange(pw) {
  let pwArr = pw.split("");
  let changepwArr = pwArr.map((cur, idx) => {
    let transChar = cur.charCodeAt(0) + (idx % 2) === 0 ? 5 : -5;
    return String.fromCharCode(transChar);
  });
  return changepwArr.join("");
}

module.exports = passwordChange;

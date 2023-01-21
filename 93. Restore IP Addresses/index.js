/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let outputIPAdress = [];
  let formIPAddress = (curIPAdress, startIdx) => {
    if (startIdx === s.length && curIPAdress.length === 4)
      return outputIPAdress.push(curIPAdress.join("."));
    if (startIdx < s.length && curIPAdress.length < 4) {
      let cur = "";
      if (s[startIdx] === "0") {
        formIPAddress([...curIPAdress, 0], startIdx + 1);
        return;
      }
      for (let i = 0; i < 3; i++) {
        if (Number(cur + s[startIdx + i] > 255)) return;
        cur = cur + s[startIdx + i];
        formIPAddress([...curIPAdress, cur], startIdx + i + 1);
      }
    }
  };

  formIPAddress([], 0);
  return outputIPAdress;
};

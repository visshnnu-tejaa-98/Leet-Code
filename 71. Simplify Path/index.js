/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const s_path = [];
  let slow = 0,
    fast = 0;
  while (slow < path.length) {
    while (path[slow + 1] === "/" && path[slow + 1]) {
      slow++;
    }
    fast = slow + 1;
    while (path[fast + 1] !== "/" && path[fast + 1]) {
      fast++;
    }

    if (fast >= path.length) {
      break;
    }

    const p_seg = path.slice(slow + 1, fast + 1);
    if (p_seg === "..") {
      s_path.pop();
    } else if (p_seg !== ".") {
      s_path.push(p_seg);
    }
    slow = fast = fast + 1;
  }

  return "/" + s_path.join("/");
};

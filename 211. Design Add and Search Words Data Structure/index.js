var WordDictionary = function () {
  this.T = {};
};

WordDictionary.prototype.addWord = function (s) {
  let t = this.T;
  for (let c of s) {
    if (!t[c]) t[c] = {};
    t = t[c];
  }
  t._ = true;
};

WordDictionary.prototype.search = function (s) {
  const f = (s, T) => {
    let t = T;
    for (let i = 0; i < s.length; ++i) {
      const c = s[i];
      if (c === ".") {
        for (let k in t) if (f(s.substring(i + 1), t[k])) return true;
        return false;
      }
      if (!t[c]) return false;
      t = t[c];
    }
    return !!t._;
  };
  return f(s, this.T);
};

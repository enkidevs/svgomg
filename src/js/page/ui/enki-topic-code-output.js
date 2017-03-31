var utils = require('../utils');

function viewBox (svgStr) {
  const viewBoxRegex = /<svg .*?viewBox=["'](-?[\d\.]+[, ]+-?[\d\.]+[, ][\d\.]+[, ][\d\.]+)["']/
  const matches = svgStr.match(viewBoxRegex)
  return matches && matches.length >= 2 ? matches[1] : null;
}

class CodeOutput {
  constructor() {
    this.container = utils.strToEl(
      '<div class="code-output">' +
        '<pre><code></code></pre>' +
      '</div>' +
    '');
    this._codeEl = this.container.querySelector('code');
  }

  async setSvg(svgFile) {
    this._codeEl.innerText = '[' + viewBox(svgFile.text) + '] ' + svgFile.text.replace(/<svg.*?>/, '').replace(/\n/g, '').replace(/<\/svg.*?>/, '');
  }

  reset() {
    this._codeEl.innerHTML = '';
  }
}

module.exports = CodeOutput;

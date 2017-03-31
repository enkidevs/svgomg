var utils = require('../utils');

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
    console.log(svgFile)
    this._codeEl.innerHTML = '![alt description](' + encodeURIComponent(svgFile.text) + ')';
  }

  reset() {
    this._codeEl.innerHTML = '';
  }
}

module.exports = CodeOutput;

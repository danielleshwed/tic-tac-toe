import * as css from "./index.css";

export default class App {
  constructor(elem) {
    if (!elem) return;
    this.elem = elem;
  }

  render() {
    if (this.elem)
      this.elem.innerHTML = `
        <section data-component="app">
          <div class="ticTacGrid" id="tic-tac-grid">
            <div id="0" class="cell"></div>
            <div id="1" class="cell"></div>
            <div id="2" class="cell"></div>
            <div id="3" class="cell"></div>
            <div id="4" class="cell"></div>
            <div id="5" class="cell"></div>
            <div id="6" class="cell"></div>
            <div id="7" class="cell"></div>
            <div id="8" class="cell"></div>
          </div>
        </section>
        `;
  }
}

export default class Nagykep {
  #src = "";
  #cim = "";
  #leiras = "";
  #index = 0;

  constructor(src, cim, leiras, index, szuloElem) {
    this.#src = src;
    this.#cim = cim;
    this.#leiras = leiras;
    this.#index = index;

    this.szuloElem = szuloElem;

    this.megjelenit();
  }

  megjelenit() {
    const nagyKep = `
        <div class="balGomb"><button><</button></div>
        <div class="nagyKep"></div>
        <div class="jobbGomb"><button>></button></div>
      </div>`;

    this.szuloElem.insertAdjacentHTML("beforeend", nagyKep);

    this.kepElem = this.szuloElem.lastElementChild;

    this.kepElem.addEventListener("click", () => {
      this.esemeny();
    });
  }

  esemeny() {
    const e = new CustomEvent("kivalaszt", { detail: this.#index });
    window.dispatchEvent(e);
  }
}

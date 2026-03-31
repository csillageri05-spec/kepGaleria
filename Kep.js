export default class Kep {
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
    const html = `
            <div class="kep-karty">
                <img src="${this.#src}" alt="${this.#cim}" style="max-width: 200px;">
                <h3>${this.#cim}</h3>
                <p>${this.#leiras}</p>
            </div>
        `;

    this.szuloElem.insertAdjacentHTML("beforeend", html);

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

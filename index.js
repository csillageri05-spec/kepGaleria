import Kepek from "./Kepek.js";

const adatok = [
  {
    src: "https://picsum.photos/id/237/200/300",
    cim: "Kutya",
    leiras: "Cuki fekete kutya",
  },
  {
    src: "https://picsum.photos/id/238/200/300",
    cim: "Város",
    leiras: "Épületek felülről",
  },
  {
    src: "https://picsum.photos/id/239/200/300",
    cim: "Pitypang",
    leiras: "Sárga virág",
  },
];

const galeriaTarolo = document.querySelector(".galeria");

new Kepek(adatok, galeriaTarolo);

window.addEventListener("kivalaszt", (event) => {
    console.log("Kattintott kép indexe:", event.detail);
});

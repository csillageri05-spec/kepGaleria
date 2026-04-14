import { adatok } from "./adatlista.js";
import Kepek from "./Kepek.js";
import Nagykep from "./nagykep.js";

const kezmuvesCarouselTarolo = document.querySelector(".kezmuvesCarousel");
const galeriaTarolo = document.querySelector(".galeria");

new kezmuvesCarouselTarolo(adatok, kezmuvesCarouselTarolo);
new Kepek(adatok, galeriaTarolo);

window.addEventListener("kivalaszt", (event) => {
  console.log("Kattintott kép indexe:", event.detail);
});

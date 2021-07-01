import { addClass, removeClass } from "./utils-class";

const sliders = document.getElementsByClassName("slider");

for (let i = 0; i < sliders.length; i++) {
  const slider = sliders[i];

  const items = slider.querySelectorAll(".slider .item");
  const preview = slider.querySelector("div > .preview");

  for (let item = 0; item < items.length; item++) {
    const itemTrigger = items[item];
    console.log(itemTrigger);

    itemTrigger.addEventListener("click", function () {
      const dataImg = this.attributes?.["data-img"]?.value;
      for (
        let eachItemTrigger = 0;
        eachItemTrigger < items.length;
        eachItemTrigger++
      ) {
        const triggerNeedToRemove = items[eachItemTrigger];

        removeClass(triggerNeedToRemove, "selected");
      }

      addClass(itemTrigger, "selected");

      preview.querySelector("img").setAttribute("src", dataImg);
    });
  }
}

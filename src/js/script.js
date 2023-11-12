"use strict";

// elements
const tabsBtn = Array.from(document.querySelectorAll(".tabbar__tabs__btn"));
const tabsContent = Array.from(
  document.querySelectorAll(".tabbar__tabContent")
);

const handleTheTabbar = function (e) {
  // activing the btn
  tabsBtn.some(el => {
    const isTarget = el.classList.contains("active");
    isTarget && el.classList.remove("active");
    return isTarget;
  });
  e.target.classList.add("active");

  // activing the content
  const { category } = e.target.dataset;
  tabsContent.some(el => {
    const isContent = el.classList.contains("active");
    isContent && el.classList.remove("active");
    return isContent;
  });
  tabsContent.some(el => {
    const content = el.dataset.category == category;
    content && el.classList.add("active");
    return content;
  });
};

// event listining
tabsBtn.forEach(el => el.addEventListener("click", handleTheTabbar));

// actiiving the tabbar
tabsBtn[0].click();

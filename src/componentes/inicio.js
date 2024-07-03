window.onscroll = function() {
  const contBtnScroll = document.querySelector(".contBtnScroll");
  const imgScroll = document.querySelector(".imgScroll");

  if (document.documentElement.scrollTop > 100) {
    contBtnScroll.classList.add("show");
    imgScroll.classList.add("show");
  } else {
    contBtnScroll.classList.remove("show");
    imgScroll.classList.remove("show");
  }
};
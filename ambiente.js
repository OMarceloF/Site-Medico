window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".whatsapp-button").style.display = "block";
  } else {
    document.querySelector(".whatsapp-button").style.display = "none";
  }
}

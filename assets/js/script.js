function menuMobile() {
  const menuHp = document.getElementById("menu");

  if (menuHp.style.display === "flex") {
    menuHp.style.display = "none";
  } else {
    menuHp.style.display = "flex";
  }
}
let shareBtn = document.querySelector(".share-btn");
let shareContent = document.querySelector(".share-content");
let shareBtnPath = document.querySelector(".share-btn path");

shareBtn.addEventListener("click", () => {
  shareContent.classList.toggle("active");
  if (shareContent.classList.contains("active")) {
    shareBtn.style.backgroundColor = "hsl(214, 17%, 51%)";
    shareBtnPath.style.fill = "#fff";
  } else {
    shareBtn.style.backgroundColor = "hsl(210, 46%, 95%)";
    shareBtnPath.style.fill = "#6E8098";
  }

})
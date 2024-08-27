window.addEventListener("load", function () {
  // 모달창 기능
  let modalWrap = document.querySelector(".modal-wrap");
  let modalClose = document.querySelector(".modal-close");
  modalClose.addEventListener("click", function () {
    modalWrap.classList.add("fadeOut");
    modalWrap.addEventListener("animationend", () => {
      modalWrap.style.display = "none";
    });
  });

  // nav 에 마우스 오버하면 header 높이 260px 변경주기
  // nav 에 마우스 아웃하면 header 높이 100px 변경하기
  // header 를 js 로 저장해 보자(변수 정의해 보자)
  let header = document.querySelector(".header");
  // nav 를 js 로 저장해 보자(변수 정의해 보자)
  let nav = document.querySelector(".nav");
  //   console.log(header);
  //   console.log(nav);

  //   nav 에 마우스 오버 처리
  //  html 요소에 마우스 오버 처리하는 법
  nav.addEventListener("mouseenter", function () {
    // header 의 높이를 260 픽셀로 고치고 싶다.
    // header.style.height = "260px";
    // 우리는 260 픽셀로 변경되는 class 를 작성해 두었다.
    header.classList.add("header-active");
  });
  //   nav 에 마우스 아웃 처리
  //  html 요소에 마우스 아웃 처리하는 법
  nav.addEventListener("mouseleave", function () {
    // header 의 높이를 100 픽셀로 고치고 싶다.
    // header.style.height = "100px";
    // 클래스를 제거한다.
    header.classList.remove("header-active");
  });

  let gnbA = document.querySelectorAll(".gnb > li");
  let navBlueBar = document.querySelector(".nav-blue-bar");

  // 최초 위치 및 너비
  let posX = gnbA[0].getBoundingClientRect().left;
  let widthX = gnbA[0].getBoundingClientRect().width;
  navBlueBar.style.left = posX + "px";
  navBlueBar.style.width = widthX + "px";

  gnbA.forEach((item) => {
    item.addEventListener("mouseenter", function (event) {
      let posX = this.getBoundingClientRect().left;
      let widthX = this.getBoundingClientRect().width;
      // navBlueBar.style.left = posX + "px";
      // navBlueBar.style.width = widthX + "px";
      anime({
        targets: navBlueBar,
        left: posX,
        width: widthX,
        easing: "easeInOutQuad",
        duration: 500,
      });
    });
  });

  // 스크롤에 의한 position:fixed, relative 교체
  const visual = this.document.querySelector(".visual");
  window.addEventListener("scroll", function () {
    // 스크롤 위치값을 파악
    let scY = this.window.scrollY;
    // classList.add() 와 classList.remove() 활용
    if (scY > 0) {
      // 스크롤바가 아래로 조금이라도 이동
      // position: fixed;
      header.classList.add("header-fixed");
      visual.classList.add("visual-fixed");
    } else {
      // 스크롤바가 최상단에 위치.
      // position: relative;
      header.classList.remove("header-fixed");
      visual.classList.remove("visual-fixed");
    }
  });
});

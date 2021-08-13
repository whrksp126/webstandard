//라이트 박스
$(".lightgallery").lightGallery({
  thembnail: true,
  autoplay: true,
  pause: 3000,
  progressBar: true,
});

//윈도우 팝업
$(".window").click(function (e) {
  e.preventDefault();
  //window.open('파일명','팝업이름','옵션설정')
  //옵션 : left, top, with, height, status, toolbar, location, menubar, fullscreen
  window.open(
    "sample_popup.html",
    "popup01",
    "width=800, height=590, left=50, top=50, scrollbars=0,toolbar=0, menubar=0"
  );
});

//레이어 팝업
$(".layer").click(function (e) {
  e.preventDefault();
  // $("#layer").css("display", "block");
  // $("#layer").show();
  // $("#layer").fadeIn();
  $("#layer").slideDown();
});
$("#layer .close").click(function (e) {
  e.preventDefault();
  // $("#layer").css("display", "block");
  // $("#layer").show();
  // $("#layer").fadeOut();
  $("#layer").slideUp();
});

//탭메뉴
let $tab_list = $(".tab_menu");

$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e) {
  e.preventDefault();
  let $this = $(this);
  $this
    .next("ul")
    .show()
    .parent("li")
    .addClass("active")
    .siblings("li")
    .removeClass("active")
    .find(">ul")
    .hide();
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

// 배너
$(".ban").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
});

//갤러리
$(".gallery_img").slick({
  fade: true,
  pauseOnDotsHover: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 300,
  slidesToShow: 1,
});
$(".play").click(function () {
  $(".gallery_img").slick("slickPlay");
});
$(".pause").click(function () {
  $(".gallery_img").slick("slickPause");
});
$(".prev").click(function () {
  $(".gallery_img").slick("slickPrev");
});
$(".next").click(function () {
  $(".gallery_img").slick("slickNext");
});

//버튼을 클릭하면 전체 메뉴를 보이게 하세요.
$(".tit .btn").click(function (e) {
  e.preventDefault(); // 버튼을 클릭하면 화면이 상단으로 올라간 후 실행 되는 것을 방지함
  // $("#cont_nav").css("display", "block");
  // $("#cont_nav").show();
  // $("#cont_nav").fadeIn(); // 서서히 나타남
  // $("#cont_nav").slideDown(); // 애니메이션으로 보이지만 한번만 사용가능
  // $("#cont_nav").toggle(); // 나타났다가 사라지는게 가능함
  // $("#cont_nav").fadeToggle(); // 서서히 나타났다가 서서히 사라지는게 함
  $("#cont_nav").slideToggle(200); // 애니메이션으로 나타났다가 애니메이션으로 사라지는게 함
  // $(".tit .btn").addClass("on"); // 클릭히만 해당 태그에 클래스가 생성됨
  $(this).toggleClass("on"); // 클릭하면 해당 태그에 클래스가 생성되고 한번더 클릭하면 사라짐
});

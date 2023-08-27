function parallax(e) {
  $(".data-layer").css({ top: 270 - 0.1 * e });

function pageInfo() {
  $(".data-layer").length > 0
    ? $(".referrer").text(document.referrer)
    : $("body").append(
        '<div class="data-layer">' +
          browser +
          " " +
          windowHeight +
          "px " +
          windowWidth +
          'px <span class="coor">0 0</span> <span class="scroll">0</span> <span class="countdown"></span> <span class="stream-data"></span> <span class="click"></span> <span class="referrer">' +
          document.referrer +
          '</span> <br><div class="socket-user-list"></div></div>'
      );
}

var browser = navigator.userAgent.toLowerCase(),
  windowHeight = window.innerHeight,
  windowWidth = window.innerWidth;
document.onmousemove = function (e) {
  var t = e.clientX + "px, " + e.clientY + "px";
  $(".coor").text(t);
};

pageInfo();

$(document).on("mousemove", function (event) {
  pageInfo();
});

$(document).scroll(function () {
  (scroll = $(document).scrollTop()),
    (scrollRoundDown = Math.floor(scroll)),
    $(".scroll").text(scrollRoundDown + "px"),
    parallax(scroll),
    switchImagesOnScroll(scroll);
});
document.onmousemove = function (e) {
  var t = e.clientX + "px, " + e.clientY + "px";
  $(".coor").text(t);
};
var countDownDate = new Date("Aug 26, 2023 14:00:00").getTime(),
  pageEntryTime = new Date().getTime(),
  x = setInterval(function () {
    var e = new Date().getTime(),
      t = e - countDownDate,
      o = Math.floor(t / 864e5),
      a = Math.floor((t % 864e5) / 36e5),
      i = Math.floor((t % 36e5) / 6e4),
      r = Math.floor((t % 6e4) / 1e3);
    o < 10 && (o = "0" + o),
      a < 10 && (a = "0" + a),
      i < 10 && (i = "0" + i),
      r < 10 && (r = "0" + r);
    var n = o + ":" + a + ":" + i + ":" + r,
      s = e - pageEntryTime,
      c = Math.floor(s / 864e5),
      l = Math.floor((s % 864e5) / 36e5),
      m = Math.floor((s % 36e5) / 6e4),
      h = Math.floor((s % 6e4) / 1e3);
    c < 10 && (c = "0" + c),
      l < 10 && (l = "0" + l),
      m < 10 && (m = "0" + m),
      h < 10 && (h = "0" + h);
    var d = c + ":" + l + ":" + m + ":" + h;
    $(".countdown").text(n + " " + d);
  }, 1e3);

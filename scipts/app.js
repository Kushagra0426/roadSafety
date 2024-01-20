$(document).ready(function () {
  $("#a1").click(function () {
    window.location = "/map.html";
  });

  $("#a2").click(function () {
    window.location = "/report.html";
  });

  $("#a3").click(function () {
    window.location = "/shame.html";
  });

  $("#back").click(function () {
    history.back();
  });
});

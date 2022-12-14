"use strict";
jQuery(document).ready(function () {
  if (document.querySelectorAll("#mega-menu")) {
    var e = document.querySelectorAll("#mega-menu .depth-0");
    if (0 < e.length)
      for (var l = 0; l < e.length; l++) {
        var t = e[l].querySelectorAll(".nav-group");
        2 === t.length || 4 === t.length
          ? t[0].parentNode.classList.add("two-col")
          : 3 === t.length
            ? t[0].parentNode.classList.add("three-col")
            : 4 < t.length
              ? t[0].parentNode.classList.add("three-col")
              : 0 === t.length || null === t.length
                ? e[l].querySelector(".row").classList.add("one-col")
                : t[0].parentNode.classList.add("one-col");
      }
    var r = document.querySelector("#mega-menu ul").querySelectorAll(":scope > li");
    if (4 < r.length)
      for (var o = 4; o < r.length; o++) {
        var n = r[o].querySelectorAll(".dropdown-menu");
        if (n.length) for (var a = 0; a < n.length; a++) n[a].classList.add("dropdown-menu-right");
      }
  }
});

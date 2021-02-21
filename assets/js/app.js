import jQuery from 'jquery'
import('./bootstrap.bundle.min.js')
import('./jquery.easing.min.js')
import('./scrollspy.min.js')
!(function (_0x2e0dd9) {
  "use strict";
  _0x2e0dd9(window)["on"]("load", function () {
    _0x2e0dd9("#status")["fadeOut"](),
      _0x2e0dd9("body")["delay"](0x15e)["css"]({ overflow: "visible" });
  }),
    _0x2e0dd9(".navbar-toggle")["on"]("click", function (_0x40f854) {
      _0x2e0dd9(this)["toggleClass"]("open"),
        _0x2e0dd9("#navigation")["slideToggle"](0x190);
    }),
    _0x2e0dd9(".navigation-menu>li")
      ["slice"](-0x1)
      ["addClass"]("last-elements"),
    _0x2e0dd9(".menu-arrow,.submenu-arrow")["on"](
      "click",
      function (_0x104ed4) {
        _0x2e0dd9(window)["width"]() < 0x3e0 &&
        (_0x104ed4["preventDefault"](),
          _0x2e0dd9(this)
            ["parent"]("li")
            ["toggleClass"]("open")
            ["find"](".submenu:first")
            ["toggleClass"]("open"));
      }
    ),
    _0x2e0dd9(".navigation-menu\x20a")["each"](function () {
      this["href"] === window["location"]["href"] &&
      (_0x2e0dd9(this)["parent"]()["addClass"]("active"),
        _0x2e0dd9(this)
          ["parent"]()
          ["parent"]()
          ["parent"]()
          ["addClass"]("active"),
        _0x2e0dd9(this)
          ["parent"]()
          ["parent"]()
          ["parent"]()
          ["parent"]()
          ["parent"]()
          ["addClass"]("active"));
    }),
    _0x2e0dd9(".has-submenu\x20a")["click"](function () {
      window["innerWidth"] < 0x3e0 &&
      (_0x2e0dd9(this)["parent"]()["hasClass"]("open")
        ? (_0x2e0dd9(this)["siblings"](".submenu")["removeClass"]("open"),
          _0x2e0dd9(this)["parent"]()["removeClass"]("open"))
        : (_0x2e0dd9(this)["siblings"](".submenu")["addClass"]("open"),
          _0x2e0dd9(this)["parent"]()["addClass"]("open")));
    }),
    _0x2e0dd9(".mouse-down")["on"]("click", function (_0x16c7d6) {
      var _0x462074 = _0x2e0dd9(this);
      _0x2e0dd9("html,\x20body")
        ["stop"]()
        ["animate"](
        {
          scrollTop:
            _0x2e0dd9(_0x462074["attr"]("href"))["offset"]()["top"] - 0x0,
        },
        0x5dc,
        "easeInOutExpo"
      ),
        _0x16c7d6["preventDefault"]();
    }),
    _0x2e0dd9(window)["scroll"](function () {
      var _0x5bb491 = _0x2e0dd9(window)["scrollTop"]();
      _0x5bb491 >= 0x32
        ? _0x2e0dd9(".sticky")["addClass"]("nav-sticky")
        : _0x2e0dd9(".sticky")["removeClass"]("nav-sticky");
    }),
    _0x2e0dd9(window)["scroll"](function () {
      _0x2e0dd9(this)["scrollTop"]() > 0x64
        ? _0x2e0dd9(".back-to-top")["fadeIn"]()
        : _0x2e0dd9(".back-to-top")["fadeOut"]();
    }),
    _0x2e0dd9(".back-to-top")["click"](function () {
      return (
        _0x2e0dd9("html,\x20body")["animate"]({ scrollTop: 0x0 }, 0xbb8), ![]
      );
    });
})(jQuery);

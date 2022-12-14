(function (Drupal, $) {
  /* eslint-disable camelcase */
  /* eslint-disable yoda */

  "use strict";
  UW.QuickLinks = Backbone.View.extend({
    container: "#page",
    events: { click: "animate", touchstart: "animate", keyup: "animate", blur: "loop" },
    initialize: function (i) {
      _.bindAll(this, "inner_keydown", "render", "animate", "accessible", "loop", "transitionEnd"), this.render();
    },
    render: function () {
      (this.quicklinks = $("#quicklinks")),
        (this.$container = $(this.container)),
        this.$el.attr("aria-controls", "quicklinks").attr("aria-owns", "quicklinks"),
        UW.$body.on("keydown", "#quicklinks a:first", this.inner_keydown),
        UW.$body.on("keyup", "#quicklinks a", this.animate),
        this.quicklinks.on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", this.transitionEnd);
    },
    transitionEnd: function (i) {
      this.open && i.target == this.quicklinks[0] && this.accessible();
    },
    inner_keydown: function (i) {
      if (9 == i.keyCode && i.shiftKey) return this.$el.focus(), !1;
    },
    animate: function (i) {
      if ((i.preventDefault(), i.keyCode && 27 != i.keyCode && ((i.keyCode && 13 != i.keyCode) || (i.keyCode && 32 != i.keyCode)))) return !1;
      this.$container.toggleClass("open"), this.quicklinks.toggleClass("open"), (this.open = this.quicklinks.hasClass("open")), this.open || this.accessible();
    },
    accessible: function (i) {
      this.$el.attr("aria-expanded", this.open),
        this.quicklinks.attr("aria-hidden", (!this.open).toString()),
        this.open
          ? (this.$el.attr("aria-label", "Close quick links"), this.quicklinks.find("a").attr("tabindex", 0).first().focus(), $("#page-inner").attr("aria-hidden", !0), $(".screen-reader-shortcut").attr("aria-hidden", !0))
          : (this.$el.attr("aria-label", "Open quick links"), this.quicklinks.find("a").attr("tabindex", -1), this.$el.focus(), $("#page-inner").attr("aria-hidden", !1), $(".screen-reader-shortcut").attr("aria-hidden", !1));
    },
    loop: function (i) {
      this.open && this.quicklinks.find("li a").first().focus();
    },
  });

}(Drupal, jQuery));

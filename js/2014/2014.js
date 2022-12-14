"use strict";
var root = window.document,
  UW = function e(o) {
    return o instanceof e ? o : this instanceof e ? void (this._wrapped = o) : new e(o);
  };
((root.UW = UW).VERSION = "0.1"),
  (UW.KEYCODES = { TAB: 9, ENTER: 13, ESC: 27 }),
  (UW.elements = { alert: ".site-header", radio: ":radio", checkbox: ":checkbox", search: "#uwsearcharea", select: ".uw-select", quicklinks: ".uw-quicklinks" }),
  (UW.getBaseUrl = function () {
    var e = _.first(_.compact(Backbone.history.location.pathname.split("/")));
    return (
      Backbone.history.location.origin || (Backbone.history.location.origin = Backbone.history.location.protocol + "//" + Backbone.history.location.hostname + (Backbone.history.location.port ? ":" + Backbone.history.location.port : "")),
        -1 != Backbone.history.location.origin.indexOf("www.washington.edu")
          ? Backbone.history.location.origin + (e ? "/" + e : "") + "/"
          : -1 != Backbone.history.location.origin.indexOf("depts.washington.edu")
            ? Backbone.history.location.origin + (e ? "/" + e : "") + "/"
            : Backbone.history.location.origin + "/"
    );
  }),
  (UW.wpinstance = function () {
    return Backbone.history.location.pathname ? Backbone.history.location.pathname : "";
  }),
  (UW.sources = { search: UW.getBaseUrl() + "wp-admin/admin-ajax.php" }),
  (UW.initialize = function (e) {
    (UW.$body = e("body")),
      (UW.$window = e(window)),
      (UW.baseUrl = UW.getBaseUrl()),
      (UW.alert = new UW.Alert({ after: UW.elements.alert, model: new UW.Alert.Model() })),
      (UW.quicklinks = _.map(e(UW.elements.quicklinks), function (e) {
        return new UW.QuickLinks({ el: e });
      })),
      (UW.radio = _.map(e(UW.elements.radio), function (e) {
        return new UW.Radio({ el: e });
      })),
      (UW.checkbox = _.map(e(UW.elements.checkbox), function (e) {
        return new UW.Radio({ el: e });
      })),
      (UW.select = _.map(e(UW.elements.select), function (e) {
        return new UW.Select({ el: e });
      }));
  }),
  jQuery(document).ready(function () {
    UW.initialize(jQuery);
  });

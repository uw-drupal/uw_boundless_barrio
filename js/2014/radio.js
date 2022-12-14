(function (Drupal, $) {
  "use strict";
  UW.Radio = Backbone.View.extend({
    states: { checked: "checked", disabled: "disabled" },
    events: { "click input": "toggle" },
    initialize: function (t) {
      _.bindAll(this, "toggle", "getGroup", "toggleCheckBox"),
        (this.settings = _.extend({}, this.defaults, this.$el.data(), t)),
        (this.$input = this.$el),
        (this.name = this.$el.attr("name")),
        this.setElement(this.$el.closest("label")),
        this.setState();
    },
    setState: function () {
      this.$input.prop(this.states.disabled) && this.$el.addClass(this.states.disabled), this.$input.prop(this.states.checked) && this.$el.addClass(this.states.checked);
    },
    getGroup: function () {
      return "radio" === this.$input.attr("type") ? _.where(UW.radio, { name: this.name }) : "checkbox" === this.$input.attr("type") ? _.where(UW.checkbox, { name: this.name }) : void 0;
    },
    toggle: function (t) {
      _.each(this.getGroup(), this.toggleCheckBox);
    },
    toggleCheckBox: function (t) {
      var e = t.$input.prop(this.states.checked),
        s = t.$input.prop(this.states.disabled);
      !s && t.$el.removeClass(this.states.checked) && t.$el.removeAttr(this.states.checked).trigger("change"),
      s || (e && t.$el.addClass(this.states.checked) && t.$el.trigger($.Event("toggle")), e !== t.$el.prop(this.states.checked) && t.$el.trigger("change"));
    },
  });
}(Drupal, jQuery));

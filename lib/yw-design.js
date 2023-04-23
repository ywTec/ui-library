import { defineComponent as c, openBlock as r, createElementBlock as a, renderSlot as d } from "vue";
const l = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, p = c({
  name: "YwButton",
  props: l,
  setup() {
    return {};
  }
}), u = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, s] of o)
    e[n] = s;
  return e;
}, i = ["disabled"];
function f(t, o, e, n, s, $) {
  return r(), a("button", {
    class: "yw-button",
    disabled: t.disabled
  }, [
    d(t.$slots, "default")
  ], 8, i);
}
const _ = /* @__PURE__ */ u(p, [["render", f]]), m = [_], b = function(t) {
  m.forEach((o) => {
    t.use(o);
  });
}, h = {
  install: b
};
export {
  _ as Button,
  h as default
};

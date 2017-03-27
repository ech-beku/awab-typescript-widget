var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "jimu/BaseWidget", "dojo/_base/lang"], function (require, exports, BaseWidget, lang) {
    "use strict";
    var Widget = (function (_super) {
        __extends(Widget, _super);
        function Widget(args) {
            var _this = _super.call(this, lang.mixin({ baseClass: "a-new-ts-widget" }, args)) || this;
            _this.baseClass = "a-new-ts-widget";
            return _this;
        }
        Widget.prototype.postCreate = function () {
            for (var _i = 0, _a = this.config.elements; _i < _a.length; _i++) {
                var element = _a[_i];
                var divElement = document.createElement("div");
                var linkElement = document.createElement("a");
                linkElement.textContent = element.name;
                linkElement.href = element.href;
                divElement.appendChild(linkElement);
                this.subnode.appendChild(divElement);
            }
        };
        return Widget;
    }(BaseWidget));
    return Widget;
});
//# sourceMappingURL=Widget.js.map
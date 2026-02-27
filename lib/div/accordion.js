"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _easy = require("easy");
const _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class AccordionDiv extends _easy.Element {
    expand(initialHeight, instantly) {
        const height = this.getHeight(), finalHeight = height; ///
        this.removeClass("collapsed");
        this.resize(initialHeight, finalHeight, instantly);
    }
    collapse(instantly, done) {
        const height = this.getHeight(), finalHeight = 0, initialHeight = height; ///
        this.resize(initialHeight, finalHeight, instantly, ()=>{
            this.addClass("collapsed");
            done();
        });
    }
    getHeight() {
        let height;
        const display = this.style("display");
        this.show();
        height = super.getHeight();
        this.display(display);
        return height;
    }
    isCollapsed() {
        const collapsed = this.hasClass("collapsed");
        return collapsed;
    }
    setHeight(height) {
        height = height === _constants.AUTO ? height : `${height}px`; ///
        this.style("height", height);
    }
    resize(initialHeight, finalHeight, instantly, done) {
        if (instantly) {
            done && done(); ///
            return;
        }
        const initialTime = Date.now();
        this.animate(initialTime, initialHeight, finalHeight, ()=>{
            this.setHeight(_constants.AUTO);
            done && done(); ///
        });
    }
    animate(initialTime, initialHeight, finalHeight, done) {
        const currentTime = Date.now(), elapsedTime = currentTime - initialTime, scale = elapsedTime / _constants.ACCORDION_SCALE_FACTOR, completed = scale > 1;
        if (completed) {
            done();
            return;
        }
        const heightDifference = finalHeight - initialHeight, height = initialHeight + scale * heightDifference;
        this.setHeight(height);
        requestAnimationFrame(()=>{
            this.animate(initialTime, initialHeight, finalHeight, done);
        });
    }
    parentContext() {
        const context = this.getContext(), resizeDiv = this.resize.bind(this), expandDiv = this.expand.bind(this), collapseDiv = this.collapse.bind(this), getDivHeight = this.getHeight.bind(this), isCollapsed = this.isCollapsed.bind(this);
        return {
            ...context,
            resizeDiv,
            expandDiv,
            collapseDiv,
            getDivHeight,
            isCollapsed
        };
    }
    static tagName = "div";
    static defaultProperties = {
        className: "accordion"
    };
}
const _default = (0, _easywithstyle.default)(AccordionDiv)`

  overflow: hidden;

  display: block;
  
  .collapsed {
    display: none;
  }
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgQVVUTywgQUNDT1JESU9OX1NDQUxFX0ZBQ1RPUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY2xhc3MgQWNjb3JkaW9uRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGV4cGFuZChpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpIHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICAgIGZpbmFsSGVpZ2h0ID0gaGVpZ2h0OyAvLy9cblxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG5cbiAgICB0aGlzLnJlc2l6ZShpbml0aWFsSGVpZ2h0LCBmaW5hbEhlaWdodCwgaW5zdGFudGx5KTtcbiAgfVxuXG4gIGNvbGxhcHNlKGluc3RhbnRseSwgZG9uZSkge1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgZmluYWxIZWlnaHQgPSAwLFxuICAgICAgICAgIGluaXRpYWxIZWlnaHQgPSBoZWlnaHQ7IC8vL1xuXG4gICAgdGhpcy5yZXNpemUoaW5pdGlhbEhlaWdodCwgZmluYWxIZWlnaHQsIGluc3RhbnRseSwgKCkgPT4ge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGxldCBoZWlnaHQ7XG5cbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5zdHlsZShcImRpc3BsYXlcIik7XG5cbiAgICB0aGlzLnNob3coKTtcblxuICAgIGhlaWdodCA9IHN1cGVyLmdldEhlaWdodCgpO1xuXG4gICAgdGhpcy5kaXNwbGF5KGRpc3BsYXkpO1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIGlzQ29sbGFwc2VkKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRoaXMuaGFzQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG5cbiAgICByZXR1cm4gY29sbGFwc2VkO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGhlaWdodCA9IChoZWlnaHQgPT09IEFVVE8pID9cbiAgICAgIGhlaWdodCA6XG4gICAgICBgJHtoZWlnaHR9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoXCJoZWlnaHRcIiwgaGVpZ2h0KTtcbiAgfVxuXG4gIHJlc2l6ZShpbml0aWFsSGVpZ2h0LCBmaW5hbEhlaWdodCwgaW5zdGFudGx5LCBkb25lKSB7XG4gICAgaWYgKGluc3RhbnRseSkge1xuICAgICAgZG9uZSAmJiBkb25lKCk7IC8vL1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbFRpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgdGhpcy5hbmltYXRlKGluaXRpYWxUaW1lLCBpbml0aWFsSGVpZ2h0LCBmaW5hbEhlaWdodCwgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRIZWlnaHQoQVVUTyk7XG5cbiAgICAgIGRvbmUgJiYgZG9uZSgpOyAvLy9cbiAgICB9KTtcbiAgfVxuXG4gIGFuaW1hdGUoaW5pdGlhbFRpbWUsIGluaXRpYWxIZWlnaHQsIGZpbmFsSGVpZ2h0LCBkb25lKSB7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpLCAvLy9cbiAgICAgICAgICBlbGFwc2VkVGltZSA9IGN1cnJlbnRUaW1lIC0gaW5pdGlhbFRpbWUsXG4gICAgICAgICAgc2NhbGUgPSBlbGFwc2VkVGltZSAvIEFDQ09SRElPTl9TQ0FMRV9GQUNUT1IsXG4gICAgICAgICAgY29tcGxldGVkID0gKHNjYWxlID4gMSk7XG5cbiAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoZWlnaHREaWZmZXJlbmNlID0gKGZpbmFsSGVpZ2h0IC0gaW5pdGlhbEhlaWdodCksXG4gICAgICAgICAgaGVpZ2h0ID0gaW5pdGlhbEhlaWdodCArIHNjYWxlICogaGVpZ2h0RGlmZmVyZW5jZTtcblxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRlKGluaXRpYWxUaW1lLCBpbml0aWFsSGVpZ2h0LCBmaW5hbEhlaWdodCwgZG9uZSk7XG4gICAgfSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZXNpemVEaXYgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBleHBhbmREaXYgPSB0aGlzLmV4cGFuZC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBjb2xsYXBzZURpdiA9IHRoaXMuY29sbGFwc2UuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZ2V0RGl2SGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaXNDb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIC4uLmNvbnRleHQsXG4gICAgICByZXNpemVEaXYsXG4gICAgICBleHBhbmREaXYsXG4gICAgICBjb2xsYXBzZURpdixcbiAgICAgIGdldERpdkhlaWdodCxcbiAgICAgIGlzQ29sbGFwc2VkXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJhY2NvcmRpb25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQWNjb3JkaW9uRGl2KWBcblxuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBcbiAgLmNvbGxhcHNlZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiQWNjb3JkaW9uRGl2IiwiRWxlbWVudCIsImV4cGFuZCIsImluaXRpYWxIZWlnaHQiLCJpbnN0YW50bHkiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJmaW5hbEhlaWdodCIsInJlbW92ZUNsYXNzIiwicmVzaXplIiwiY29sbGFwc2UiLCJkb25lIiwiYWRkQ2xhc3MiLCJkaXNwbGF5Iiwic3R5bGUiLCJzaG93IiwiaXNDb2xsYXBzZWQiLCJjb2xsYXBzZWQiLCJoYXNDbGFzcyIsInNldEhlaWdodCIsIkFVVE8iLCJpbml0aWFsVGltZSIsIkRhdGUiLCJub3ciLCJhbmltYXRlIiwiY3VycmVudFRpbWUiLCJlbGFwc2VkVGltZSIsInNjYWxlIiwiQUNDT1JESU9OX1NDQUxFX0ZBQ1RPUiIsImNvbXBsZXRlZCIsImhlaWdodERpZmZlcmVuY2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJyZXNpemVEaXYiLCJiaW5kIiwiZXhwYW5kRGl2IiwiY29sbGFwc2VEaXYiLCJnZXREaXZIZWlnaHQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlIQTs7O2VBQUE7OztzRUF2SHNCO3NCQUVFOzJCQUVxQjs7Ozs7O0FBRTdDLE1BQU1BLHFCQUFxQkMsYUFBTztJQUNoQ0MsT0FBT0MsYUFBYSxFQUFFQyxTQUFTLEVBQUU7UUFDL0IsTUFBTUMsU0FBUyxJQUFJLENBQUNDLFNBQVMsSUFDdkJDLGNBQWNGLFFBQVEsR0FBRztRQUUvQixJQUFJLENBQUNHLFdBQVcsQ0FBQztRQUVqQixJQUFJ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
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
const _accordion = /*#__PURE__*/ _interop_require_default(require("../../button/navigation/accordion"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class AccordionNavigationItem extends _easy.Element {
    childElements() {
        const { Articles, first, last, showArticle } = this.properties, { AccordionNavigationButton } = this.constructor, [Article] = Articles;
        return /*#__PURE__*/ React.createElement(AccordionNavigationButton, {
            Article: Article,
            first: first,
            last: last,
            showArticle: showArticle
        });
    }
    static AccordionNavigationButton = _accordion.default;
    static tagName = "li";
    static defaultProperties = {
        className: "accordion-navigation"
    };
}
const _default = (0, _easywithstyle.default)(AccordionNavigationItem)`

  height: 4rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL25hdmlnYXRpb24vYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEFjY29yZGlvbk5hdmlnYXRpb25CdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi9uYXZpZ2F0aW9uL2FjY29yZGlvblwiO1xuXG5jbGFzcyBBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbSBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgQXJ0aWNsZXMsIGZpcnN0LCBsYXN0LCBzaG93QXJ0aWNsZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHsgQWNjb3JkaW9uTmF2aWdhdGlvbkJ1dHRvbiB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBbIEFydGljbGUgXSA9IEFydGljbGVzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPEFjY29yZGlvbk5hdmlnYXRpb25CdXR0b24gQXJ0aWNsZT17QXJ0aWNsZX0gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fSBzaG93QXJ0aWNsZT17c2hvd0FydGljbGV9IC8+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIEFjY29yZGlvbk5hdmlnYXRpb25CdXR0b24gPSBBY2NvcmRpb25OYXZpZ2F0aW9uQnV0dG9uO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJsaVwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYWNjb3JkaW9uLW5hdmlnYXRpb25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQWNjb3JkaW9uTmF2aWdhdGlvbkl0ZW0pYFxuXG4gIGhlaWdodDogNHJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkFjY29yZGlvbk5hdmlnYXRpb25JdGVtIiwiRWxlbWVudCIsImNoaWxkRWxlbWVudHMiLCJBcnRpY2xlcyIsImZpcnN0IiwibGFzdCIsInNob3dBcnRpY2xlIiwicHJvcGVydGllcyIsIkFjY29yZGlvbk5hdmlnYXRpb25CdXR0b24iLCJBcnRpY2xlIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4QkE7OztlQUFBOzs7c0VBNUJzQjtzQkFFRTtrRUFFYzs7Ozs7O0FBRXRDLE1BQU1BLGdDQUFnQ0MsYUFBTztJQUMzQ0MsZ0JBQWdCO1FBQ2QsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUNDLFVBQVUsRUFDeEQsRUFBRUMseUJBQXlCLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUNoRCxDQUFFQyxRQUFTLEdBQUdOO1FBRXBCLHFCQUVFLG9CQUFDSztZQUEwQkMsU0FBU0E7WUFBU0wsT0FBT0E7WUFBT0MsTUFBTUE7WUFBTUMsYUFBYUE7O0lBR3hGO0lBRUEsT0FBT0UsNEJBQTRCQSxrQkFBeUIsQ0FBQztJQUU3RCxPQUFPRSxVQUFVLEtBQUs7SUFFdEIsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2Isd0JBQXdCLENBQUM7Ozs7QUFJbEQsQ0FBQyJ9
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
const _sufficient = require("sufficient");
const _accordion = /*#__PURE__*/ _interop_require_default(require("./accordion"));
const _articlesArray = /*#__PURE__*/ _interop_require_default(require("./articlesArray"));
const _accordion1 = /*#__PURE__*/ _interop_require_default(require("./navigation/accordion"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class View extends _easy.Element {
    showArticle(uri, instantly) {
        this.updateAccordion(uri, instantly);
        this.updateAccordionNavigation(uri);
    }
    childElements() {
        const showArticle = (uri)=>_sufficient.controller.showArticle(uri);
        return [
            /*#__PURE__*/ React.createElement(_accordion.default, {
                ArticlesArray: _articlesArray.default,
                showArticle: showArticle
            }),
            /*#__PURE__*/ React.createElement(_accordion1.default, {
                ArticlesArray: _articlesArray.default,
                showArticle: showArticle
            })
        ];
    }
    initialise() {
        this.assignContext();
    }
    static tagName = "div";
    static defaultProperties = {
        className: "view"
    };
}
const _default = (0, _easywithstyle.default)(View)`

  display: block;
  
  @media (min-width: 800px) {

    display: grid;
    
    column-gap: 2rem;
    grid-template-rows: 1fr;
    grid-template-areas: "accordion-navigation accordion";
    grid-template-columns: 20rem auto;

  }

`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgY29udHJvbGxlciB9IGZyb20gXCJzdWZmaWNpZW50XCI7XG5cbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcIi4vYWNjb3JkaW9uXCI7XG5pbXBvcnQgQXJ0aWNsZXNBcnJheSBmcm9tIFwiLi9hcnRpY2xlc0FycmF5XCI7XG5pbXBvcnQgQWNjb3JkaW9uTmF2aWdhdGlvbiBmcm9tIFwiLi9uYXZpZ2F0aW9uL2FjY29yZGlvblwiO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIHNob3dBcnRpY2xlKHVyaSwgaW5zdGFudGx5KSB7XG4gICAgdGhpcy51cGRhdGVBY2NvcmRpb24odXJpLCBpbnN0YW50bHkpO1xuXG4gICAgdGhpcy51cGRhdGVBY2NvcmRpb25OYXZpZ2F0aW9uKHVyaSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHNob3dBcnRpY2xlID0gKHVyaSkgPT4gY29udHJvbGxlci5zaG93QXJ0aWNsZSh1cmkpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxBY2NvcmRpb24gQXJ0aWNsZXNBcnJheT17QXJ0aWNsZXNBcnJheX0gc2hvd0FydGljbGU9e3Nob3dBcnRpY2xlfSAvPixcbiAgICAgIDxBY2NvcmRpb25OYXZpZ2F0aW9uIEFydGljbGVzQXJyYXk9e0FydGljbGVzQXJyYXl9IHNob3dBcnRpY2xlPXtzaG93QXJ0aWNsZX0gLz5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgXG4gICAgY29sdW1uLWdhcDogMnJlbTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImFjY29yZGlvbi1uYXZpZ2F0aW9uIGFjY29yZGlvblwiO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjByZW0gYXV0bztcblxuICB9XG5cbmA7XG4iXSwibmFtZXMiOlsiVmlldyIsIkVsZW1lbnQiLCJzaG93QXJ0aWNsZSIsInVyaSIsImluc3RhbnRseSIsInVwZGF0ZUFjY29yZGlvbiIsInVwZGF0ZUFjY29yZGlvbk5hdmlnYXRpb24iLCJjaGlsZEVsZW1lbnRzIiwiY29udHJvbGxlciIsIkFjY29yZGlvbiIsIkFydGljbGVzQXJyYXkiLCJBY2NvcmRpb25OYXZpZ2F0aW9uIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdDQTs7O2VBQUE7OztzRUF0Q3NCO3NCQUVFOzRCQUNHO2tFQUVMO3NFQUNJO21FQUNNOzs7Ozs7QUFFaEMsTUFBTUEsYUFBYUMsYUFBTztJQUN4QkMsWUFBWUMsR0FBRyxFQUFFQyxTQUFTLEVBQUU7UUFDMUIsSUFBSSxDQUFDQyxlQUFlLENBQUNGLEtBQUtDO1FBRTFCLElBQUksQ0FBQ0UseUJBQXlCLENBQUNIO0lBQ2pDO0lBRUFJLGdCQUFnQjtRQUNkLE1BQU1MLGNBQWMsQ0FBQ0MsTUFBUUssc0JBQVUsQ0FBQ04sV0FBVyxDQUFDQztRQUVwRCxPQUFROzBCQUVOLG9CQUFDTSxrQkFBUztnQkFBQ0MsZUFBZUEsc0JBQWE7Z0JBQUVSLGFBQWFBOzswQkFDdEQsb0JBQUNTLG1CQUFtQjtnQkFBQ0QsZUFBZUEsc0JBQWE7Z0JBQUVSLGFBQWFBOztTQUVqRTtJQUNIO0lBRUFVLGFBQWE7UUFDWCxJQUFJLENBQUNDLGFBQWE7SUFDcEI7SUFFQSxPQUFPQyxVQUFVLE1BQU07SUFFdkIsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2pCLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBZS9CLENBQUMifQ==
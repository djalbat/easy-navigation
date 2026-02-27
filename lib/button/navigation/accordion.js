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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class AccordionNavigationButton extends _easy.Button {
    clickHandler = (event, element)=>{
        const { showArticle, Article } = this.properties, { uri } = Article, instantly = true;
        showArticle(uri, instantly);
    };
    isURIArticleURI(uri) {
        const { Article } = this.properties, { path } = Article, uriArticleURI = path.test(uri);
        return uriArticleURI;
    }
    didMount() {
        const { first, last } = this.properties;
        if (first) {
            this.addClass("first");
        }
        if (last) {
            this.addClass("last");
        }
        this.onClick(this.clickHandler, this);
    }
    willUnmount() {
        this.offClick(this.clickHandler, this);
    }
    childElements() {
        const { Article } = this.properties, { title } = Article;
        return title; ///
    }
    static ignoredProperties = [
        "Article"
    ];
    static defaultProperties = {
        className: "accordion-navigation"
    };
}
const _default = (0, _easywithstyle.default)(AccordionNavigationButton)`

  width: 100%;
  height: 100%;
  cursor: pointer;
  border: 1px solid black;
  border-top: none;

  .first {
    border-top: 1px solid black;
  }
  
  :disabled {
    cursor: auto;
    border: none;
    background: none;
    font-weight: bold;
  }

  :disabled:not(.last) {
    border-bottom: 1px solid black;
  }

`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b24vbmF2aWdhdGlvbi9hY2NvcmRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJlYXN5XCI7XG5cbmNsYXNzIEFjY29yZGlvbk5hdmlnYXRpb25CdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBjbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IHNob3dBcnRpY2xlLCBBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgeyB1cmkgfSA9IEFydGljbGUsXG4gICAgICAgICAgaW5zdGFudGx5ID0gdHJ1ZTtcblxuICAgIHNob3dBcnRpY2xlKHVyaSwgaW5zdGFudGx5KTtcbiAgfVxuXG4gIGlzVVJJQXJ0aWNsZVVSSSh1cmkpIHtcbiAgICBjb25zdCB7IEFydGljbGUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB7IHBhdGggfSA9IEFydGljbGUsXG4gICAgICAgICAgdXJpQXJ0aWNsZVVSSSA9IHBhdGgudGVzdCh1cmkpO1xuXG4gICAgcmV0dXJuIHVyaUFydGljbGVVUkk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGZpcnN0LCBsYXN0IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBpZiAoZmlyc3QpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJmaXJzdFwiKTtcbiAgICB9XG5cbiAgICBpZiAobGFzdCkge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImxhc3RcIik7XG4gICAgfVxuXG4gICAgdGhpcy5vbkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IEFydGljbGUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB7IHRpdGxlIH0gPSBBcnRpY2xlO1xuXG4gICAgcmV0dXJuIHRpdGxlOyAvLy9cbiAgfVxuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIkFydGljbGVcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYWNjb3JkaW9uLW5hdmlnYXRpb25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQWNjb3JkaW9uTmF2aWdhdGlvbkJ1dHRvbilgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXRvcDogbm9uZTtcblxuICAuZmlyc3Qge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgfVxuICBcbiAgOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IGF1dG87XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICA6ZGlzYWJsZWQ6bm90KC5sYXN0KSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG5cbmA7XG4iXSwibmFtZXMiOlsiQWNjb3JkaW9uTmF2aWdhdGlvbkJ1dHRvbiIsIkJ1dHRvbiIsImNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInNob3dBcnRpY2xlIiwiQXJ0aWNsZSIsInByb3BlcnRpZXMiLCJ1cmkiLCJpbnN0YW50bHkiLCJpc1VSSUFydGljbGVVUkkiLCJwYXRoIiwidXJpQXJ0aWNsZVVSSSIsInRlc3QiLCJkaWRNb3VudCIsImZpcnN0IiwibGFzdCIsImFkZENsYXNzIiwib25DbGljayIsIndpbGxVbm1vdW50Iiwib2ZmQ2xpY2siLCJjaGlsZEVsZW1lbnRzIiwidGl0bGUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5REE7OztlQUFBOzs7c0VBdkRzQjtzQkFFQzs7Ozs7O0FBRXZCLE1BQU1BLGtDQUFrQ0MsWUFBTTtJQUM1Q0MsZUFBZSxDQUFDQyxPQUFPQztRQUNyQixNQUFNLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDQyxVQUFVLEVBQzFDLEVBQUVDLEdBQUcsRUFBRSxHQUFHRixTQUNWRyxZQUFZO1FBRWxCSixZQUFZRyxLQUFLQztJQUNuQixFQUFDO0lBRURDLGdCQUFnQkYsR0FBRyxFQUFFO1FBQ25CLE1BQU0sRUFBRUYsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDQyxVQUFVLEVBQzdCLEVBQUVJLElBQUksRUFBRSxHQUFHTCxTQUNYTSxnQkFBZ0JELEtBQUtFLElBQUksQ0FBQ0w7UUFFaEMsT0FBT0k7SUFDVDtJQUVBRSxXQUFXO1FBQ1QsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQ1QsVUFBVTtRQUV2QyxJQUFJUSxPQUFPO1lBQ1QsSUFBSSxDQUFDRSxRQUFRLENBQUM7UUFDaEI7UUFFQSxJQUFJRCxNQUFNO1lBQ1IsSUFBSSxDQUFDQyxRQUFRLENBQUM7UUFDaEI7UUFFQSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUNoQixZQUFZLEVBQUUsSUFBSTtJQUN0QztJQUVBaUIsY0FBYztRQUNaLElBQUksQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQ2xCLFlBQVksRUFBRSxJQUFJO0lBQ3ZDO0lBRUFtQixnQkFBZ0I7UUFDZCxNQUFNLEVBQUVmLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQ0MsVUFBVSxFQUM3QixFQUFFZSxLQUFLLEVBQUUsR0FBR2hCO1FBRWxCLE9BQU9nQixPQUFPLEdBQUc7SUFDbkI7SUFFQSxPQUFPQyxvQkFBb0I7UUFDekI7S0FDRCxDQUFDO0lBRUYsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQzFCLDBCQUEwQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCcEQsQ0FBQyJ9
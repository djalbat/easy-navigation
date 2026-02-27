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
const _accordion = /*#__PURE__*/ _interop_require_default(require("./item/accordion"));
const _array = require("./utilities/array");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Accordion extends _easy.Element {
    getItems() {
        const childElements = this.getChildElements(), items = childElements; ///
        return items;
    }
    update(uri, instantly) {
        const items = this.getItems(), article = items.reduce((article, item)=>{
            const itemArticle = item.update(uri, instantly);
            if (itemArticle !== null) {
                article = itemArticle; ///
            }
            return article;
        }, null);
        return article;
    }
    didMount() {
        const items = this.getItems(), instantly = true;
        items.forEach((item)=>item.collapse(instantly));
    }
    willUnmount() {
    ///
    }
    childElements() {
        const { AccordionItem } = this.constructor, { ArticlesArray, showArticle } = this.properties, ArticlesArrayLength = ArticlesArray.length, lastIndex = ArticlesArrayLength - 1, firstIndex = 0, items = ArticlesArray.map((ArticleOrArticles, index)=>{
            const last = index === lastIndex, first = index === firstIndex, Articles = (0, _array.guaranteeArray)(ArticleOrArticles); ///
            return /*#__PURE__*/ React.createElement(AccordionItem, {
                Articles: Articles,
                first: first,
                last: last,
                showArticle: showArticle
            });
        }), childElements = items; ///
        return childElements;
    }
    parentContext() {
        const context = this.getContext(), updateAccordion = this.update.bind(this); ///
        return {
            ...context,
            updateAccordion
        };
    }
    static AccordionItem = _accordion.default;
    static tagName = "ul";
    static defaultProperties = {
        className: "accordion"
    };
}
const _default = (0, _easywithstyle.default)(Accordion)`

  list-style-type: none;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hY2NvcmRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQWNjb3JkaW9uSXRlbSBmcm9tIFwiLi9pdGVtL2FjY29yZGlvblwiO1xuXG5pbXBvcnQgeyBndWFyYW50ZWVBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBBY2NvcmRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0SXRlbXMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGl0ZW1zID0gY2hpbGRFbGVtZW50czsgIC8vL1xuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cbiAgdXBkYXRlKHVyaSwgaW5zdGFudGx5KSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCksXG4gICAgICAgICAgYXJ0aWNsZSA9IGl0ZW1zLnJlZHVjZSgoYXJ0aWNsZSwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUFydGljbGUgPSBpdGVtLnVwZGF0ZSh1cmksIGluc3RhbnRseSk7XG5cbiAgICAgICAgICAgIGlmIChpdGVtQXJ0aWNsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBhcnRpY2xlID0gaXRlbUFydGljbGU7ICAvLy9cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGFydGljbGU7XG4gICAgICAgICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gYXJ0aWNsZTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpLFxuICAgICAgICAgIGluc3RhbnRseSA9IHRydWU7XG5cbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNvbGxhcHNlKGluc3RhbnRseSkpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgQWNjb3JkaW9uSXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICB7IEFydGljbGVzQXJyYXksIHNob3dBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgQXJ0aWNsZXNBcnJheUxlbmd0aCA9IEFydGljbGVzQXJyYXkubGVuZ3RoLFxuICAgICAgICAgIGxhc3RJbmRleCA9IEFydGljbGVzQXJyYXlMZW5ndGggLSAxLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwLFxuICAgICAgICAgIGl0ZW1zID0gQXJ0aWNsZXNBcnJheS5tYXAoKEFydGljbGVPckFydGljbGVzLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFzdCA9IChpbmRleCA9PT0gbGFzdEluZGV4KSxcbiAgICAgICAgICAgICAgICAgIGZpcnN0ID0gKGluZGV4ID09PSBmaXJzdEluZGV4KSxcbiAgICAgICAgICAgICAgICAgIEFydGljbGVzID0gZ3VhcmFudGVlQXJyYXkoQXJ0aWNsZU9yQXJ0aWNsZXMpOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSBBcnRpY2xlcz17QXJ0aWNsZXN9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gc2hvd0FydGljbGU9e3Nob3dBcnRpY2xlfSAvPlxuXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBpdGVtczsgIC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB1cGRhdGVBY2NvcmRpb24gPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIHVwZGF0ZUFjY29yZGlvblxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIEFjY29yZGlvbkl0ZW0gPSBBY2NvcmRpb25JdGVtO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJ1bFwiOyAgLy8vXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJhY2NvcmRpb25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQWNjb3JkaW9uKWBcblxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCJFbGVtZW50IiwiZ2V0SXRlbXMiLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsIml0ZW1zIiwidXBkYXRlIiwidXJpIiwiaW5zdGFudGx5IiwiYXJ0aWNsZSIsInJlZHVjZSIsIml0ZW0iLCJpdGVtQXJ0aWNsZSIsImRpZE1vdW50IiwiZm9yRWFjaCIsImNvbGxhcHNlIiwid2lsbFVubW91bnQiLCJBY2NvcmRpb25JdGVtIiwiQXJ0aWNsZXNBcnJheSIsInNob3dBcnRpY2xlIiwicHJvcGVydGllcyIsIkFydGljbGVzQXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJmaXJzdEluZGV4IiwibWFwIiwiQXJ0aWNsZU9yQXJ0aWNsZXMiLCJpbmRleCIsImxhc3QiLCJmaXJzdCIsIkFydGljbGVzIiwiZ3VhcmFudGVlQXJyYXkiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJ1cGRhdGVBY2NvcmRpb24iLCJiaW5kIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxRkE7OztlQUFBOzs7c0VBbkZzQjtzQkFFRTtrRUFFRTt1QkFFSzs7Ozs7O0FBRS9CLE1BQU1BLGtCQUFrQkMsYUFBTztJQUM3QkMsV0FBVztRQUNULE1BQU1DLGdCQUFnQixJQUFJLENBQUNDLGdCQUFnQixJQUNyQ0MsUUFBUUYsZUFBZ0IsR0FBRztRQUVqQyxPQUFPRTtJQUNUO0lBRUFDLE9BQU9DLEdBQUcsRUFBRUMsU0FBUyxFQUFFO1FBQ3JCLE1BQU1ILFFBQVEsSUFBSSxDQUFDSCxRQUFRLElBQ3JCTyxVQUFVSixNQUFNSyxNQUFNLENBQUMsQ0FBQ0QsU0FBU0U7WUFDL0IsTUFBTUMsY0FBY0QsS0FBS0wsTUFBTSxDQUFDQyxLQUFLQztZQUVyQyxJQUFJSSxnQkFBZ0IsTUFBTTtnQkFDeEJILFVBQVVHLGFBQWMsR0FBRztZQUM3QjtZQUVBLE9BQU9IO1FBQ1QsR0FBRztRQUVULE9BQU9BO0lBQ1Q7SUFFQUksV0FBVztRQUNULE1BQU1SLFFBQVEsSUFBSSxDQUFDSCxRQUFRLElBQ3JCTSxZQUFZO1FBRWxCSCxNQUFNUyxPQUFPLENBQUMsQ0FBQ0gsT0FBU0EsS0FBS0ksUUFBUSxDQUFDUDtJQUN4QztJQUVBUSxjQUFjO0lBQ1osR0FBRztJQUNMO0lBRUFiLGdCQUFnQjtRQUNkLE1BQU0sRUFBRWMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFDcEMsRUFBRUMsYUFBYSxFQUFFQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUNDLFVBQVUsRUFDaERDLHNCQUFzQkgsY0FBY0ksTUFBTSxFQUMxQ0MsWUFBWUYsc0JBQXNCLEdBQ2xDRyxhQUFhLEdBQ2JuQixRQUFRYSxjQUFjTyxHQUFHLENBQUMsQ0FBQ0MsbUJBQW1CQztZQUM1QyxNQUFNQyxPQUFRRCxVQUFVSixXQUNsQk0sUUFBU0YsVUFBVUgsWUFDbkJNLFdBQVdDLElBQUFBLHFCQUFjLEVBQUNMLG9CQUFvQixHQUFHO1lBRXZELHFCQUVFLG9CQUFDVDtnQkFBY2EsVUFBVUE7Z0JBQVVELE9BQU9BO2dCQUFPRCxNQUFNQTtnQkFBTVQsYUFBYUE7O1FBRzlFLElBQ0FoQixnQkFBZ0JFLE9BQVEsR0FBRztRQUVqQyxPQUFPRjtJQUNUO0lBRUE2QixnQkFBZ0I7UUFDZCxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsa0JBQWtCLElBQUksQ0FBQzdCLE1BQU0sQ0FBQzhCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRztRQUVuRCxPQUFRO1lBQ04sR0FBR0gsT0FBTztZQUNWRTtRQUNGO0lBQ0Y7SUFFQSxPQUFPbEIsZ0JBQWdCQSxrQkFBYSxDQUFDO0lBRXJDLE9BQU9vQixVQUFVLEtBQUs7SUFFdEIsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3hDLFVBQVUsQ0FBQzs7OztBQUlwQyxDQUFDIn0=
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
const _accordion = /*#__PURE__*/ _interop_require_default(require("../../item/navigation/accordion"));
const _array = require("../../utilities/array");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class AccordionNavigationList extends _easy.Element {
    getButtons() {
        const maximumDepth = 2, buttonDescendantElements = this.getDescendantElements("button", maximumDepth), buttons = buttonDescendantElements; ///
        return buttons;
    }
    update(uri) {
        const buttons = this.getButtons();
        buttons.forEach((button)=>{
            const uriArticleURI = button.isURIArticleURI(uri);
            if (uriArticleURI) {
                button.disable();
                button.blur();
            } else {
                button.enable();
            }
        });
    }
    childElements() {
        const { AccordionNavigationItem } = this.constructor, { ArticlesArray, showArticle } = this.properties, ArticlesArrayLength = ArticlesArray.length, firstIndex = 0, lastIndex = ArticlesArrayLength - 1, items = ArticlesArray.map((ArticleOrArticles, index)=>{
            const last = index === lastIndex, first = index === firstIndex, Articles = (0, _array.guaranteeArray)(ArticleOrArticles); ///
            return /*#__PURE__*/ React.createElement(AccordionNavigationItem, {
                Articles: Articles,
                first: first,
                last: last,
                showArticle: showArticle
            });
        }), childElements = items; ///
        return childElements;
    }
    parentContext() {
        const updateAccordionNavigation = this.update.bind(this); ///
        return {
            updateAccordionNavigation
        };
    }
    static AccordionNavigationItem = _accordion.default;
    static tagName = "ul";
    static defaultProperties = {
        className: "accordion-navigation"
    };
}
const _default = (0, _easywithstyle.default)(AccordionNavigationList)`

  list-style-type: none;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saXN0L25hdmlnYXRpb24vYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEFjY29yZGlvbk5hdmlnYXRpb25JdGVtIGZyb20gXCIuLi8uLi9pdGVtL25hdmlnYXRpb24vYWNjb3JkaW9uXCI7XG5cbmltcG9ydCB7IGd1YXJhbnRlZUFycmF5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRCdXR0b25zKCkge1xuICAgIGNvbnN0IG1heGltdW1EZXB0aCA9IDIsXG4gICAgICAgICAgYnV0dG9uRGVzY2VuZGFudEVsZW1lbnRzID0gdGhpcy5nZXREZXNjZW5kYW50RWxlbWVudHMoXCJidXR0b25cIiwgbWF4aW11bURlcHRoKSxcbiAgICAgICAgICBidXR0b25zID0gYnV0dG9uRGVzY2VuZGFudEVsZW1lbnRzOyAgLy8vXG5cbiAgICByZXR1cm4gYnV0dG9ucztcbiAgfVxuXG4gIHVwZGF0ZSh1cmkpIHtcbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5nZXRCdXR0b25zKCk7XG5cbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgY29uc3QgdXJpQXJ0aWNsZVVSSSA9IGJ1dHRvbi5pc1VSSUFydGljbGVVUkkodXJpKTtcblxuICAgICAgaWYgKHVyaUFydGljbGVVUkkpIHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGUoKTtcbiAgICAgICAgYnV0dG9uLmJsdXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5lbmFibGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICB7IEFydGljbGVzQXJyYXksIHNob3dBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgQXJ0aWNsZXNBcnJheUxlbmd0aCA9IEFydGljbGVzQXJyYXkubGVuZ3RoLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwLFxuICAgICAgICAgIGxhc3RJbmRleCA9IEFydGljbGVzQXJyYXlMZW5ndGggLSAxLFxuICAgICAgICAgIGl0ZW1zID0gQXJ0aWNsZXNBcnJheS5tYXAoKEFydGljbGVPckFydGljbGVzLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFzdCA9IChpbmRleCA9PT0gbGFzdEluZGV4KSxcbiAgICAgICAgICAgICAgICAgIGZpcnN0ID0gKGluZGV4ID09PSBmaXJzdEluZGV4KSxcbiAgICAgICAgICAgICAgICAgIEFydGljbGVzID0gZ3VhcmFudGVlQXJyYXkoQXJ0aWNsZU9yQXJ0aWNsZXMpOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8QWNjb3JkaW9uTmF2aWdhdGlvbkl0ZW0gQXJ0aWNsZXM9e0FydGljbGVzfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9IHNob3dBcnRpY2xlPXtzaG93QXJ0aWNsZX0gLz5cblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gaXRlbXM7ICAvLy9cblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCB1cGRhdGVBY2NvcmRpb25OYXZpZ2F0aW9uID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICB1cGRhdGVBY2NvcmRpb25OYXZpZ2F0aW9uXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgQWNjb3JkaW9uTmF2aWdhdGlvbkl0ZW0gPSBBY2NvcmRpb25OYXZpZ2F0aW9uSXRlbTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwidWxcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFjY29yZGlvbi1uYXZpZ2F0aW9uXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEFjY29yZGlvbk5hdmlnYXRpb25MaXN0KWBcblxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCIsIkVsZW1lbnQiLCJnZXRCdXR0b25zIiwibWF4aW11bURlcHRoIiwiYnV0dG9uRGVzY2VuZGFudEVsZW1lbnRzIiwiZ2V0RGVzY2VuZGFudEVsZW1lbnRzIiwiYnV0dG9ucyIsInVwZGF0ZSIsInVyaSIsImZvckVhY2giLCJidXR0b24iLCJ1cmlBcnRpY2xlVVJJIiwiaXNVUklBcnRpY2xlVVJJIiwiZGlzYWJsZSIsImJsdXIiLCJlbmFibGUiLCJjaGlsZEVsZW1lbnRzIiwiQWNjb3JkaW9uTmF2aWdhdGlvbkl0ZW0iLCJBcnRpY2xlc0FycmF5Iiwic2hvd0FydGljbGUiLCJwcm9wZXJ0aWVzIiwiQXJ0aWNsZXNBcnJheUxlbmd0aCIsImxlbmd0aCIsImZpcnN0SW5kZXgiLCJsYXN0SW5kZXgiLCJpdGVtcyIsIm1hcCIsIkFydGljbGVPckFydGljbGVzIiwiaW5kZXgiLCJsYXN0IiwiZmlyc3QiLCJBcnRpY2xlcyIsImd1YXJhbnRlZUFycmF5IiwicGFyZW50Q29udGV4dCIsInVwZGF0ZUFjY29yZGlvbk5hdmlnYXRpb24iLCJiaW5kIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5RUE7OztlQUFBOzs7c0VBdkVzQjtzQkFFRTtrRUFFWTt1QkFFTDs7Ozs7O0FBRS9CLE1BQU1BLGdDQUFnQ0MsYUFBTztJQUMzQ0MsYUFBYTtRQUNYLE1BQU1DLGVBQWUsR0FDZkMsMkJBQTJCLElBQUksQ0FBQ0MscUJBQXFCLENBQUMsVUFBVUYsZUFDaEVHLFVBQVVGLDBCQUEyQixHQUFHO1FBRTlDLE9BQU9FO0lBQ1Q7SUFFQUMsT0FBT0MsR0FBRyxFQUFFO1FBQ1YsTUFBTUYsVUFBVSxJQUFJLENBQUNKLFVBQVU7UUFFL0JJLFFBQVFHLE9BQU8sQ0FBQyxDQUFDQztZQUNmLE1BQU1DLGdCQUFnQkQsT0FBT0UsZUFBZSxDQUFDSjtZQUU3QyxJQUFJRyxlQUFlO2dCQUNqQkQsT0FBT0csT0FBTztnQkFDZEgsT0FBT0ksSUFBSTtZQUNiLE9BQU87Z0JBQ0xKLE9BQU9LLE1BQU07WUFDZjtRQUNGO0lBQ0Y7SUFFQUMsZ0JBQWdCO1FBQ2QsTUFBTSxFQUFFQyx1QkFBdUIsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQzlDLEVBQUVDLGFBQWEsRUFBRUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDQyxVQUFVLEVBQ2hEQyxzQkFBc0JILGNBQWNJLE1BQU0sRUFDMUNDLGFBQWEsR0FDYkMsWUFBWUgsc0JBQXNCLEdBQ2xDSSxRQUFRUCxjQUFjUSxHQUFHLENBQUMsQ0FBQ0MsbUJBQW1CQztZQUM1QyxNQUFNQyxPQUFRRCxVQUFVSixXQUNsQk0sUUFBU0YsVUFBVUwsWUFDbkJRLFdBQVdDLElBQUFBLHFCQUFjLEVBQUNMLG9CQUFvQixHQUFHO1lBRXZELHFCQUVFLG9CQUFDVjtnQkFBd0JjLFVBQVVBO2dCQUFVRCxPQUFPQTtnQkFBT0QsTUFBTUE7Z0JBQU1WLGFBQWFBOztRQUd4RixJQUNBSCxnQkFBZ0JTLE9BQVEsR0FBRztRQUVqQyxPQUFPVDtJQUNUO0lBRUFpQixnQkFBZ0I7UUFDZCxNQUFNQyw0QkFBNEIsSUFBSSxDQUFDM0IsTUFBTSxDQUFDNEIsSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO1FBRTlELE9BQVE7WUFDTkQ7UUFDRjtJQUNGO0lBRUEsT0FBT2pCLDBCQUEwQkEsa0JBQXVCLENBQUM7SUFFekQsT0FBT21CLFVBQVUsS0FBSztJQUV0QixPQUFPQyxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0FBQ0o7TUFFQSxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDdkMsd0JBQXdCLENBQUM7Ozs7QUFJbEQsQ0FBQyJ9
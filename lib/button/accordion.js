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
class AccordionButton extends _easy.Button {
    clickHandler = (event, element)=>{
        const { showArticle, Article } = this.properties, { uri } = Article;
        showArticle(uri);
    };
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
        return title;
    }
    parentContext() {
        const blurButton = this.blur.bind(this), enableButton = this.enable.bind(this), disableButton = this.disable.bind(this), isButtonDisplayed = this.isDisplayed.bind(this); ///
        return {
            blurButton,
            enableButton,
            disableButton,
            isButtonDisplayed
        };
    }
    static ignoredProperties = [
        "Article"
    ];
    static defaultProperties = {
        className: "accordion"
    };
}
const _default = (0, _easywithstyle.default)(AccordionButton)`

  width: 100%;
  height: 4rem;
  cursor: pointer;
  border-top: 1px solid black; 

  .first {
    border-top: none;
  }

  :disabled {
    cursor: auto;
    background: none;
    font-weight: bold;
  }

`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vYWNjb3JkaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5jbGFzcyBBY2NvcmRpb25CdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBjbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IHNob3dBcnRpY2xlLCBBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgeyB1cmkgfSA9IEFydGljbGU7XG5cbiAgICBzaG93QXJ0aWNsZSh1cmkpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmaXJzdCwgbGFzdCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGZpcnN0KSB7XG4gICAgICB0aGlzLmFkZENsYXNzKFwiZmlyc3RcIik7XG4gICAgfVxuXG4gICAgaWYgKGxhc3QpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJsYXN0XCIpO1xuICAgIH1cblxuICAgIHRoaXMub25DbGljayh0aGlzLmNsaWNrSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgeyB0aXRsZSB9ID0gQXJ0aWNsZTtcblxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgYmx1ckJ1dHRvbiA9IHRoaXMuYmx1ci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZW5hYmxlQnV0dG9uID0gdGhpcy5lbmFibGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGRpc2FibGVCdXR0b24gPSB0aGlzLmRpc2FibGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGlzQnV0dG9uRGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZC5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGJsdXJCdXR0b24sXG4gICAgICBlbmFibGVCdXR0b24sXG4gICAgICBkaXNhYmxlQnV0dG9uLFxuICAgICAgaXNCdXR0b25EaXNwbGF5ZWRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIkFydGljbGVcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYWNjb3JkaW9uXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEFjY29yZGlvbkJ1dHRvbilgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7IFxuXG4gIC5maXJzdCB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgfVxuXG4gIDpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuYDtcbiJdLCJuYW1lcyI6WyJBY2NvcmRpb25CdXR0b24iLCJCdXR0b24iLCJjbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJzaG93QXJ0aWNsZSIsIkFydGljbGUiLCJwcm9wZXJ0aWVzIiwidXJpIiwiZGlkTW91bnQiLCJmaXJzdCIsImxhc3QiLCJhZGRDbGFzcyIsIm9uQ2xpY2siLCJ3aWxsVW5tb3VudCIsIm9mZkNsaWNrIiwiY2hpbGRFbGVtZW50cyIsInRpdGxlIiwicGFyZW50Q29udGV4dCIsImJsdXJCdXR0b24iLCJibHVyIiwiYmluZCIsImVuYWJsZUJ1dHRvbiIsImVuYWJsZSIsImRpc2FibGVCdXR0b24iLCJkaXNhYmxlIiwiaXNCdXR0b25EaXNwbGF5ZWQiLCJpc0Rpc3BsYXllZCIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThEQTs7O2VBQUE7OztzRUE1RHNCO3NCQUVDOzs7Ozs7QUFFdkIsTUFBTUEsd0JBQXdCQyxZQUFNO0lBQ2xDQyxlQUFlLENBQUNDLE9BQU9DO1FBQ3JCLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUNDLFVBQVUsRUFDMUMsRUFBRUMsR0FBRyxFQUFFLEdBQUdGO1FBRWhCRCxZQUFZRztJQUNkLEVBQUM7SUFFREMsV0FBVztRQUNULE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUNKLFVBQVU7UUFFdkMsSUFBSUcsT0FBTztZQUNULElBQUksQ0FBQ0UsUUFBUSxDQUFDO1FBQ2hCO1FBRUEsSUFBSUQsTUFBTTtZQUNSLElBQUksQ0FBQ0MsUUFBUSxDQUFDO1FBQ2hCO1FBRUEsSUFBSSxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDWCxZQUFZLEVBQUUsSUFBSTtJQUN0QztJQUVBWSxjQUFjO1FBQ1osSUFBSSxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDYixZQUFZLEVBQUUsSUFBSTtJQUN2QztJQUVBYyxnQkFBZ0I7UUFDZCxNQUFNLEVBQUVWLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQ0MsVUFBVSxFQUM3QixFQUFFVSxLQUFLLEVBQUUsR0FBR1g7UUFFbEIsT0FBT1c7SUFDVDtJQUVBQyxnQkFBZ0I7UUFDZCxNQUFNQyxhQUFhLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUNoQ0MsZUFBZSxJQUFJLENBQUNDLE1BQU0sQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FDcENHLGdCQUFnQixJQUFJLENBQUNDLE9BQU8sQ0FBQ0osSUFBSSxDQUFDLElBQUksR0FDdENLLG9CQUFvQixJQUFJLENBQUNDLFdBQVcsQ0FBQ04sSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO1FBRTNELE9BQVE7WUFDTkY7WUFDQUc7WUFDQUU7WUFDQUU7UUFDRjtJQUNGO0lBRUEsT0FBT0Usb0JBQW9CO1FBQ3pCO0tBQ0QsQ0FBQztJQUVGLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUMvQixnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQjFDLENBQUMifQ==
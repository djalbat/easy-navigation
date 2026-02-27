"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AccordionNavigation;
    }
});
const _easy = require("easy");
const _accordion = /*#__PURE__*/ _interop_require_default(require("../list/navigation/accordion"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class AccordionNavigation extends _easy.Element {
    childElements() {
        const { AccordionNavigationList } = this.constructor, { ArticlesArray, showArticle } = this.properties;
        return /*#__PURE__*/ React.createElement(AccordionNavigationList, {
            ArticlesArray: ArticlesArray,
            showArticle: showArticle
        });
    }
    static AccordionNavigationList = _accordion.default;
    static tagName = "nav";
    static defaultProperties = {
        className: "accordion"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9uYXZpZ2F0aW9uL2FjY29yZGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCBmcm9tIFwiLi4vbGlzdC9uYXZpZ2F0aW9uL2FjY29yZGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvcmRpb25OYXZpZ2F0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICB7IEFydGljbGVzQXJyYXksIHNob3dBcnRpY2xlIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8QWNjb3JkaW9uTmF2aWdhdGlvbkxpc3QgQXJ0aWNsZXNBcnJheT17QXJ0aWNsZXNBcnJheX0gc2hvd0FydGljbGU9e3Nob3dBcnRpY2xlfSAvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBBY2NvcmRpb25OYXZpZ2F0aW9uTGlzdCA9IEFjY29yZGlvbk5hdmlnYXRpb25MaXN0O1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJuYXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFjY29yZGlvblwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQWNjb3JkaW9uTmF2aWdhdGlvbiIsIkVsZW1lbnQiLCJjaGlsZEVsZW1lbnRzIiwiQWNjb3JkaW9uTmF2aWdhdGlvbkxpc3QiLCJBcnRpY2xlc0FycmF5Iiwic2hvd0FydGljbGUiLCJwcm9wZXJ0aWVzIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O3NCQUpHO2tFQUVZOzs7Ozs7QUFFckIsTUFBTUEsNEJBQTRCQyxhQUFPO0lBQ3REQyxnQkFBZ0I7UUFDZCxNQUFNLEVBQUVDLHVCQUF1QixFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFDOUMsRUFBRUMsYUFBYSxFQUFFQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUNDLFVBQVU7UUFFdEQscUJBRUUsb0JBQUNIO1lBQXdCQyxlQUFlQTtZQUFlQyxhQUFhQTs7SUFHeEU7SUFFQSxPQUFPRiwwQkFBMEJBLGtCQUF1QixDQUFDO0lBRXpELE9BQU9JLFVBQVUsTUFBTTtJQUV2QixPQUFPQyxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0FBQ0oifQ==
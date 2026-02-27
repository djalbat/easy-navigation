"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HeadingsArticle;
    }
});
const _article = /*#__PURE__*/ _interop_require_default(require("../article"));
const _uris = require("../uris");
const _paths = require("../paths");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class HeadingsArticle extends _article.default {
    childElements() {
        return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h1", null, "Headings"));
    }
    static uri = _uris.headingsURI;
    static path = _paths.headingsPath;
    static title = "Headings";
    static defaultProperties = {
        className: "headings"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUvaGVhZGluZ3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBcnRpY2xlIGZyb20gXCIuLi9hcnRpY2xlXCI7XG5cbmltcG9ydCB7IGhlYWRpbmdzVVJJIH0gZnJvbSBcIi4uL3VyaXNcIjtcbmltcG9ydCB7IGhlYWRpbmdzUGF0aCB9IGZyb20gXCIuLi9wYXRoc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkaW5nc0FydGljbGUgZXh0ZW5kcyBBcnRpY2xlIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+XG4gICAgICAgICAgSGVhZGluZ3NcbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB1cmkgPSBoZWFkaW5nc1VSSTtcblxuICBzdGF0aWMgcGF0aCA9IGhlYWRpbmdzUGF0aDtcblxuICBzdGF0aWMgdGl0bGUgPSBcIkhlYWRpbmdzXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJoZWFkaW5nc1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiSGVhZGluZ3NBcnRpY2xlIiwiQXJ0aWNsZSIsImNoaWxkRWxlbWVudHMiLCJkaXYiLCJoMSIsInVyaSIsImhlYWRpbmdzVVJJIiwicGF0aCIsImhlYWRpbmdzUGF0aCIsInRpdGxlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7Z0VBTEQ7c0JBRVE7dUJBQ0M7Ozs7OztBQUVkLE1BQU1BLHdCQUF3QkMsZ0JBQU87SUFDbERDLGdCQUFnQjtRQUNkLHFCQUVFLG9CQUFDQywyQkFDQyxvQkFBQ0MsWUFBRztJQU1WO0lBRUEsT0FBT0MsTUFBTUMsaUJBQVcsQ0FBQztJQUV6QixPQUFPQyxPQUFPQyxtQkFBWSxDQUFDO0lBRTNCLE9BQU9DLFFBQVEsV0FBVztJQUUxQixPQUFPQyxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0FBQ0oifQ==
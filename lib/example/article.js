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
class Article extends _easy.Element {
    static tagName = "article";
}
const _default = (0, _easywithstyle.default)(Article)`

  padding: 2rem;
  
  :not(:first-of-type) {

    border-top: 1px solid black;
    
  }

  @media (min-width: 800px) {
  
    padding: 0;
    
    :not(:first-of-type) {
  
      border-top: none;
      
    }
  
  }
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2FydGljbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5jbGFzcyBBcnRpY2xlIGV4dGVuZHMgRWxlbWVudCB7XG4gIHN0YXRpYyB0YWdOYW1lID0gXCJhcnRpY2xlXCI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShBcnRpY2xlKWBcblxuICBwYWRkaW5nOiAycmVtO1xuICBcbiAgOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xuXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICAgIFxuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gIFxuICAgIHBhZGRpbmc6IDA7XG4gICAgXG4gICAgOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xuICBcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICBcbiAgICB9XG4gIFxuICB9XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJBcnRpY2xlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O3NFQVJzQjtzQkFFRTs7Ozs7O0FBRXhCLE1BQU1BLGdCQUFnQkMsYUFBTztJQUMzQixPQUFPQyxVQUFVLFVBQVU7QUFDN0I7TUFFQSxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDSCxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQmxDLENBQUMifQ==
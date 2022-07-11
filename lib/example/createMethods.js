"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createMethods;
    }
});
function createMethods(scheduler, model, view) {
    var showArticle = function showArticle(uri) {
        var instantly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, updateHistory = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        if (updateHistory) {
            history.pushState(null, null, uri);
        }
        view.showArticle(uri, instantly);
    };
    return {
        showArticle: showArticle
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2NyZWF0ZU1ldGhvZHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1ldGhvZHMoc2NoZWR1bGVyLCBtb2RlbCwgdmlldykge1xuICBmdW5jdGlvbiBzaG93QXJ0aWNsZSh1cmksIGluc3RhbnRseSA9IGZhbHNlLCB1cGRhdGVIaXN0b3J5ID0gdHJ1ZSkge1xuICAgIGlmICh1cGRhdGVIaXN0b3J5KSB7XG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB1cmkpO1xuICAgIH1cblxuICAgIHZpZXcuc2hvd0FydGljbGUodXJpLCBpbnN0YW50bHkpO1xuICB9XG5cbiAgcmV0dXJuICh7XG4gICAgc2hvd0FydGljbGVcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlTWV0aG9kcyIsInNjaGVkdWxlciIsIm1vZGVsIiwidmlldyIsInNob3dBcnRpY2xlIiwidXJpIiwiaW5zdGFudGx5IiwidXBkYXRlSGlzdG9yeSIsImhpc3RvcnkiLCJwdXNoU3RhdGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFFYixTQVlDOzs7ZUFadUJBLGFBQWE7OztBQUF0QixTQUFTQSxhQUFhLENBQUNDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUU7UUFDbkRDLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxDQUFDQyxHQUFHLEVBQTJDO1lBQXpDQyxTQUFTLEdBQVRBLCtDQUFpQixrQkFBTCxLQUFLLEVBQUVDLGFBQWEsR0FBYkEsK0NBQW9CLGtCQUFKLElBQUk7UUFDL0QsSUFBSUEsYUFBYSxFQUFFO1lBQ2pCQyxPQUFPLENBQUNDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFSixHQUFHLENBQUMsQ0FBQztTQUNwQztRQUVERixJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFQyxTQUFTLENBQUMsQ0FBQztLQUNsQztJQUVELE9BQVE7UUFDTkYsV0FBVyxFQUFYQSxXQUFXO0tBQ1osQ0FBRTtDQUNKIn0=
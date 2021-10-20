"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createMethods;
function createMethods(scheduler, model, view) {
    var showArticle = function showArticle(uri, param, param1) {
        var instantly = param === void 0 ? false : param, updateHistory = param1 === void 0 ? true : param1;
        if (updateHistory) {
            history.pushState(null, null, uri);
        }
        view.showArticle(uri, instantly);
    };
    return {
        showArticle: showArticle
    };
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2NyZWF0ZU1ldGhvZHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1ldGhvZHMoc2NoZWR1bGVyLCBtb2RlbCwgdmlldykge1xuICBmdW5jdGlvbiBzaG93QXJ0aWNsZSh1cmksIGluc3RhbnRseSA9IGZhbHNlLCB1cGRhdGVIaXN0b3J5ID0gdHJ1ZSkge1xuICAgIGlmICh1cGRhdGVIaXN0b3J5KSB7XG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB1cmkpO1xuICAgIH1cblxuICAgIHZpZXcuc2hvd0FydGljbGUodXJpLCBpbnN0YW50bHkpO1xuICB9XG5cbiAgcmV0dXJuICh7XG4gICAgc2hvd0FydGljbGVcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlTWV0aG9kcyIsInNjaGVkdWxlciIsIm1vZGVsIiwidmlldyIsInNob3dBcnRpY2xlIiwidXJpIiwiaW5zdGFudGx5IiwidXBkYXRlSGlzdG9yeSIsImhpc3RvcnkiLCJwdXNoU3RhdGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7a0JBRVlBLGFBQWE7U0FBYkEsYUFBYSxDQUFDQyxTQUFTLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFLENBQUM7UUFDcERDLFdBQVcsR0FBcEIsUUFBUSxDQUFDQSxXQUFXLENBQUNDLEdBQUcsRUFBRUMsS0FBaUIsRUFBRUMsTUFBb0IsRUFBRSxDQUFDO1lBQTFDRCxTQUFTLEdBQVRBLEtBQWlCLGNBQUwsS0FBSyxHQUFqQkEsS0FBaUIsRUFBRUMsYUFBYSxHQUFiQSxNQUFvQixjQUFKLElBQUksR0FBcEJBLE1BQW9CO1FBQy9ELEVBQUUsRUFBRUEsYUFBYSxFQUFFLENBQUM7WUFDbEJDLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUVKLEdBQUc7UUFDbkMsQ0FBQztRQUVERixJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFQyxTQUFTO0lBQ2pDLENBQUM7SUFFRCxNQUFNLENBQUUsQ0FBQztRQUNQRixXQUFXLEVBQVhBLFdBQVc7SUFDYixDQUFDO0FBQ0gsQ0FBQyJ9
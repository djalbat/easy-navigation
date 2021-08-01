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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2NyZWF0ZU1ldGhvZHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1ldGhvZHMoc2NoZWR1bGVyLCBtb2RlbCwgdmlldykge1xuICBmdW5jdGlvbiBzaG93QXJ0aWNsZSh1cmksIGluc3RhbnRseSA9IGZhbHNlLCB1cGRhdGVIaXN0b3J5ID0gdHJ1ZSkge1xuICAgIGlmICh1cGRhdGVIaXN0b3J5KSB7XG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB1cmkpO1xuICAgIH1cblxuICAgIHZpZXcuc2hvd0FydGljbGUodXJpLCBpbnN0YW50bHkpO1xuICB9XG5cbiAgcmV0dXJuICh7XG4gICAgc2hvd0FydGljbGVcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztrQkFFWSxhQUFhO1NBQWIsYUFBYSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDcEQsV0FBVyxZQUFYLFdBQVcsQ0FBQyxHQUFHLEVBQUUsS0FBaUIsRUFBRSxNQUFvQixFQUFFLENBQUM7WUFBMUMsU0FBUyxHQUFULEtBQWlCLGNBQUwsS0FBSyxHQUFqQixLQUFpQixFQUFFLGFBQWEsR0FBYixNQUFvQixjQUFKLElBQUksR0FBcEIsTUFBb0I7UUFDL0QsRUFBRSxFQUFFLGFBQWEsRUFBRSxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHO1FBQ25DLENBQUM7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxTQUFTO0lBQ2pDLENBQUM7O1FBR0MsV0FBVyxFQUFYLFdBQVc7O0FBRWYsQ0FBQyJ9
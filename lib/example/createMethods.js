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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2NyZWF0ZU1ldGhvZHMuanMiXSwibmFtZXMiOlsiY3JlYXRlTWV0aG9kcyIsInNjaGVkdWxlciIsIm1vZGVsIiwidmlldyIsInNob3dBcnRpY2xlIiwidXJpIiwiaW5zdGFudGx5IiwidXBkYXRlSGlzdG9yeSIsImhpc3RvcnkiLCJwdXNoU3RhdGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7a0JBRVksYUFBYTtTQUFiLGFBQWEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3BELFdBQVcsR0FBcEIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsS0FBaUIsRUFBRSxNQUFvQixFQUFFLENBQUM7WUFBMUMsU0FBUyxHQUFULEtBQWlCLGNBQUwsS0FBSyxHQUFqQixLQUFpQixFQUFFLGFBQWEsR0FBYixNQUFvQixjQUFKLElBQUksR0FBcEIsTUFBb0I7UUFDL0QsRUFBRSxFQUFFLGFBQWEsRUFBRSxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHO1FBQ25DLENBQUM7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxTQUFTO0lBQ2pDLENBQUM7SUFFRCxNQUFNLENBQUUsQ0FBQztRQUNQLFdBQVcsRUFBWCxXQUFXO0lBQ2IsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWV0aG9kcyhzY2hlZHVsZXIsIG1vZGVsLCB2aWV3KSB7XG4gIGZ1bmN0aW9uIHNob3dBcnRpY2xlKHVyaSwgaW5zdGFudGx5ID0gZmFsc2UsIHVwZGF0ZUhpc3RvcnkgPSB0cnVlKSB7XG4gICAgaWYgKHVwZGF0ZUhpc3RvcnkpIHtcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIHVyaSk7XG4gICAgfVxuXG4gICAgdmlldy5zaG93QXJ0aWNsZSh1cmksIGluc3RhbnRseSk7XG4gIH1cblxuICByZXR1cm4gKHtcbiAgICBzaG93QXJ0aWNsZVxuICB9KTtcbn1cbiJdfQ==
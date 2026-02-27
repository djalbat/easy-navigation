"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AccordionItem;
    }
});
const _easy = require("easy");
const _accordion = /*#__PURE__*/ _interop_require_default(require("../div/accordion"));
const _accordion1 = /*#__PURE__*/ _interop_require_default(require("../button/accordion"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class AccordionItem extends _easy.Element {
    getArticles() {
        const maximumDepth = 2, descendantArticleElements = this.getDescendantElements("article", maximumDepth), articles = descendantArticleElements; ///
        return articles;
    }
    getArticleIndex(uri) {
        const { Articles } = this.properties, articleIndex = Articles.findIndex((Article)=>{
            const { path } = Article, uriArticleURI = path.test(uri);
            if (uriArticleURI) {
                return true;
            }
        });
        return articleIndex;
    }
    getInitialHeight(collapsed) {
        let initialHeight;
        if (collapsed) {
            initialHeight = 0;
        } else {
            const divHeight = this.getDivHeight();
            initialHeight = divHeight; ///
        }
        return initialHeight;
    }
    isArticlePresent(uri) {
        const articleIndex = this.getArticleIndex(uri), articlePresent = articleIndex !== -1;
        return articlePresent;
    }
    update(uri, instantly) {
        let article = null;
        const buttonDisplayed = this.isButtonDisplayed();
        if (!buttonDisplayed) {
            instantly = true;
        }
        const collapsed = this.isCollapsed(), articlePresent = this.isArticlePresent(uri);
        if (!articlePresent) {
            if (!collapsed) {
                this.collapse(instantly);
            }
        } else {
            const articles = this.getArticles(), articleIndex = this.getArticleIndex(uri), initialHeight = this.getInitialHeight(collapsed);
            articles.forEach((article, index)=>{
                index === articleIndex ? article.show() : article.hide();
            });
            this.disable(uri);
            this.expand(initialHeight, instantly);
            article = articles[articleIndex];
        }
        return article;
    }
    enable() {
        this.enableButton();
    }
    disable(uri) {
        const articleIndex = this.getArticleIndex(uri), articleFirstArticle = articleIndex === 0;
        if (articleFirstArticle) {
            this.disableButton();
            this.blurButton();
        } else {
            this.enableButton();
        }
    }
    expand(initialHeight, instantly) {
        this.expandDiv(initialHeight, instantly);
    }
    collapse(instantly) {
        this.collapseDiv(instantly, ()=>this.enable());
    }
    childElements() {
        const { AccordionDiv, AccordionButton } = this.constructor, { Articles, first, last, showArticle } = this.properties, [Article] = Articles, articles = Articles.map((Article, index)=>/*#__PURE__*/ React.createElement(Article, {
                index: index
            }));
        return [
            /*#__PURE__*/ React.createElement(AccordionButton, {
                Article: Article,
                first: first,
                last: last,
                showArticle: showArticle
            }),
            /*#__PURE__*/ React.createElement(AccordionDiv, null, articles)
        ];
    }
    initialise() {
        this.assignContext([
            "getDivHeight",
            "resizeDiv",
            "expandDiv",
            "isCollapsed",
            "collapseDiv",
            "blurButton",
            "enableButton",
            "disableButton",
            "activateButton",
            "deactivateButton",
            "isButtonDisplayed"
        ]);
    }
    static AccordionDiv = _accordion.default;
    static AccordionButton = _accordion1.default;
    static tagName = "li";
    static defaultProperties = {
        className: "accordion"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVtL2FjY29yZGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBBY2NvcmRpb25EaXYgZnJvbSBcIi4uL2Rpdi9hY2NvcmRpb25cIjtcbmltcG9ydCBBY2NvcmRpb25CdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9hY2NvcmRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uSXRlbSBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRBcnRpY2xlcygpIHtcbiAgICBjb25zdCBtYXhpbXVtRGVwdGggPSAyLFxuICAgICAgICAgIGRlc2NlbmRhbnRBcnRpY2xlRWxlbWVudHMgPSB0aGlzLmdldERlc2NlbmRhbnRFbGVtZW50cyhcImFydGljbGVcIiwgbWF4aW11bURlcHRoKSxcbiAgICAgICAgICBhcnRpY2xlcyA9IGRlc2NlbmRhbnRBcnRpY2xlRWxlbWVudHM7IC8vL1xuXG4gICAgcmV0dXJuIGFydGljbGVzO1xuICB9XG5cbiAgZ2V0QXJ0aWNsZUluZGV4KHVyaSkge1xuICAgIGNvbnN0IHsgQXJ0aWNsZXMgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBhcnRpY2xlSW5kZXggPSBBcnRpY2xlcy5maW5kSW5kZXgoKEFydGljbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aCB9ID0gQXJ0aWNsZSxcbiAgICAgICAgICAgICAgICAgIHVyaUFydGljbGVVUkkgPSBwYXRoLnRlc3QodXJpKTtcblxuICAgICAgICAgICAgaWYgKHVyaUFydGljbGVVUkkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gYXJ0aWNsZUluZGV4O1xuICB9XG5cbiAgZ2V0SW5pdGlhbEhlaWdodChjb2xsYXBzZWQpIHtcbiAgICBsZXQgaW5pdGlhbEhlaWdodDtcblxuICAgIGlmIChjb2xsYXBzZWQpIHtcbiAgICAgIGluaXRpYWxIZWlnaHQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaXZIZWlnaHQgPSB0aGlzLmdldERpdkhlaWdodCgpO1xuXG4gICAgICBpbml0aWFsSGVpZ2h0ID0gZGl2SGVpZ2h0OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGluaXRpYWxIZWlnaHQ7XG4gIH1cblxuICBpc0FydGljbGVQcmVzZW50KHVyaSkge1xuICAgIGNvbnN0IGFydGljbGVJbmRleCA9IHRoaXMuZ2V0QXJ0aWNsZUluZGV4KHVyaSksXG4gICAgICAgICAgYXJ0aWNsZVByZXNlbnQgPSAoYXJ0aWNsZUluZGV4ICE9PSAtMSk7XG5cbiAgICByZXR1cm4gYXJ0aWNsZVByZXNlbnQ7XG4gIH1cblxuICB1cGRhdGUodXJpLCBpbnN0YW50bHkpIHtcbiAgICBsZXQgYXJ0aWNsZSA9IG51bGw7XG5cbiAgICBjb25zdCBidXR0b25EaXNwbGF5ZWQgPSB0aGlzLmlzQnV0dG9uRGlzcGxheWVkKCk7XG5cbiAgICBpZiAoIWJ1dHRvbkRpc3BsYXllZCkge1xuICAgICAgaW5zdGFudGx5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCksXG4gICAgICAgICAgYXJ0aWNsZVByZXNlbnQgPSB0aGlzLmlzQXJ0aWNsZVByZXNlbnQodXJpKTtcblxuICAgIGlmICghYXJ0aWNsZVByZXNlbnQpIHtcbiAgICAgIGlmICghY29sbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuY29sbGFwc2UoaW5zdGFudGx5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYXJ0aWNsZXMgPSB0aGlzLmdldEFydGljbGVzKCksXG4gICAgICAgICAgICBhcnRpY2xlSW5kZXggPSB0aGlzLmdldEFydGljbGVJbmRleCh1cmkpLFxuICAgICAgICAgICAgaW5pdGlhbEhlaWdodCA9IHRoaXMuZ2V0SW5pdGlhbEhlaWdodChjb2xsYXBzZWQpO1xuXG4gICAgICBhcnRpY2xlcy5mb3JFYWNoKChhcnRpY2xlLCBpbmRleCkgPT4ge1xuICAgICAgICAoaW5kZXggPT09IGFydGljbGVJbmRleCkgP1xuICAgICAgICAgIGFydGljbGUuc2hvdygpIDpcbiAgICAgICAgICAgIGFydGljbGUuaGlkZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGlzYWJsZSh1cmkpO1xuXG4gICAgICB0aGlzLmV4cGFuZChpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpO1xuXG4gICAgICBhcnRpY2xlID0gYXJ0aWNsZXNbYXJ0aWNsZUluZGV4XTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJ0aWNsZTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmVuYWJsZUJ1dHRvbigpO1xuICB9XG5cbiAgZGlzYWJsZSh1cmkpIHtcbiAgICBjb25zdCBhcnRpY2xlSW5kZXggPSB0aGlzLmdldEFydGljbGVJbmRleCh1cmkpLFxuICAgICAgICAgIGFydGljbGVGaXJzdEFydGljbGUgPSAoYXJ0aWNsZUluZGV4ID09PSAwKTtcblxuICAgIGlmIChhcnRpY2xlRmlyc3RBcnRpY2xlKSB7XG4gICAgICB0aGlzLmRpc2FibGVCdXR0b24oKTtcbiAgICAgIHRoaXMuYmx1ckJ1dHRvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuYWJsZUJ1dHRvbigpO1xuICAgIH1cbiAgfVxuXG4gIGV4cGFuZChpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpIHtcbiAgICB0aGlzLmV4cGFuZERpdihpbml0aWFsSGVpZ2h0LCBpbnN0YW50bHkpO1xuICB9XG5cbiAgY29sbGFwc2UoaW5zdGFudGx5KSB7XG4gICAgdGhpcy5jb2xsYXBzZURpdihpbnN0YW50bHksICgpID0+IHRoaXMuZW5hYmxlKCkpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IEFjY29yZGlvbkRpdiwgQWNjb3JkaW9uQnV0dG9uIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHsgQXJ0aWNsZXMsIGZpcnN0LCBsYXN0LCBzaG93QXJ0aWNsZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIFsgQXJ0aWNsZSBdID0gQXJ0aWNsZXMsXG4gICAgICAgICAgYXJ0aWNsZXMgPSBBcnRpY2xlcy5tYXAoKEFydGljbGUsIGluZGV4KSA9PlxuXG4gICAgICAgICAgICA8QXJ0aWNsZSBpbmRleD17aW5kZXh9IC8+XG5cbiAgICAgICAgICApO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxBY2NvcmRpb25CdXR0b24gQXJ0aWNsZT17QXJ0aWNsZX0gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fSBzaG93QXJ0aWNsZT17c2hvd0FydGljbGV9IC8+LFxuICAgICAgPEFjY29yZGlvbkRpdj5cbiAgICAgICAge2FydGljbGVzfVxuICAgICAgPC9BY2NvcmRpb25EaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KFtcbiAgICAgIFwiZ2V0RGl2SGVpZ2h0XCIsXG4gICAgICBcInJlc2l6ZURpdlwiLFxuICAgICAgXCJleHBhbmREaXZcIixcbiAgICAgIFwiaXNDb2xsYXBzZWRcIixcbiAgICAgIFwiY29sbGFwc2VEaXZcIixcbiAgICAgIFwiYmx1ckJ1dHRvblwiLFxuICAgICAgXCJlbmFibGVCdXR0b25cIixcbiAgICAgIFwiZGlzYWJsZUJ1dHRvblwiLFxuICAgICAgXCJhY3RpdmF0ZUJ1dHRvblwiLFxuICAgICAgXCJkZWFjdGl2YXRlQnV0dG9uXCIsXG4gICAgICBcImlzQnV0dG9uRGlzcGxheWVkXCJcbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBBY2NvcmRpb25EaXYgPSBBY2NvcmRpb25EaXY7XG5cbiAgc3RhdGljIEFjY29yZGlvbkJ1dHRvbiA9IEFjY29yZGlvbkJ1dHRvbjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwibGlcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFjY29yZGlvblwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQWNjb3JkaW9uSXRlbSIsIkVsZW1lbnQiLCJnZXRBcnRpY2xlcyIsIm1heGltdW1EZXB0aCIsImRlc2NlbmRhbnRBcnRpY2xlRWxlbWVudHMiLCJnZXREZXNjZW5kYW50RWxlbWVudHMiLCJhcnRpY2xlcyIsImdldEFydGljbGVJbmRleCIsInVyaSIsIkFydGljbGVzIiwicHJvcGVydGllcyIsImFydGljbGVJbmRleCIsImZpbmRJbmRleCIsIkFydGljbGUiLCJwYXRoIiwidXJpQXJ0aWNsZVVSSSIsInRlc3QiLCJnZXRJbml0aWFsSGVpZ2h0IiwiY29sbGFwc2VkIiwiaW5pdGlhbEhlaWdodCIsImRpdkhlaWdodCIsImdldERpdkhlaWdodCIsImlzQXJ0aWNsZVByZXNlbnQiLCJhcnRpY2xlUHJlc2VudCIsInVwZGF0ZSIsImluc3RhbnRseSIsImFydGljbGUiLCJidXR0b25EaXNwbGF5ZWQiLCJpc0J1dHRvbkRpc3BsYXllZCIsImlzQ29sbGFwc2VkIiwiY29sbGFwc2UiLCJmb3JFYWNoIiwiaW5kZXgiLCJzaG93IiwiaGlkZSIsImRpc2FibGUiLCJleHBhbmQiLCJlbmFibGUiLCJlbmFibGVCdXR0b24iLCJhcnRpY2xlRmlyc3RBcnRpY2xlIiwiZGlzYWJsZUJ1dHRvbiIsImJsdXJCdXR0b24iLCJleHBhbmREaXYiLCJjb2xsYXBzZURpdiIsImNoaWxkRWxlbWVudHMiLCJBY2NvcmRpb25EaXYiLCJBY2NvcmRpb25CdXR0b24iLCJmaXJzdCIsImxhc3QiLCJzaG93QXJ0aWNsZSIsIm1hcCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7O3NCQUxHO2tFQUVDO21FQUNHOzs7Ozs7QUFFYixNQUFNQSxzQkFBc0JDLGFB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
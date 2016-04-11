'use strict';var lang_1 = require('angular2/src/facade/lang');
var HtmlTextAst = (function () {
    function HtmlTextAst(value, sourceSpan) {
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    HtmlTextAst.prototype.visit = function (visitor, context) { return visitor.visitText(this, context); };
    return HtmlTextAst;
})();
exports.HtmlTextAst = HtmlTextAst;
var HtmlAttrAst = (function () {
    function HtmlAttrAst(name, value, sourceSpan) {
        this.name = name;
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    HtmlAttrAst.prototype.visit = function (visitor, context) { return visitor.visitAttr(this, context); };
    return HtmlAttrAst;
})();
exports.HtmlAttrAst = HtmlAttrAst;
var HtmlElementAst = (function () {
    function HtmlElementAst(name, attrs, children, sourceSpan, startSourceSpan, endSourceSpan) {
        this.name = name;
        this.attrs = attrs;
        this.children = children;
        this.sourceSpan = sourceSpan;
        this.startSourceSpan = startSourceSpan;
        this.endSourceSpan = endSourceSpan;
    }
    HtmlElementAst.prototype.visit = function (visitor, context) { return visitor.visitElement(this, context); };
    return HtmlElementAst;
})();
exports.HtmlElementAst = HtmlElementAst;
var HtmlCommentAst = (function () {
    function HtmlCommentAst(value, sourceSpan) {
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    HtmlCommentAst.prototype.visit = function (visitor, context) { return visitor.visitComment(this, context); };
    return HtmlCommentAst;
})();
exports.HtmlCommentAst = HtmlCommentAst;
function htmlVisitAll(visitor, asts, context) {
    if (context === void 0) { context = null; }
    var result = [];
    asts.forEach(function (ast) {
        var astResult = ast.visit(visitor, context);
        if (lang_1.isPresent(astResult)) {
            result.push(astResult);
        }
    });
    return result;
}
exports.htmlVisitAll = htmlVisitAll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbF9hc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLVB2T3VSanZ4LnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvaHRtbF9hc3QudHMiXSwibmFtZXMiOlsiSHRtbFRleHRBc3QiLCJIdG1sVGV4dEFzdC5jb25zdHJ1Y3RvciIsIkh0bWxUZXh0QXN0LnZpc2l0IiwiSHRtbEF0dHJBc3QiLCJIdG1sQXR0ckFzdC5jb25zdHJ1Y3RvciIsIkh0bWxBdHRyQXN0LnZpc2l0IiwiSHRtbEVsZW1lbnRBc3QiLCJIdG1sRWxlbWVudEFzdC5jb25zdHJ1Y3RvciIsIkh0bWxFbGVtZW50QXN0LnZpc2l0IiwiSHRtbENvbW1lbnRBc3QiLCJIdG1sQ29tbWVudEFzdC5jb25zdHJ1Y3RvciIsIkh0bWxDb21tZW50QXN0LnZpc2l0IiwiaHRtbFZpc2l0QWxsIl0sIm1hcHBpbmdzIjoiQUFBQSxxQkFBd0IsMEJBQTBCLENBQUMsQ0FBQTtBQVNuRDtJQUNFQSxxQkFBbUJBLEtBQWFBLEVBQVNBLFVBQTJCQTtRQUFqREMsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBUUE7UUFBU0EsZUFBVUEsR0FBVkEsVUFBVUEsQ0FBaUJBO0lBQUdBLENBQUNBO0lBQ3hFRCwyQkFBS0EsR0FBTEEsVUFBTUEsT0FBdUJBLEVBQUVBLE9BQVlBLElBQVNFLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBQ2hHRixrQkFBQ0E7QUFBREEsQ0FBQ0EsQUFIRCxJQUdDO0FBSFksbUJBQVcsY0FHdkIsQ0FBQTtBQUVEO0lBQ0VHLHFCQUFtQkEsSUFBWUEsRUFBU0EsS0FBYUEsRUFBU0EsVUFBMkJBO1FBQXRFQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFRQTtRQUFTQSxVQUFLQSxHQUFMQSxLQUFLQSxDQUFRQTtRQUFTQSxlQUFVQSxHQUFWQSxVQUFVQSxDQUFpQkE7SUFBR0EsQ0FBQ0E7SUFDN0ZELDJCQUFLQSxHQUFMQSxVQUFNQSxPQUF1QkEsRUFBRUEsT0FBWUEsSUFBU0UsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDaEdGLGtCQUFDQTtBQUFEQSxDQUFDQSxBQUhELElBR0M7QUFIWSxtQkFBVyxjQUd2QixDQUFBO0FBRUQ7SUFDRUcsd0JBQ1dBLElBQVlBLEVBQVNBLEtBQW9CQSxFQUFTQSxRQUFtQkEsRUFDckVBLFVBQTJCQSxFQUFTQSxlQUFnQ0EsRUFDcEVBLGFBQThCQTtRQUY5QkMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBUUE7UUFBU0EsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBZUE7UUFBU0EsYUFBUUEsR0FBUkEsUUFBUUEsQ0FBV0E7UUFDckVBLGVBQVVBLEdBQVZBLFVBQVVBLENBQWlCQTtRQUFTQSxvQkFBZUEsR0FBZkEsZUFBZUEsQ0FBaUJBO1FBQ3BFQSxrQkFBYUEsR0FBYkEsYUFBYUEsQ0FBaUJBO0lBQUdBLENBQUNBO0lBQzdDRCw4QkFBS0EsR0FBTEEsVUFBTUEsT0FBdUJBLEVBQUVBLE9BQVlBLElBQVNFLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBQ25HRixxQkFBQ0E7QUFBREEsQ0FBQ0EsQUFORCxJQU1DO0FBTlksc0JBQWMsaUJBTTFCLENBQUE7QUFFRDtJQUNFRyx3QkFBbUJBLEtBQWFBLEVBQVNBLFVBQTJCQTtRQUFqREMsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBUUE7UUFBU0EsZUFBVUEsR0FBVkEsVUFBVUEsQ0FBaUJBO0lBQUdBLENBQUNBO0lBQ3hFRCw4QkFBS0EsR0FBTEEsVUFBTUEsT0FBdUJBLEVBQUVBLE9BQVlBLElBQVNFLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBQ25HRixxQkFBQ0E7QUFBREEsQ0FBQ0EsQUFIRCxJQUdDO0FBSFksc0JBQWMsaUJBRzFCLENBQUE7QUFTRCxzQkFBNkIsT0FBdUIsRUFBRSxJQUFlLEVBQUUsT0FBbUI7SUFBbkJHLHVCQUFtQkEsR0FBbkJBLGNBQW1CQTtJQUN4RkEsSUFBSUEsTUFBTUEsR0FBR0EsRUFBRUEsQ0FBQ0E7SUFDaEJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFVBQUFBLEdBQUdBO1FBQ2RBLElBQUlBLFNBQVNBLEdBQUdBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO1FBQzVDQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBU0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDekJBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO1FBQ3pCQSxDQUFDQTtJQUNIQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNIQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtBQUNoQkEsQ0FBQ0E7QUFUZSxvQkFBWSxlQVMzQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbmltcG9ydCB7UGFyc2VTb3VyY2VTcGFufSBmcm9tICcuL3BhcnNlX3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEh0bWxBc3Qge1xuICBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW47XG4gIHZpc2l0KHZpc2l0b3I6IEh0bWxBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBIdG1sVGV4dEFzdCBpbXBsZW1lbnRzIEh0bWxBc3Qge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IHN0cmluZywgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cbiAgdmlzaXQodmlzaXRvcjogSHRtbEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7IHJldHVybiB2aXNpdG9yLnZpc2l0VGV4dCh0aGlzLCBjb250ZXh0KTsgfVxufVxuXG5leHBvcnQgY2xhc3MgSHRtbEF0dHJBc3QgaW1wbGVtZW50cyBIdG1sQXN0IHtcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHZhbHVlOiBzdHJpbmcsIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG4gIHZpc2l0KHZpc2l0b3I6IEh0bWxBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkgeyByZXR1cm4gdmlzaXRvci52aXNpdEF0dHIodGhpcywgY29udGV4dCk7IH1cbn1cblxuZXhwb3J0IGNsYXNzIEh0bWxFbGVtZW50QXN0IGltcGxlbWVudHMgSHRtbEFzdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGF0dHJzOiBIdG1sQXR0ckFzdFtdLCBwdWJsaWMgY2hpbGRyZW46IEh0bWxBc3RbXSxcbiAgICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyBzdGFydFNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbixcbiAgICAgIHB1YmxpYyBlbmRTb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG4gIHZpc2l0KHZpc2l0b3I6IEh0bWxBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkgeyByZXR1cm4gdmlzaXRvci52aXNpdEVsZW1lbnQodGhpcywgY29udGV4dCk7IH1cbn1cblxuZXhwb3J0IGNsYXNzIEh0bWxDb21tZW50QXN0IGltcGxlbWVudHMgSHRtbEFzdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBIdG1sQXN0VmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHsgcmV0dXJuIHZpc2l0b3IudmlzaXRDb21tZW50KHRoaXMsIGNvbnRleHQpOyB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSHRtbEFzdFZpc2l0b3Ige1xuICB2aXNpdEVsZW1lbnQoYXN0OiBIdG1sRWxlbWVudEFzdCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEF0dHIoYXN0OiBIdG1sQXR0ckFzdCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFRleHQoYXN0OiBIdG1sVGV4dEFzdCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdENvbW1lbnQoYXN0OiBIdG1sQ29tbWVudEFzdCwgY29udGV4dDogYW55KTogYW55O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHRtbFZpc2l0QWxsKHZpc2l0b3I6IEh0bWxBc3RWaXNpdG9yLCBhc3RzOiBIdG1sQXN0W10sIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnlbXSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgYXN0cy5mb3JFYWNoKGFzdCA9PiB7XG4gICAgdmFyIGFzdFJlc3VsdCA9IGFzdC52aXNpdCh2aXNpdG9yLCBjb250ZXh0KTtcbiAgICBpZiAoaXNQcmVzZW50KGFzdFJlc3VsdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGFzdFJlc3VsdCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==
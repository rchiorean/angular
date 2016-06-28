'use strict';"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var exceptions_1 = require('angular2/src/facade/exceptions');
var constants_1 = require('angular2/src/core/change_detection/constants');
var ViewRef = (function () {
    function ViewRef() {
    }
    Object.defineProperty(ViewRef.prototype, "destroyed", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    return ViewRef;
}());
exports.ViewRef = ViewRef;
/**
 * Represents an Angular View.
 *
 * <!-- TODO: move the next two paragraphs to the dev guide -->
 * A View is a fundamental building block of the application UI. It is the smallest grouping of
 * Elements which are created and destroyed together.
 *
 * Properties of elements in a View can change, but the structure (number and order) of elements in
 * a View cannot. Changing the structure of Elements can only be done by inserting, moving or
 * removing nested Views via a {@link ViewContainerRef}. Each View can contain many View Containers.
 * <!-- /TODO -->
 *
 * ### Example
 *
 * Given this template...
 *
 * ```
 * Count: {{items.length}}
 * <ul>
 *   <li *ngFor="let  item of items">{{item}}</li>
 * </ul>
 * ```
 *
 * ... we have two {@link ProtoViewRef}s:
 *
 * Outer {@link ProtoViewRef}:
 * ```
 * Count: {{items.length}}
 * <ul>
 *   <template ngFor let-item [ngForOf]="items"></template>
 * </ul>
 * ```
 *
 * Inner {@link ProtoViewRef}:
 * ```
 *   <li>{{item}}</li>
 * ```
 *
 * Notice that the original template is broken down into two separate {@link ProtoViewRef}s.
 *
 * The outer/inner {@link ProtoViewRef}s are then assembled into views like so:
 *
 * ```
 * <!-- ViewRef: outer-0 -->
 * Count: 2
 * <ul>
 *   <template view-container-ref></template>
 *   <!-- ViewRef: inner-1 --><li>first</li><!-- /ViewRef: inner-1 -->
 *   <!-- ViewRef: inner-2 --><li>second</li><!-- /ViewRef: inner-2 -->
 * </ul>
 * <!-- /ViewRef: outer-0 -->
 * ```
 */
var EmbeddedViewRef = (function (_super) {
    __extends(EmbeddedViewRef, _super);
    function EmbeddedViewRef() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(EmbeddedViewRef.prototype, "rootNodes", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    return EmbeddedViewRef;
}(ViewRef));
exports.EmbeddedViewRef = EmbeddedViewRef;
var ViewRef_ = (function () {
    function ViewRef_(_view) {
        this._view = _view;
        this._view = _view;
    }
    Object.defineProperty(ViewRef_.prototype, "internalView", {
        get: function () { return this._view; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewRef_.prototype, "rootNodes", {
        get: function () { return this._view.flatRootNodes; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewRef_.prototype, "changeDetectorRef", {
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    ViewRef_.prototype.setLocal = function (variableName, value) { this._view.setLocal(variableName, value); };
    ViewRef_.prototype.hasLocal = function (variableName) { return this._view.hasLocal(variableName); };
    Object.defineProperty(ViewRef_.prototype, "destroyed", {
        get: function () { return this._view.destroyed; },
        enumerable: true,
        configurable: true
    });
    ViewRef_.prototype.markForCheck = function () { this._view.markPathToRootAsCheckOnce(); };
    ViewRef_.prototype.detach = function () { this._view.cdMode = constants_1.ChangeDetectionStrategy.Detached; };
    ViewRef_.prototype.detectChanges = function () { this._view.detectChanges(false); };
    ViewRef_.prototype.checkNoChanges = function () { this._view.detectChanges(true); };
    ViewRef_.prototype.reattach = function () {
        this._view.cdMode = constants_1.ChangeDetectionStrategy.CheckAlways;
        this.markForCheck();
    };
    ViewRef_.prototype.onDestroy = function (callback) { this._view.disposables.push(callback); };
    ViewRef_.prototype.destroy = function () { this._view.destroy(); };
    return ViewRef_;
}());
exports.ViewRef_ = ViewRef_;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld19yZWYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLWNpQW9zT2tkLnRtcC9hbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvdmlld19yZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMkJBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFJN0QsMEJBQXNDLDhDQUE4QyxDQUFDLENBQUE7QUFFckY7SUFBQTtJQUlBLENBQUM7SUFIQyxzQkFBSSw4QkFBUzthQUFiLGNBQTJCLE1BQU0sQ0FBVSwwQkFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUcvRCxjQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKcUIsZUFBTyxVQUk1QixDQUFBO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvREc7QUFDSDtJQUE4QyxtQ0FBTztJQUFyRDtRQUE4Qyw4QkFBTztJQWlCckQsQ0FBQztJQU5DLHNCQUFJLHNDQUFTO2FBQWIsY0FBeUIsTUFBTSxDQUFRLDBCQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztPQUFBOztJQU0zRCxzQkFBQztBQUFELENBQUMsQUFqQkQsQ0FBOEMsT0FBTyxHQWlCcEQ7QUFqQnFCLHVCQUFlLGtCQWlCcEMsQ0FBQTtBQUVEO0lBQ0Usa0JBQW9CLEtBQW1CO1FBQW5CLFVBQUssR0FBTCxLQUFLLENBQWM7UUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUFDLENBQUM7SUFFaEUsc0JBQUksa0NBQVk7YUFBaEIsY0FBbUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUV2RCxzQkFBSSwrQkFBUzthQUFiLGNBQXlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRTNELHNCQUFJLHVDQUFpQjthQUFyQixjQUE2QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFM0QsMkJBQVEsR0FBUixVQUFTLFlBQW9CLEVBQUUsS0FBVSxJQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFOUYsMkJBQVEsR0FBUixVQUFTLFlBQW9CLElBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVyRixzQkFBSSwrQkFBUzthQUFiLGNBQTJCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRXpELCtCQUFZLEdBQVosY0FBdUIsSUFBSSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRSx5QkFBTSxHQUFOLGNBQWlCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLG1DQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDeEUsZ0NBQWEsR0FBYixjQUF3QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUQsaUNBQWMsR0FBZCxjQUF5QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUQsMkJBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLG1DQUF1QixDQUFDLFdBQVcsQ0FBQztRQUN4RCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDRCQUFTLEdBQVQsVUFBVSxRQUFrQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFeEUsMEJBQU8sR0FBUCxjQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLGVBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDO0FBM0JZLGdCQUFRLFdBMkJwQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1bmltcGxlbWVudGVkfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0NoYW5nZURldGVjdG9yUmVmfSBmcm9tICcuLi9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rvcl9yZWYnO1xuaW1wb3J0IHtBcHBWaWV3fSBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvY2hhbmdlX2RldGVjdGlvbi9jb25zdGFudHMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVmlld1JlZiB7XG4gIGdldCBkZXN0cm95ZWQoKTogYm9vbGVhbiB7IHJldHVybiA8Ym9vbGVhbj51bmltcGxlbWVudGVkKCk7IH1cblxuICBhYnN0cmFjdCBvbkRlc3Ryb3koY2FsbGJhY2s6IEZ1bmN0aW9uKTtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEFuZ3VsYXIgVmlldy5cbiAqXG4gKiA8IS0tIFRPRE86IG1vdmUgdGhlIG5leHQgdHdvIHBhcmFncmFwaHMgdG8gdGhlIGRldiBndWlkZSAtLT5cbiAqIEEgVmlldyBpcyBhIGZ1bmRhbWVudGFsIGJ1aWxkaW5nIGJsb2NrIG9mIHRoZSBhcHBsaWNhdGlvbiBVSS4gSXQgaXMgdGhlIHNtYWxsZXN0IGdyb3VwaW5nIG9mXG4gKiBFbGVtZW50cyB3aGljaCBhcmUgY3JlYXRlZCBhbmQgZGVzdHJveWVkIHRvZ2V0aGVyLlxuICpcbiAqIFByb3BlcnRpZXMgb2YgZWxlbWVudHMgaW4gYSBWaWV3IGNhbiBjaGFuZ2UsIGJ1dCB0aGUgc3RydWN0dXJlIChudW1iZXIgYW5kIG9yZGVyKSBvZiBlbGVtZW50cyBpblxuICogYSBWaWV3IGNhbm5vdC4gQ2hhbmdpbmcgdGhlIHN0cnVjdHVyZSBvZiBFbGVtZW50cyBjYW4gb25seSBiZSBkb25lIGJ5IGluc2VydGluZywgbW92aW5nIG9yXG4gKiByZW1vdmluZyBuZXN0ZWQgVmlld3MgdmlhIGEge0BsaW5rIFZpZXdDb250YWluZXJSZWZ9LiBFYWNoIFZpZXcgY2FuIGNvbnRhaW4gbWFueSBWaWV3IENvbnRhaW5lcnMuXG4gKiA8IS0tIC9UT0RPIC0tPlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogR2l2ZW4gdGhpcyB0ZW1wbGF0ZS4uLlxuICpcbiAqIGBgYFxuICogQ291bnQ6IHt7aXRlbXMubGVuZ3RofX1cbiAqIDx1bD5cbiAqICAgPGxpICpuZ0Zvcj1cImxldCAgaXRlbSBvZiBpdGVtc1wiPnt7aXRlbX19PC9saT5cbiAqIDwvdWw+XG4gKiBgYGBcbiAqXG4gKiAuLi4gd2UgaGF2ZSB0d28ge0BsaW5rIFByb3RvVmlld1JlZn1zOlxuICpcbiAqIE91dGVyIHtAbGluayBQcm90b1ZpZXdSZWZ9OlxuICogYGBgXG4gKiBDb3VudDoge3tpdGVtcy5sZW5ndGh9fVxuICogPHVsPlxuICogICA8dGVtcGxhdGUgbmdGb3IgbGV0LWl0ZW0gW25nRm9yT2ZdPVwiaXRlbXNcIj48L3RlbXBsYXRlPlxuICogPC91bD5cbiAqIGBgYFxuICpcbiAqIElubmVyIHtAbGluayBQcm90b1ZpZXdSZWZ9OlxuICogYGBgXG4gKiAgIDxsaT57e2l0ZW19fTwvbGk+XG4gKiBgYGBcbiAqXG4gKiBOb3RpY2UgdGhhdCB0aGUgb3JpZ2luYWwgdGVtcGxhdGUgaXMgYnJva2VuIGRvd24gaW50byB0d28gc2VwYXJhdGUge0BsaW5rIFByb3RvVmlld1JlZn1zLlxuICpcbiAqIFRoZSBvdXRlci9pbm5lciB7QGxpbmsgUHJvdG9WaWV3UmVmfXMgYXJlIHRoZW4gYXNzZW1ibGVkIGludG8gdmlld3MgbGlrZSBzbzpcbiAqXG4gKiBgYGBcbiAqIDwhLS0gVmlld1JlZjogb3V0ZXItMCAtLT5cbiAqIENvdW50OiAyXG4gKiA8dWw+XG4gKiAgIDx0ZW1wbGF0ZSB2aWV3LWNvbnRhaW5lci1yZWY+PC90ZW1wbGF0ZT5cbiAqICAgPCEtLSBWaWV3UmVmOiBpbm5lci0xIC0tPjxsaT5maXJzdDwvbGk+PCEtLSAvVmlld1JlZjogaW5uZXItMSAtLT5cbiAqICAgPCEtLSBWaWV3UmVmOiBpbm5lci0yIC0tPjxsaT5zZWNvbmQ8L2xpPjwhLS0gL1ZpZXdSZWY6IGlubmVyLTIgLS0+XG4gKiA8L3VsPlxuICogPCEtLSAvVmlld1JlZjogb3V0ZXItMCAtLT5cbiAqIGBgYFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRW1iZWRkZWRWaWV3UmVmIGV4dGVuZHMgVmlld1JlZiB7XG4gIC8qKlxuICAgKiBTZXRzIGB2YWx1ZWAgb2YgbG9jYWwgdmFyaWFibGUgY2FsbGVkIGB2YXJpYWJsZU5hbWVgIGluIHRoaXMgVmlldy5cbiAgICovXG4gIGFic3RyYWN0IHNldExvY2FsKHZhcmlhYmxlTmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZDtcblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhpcyB2aWV3IGhhcyBhIGxvY2FsIHZhcmlhYmxlIGNhbGxlZCBgdmFyaWFibGVOYW1lYC5cbiAgICovXG4gIGFic3RyYWN0IGhhc0xvY2FsKHZhcmlhYmxlTmFtZTogc3RyaW5nKTogYm9vbGVhbjtcblxuICBnZXQgcm9vdE5vZGVzKCk6IGFueVtdIHsgcmV0dXJuIDxhbnlbXT51bmltcGxlbWVudGVkKCk7IH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSB2aWV3IGFuZCBhbGwgb2YgdGhlIGRhdGEgc3RydWN0dXJlcyBhc3NvY2lhdGVkIHdpdGggaXQuXG4gICAqL1xuICBhYnN0cmFjdCBkZXN0cm95KCk7XG59XG5cbmV4cG9ydCBjbGFzcyBWaWV3UmVmXyBpbXBsZW1lbnRzIEVtYmVkZGVkVmlld1JlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3OiBBcHBWaWV3PGFueT4pIHsgdGhpcy5fdmlldyA9IF92aWV3OyB9XG5cbiAgZ2V0IGludGVybmFsVmlldygpOiBBcHBWaWV3PGFueT4geyByZXR1cm4gdGhpcy5fdmlldzsgfVxuXG4gIGdldCByb290Tm9kZXMoKTogYW55W10geyByZXR1cm4gdGhpcy5fdmlldy5mbGF0Um9vdE5vZGVzOyB9XG5cbiAgZ2V0IGNoYW5nZURldGVjdG9yUmVmKCk6IENoYW5nZURldGVjdG9yUmVmIHsgcmV0dXJuIHRoaXM7IH1cblxuICBzZXRMb2NhbCh2YXJpYWJsZU5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQgeyB0aGlzLl92aWV3LnNldExvY2FsKHZhcmlhYmxlTmFtZSwgdmFsdWUpOyB9XG5cbiAgaGFzTG9jYWwodmFyaWFibGVOYW1lOiBzdHJpbmcpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3ZpZXcuaGFzTG9jYWwodmFyaWFibGVOYW1lKTsgfVxuXG4gIGdldCBkZXN0cm95ZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl92aWV3LmRlc3Ryb3llZDsgfVxuXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHsgdGhpcy5fdmlldy5tYXJrUGF0aFRvUm9vdEFzQ2hlY2tPbmNlKCk7IH1cbiAgZGV0YWNoKCk6IHZvaWQgeyB0aGlzLl92aWV3LmNkTW9kZSA9IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRldGFjaGVkOyB9XG4gIGRldGVjdENoYW5nZXMoKTogdm9pZCB7IHRoaXMuX3ZpZXcuZGV0ZWN0Q2hhbmdlcyhmYWxzZSk7IH1cbiAgY2hlY2tOb0NoYW5nZXMoKTogdm9pZCB7IHRoaXMuX3ZpZXcuZGV0ZWN0Q2hhbmdlcyh0cnVlKTsgfVxuICByZWF0dGFjaCgpOiB2b2lkIHtcbiAgICB0aGlzLl92aWV3LmNkTW9kZSA9IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkNoZWNrQWx3YXlzO1xuICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBvbkRlc3Ryb3koY2FsbGJhY2s6IEZ1bmN0aW9uKSB7IHRoaXMuX3ZpZXcuZGlzcG9zYWJsZXMucHVzaChjYWxsYmFjayk7IH1cblxuICBkZXN0cm95KCkgeyB0aGlzLl92aWV3LmRlc3Ryb3koKTsgfVxufVxuIl19
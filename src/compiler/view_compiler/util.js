'use strict';"use strict";
var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var o = require('../output/output_ast');
var compile_metadata_1 = require('../compile_metadata');
var identifiers_1 = require('../identifiers');
function getPropertyInView(property, callingView, definedView) {
    if (callingView === definedView) {
        return property;
    }
    else {
        var viewProp = o.THIS_EXPR;
        var currView = callingView;
        while (currView !== definedView && lang_1.isPresent(currView.declarationElement.view)) {
            currView = currView.declarationElement.view;
            viewProp = viewProp.prop('parent');
        }
        if (currView !== definedView) {
            throw new exceptions_1.BaseException("Internal error: Could not calculate a property in a parent view: " + property);
        }
        if (property instanceof o.ReadPropExpr) {
            var readPropExpr_1 = property;
            // Note: Don't cast for members of the AppView base class...
            if (definedView.fields.some(function (field) { return field.name == readPropExpr_1.name; }) ||
                definedView.getters.some(function (field) { return field.name == readPropExpr_1.name; })) {
                viewProp = viewProp.cast(definedView.classType);
            }
        }
        return o.replaceVarInExpression(o.THIS_EXPR.name, viewProp, property);
    }
}
exports.getPropertyInView = getPropertyInView;
function injectFromViewParentInjector(token, optional) {
    var args = [createDiTokenExpression(token)];
    if (optional) {
        args.push(o.NULL_EXPR);
    }
    return o.THIS_EXPR.prop('parentInjector').callMethod('get', args);
}
exports.injectFromViewParentInjector = injectFromViewParentInjector;
function getViewFactoryName(component, embeddedTemplateIndex) {
    return "viewFactory_" + component.type.name + embeddedTemplateIndex;
}
exports.getViewFactoryName = getViewFactoryName;
function createDiTokenExpression(token) {
    if (lang_1.isPresent(token.value)) {
        return o.literal(token.value);
    }
    else if (token.identifierIsInstance) {
        return o.importExpr(token.identifier)
            .instantiate([], o.importType(token.identifier, [], [o.TypeModifier.Const]));
    }
    else {
        return o.importExpr(token.identifier);
    }
}
exports.createDiTokenExpression = createDiTokenExpression;
function createFlatArray(expressions) {
    var lastNonArrayExpressions = [];
    var result = o.literalArr([]);
    for (var i = 0; i < expressions.length; i++) {
        var expr = expressions[i];
        if (expr.type instanceof o.ArrayType) {
            if (lastNonArrayExpressions.length > 0) {
                result =
                    result.callMethod(o.BuiltinMethod.ConcatArray, [o.literalArr(lastNonArrayExpressions)]);
                lastNonArrayExpressions = [];
            }
            result = result.callMethod(o.BuiltinMethod.ConcatArray, [expr]);
        }
        else {
            lastNonArrayExpressions.push(expr);
        }
    }
    if (lastNonArrayExpressions.length > 0) {
        result =
            result.callMethod(o.BuiltinMethod.ConcatArray, [o.literalArr(lastNonArrayExpressions)]);
    }
    return result;
}
exports.createFlatArray = createFlatArray;
function convertValueToOutputAst(value) {
    if (value instanceof compile_metadata_1.CompileIdentifierMetadata) {
        return o.importExpr(value);
    }
    else if (value instanceof o.Expression) {
        return value;
    }
    else {
        return o.literal(value);
    }
}
exports.convertValueToOutputAst = convertValueToOutputAst;
function createPureProxy(fn, argCount, pureProxyProp, view) {
    view.fields.push(new o.ClassField(pureProxyProp.name, null, [o.StmtModifier.Private]));
    var pureProxyId = argCount < identifiers_1.Identifiers.pureProxies.length ? identifiers_1.Identifiers.pureProxies[argCount] : null;
    if (lang_1.isBlank(pureProxyId)) {
        throw new exceptions_1.BaseException("Unsupported number of argument for pure functions: " + argCount);
    }
    view.createMethod.addStmt(o.THIS_EXPR.prop(pureProxyProp.name).set(o.importExpr(pureProxyId).callFn([fn])).toStmt());
}
exports.createPureProxy = createPureProxy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtY2lBb3NPa2QudG1wL2FuZ3VsYXIyL3NyYy9jb21waWxlci92aWV3X2NvbXBpbGVyL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFpQywwQkFBMEIsQ0FBQyxDQUFBO0FBQzVELDJCQUE0QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRTdELElBQVksQ0FBQyxXQUFNLHNCQUFzQixDQUFDLENBQUE7QUFDMUMsaUNBSU8scUJBQXFCLENBQUMsQ0FBQTtBQUU3Qiw0QkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUUzQywyQkFBa0MsUUFBc0IsRUFBRSxXQUF3QixFQUNoRCxXQUF3QjtJQUN4RCxFQUFFLENBQUMsQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksUUFBUSxHQUFpQixDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3pDLElBQUksUUFBUSxHQUFnQixXQUFXLENBQUM7UUFDeEMsT0FBTyxRQUFRLEtBQUssV0FBVyxJQUFJLGdCQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDL0UsUUFBUSxHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7WUFDNUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sSUFBSSwwQkFBYSxDQUNuQixzRUFBb0UsUUFBVSxDQUFDLENBQUM7UUFDdEYsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLFFBQVEsWUFBWSxDQUFDLENBQUMs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Q0FBQztRQUN6QyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztBQUNILENBQUM7QUFSZSwrQkFBdUIsMEJBUXRDLENBQUE7QUFFRCx5QkFBZ0MsRUFBZ0IsRUFBRSxRQUFnQixFQUFFLGFBQTZCLEVBQ2pFLElBQWlCO0lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLElBQUksV0FBVyxHQUNYLFFBQVEsR0FBRyx5QkFBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcseUJBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3pGLEVBQUUsQ0FBQyxDQUFDLGNBQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsTUFBTSxJQUFJLDBCQUFhLENBQUMsd0RBQXNELFFBQVUsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FDckIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ2pHLENBQUM7QUFWZSx1QkFBZSxrQkFVOUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNQcmVzZW50LCBpc0JsYW5rfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuXG5pbXBvcnQgKiBhcyBvIGZyb20gJy4uL291dHB1dC9vdXRwdXRfYXN0JztcbmltcG9ydCB7XG4gIENvbXBpbGVUb2tlbk1ldGFkYXRhLFxuICBDb21waWxlRGlyZWN0aXZlTWV0YWRhdGEsXG4gIENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGFcbn0gZnJvbSAnLi4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge0NvbXBpbGVWaWV3fSBmcm9tICcuL2NvbXBpbGVfdmlldyc7XG5pbXBvcnQge0lkZW50aWZpZXJzfSBmcm9tICcuLi9pZGVudGlmaWVycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eUluVmlldyhwcm9wZXJ0eTogby5FeHByZXNzaW9uLCBjYWxsaW5nVmlldzogQ29tcGlsZVZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5lZFZpZXc6IENvbXBpbGVWaWV3KTogby5FeHByZXNzaW9uIHtcbiAgaWYgKGNhbGxpbmdWaWV3ID09PSBkZWZpbmVkVmlldykge1xuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdmlld1Byb3A6IG8uRXhwcmVzc2lvbiA9IG8uVEhJU19FWFBSO1xuICAgIHZhciBjdXJyVmlldzogQ29tcGlsZVZpZXcgPSBjYWxsaW5nVmlldztcbiAgICB3aGlsZSAoY3VyclZpZXcgIT09IGRlZmluZWRWaWV3ICYmIGlzUHJlc2VudChjdXJyVmlldy5kZWNsYXJhdGlvbkVsZW1lbnQudmlldykpIHtcbiAgICAgIGN1cnJWaWV3ID0gY3VyclZpZXcuZGVjbGFyYXRpb25FbGVtZW50LnZpZXc7XG4gICAgICB2aWV3UHJvcCA9IHZpZXdQcm9wLnByb3AoJ3BhcmVudCcpO1xuICAgIH1cbiAgICBpZiAoY3VyclZpZXcgIT09IGRlZmluZWRWaWV3KSB7XG4gICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihcbiAgICAgICAgICBgSW50ZXJuYWwgZXJyb3I6IENvdWxkIG5vdCBjYWxjdWxhdGUgYSBwcm9wZXJ0eSBpbiBhIHBhcmVudCB2aWV3OiAke3Byb3BlcnR5fWApO1xuICAgIH1cbiAgICBpZiAocHJvcGVydHkgaW5zdGFuY2VvZiBvLlJlYWRQcm9wRXhwcikge1xuICAgICAgbGV0IHJlYWRQcm9wRXhwcjogby5SZWFkUHJvcEV4cHIgPSBwcm9wZXJ0eTtcbiAgICAgIC8vIE5vdGU6IERvbid0IGNhc3QgZm9yIG1lbWJlcnMgb2YgdGhlIEFwcFZpZXcgYmFzZSBjbGFzcy4uLlxuICAgICAgaWYgKGRlZmluZWRWaWV3LmZpZWxkcy5zb21lKChmaWVsZCkgPT4gZmllbGQubmFtZSA9PSByZWFkUHJvcEV4cHIubmFtZSkgfHxcbiAgICAgICAgICBkZWZpbmVkVmlldy5nZXR0ZXJzLnNvbWUoKGZpZWxkKSA9PiBmaWVsZC5uYW1lID09IHJlYWRQcm9wRXhwci5uYW1lKSkge1xuICAgICAgICB2aWV3UHJvcCA9IHZpZXdQcm9wLmNhc3QoZGVmaW5lZFZpZXcuY2xhc3NUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG8ucmVwbGFjZVZhckluRXhwcmVzc2lvbihvLlRISVNfRVhQUi5uYW1lLCB2aWV3UHJvcCwgcHJvcGVydHkpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RGcm9tVmlld1BhcmVudEluamVjdG9yKHRva2VuOiBDb21waWxlVG9rZW5NZXRhZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiBib29sZWFuKTogby5FeHByZXNzaW9uIHtcbiAgdmFyIGFyZ3MgPSBbY3JlYXRlRGlUb2tlbkV4cHJlc3Npb24odG9rZW4pXTtcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgYXJncy5wdXNoKG8uTlVMTF9FWFBSKTtcbiAgfVxuICByZXR1cm4gby5USElTX0VYUFIucHJvcCgncGFyZW50SW5qZWN0b3InKS5jYWxsTWV0aG9kKCdnZXQnLCBhcmdzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXdGYWN0b3J5TmFtZShjb21wb25lbnQ6IENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1iZWRkZWRUZW1wbGF0ZUluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gYHZpZXdGYWN0b3J5XyR7Y29tcG9uZW50LnR5cGUubmFtZX0ke2VtYmVkZGVkVGVtcGxhdGVJbmRleH1gO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaVRva2VuRXhwcmVzc2lvbih0b2tlbjogQ29tcGlsZVRva2VuTWV0YWRhdGEpOiBvLkV4cHJlc3Npb24ge1xuICBpZiAoaXNQcmVzZW50KHRva2VuLnZhbHVlKSkge1xuICAgIHJldHVybiBvLmxpdGVyYWwodG9rZW4udmFsdWUpO1xuICB9IGVsc2UgaWYgKHRva2VuLmlkZW50aWZpZXJJc0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIG8uaW1wb3J0RXhwcih0b2tlbi5pZGVudGlmaWVyKVxuICAgICAgICAuaW5zdGFudGlhdGUoW10sIG8uaW1wb3J0VHlwZSh0b2tlbi5pZGVudGlmaWVyLCBbXSwgW28uVHlwZU1vZGlmaWVyLkNvbnN0XSkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBvLmltcG9ydEV4cHIodG9rZW4uaWRlbnRpZmllcik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZsYXRBcnJheShleHByZXNzaW9uczogby5FeHByZXNzaW9uW10pOiBvLkV4cHJlc3Npb24ge1xuICB2YXIgbGFzdE5vbkFycmF5RXhwcmVzc2lvbnMgPSBbXTtcbiAgdmFyIHJlc3VsdDogby5FeHByZXNzaW9uID0gby5saXRlcmFsQXJyKFtdKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHByZXNzaW9ucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBleHByID0gZXhwcmVzc2lvbnNbaV07XG4gICAgaWYgKGV4cHIudHlwZSBpbnN0YW5jZW9mIG8uQXJyYXlUeXBlKSB7XG4gICAgICBpZiAobGFzdE5vbkFycmF5RXhwcmVzc2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXN1bHQgPVxuICAgICAgICAgICAgcmVzdWx0LmNhbGxNZXRob2Qoby5CdWlsdGluTWV0aG9kLkNvbmNhdEFycmF5LCBbby5saXRlcmFsQXJyKGxhc3ROb25BcnJheUV4cHJlc3Npb25zKV0pO1xuICAgICAgICBsYXN0Tm9uQXJyYXlFeHByZXNzaW9ucyA9IFtdO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gcmVzdWx0LmNhbGxNZXRob2Qoby5CdWlsdGluTWV0aG9kLkNvbmNhdEFycmF5LCBbZXhwcl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0Tm9uQXJyYXlFeHByZXNzaW9ucy5wdXNoKGV4cHIpO1xuICAgIH1cbiAgfVxuICBpZiAobGFzdE5vbkFycmF5RXhwcmVzc2lvbnMubGVuZ3RoID4gMCkge1xuICAgIHJlc3VsdCA9XG4gICAgICAgIHJlc3VsdC5jYWxsTWV0aG9kKG8uQnVpbHRpbk1ldGhvZC5Db25jYXRBcnJheSwgW28ubGl0ZXJhbEFycihsYXN0Tm9uQXJyYXlFeHByZXNzaW9ucyldKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFZhbHVlVG9PdXRwdXRBc3QodmFsdWU6IGFueSk6IG8uRXhwcmVzc2lvbiB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEpIHtcbiAgICByZXR1cm4gby5pbXBvcnRFeHByKHZhbHVlKTtcbiAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIG8uRXhwcmVzc2lvbikge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gby5saXRlcmFsKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHVyZVByb3h5KGZuOiBvLkV4cHJlc3Npb24sIGFyZ0NvdW50OiBudW1iZXIsIHB1cmVQcm94eVByb3A6IG8uUmVhZFByb3BFeHByLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3OiBDb21waWxlVmlldykge1xuICB2aWV3LmZpZWxkcy5wdXNoKG5ldyBvLkNsYXNzRmllbGQocHVyZVByb3h5UHJvcC5uYW1lLCBudWxsLCBbby5TdG10TW9kaWZpZXIuUHJpdmF0ZV0pKTtcbiAgdmFyIHB1cmVQcm94eUlkID1cbiAgICAgIGFyZ0NvdW50IDwgSWRlbnRpZmllcnMucHVyZVByb3hpZXMubGVuZ3RoID8gSWRlbnRpZmllcnMucHVyZVByb3hpZXNbYXJnQ291bnRdIDogbnVsbDtcbiAgaWYgKGlzQmxhbmsocHVyZVByb3h5SWQpKSB7XG4gICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oYFVuc3VwcG9ydGVkIG51bWJlciBvZiBhcmd1bWVudCBmb3IgcHVyZSBmdW5jdGlvbnM6ICR7YXJnQ291bnR9YCk7XG4gIH1cbiAgdmlldy5jcmVhdGVNZXRob2QuYWRkU3RtdChcbiAgICAgIG8uVEhJU19FWFBSLnByb3AocHVyZVByb3h5UHJvcC5uYW1lKS5zZXQoby5pbXBvcnRFeHByKHB1cmVQcm94eUlkKS5jYWxsRm4oW2ZuXSkpLnRvU3RtdCgpKTtcbn1cbiJdfQ==
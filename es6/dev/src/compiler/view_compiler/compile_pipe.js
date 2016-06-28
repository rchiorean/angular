import { isBlank } from 'angular2/src/facade/lang';
import { BaseException } from 'angular2/src/facade/exceptions';
import * as o from '../output/output_ast';
import { Identifiers, identifierToken } from '../identifiers';
import { injectFromViewParentInjector, createPureProxy, getPropertyInView } from './util';
class _PurePipeProxy {
    constructor(view, instance, argCount) {
        this.view = view;
        this.instance = instance;
        this.argCount = argCount;
    }
}
export class CompilePipe {
    constructor(view, meta) {
        this.view = view;
        this.meta = meta;
        this._purePipeProxies = [];
        this.instance = o.THIS_EXPR.prop(`_pipe_${meta.name}_${view.pipeCount++}`);
    }
    static call(view, name, args) {
        var compView = view.componentView;
        var meta = _findPipeMeta(compView, name);
        var pipe;
        if (meta.pure) {
            // pure pipes live on the component view
            pipe = compView.purePipes.get(name);
            if (isBlank(pipe)) {
                pipe = new CompilePipe(compView, meta);
                compView.purePipes.set(name, pipe);
                compView.pipes.push(pipe);
            }
        }
        else {
            // Non pure pipes live on the view that called it
            pipe = new CompilePipe(view, meta);
            view.pipes.push(pipe);
        }
        return pipe._call(view, args);
    }
    get pure() { return this.meta.pure; }
    create() {
        var deps = this.meta.type.diDeps.map((diDep) => {
            if (diDep.token.equalsTo(identifierToken(Identifiers.ChangeDetectorRef))) {
                return o.THIS_EXPR.prop('ref');
            }
            return injectFromViewParentInjector(diDep.token, false);
        });
        this.view.fields.push(new o.ClassField(this.instance.name, o.importType(this.meta.type), [o.StmtModifier.Private]));
        this.view.createMethod.resetDebugInfo(null, null);
        this.view.createMethod.addStmt(o.THIS_EXPR.prop(this.instance.name)
            .set(o.importExpr(this.meta.type).instantiate(deps))
            .toStmt());
        this._purePipeProxies.forEach((purePipeProxy) => {
            var pipeInstanceSeenFromPureProxy = getPropertyInView(this.instance, purePipeProxy.view, this.view);
            createPureProxy(pipeInstanceSeenFromPureProxy.prop('transform')
                .callMethod(o.BuiltinMethod.bind, [pipeInstanceSeenFromPureProxy]), purePipeProxy.argCount, purePipeProxy.instance, purePipeProxy.view);
        });
    }
    _call(callingView, args) {
        if (this.meta.pure) {
            // PurePipeProxies live on the view that called them.
            var purePipeProxy = new _PurePipeProxy(callingView, o.THIS_EXPR.prop(`${this.instance.name}_${this._purePipeProxies.length}`), args.length);
            this._purePipeProxies.push(purePipeProxy);
            return o.importExpr(Identifiers.castByValue)
                .callFn([
                purePipeProxy.instance,
                getPropertyInView(this.instance.prop('transform'), callingView, this.view)
            ])
                .callFn(args);
        }
        else {
            return getPropertyInView(this.instance, callingView, this.view).callMethod('transform', args);
        }
    }
}
function _findPipeMeta(view, name) {
    var pipeMeta = null;
    for (var i = view.pipeMetas.length - 1; i >= 0; i--) {
        var localPipeMeta = view.pipeMetas[i];
        if (localPipeMeta.name == name) {
            pipeMeta = localPipeMeta;
            break;
        }
    }
    if (isBlank(pipeMeta)) {
        throw new BaseException(`Illegal state: Could not find pipe ${name} although the parser should have detected this error!`);
    }
    return pipeMeta;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZV9waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC14UkVySXpuRS50bXAvYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3ZpZXdfY29tcGlsZXIvY29tcGlsZV9waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsT0FBTyxFQUFZLE1BQU0sMEJBQTBCO09BQ3BELEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0NBQWdDO09BQ3JELEtBQUssQ0FBQyxNQUFNLHNCQUFzQjtPQUdsQyxFQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUMsTUFBTSxnQkFBZ0I7T0FDcEQsRUFBQyw0QkFBNEIsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxRQUFRO0FBRXZGO0lBQ0UsWUFBbUIsSUFBaUIsRUFBUyxRQUF3QixFQUFTLFFBQWdCO1FBQTNFLFNBQUksR0FBSixJQUFJLENBQWE7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7SUFBRyxDQUFDO0FBQ3BHLENBQUM7QUFFRDtJQXdCRSxZQUFtQixJQUFpQixFQUFTLElBQXlCO1FBQW5ELFNBQUksR0FBSixJQUFJLENBQWE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFxQjtRQUY5RCxxQkFBZ0IsR0FBcUIsRUFBRSxDQUFDO1FBRzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQXpCRCxPQUFPLElBQUksQ0FBQyxJQUFpQixFQUFFLElBQVksRUFBRSxJQUFvQjtRQUMvRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ2xDLElBQUksSUFBSSxHQUFHLGFBQWEsQ0FBQyxRQUFRLEVBQUUsSUFB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RCxJQUFJLFFBQVEsR0FBd0IsSUFBSSxDQUFDO0lBQ3pDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDcEQsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDL0IsUUFBUSxHQUFHLGFBQWEsQ0FBQztZQUN6QixLQUFLLENBQUM7UUFDUixDQUFDO0lBQ0gsQ0FBQztJQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsTUFBTSxJQUFJLGFBQWEsQ0FDbkIsc0NBQXNDLElBQUksdURBQXVELENBQUMsQ0FBQztJQUN6RyxDQUFDO0lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc0JsYW5rLCBpc1ByZXNlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0Jhc2VFeGNlcHRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5pbXBvcnQgKiBhcyBvIGZyb20gJy4uL291dHB1dC9vdXRwdXRfYXN0JztcbmltcG9ydCB7Q29tcGlsZVZpZXd9IGZyb20gJy4vY29tcGlsZV92aWV3JztcbmltcG9ydCB7Q29tcGlsZVBpcGVNZXRhZGF0YX0gZnJvbSAnLi4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge0lkZW50aWZpZXJzLCBpZGVudGlmaWVyVG9rZW59IGZyb20gJy4uL2lkZW50aWZpZXJzJztcbmltcG9ydCB7aW5qZWN0RnJvbVZpZXdQYXJlbnRJbmplY3RvciwgY3JlYXRlUHVyZVByb3h5LCBnZXRQcm9wZXJ0eUluVmlld30gZnJvbSAnLi91dGlsJztcblxuY2xhc3MgX1B1cmVQaXBlUHJveHkge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmlldzogQ29tcGlsZVZpZXcsIHB1YmxpYyBpbnN0YW5jZTogby5SZWFkUHJvcEV4cHIsIHB1YmxpYyBhcmdDb3VudDogbnVtYmVyKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcGlsZVBpcGUge1xuICBzdGF0aWMgY2FsbCh2aWV3OiBDb21waWxlVmlldywgbmFtZTogc3RyaW5nLCBhcmdzOiBvLkV4cHJlc3Npb25bXSk6IG8uRXhwcmVzc2lvbiB7XG4gICAgdmFyIGNvbXBWaWV3ID0gdmlldy5jb21wb25lbnRWaWV3O1xuICAgIHZhciBtZXRhID0gX2ZpbmRQaXBlTWV0YShjb21wVmlldywgbmFtZSk7XG4gICAgdmFyIHBpcGU6IENvbXBpbGVQaXBlO1xuICAgIGlmIChtZXRhLnB1cmUpIHtcbiAgICAgIC8vIHB1cmUgcGlwZXMgbGl2ZSBvbiB0aGUgY29tcG9uZW50IHZpZXdcbiAgICAgIHBpcGUgPSBjb21wVmlldy5wdXJlUGlwZXMuZ2V0KG5hbWUpO1xuICAgICAgaWYgKGlzQmxhbmsocGlwZSkpIHtcbiAgICAgICAgcGlwZSA9IG5ldyBDb21waWxlUGlwZShjb21wVmlldywgbWV0YSk7XG4gICAgICAgIGNvbXBWaWV3LnB1cmVQaXBlcy5zZXQobmFtZSwgcGlwZSk7XG4gICAgICAgIGNvbXBWaWV3LnBpcGVzLnB1c2gocGlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vbiBwdXJlIHBpcGVzIGxpdmUgb24gdGhlIHZpZXcgdGhhdCBjYWxsZWQgaXRcbiAgICAgIHBpcGUgPSBuZXcgQ29tcGlsZVBpcGUodmlldywgbWV0YSk7XG4gICAgICB2aWV3LnBpcGVzLnB1c2gocGlwZSk7XG4gICAgfVxuICAgIHJldHVybiBwaXBlLl9jYWxsKHZpZXcsIGFyZ3MpO1xuICB9XG5cbiAgaW5zdGFuY2U6IG8uUmVhZFByb3BFeHByO1xuICBwcml2YXRlIF9wdXJlUGlwZVByb3hpZXM6IF9QdXJlUGlwZVByb3h5W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmlldzogQ29tcGlsZVZpZXcsIHB1YmxpYyBtZXRhOiBDb21waWxlUGlwZU1ldGFkYXRhKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG8uVEhJU19FWFBSLnByb3AoYF9waXBlXyR7bWV0YS5uYW1lfV8ke3ZpZXcucGlwZUNvdW50Kyt9YCk7XG4gIH1cblxuICBnZXQgcHVyZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMubWV0YS5wdXJlOyB9XG5cbiAgY3JlYXRlKCk6IHZvaWQge1xuICAgIHZhciBkZXBzID0gdGhpcy5tZXRhLnR5cGUuZGlEZXBzLm1hcCgoZGlEZXApID0+IHtcbiAgICAgIGlmIChkaURlcC50b2tlbi5lcXVhbHNUbyhpZGVudGlmaWVyVG9rZW4oSWRlbnRpZmllcnMuQ2hhbmdlRGV0ZWN0b3JSZWYpKSkge1xuICAgICAgICByZXR1cm4gby5USElTX0VYUFIucHJvcCgncmVmJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaW5qZWN0RnJvbVZpZXdQYXJlbnRJbmplY3RvcihkaURlcC50b2tlbiwgZmFsc2UpO1xuICAgIH0pO1xuICAgIHRoaXMudmlldy5maWVsZHMucHVzaChuZXcgby5DbGFzc0ZpZWxkKHRoaXMuaW5zdGFuY2UubmFtZSwgby5pbXBvcnRUeXBlKHRoaXMubWV0YS50eXBlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbby5TdG10TW9kaWZpZXIuUHJpdmF0ZV0pKTtcbiAgICB0aGlzLnZpZXcuY3JlYXRlTWV0aG9kLnJlc2V0RGVidWdJbmZvKG51bGwsIG51bGwpO1xuICAgIHRoaXMudmlldy5jcmVhdGVNZXRob2QuYWRkU3RtdChvLlRISVNfRVhQUi5wcm9wKHRoaXMuaW5zdGFuY2UubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXQoby5pbXBvcnRFeHByKHRoaXMubWV0YS50eXBlKS5pbnN0YW50aWF0ZShkZXBzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0bXQoKSk7XG4gICAgdGhpcy5fcHVyZVBpcGVQcm94aWVzLmZvckVhY2goKHB1cmVQaXBlUHJveHkpID0+IHtcbiAgICAgIHZhciBwaXBlSW5zdGFuY2VTZWVuRnJvbVB1cmVQcm94eSA9XG4gICAgICAgICAgZ2V0UHJvcGVydHlJblZpZXcodGhpcy5pbnN0YW5jZSwgcHVyZVBpcGVQcm94eS52aWV3LCB0aGlzLnZpZXcpO1xuICAgICAgY3JlYXRlUHVyZVByb3h5KHBpcGVJbnN0YW5jZVNlZW5Gcm9tUHVyZVByb3h5LnByb3AoJ3RyYW5zZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsTWV0aG9kKG8uQnVpbHRpbk1ldGhvZC5iaW5kLCBbcGlwZUluc3RhbmNlU2VlbkZyb21QdXJlUHJveHldKSxcbiAgICAgICAgICAgICAgICAgICAgICBwdXJlUGlwZVByb3h5LmFyZ0NvdW50LCBwdXJlUGlwZVByb3h5Lmluc3RhbmNlLCBwdXJlUGlwZVByb3h5LnZpZXcpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FsbChjYWxsaW5nVmlldzogQ29tcGlsZVZpZXcsIGFyZ3M6IG8uRXhwcmVzc2lvbltdKTogby5FeHByZXNzaW9uIHtcbiAgICBpZiAodGhpcy5tZXRhLnB1cmUpIHtcbiAgICAgIC8vIFB1cmVQaXBlUHJveGllcyBsaXZlIG9uIHRoZSB2aWV3IHRoYXQgY2FsbGVkIHRoZW0uXG4gICAgICB2YXIgcHVyZVBpcGVQcm94eSA9IG5ldyBfUHVyZVBpcGVQcm94eShcbiAgICAgICAgICBjYWxsaW5nVmlldywgby5USElTX0VYUFIucHJvcChgJHt0aGlzLmluc3RhbmNlLm5hbWV9XyR7dGhpcy5fcHVyZVBpcGVQcm94aWVzLmxlbmd0aH1gKSxcbiAgICAgICAgICBhcmdzLmxlbmd0aCk7XG4gICAgICB0aGlzLl9wdXJlUGlwZVByb3hpZXMucHVzaChwdXJlUGlwZVByb3h5KTtcbiAgICAgIHJldHVybiBvLmltcG9ydEV4cHIoSWRlbnRpZmllcnMuY2FzdEJ5VmFsdWUpXG4gICAgICAgICAgLmNhbGxGbihbXG4gICAgICAgICAgICBwdXJlUGlwZVByb3h5Lmluc3RhbmNlLFxuICAgICAgICAgICAgZ2V0UHJvcGVydHlJblZpZXcodGhpcy5pbnN0YW5jZS5wcm9wKCd0cmFuc2Zvcm0nKSwgY2FsbGluZ1ZpZXcsIHRoaXMudmlldylcbiAgICAgICAgICBdKVxuICAgICAgICAgIC5jYWxsRm4oYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXRQcm9wZXJ0eUluVmlldyh0aGlzLmluc3RhbmNlLCBjYWxsaW5nVmlldywgdGhpcy52aWV3KS5jYWxsTWV0aG9kKCd0cmFuc2Zvcm0nLCBhcmdzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX2ZpbmRQaXBlTWV0YSh2aWV3OiBDb21waWxlVmlldywgbmFtZTogc3RyaW5nKTogQ29tcGlsZVBpcGVNZXRhZGF0YSB7XG4gIHZhciBwaXBlTWV0YTogQ29tcGlsZVBpcGVNZXRhZGF0YSA9IG51bGw7XG4gIGZvciAodmFyIGkgPSB2aWV3LnBpcGVNZXRhcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsb2NhbFBpcGVNZXRhID0gdmlldy5waXBlTWV0YXNbaV07XG4gICAgaWYgKGxvY2FsUGlwZU1ldGEubmFtZSA9PSBuYW1lKSB7XG4gICAgICBwaXBlTWV0YSA9IGxvY2FsUGlwZU1ldGE7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgaWYgKGlzQmxhbmsocGlwZU1ldGEpKSB7XG4gICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oXG4gICAgICAgIGBJbGxlZ2FsIHN0YXRlOiBDb3VsZCBub3QgZmluZCBwaXBlICR7bmFtZX0gYWx0aG91Z2ggdGhlIHBhcnNlciBzaG91bGQgaGF2ZSBkZXRlY3RlZCB0aGlzIGVycm9yIWApO1xuICB9XG4gIHJldHVybiBwaXBlTWV0YTtcbn1cbiJdfQ==
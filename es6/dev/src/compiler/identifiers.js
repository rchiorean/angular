import { CompileIdentifierMetadata, CompileTokenMetadata } from './compile_metadata';
import { AppView, DebugAppView } from 'angular2/src/core/linker/view';
import { StaticNodeDebugInfo, DebugContext } from 'angular2/src/core/linker/debug_context';
import { ViewUtils, flattenNestedViewRenderNodes, interpolate, checkBinding, castByValue, EMPTY_ARRAY, EMPTY_MAP, pureProxy1, pureProxy2, pureProxy3, pureProxy4, pureProxy5, pureProxy6, pureProxy7, pureProxy8, pureProxy9, pureProxy10 } from 'angular2/src/core/linker/view_utils';
import { uninitialized, devModeEqual, SimpleChange, ValueUnwrapper, ChangeDetectorRef, ChangeDetectorState, ChangeDetectionStrategy } from 'angular2/src/core/change_detection/change_detection';
import { AppElement } from 'angular2/src/core/linker/element';
import { ElementRef } from 'angular2/src/core/linker/element_ref';
import { ViewContainerRef } from 'angular2/src/core/linker/view_container_ref';
import { Renderer, RenderComponentType } from 'angular2/src/core/render/api';
import { ViewEncapsulation } from 'angular2/src/core/metadata/view';
import { ViewType } from 'angular2/src/core/linker/view_type';
import { QueryList } from 'angular2/src/core/linker';
import { Injector } from 'angular2/src/core/di/injector';
import { TemplateRef, TemplateRef_ } from 'angular2/src/core/linker/template_ref';
import { MODULE_SUFFIX } from './util';
import { CodegenInjector, CodegenInjectorFactory } from 'angular2/src/core/linker/injector_factory';
var APP_VIEW_MODULE_URL = 'asset:angular2/lib/src/core/linker/view' + MODULE_SUFFIX;
var VIEW_UTILS_MODULE_URL = 'asset:angular2/lib/src/core/linker/view_utils' + MODULE_SUFFIX;
var CD_MODULE_URL = 'asset:angular2/lib/src/core/change_detection/change_detection' + MODULE_SUFFIX;
// Reassign the imports to different variables so we can
// define static variables with the name of the import.
// (only needed for Dart).
var impViewUtils = ViewUtils;
var impAppView = AppView;
var impDebugAppView = DebugAppView;
var impDebugContext = DebugContext;
var impAppElement = AppElement;
var impElementRef = ElementRef;
var impViewContainerRef = ViewContainerRef;
var impChangeDetectorRef = ChangeDetectorRef;
var impRenderComponentType = RenderComponentType;
var impQueryList = QueryList;
var impTemplateRef = TemplateRef;
var impTemplateRef_ = TemplateRef_;
var impValueUnwrapper = ValueUnwrapper;
var impInjector = Injector;
var impCodegenInjector = CodegenInjector;
var impCodegenInjectorFactory = CodegenInjectorFactory;
var impViewEncapsulation = ViewEncapsulation;
var impViewType = ViewType;
var impChangeDetectionStrategy = ChangeDetectionStrategy;
var impStaticNodeDebugInfo = StaticNodeDebugInfo;
var impRenderer = Renderer;
var impSimpleChange = SimpleChange;
var impUninitialized = uninitialized;
var impChangeDetectorState = ChangeDetectorState;
var impFlattenNestedViewRenderNodes = flattenNestedViewRenderNodes;
var impDevModeEqual = devModeEqual;
var impInterpolate = interpolate;
var impCheckBinding = checkBinding;
var impCastByValue = castByValue;
var impEMPTY_ARRAY = EMPTY_ARRAY;
var impEMPTY_MAP = EMPTY_MAP;
export class Identifiers {
}
Identifiers.ViewUtils = new CompileIdentifierMetadata({
    name: 'ViewUtils',
    moduleUrl: 'asset:angular2/lib/src/core/linker/view_utils' + MODULE_SUFFIX,
    runtime: impViewUtils
});
Identifiers.AppView = new CompileIdentifierMetadata({ name: 'AppView', moduleUrl: APP_VIEW_MODULE_URL, runtime: impAppView });
Identifiers.DebugAppView = new CompileIdentifierMetadata({ name: 'DebugAppView', moduleUrl: APP_VIEW_MODULE_URL, runtime: impDebugAppView });
Identifiers.AppElement = new CompileIdentifierMetadata({
    name: 'AppElement',
    moduleUrl: 'asset:angular2/lib/src/core/linker/element' + MODULE_SUFFIX,
    runtime: impAppElement
});
Identifiers.ElementRef = new CompileIdentifierMetadata({
    name: 'ElementRef',
    moduleUrl: 'asset:angular2/lib/src/core/linker/element_ref' + MODULE_SUFFIX,
    runtime: impElementRef
});
Identifiers.ViewContainerRef = new CompileIdentifierMetadata({
    name: 'ViewContainerRef',
    moduleUrl: 'asset:angular2/lib/src/core/linker/view_container_ref' + MODULE_SUFFIX,
    runtime: impViewContainerRef
});
Identifiers.ChangeDetectorRef = new CompileIdentifierMetadata({
    name: 'ChangeDetectorRef',
    moduleUrl: 'asset:angular2/lib/src/core/change_detection/change_detector_ref' + MODULE_SUFFIX,
    runtime: impChangeDetectorRef
});
Identifiers.RenderComponentType = new CompileIdentifierMetadata({
    name: 'RenderComponentType',
    moduleUrl: 'asset:angular2/lib/src/core/render/api' + MODULE_SUFFIX,
    runtime: impRenderComponentType
});
Identifiers.QueryList = new CompileIdentifierMetadata({
    name: 'QueryList',
    moduleUrl: 'asset:angular2/lib/src/core/linker/query_list' + MODULE_SUFFIX,
    runtime: impQueryList
});
Identifiers.TemplateRef = new CompileIdentifierMetadata({
    name: 'TemplateRef',
    moduleUrl: 'asset:angular2/lib/src/core/linker/template_ref' + MODULE_SUFFIX,
    runtime: impTemplateRef
});
Identifiers.TemplateRef_ = new CompileIdentifierMetadata({
    name: 'TemplateRef_',
    moduleUrl: 'asset:angular2/lib/src/core/linker/template_ref' + MODULE_SUFFIX,
    runtime: impTemplateRef_
});
Identifiers.ValueUnwrapper = new CompileIdentifierMetadata({ name: 'ValueUnwrapper', moduleUrl: CD_MODULE_URL, runtime: impValueUnwrapper });
Identifiers.Injector = new CompileIdentifierMetadata({
    name: 'Injector',
    moduleUrl: `asset:angular2/lib/src/core/di/injector${MODULE_SUFFIX}`,
    runtime: impInjector
});
Identifiers.InjectorFactory = new CompileIdentifierMetadata({
    name: 'CodegenInjectorFactory',
    moduleUrl: `asset:angular2/lib/src/core/linker/injector_factory${MODULE_SUFFIX}`,
    runtime: impCodegenInjectorFactory
});
Identifiers.CodegenInjector = new CompileIdentifierMetadata({
    name: 'CodegenInjector',
    moduleUrl: `asset:angular2/lib/src/core/linker/injector_factory${MODULE_SUFFIX}`,
    runtime: impCodegenInjector
});
Identifiers.ViewEncapsulation = new CompileIdentifierMetadata({
    name: 'ViewEncapsulation',
    moduleUrl: 'asset:angular2/lib/src/core/metadata/view' + MODULE_SUFFIX,
    runtime: impViewEncapsulation
});
Identifiers.ViewType = new CompileIdentifierMetadata({
    name: 'ViewType',
    moduleUrl: `asset:angular2/lib/src/core/linker/view_type${MODULE_SUFFIX}`,
    runtime: impViewType
});
Identifiers.ChangeDetectionStrategy = new CompileIdentifierMetadata({
    name: 'ChangeDetectionStrategy',
    moduleUrl: CD_MODULE_URL,
    runtime: impChangeDetectionStrategy
});
Identifiers.StaticNodeDebugInfo = new CompileIdentifierMetadata({
    name: 'StaticNodeDebugInfo',
    moduleUrl: `asset:angular2/lib/src/core/linker/debug_context${MODULE_SUFFIX}`,
    runtime: impStaticNodeDebugInfo
});
Identifiers.DebugContext = new CompileIdentifierMetadata({
    name: 'DebugContext',
    moduleUrl: `asset:angular2/lib/src/core/linker/debug_context${MODULE_SUFFIX}`,
    runtime: impDebugContext
});
Identifiers.Renderer = new CompileIdentifierMetadata({
    name: 'Renderer',
    moduleUrl: 'asset:angular2/lib/src/core/render/api' + MODULE_SUFFIX,
    runtime: impRenderer
});
Identifiers.SimpleChange = new CompileIdentifierMetadata({ name: 'SimpleChange', moduleUrl: CD_MODULE_URL, runtime: impSimpleChange });
Identifiers.uninitialized = new CompileIdentifierMetadata({ name: 'uninitialized', moduleUrl: CD_MODULE_URL, runtime: impUninitialized });
Identifiers.ChangeDetectorState = new CompileIdentifierMetadata({ name: 'ChangeDetectorState', moduleUrl: CD_MODULE_URL, runtime: impChangeDetectorState });
Identifiers.checkBinding = new CompileIdentifierMetadata({ name: 'checkBinding', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: impCheckBinding });
Identifiers.flattenNestedViewRenderNodes = new CompileIdentifierMetadata({
    name: 'flattenNestedViewRenderNodes',
    moduleUrl: VIEW_UTILS_MODULE_URL,
    runtime: impFlattenNestedViewRenderNodes
});
Identifiers.devModeEqual = new CompileIdentifierMetadata({ name: 'devModeEqual', moduleUrl: CD_MODULE_URL, runtime: impDevModeEqual });
Identifiers.interpolate = new CompileIdentifierMetadata({ name: 'interpolate', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: impInterpolate });
Identifiers.castByValue = new CompileIdentifierMetadata({ name: 'castByValue', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: impCastByValue });
Identifiers.EMPTY_ARRAY = new CompileIdentifierMetadata({ name: 'EMPTY_ARRAY', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: impEMPTY_ARRAY });
Identifiers.EMPTY_MAP = new CompileIdentifierMetadata({ name: 'EMPTY_MAP', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: impEMPTY_MAP });
Identifiers.pureProxies = [
    null,
    new CompileIdentifierMetadata({ name: 'pureProxy1', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy1 }),
    new CompileIdentifierMetadata({ name: 'pureProxy2', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy2 }),
    new CompileIdentifierMetadata({ name: 'pureProxy3', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy3 }),
    new CompileIdentifierMetadata({ name: 'pureProxy4', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy4 }),
    new CompileIdentifierMetadata({ name: 'pureProxy5', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy5 }),
    new CompileIdentifierMetadata({ name: 'pureProxy6', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy6 }),
    new CompileIdentifierMetadata({ name: 'pureProxy7', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy7 }),
    new CompileIdentifierMetadata({ name: 'pureProxy8', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy8 }),
    new CompileIdentifierMetadata({ name: 'pureProxy9', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy9 }),
    new CompileIdentifierMetadata({ name: 'pureProxy10', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy10 }),
];
export function identifierToken(identifier) {
    return new CompileTokenMetadata({ identifier: identifier });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZmllcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLXhSRXJJem5FLnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvaWRlbnRpZmllcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyx5QkFBeUIsRUFBRSxvQkFBb0IsRUFBQyxNQUFNLG9CQUFvQjtPQUMzRSxFQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUMsTUFBTSwrQkFBK0I7T0FDNUQsRUFBQyxtQkFBbUIsRUFBRSxZQUFZLEVBQUMsTUFBTSx3Q0FBd0M7T0FDakYsRUFDTCxTQUFTLEVBQ1QsNEJBQTRCLEVBQzVCLFdBQVcsRUFDWCxZQUFZLEVBQ1osV0FBVyxFQUNYLFdBQVcsRUFDWCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixVQUFVLEVBQ1YsVUFBVSxFQUNWLFVBQVUsRUFDVixVQUFVLEVBQ1YsVUFBVSxFQUNWLFVBQVUsRUFDVixVQUFVLEVBQ1YsV0FBVyxFQUNaLE1BQU0scUNBQXFDO09BQ3JDLEVBQ0wsYUFBYSxFQUNiLFlBQVksRUFDWixZQUFZLEVBQ1osY0FBYyxFQUNkLGlCQUFpQixFQUNqQixtQkFBbUIsRUFDbkIsdUJBQXVCLEVBQ3hCLE1BQU0scURBQXFEO09BQ3JELEVBQUMsVUFBVSxFQUFDLE1BQU0sa0NBQWtDO09BQ3BELEVBQUMsVUFBVSxFQUFDLE1BQU0sc0NBQXNDO09BQ3hELEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2Q0FBNkM7T0FDckUsRUFBQyxRQUFRLEVBQUUsbUJBQW1CLEVBQWtCLE1BQU0sOEJBQThCO09BQ3BGLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQ0FBaUM7T0FDMUQsRUFBQyxRQUFRLEVBQUMsTUFBTSxvQ0FBb0M7T0FDcEQsRUFBQyxTQUFTLEVBQUMsTUFBTSwwQkFBMEI7T0FDM0MsRUFBQyxRQUFRLEVBQUMsTUFBTSwrQkFBK0I7T0FDL0MsRUFBQyxX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QixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQztJQUNoRixJQUFJLHlCQUF5QixDQUN6QixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQztJQUNoRixJQUFJLHlCQUF5QixDQUN6QixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQztJQUNoRixJQUFJLHlCQUF5QixDQUN6QixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQztJQUNoRixJQUFJLHlCQUF5QixDQUN6QixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQztJQUNoRixJQUFJLHlCQUF5QixDQUN6QixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQztJQUNoRixJQUFJLHlCQUF5QixDQUN6QixFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUMsQ0FBQztDQUNuRixDQUNGO0FBRUQsZ0NBQWdDLFVBQXFDO0lBQ25FLE1BQU0sQ0FBQyxJQUFJLG9CQUFvQixDQUFDLEVBQUMsVUFBVSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7QUFDNUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSwgQ29tcGlsZVRva2VuTWV0YWRhdGF9IGZyb20gJy4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge0FwcFZpZXcsIERlYnVnQXBwVmlld30gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL3ZpZXcnO1xuaW1wb3J0IHtTdGF0aWNOb2RlRGVidWdJbmZvLCBEZWJ1Z0NvbnRleHR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9kZWJ1Z19jb250ZXh0JztcbmltcG9ydCB7XG4gIFZpZXdVdGlscyxcbiAgZmxhdHRlbk5lc3RlZFZpZXdSZW5kZXJOb2RlcyxcbiAgaW50ZXJwb2xhdGUsXG4gIGNoZWNrQmluZGluZyxcbiAgY2FzdEJ5VmFsdWUsXG4gIEVNUFRZX0FSUkFZLFxuICBFTVBUWV9NQVAsXG4gIHB1cmVQcm94eTEsXG4gIHB1cmVQcm94eTIsXG4gIHB1cmVQcm94eTMsXG4gIHB1cmVQcm94eTQsXG4gIHB1cmVQcm94eTUsXG4gIHB1cmVQcm94eTYsXG4gIHB1cmVQcm94eTcsXG4gIHB1cmVQcm94eTgsXG4gIHB1cmVQcm94eTksXG4gIHB1cmVQcm94eTEwXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci92aWV3X3V0aWxzJztcbmltcG9ydCB7XG4gIHVuaW5pdGlhbGl6ZWQsXG4gIGRldk1vZGVFcXVhbCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBWYWx1ZVVud3JhcHBlcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENoYW5nZURldGVjdG9yU3RhdGUsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdGlvbic7XG5pbXBvcnQge0FwcEVsZW1lbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9lbGVtZW50JztcbmltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL2VsZW1lbnRfcmVmJztcbmltcG9ydCB7Vmlld0NvbnRhaW5lclJlZn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL3ZpZXdfY29udGFpbmVyX3JlZic7XG5pbXBvcnQge1JlbmRlcmVyLCBSZW5kZXJDb21wb25lbnRUeXBlLCBSZW5kZXJEZWJ1Z0luZm99IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3JlbmRlci9hcGknO1xuaW1wb3J0IHtWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbWV0YWRhdGEvdmlldyc7XG5pbXBvcnQge1ZpZXdUeXBlfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvdmlld190eXBlJztcbmltcG9ydCB7UXVlcnlMaXN0fSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXInO1xuaW1wb3J0IHtJbmplY3Rvcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvZGkvaW5qZWN0b3InO1xuaW1wb3J0IHtUZW1wbGF0ZVJlZiwgVGVtcGxhdGVSZWZffSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvdGVtcGxhdGVfcmVmJztcbmltcG9ydCB7TU9EVUxFX1NVRkZJWH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7Q29kZWdlbkluamVjdG9yLCBDb2RlZ2VuSW5qZWN0b3JGYWN0b3J5fSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvaW5qZWN0b3JfZmFjdG9yeSc7XG5cbnZhciBBUFBfVklFV19NT0RVTEVfVVJMID0gJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvdmlldycgKyBNT0RVTEVfU1VGRklYO1xudmFyIFZJRVdfVVRJTFNfTU9EVUxFX1VSTCA9ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL3ZpZXdfdXRpbHMnICsgTU9EVUxFX1NVRkZJWDtcbnZhciBDRF9NT0RVTEVfVVJMID0gJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rpb24nICsgTU9EVUxFX1NVRkZJWDtcblxuLy8gUmVhc3NpZ24gdGhlIGltcG9ydHMgdG8gZGlmZmVyZW50IHZhcmlhYmxlcyBzbyB3ZSBjYW5cbi8vIGRlZmluZSBzdGF0aWMgdmFyaWFibGVzIHdpdGggdGhlIG5hbWUgb2YgdGhlIGltcG9ydC5cbi8vIChvbmx5IG5lZWRlZCBmb3IgRGFydCkuXG52YXIgaW1wVmlld1V0aWxzID0gVmlld1V0aWxzO1xudmFyIGltcEFwcFZpZXcgPSBBcHBWaWV3O1xudmFyIGltcERlYnVnQXBwVmlldyA9IERlYnVnQXBwVmlldztcbnZhciBpbXBEZWJ1Z0NvbnRleHQgPSBEZWJ1Z0NvbnRleHQ7XG52YXIgaW1wQXBwRWxlbWVudCA9IEFwcEVsZW1lbnQ7XG52YXIgaW1wRWxlbWVudFJlZiA9IEVsZW1lbnRSZWY7XG52YXIgaW1wVmlld0NvbnRhaW5lclJlZiA9IFZpZXdDb250YWluZXJSZWY7XG52YXIgaW1wQ2hhbmdlRGV0ZWN0b3JSZWYgPSBDaGFuZ2VEZXRlY3RvclJlZjtcbnZhciBpbXBSZW5kZXJDb21wb25lbnRUeXBlID0gUmVuZGVyQ29tcG9uZW50VHlwZTtcbnZhciBpbXBRdWVyeUxpc3QgPSBRdWVyeUxpc3Q7XG52YXIgaW1wVGVtcGxhdGVSZWYgPSBUZW1wbGF0ZVJlZjtcbnZhciBpbXBUZW1wbGF0ZVJlZl8gPSBUZW1wbGF0ZVJlZl87XG52YXIgaW1wVmFsdWVVbndyYXBwZXIgPSBWYWx1ZVVud3JhcHBlcjtcbnZhciBpbXBJbmplY3RvciA9IEluamVjdG9yO1xudmFyIGltcENvZGVnZW5JbmplY3RvciA9IENvZGVnZW5JbmplY3RvcjtcbnZhciBpbXBDb2RlZ2VuSW5qZWN0b3JGYWN0b3J5ID0gQ29kZWdlbkluamVjdG9yRmFjdG9yeTtcbnZhciBpbXBWaWV3RW5jYXBzdWxhdGlvbiA9IFZpZXdFbmNhcHN1bGF0aW9uO1xudmFyIGltcFZpZXdUeXBlID0gVmlld1R5cGU7XG52YXIgaW1wQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgPSBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneTtcbnZhciBpbXBTdGF0aWNOb2RlRGVidWdJbmZvID0gU3RhdGljTm9kZURlYnVnSW5mbztcbnZhciBpbXBSZW5kZXJlciA9IFJlbmRlcmVyO1xudmFyIGltcFNpbXBsZUNoYW5nZSA9IFNpbXBsZUNoYW5nZTtcbnZhciBpbXBVbmluaXRpYWxpemVkID0gdW5pbml0aWFsaXplZDtcbnZhciBpbXBDaGFuZ2VEZXRlY3RvclN0YXRlID0gQ2hhbmdlRGV0ZWN0b3JTdGF0ZTtcbnZhciBpbXBGbGF0dGVuTmVzdGVkVmlld1JlbmRlck5vZGVzID0gZmxhdHRlbk5lc3RlZFZpZXdSZW5kZXJOb2RlcztcbnZhciBpbXBEZXZNb2RlRXF1YWwgPSBkZXZNb2RlRXF1YWw7XG52YXIgaW1wSW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcbnZhciBpbXBDaGVja0JpbmRpbmcgPSBjaGVja0JpbmRpbmc7XG52YXIgaW1wQ2FzdEJ5VmFsdWUgPSBjYXN0QnlWYWx1ZTtcbnZhciBpbXBFTVBUWV9BUlJBWSA9IEVNUFRZX0FSUkFZO1xudmFyIGltcEVNUFRZX01BUCA9IEVNUFRZX01BUDtcblxuZXhwb3J0IGNsYXNzIElkZW50aWZpZXJzIHtcbiAgc3RhdGljIFZpZXdVdGlscyA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnVmlld1V0aWxzJyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL3ZpZXdfdXRpbHMnICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBWaWV3VXRpbHNcbiAgfSk7XG4gIHN0YXRpYyBBcHBWaWV3ID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoXG4gICAgICB7bmFtZTogJ0FwcFZpZXcnLCBtb2R1bGVVcmw6IEFQUF9WSUVXX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcEFwcFZpZXd9KTtcbiAgc3RhdGljIERlYnVnQXBwVmlldyA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICdEZWJ1Z0FwcFZpZXcnLCBtb2R1bGVVcmw6IEFQUF9WSUVXX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcERlYnVnQXBwVmlld30pO1xuICBzdGF0aWMgQXBwRWxlbWVudCA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnQXBwRWxlbWVudCcsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci9lbGVtZW50JyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wQXBwRWxlbWVudFxuICB9KTtcbiAgc3RhdGljIEVsZW1lbnRSZWYgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ0VsZW1lbnRSZWYnLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvZWxlbWVudF9yZWYnICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBFbGVtZW50UmVmXG4gIH0pO1xuICBzdGF0aWMgVmlld0NvbnRhaW5lclJlZiA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnVmlld0NvbnRhaW5lclJlZicsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci92aWV3X2NvbnRhaW5lcl9yZWYnICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBWaWV3Q29udGFpbmVyUmVmXG4gIH0pO1xuICBzdGF0aWMgQ2hhbmdlRGV0ZWN0b3JSZWYgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ0NoYW5nZURldGVjdG9yUmVmJyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0b3JfcmVmJyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgfSk7XG4gIHN0YXRpYyBSZW5kZXJDb21wb25lbnRUeXBlID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdSZW5kZXJDb21wb25lbnRUeXBlJyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvcmVuZGVyL2FwaScgKyBNT0RVTEVfU1VGRklYLFxuICAgIHJ1bnRpbWU6IGltcFJlbmRlckNvbXBvbmVudFR5cGVcbiAgfSk7XG4gIHN0YXRpYyBRdWVyeUxpc3QgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ1F1ZXJ5TGlzdCcsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci9xdWVyeV9saXN0JyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wUXVlcnlMaXN0XG4gIH0pO1xuICBzdGF0aWMgVGVtcGxhdGVSZWYgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ1RlbXBsYXRlUmVmJyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL3RlbXBsYXRlX3JlZicgKyBNT0RVTEVfU1VGRklYLFxuICAgIHJ1bnRpbWU6IGltcFRlbXBsYXRlUmVmXG4gIH0pO1xuICBzdGF0aWMgVGVtcGxhdGVSZWZfID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdUZW1wbGF0ZVJlZl8nLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvdGVtcGxhdGVfcmVmJyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wVGVtcGxhdGVSZWZfXG4gIH0pO1xuICBzdGF0aWMgVmFsdWVVbndyYXBwZXIgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgIHtuYW1lOiAnVmFsdWVVbndyYXBwZXInLCBtb2R1bGVVcmw6IENEX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcFZhbHVlVW53cmFwcGVyfSk7XG4gIHN0YXRpYyBJbmplY3RvciA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnSW5qZWN0b3InLFxuICAgIG1vZHVsZVVybDogYGFzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9kaS9pbmplY3RvciR7TU9EVUxFX1NVRkZJWH1gLFxuICAgIHJ1bnRpbWU6IGltcEluamVjdG9yXG4gIH0pO1xuICBzdGF0aWMgSW5qZWN0b3JGYWN0b3J5ID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdDb2RlZ2VuSW5qZWN0b3JGYWN0b3J5JyxcbiAgICBtb2R1bGVVcmw6IGBhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL2luamVjdG9yX2ZhY3Rvcnkke01PRFVMRV9TVUZGSVh9YCxcbiAgICBydW50aW1lOiBpbXBDb2RlZ2VuSW5qZWN0b3JGYWN0b3J5XG4gIH0pO1xuICBzdGF0aWMgQ29kZWdlbkluamVjdG9yID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdDb2RlZ2VuSW5qZWN0b3InLFxuICAgIG1vZHVsZVVybDogYGFzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvaW5qZWN0b3JfZmFjdG9yeSR7TU9EVUxFX1NVRkZJWH1gLFxuICAgIHJ1bnRpbWU6IGltcENvZGVnZW5JbmplY3RvclxuICB9KTtcbiAgc3RhdGljIFZpZXdFbmNhcHN1bGF0aW9uID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdWaWV3RW5jYXBzdWxhdGlvbicsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL21ldGFkYXRhL3ZpZXcnICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBWaWV3RW5jYXBzdWxhdGlvblxuICB9KTtcbiAgc3RhdGljIFZpZXdUeXBlID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdWaWV3VHlwZScsXG4gICAgbW9kdWxlVXJsOiBgYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci92aWV3X3R5cGUke01PRFVMRV9TVUZGSVh9YCxcbiAgICBydW50aW1lOiBpbXBWaWV3VHlwZVxuICB9KTtcbiAgc3RhdGljIENoYW5nZURldGVjdGlvblN0cmF0ZWd5ID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneScsXG4gICAgbW9kdWxlVXJsOiBDRF9NT0RVTEVfVVJMLFxuICAgIHJ1bnRpbWU6IGltcENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG4gIH0pO1xuICBzdGF0aWMgU3RhdGljTm9kZURlYnVnSW5mbyA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnU3RhdGljTm9kZURlYnVnSW5mbycsXG4gICAgbW9kdWxlVXJsOiBgYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci9kZWJ1Z19jb250ZXh0JHtNT0RVTEVfU1VGRklYfWAsXG4gICAgcnVudGltZTogaW1wU3RhdGljTm9kZURlYnVnSW5mb1xuICB9KTtcbiAgc3RhdGljIERlYnVnQ29udGV4dCA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnRGVidWdDb250ZXh0JyxcbiAgICBtb2R1bGVVcmw6IGBhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL2RlYnVnX2NvbnRleHQke01PRFVMRV9TVUZGSVh9YCxcbiAgICBydW50aW1lOiBpbXBEZWJ1Z0NvbnRleHRcbiAgfSk7XG4gIHN0YXRpYyBSZW5kZXJlciA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnUmVuZGVyZXInLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9yZW5kZXIvYXBpJyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wUmVuZGVyZXJcbiAgfSk7XG4gIHN0YXRpYyBTaW1wbGVDaGFuZ2UgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgIHtuYW1lOiAnU2ltcGxlQ2hhbmdlJywgbW9kdWxlVXJsOiBDRF9NT0RVTEVfVVJMLCBydW50aW1lOiBpbXBTaW1wbGVDaGFuZ2V9KTtcbiAgc3RhdGljIHVuaW5pdGlhbGl6ZWQgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgIHtuYW1lOiAndW5pbml0aWFsaXplZCcsIG1vZHVsZVVybDogQ0RfTU9EVUxFX1VSTCwgcnVudGltZTogaW1wVW5pbml0aWFsaXplZH0pO1xuICBzdGF0aWMgQ2hhbmdlRGV0ZWN0b3JTdGF0ZSA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICdDaGFuZ2VEZXRlY3RvclN0YXRlJywgbW9kdWxlVXJsOiBDRF9NT0RVTEVfVVJMLCBydW50aW1lOiBpbXBDaGFuZ2VEZXRlY3RvclN0YXRlfSk7XG4gIHN0YXRpYyBjaGVja0JpbmRpbmcgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgIHtuYW1lOiAnY2hlY2tCaW5kaW5nJywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcENoZWNrQmluZGluZ30pO1xuICBzdGF0aWMgZmxhdHRlbk5lc3RlZFZpZXdSZW5kZXJOb2RlcyA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnZmxhdHRlbk5lc3RlZFZpZXdSZW5kZXJOb2RlcycsXG4gICAgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsXG4gICAgcnVudGltZTogaW1wRmxhdHRlbk5lc3RlZFZpZXdSZW5kZXJOb2Rlc1xuICB9KTtcbiAgc3RhdGljIGRldk1vZGVFcXVhbCA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICdkZXZNb2RlRXF1YWwnLCBtb2R1bGVVcmw6IENEX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcERldk1vZGVFcXVhbH0pO1xuICBzdGF0aWMgaW50ZXJwb2xhdGUgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgIHtuYW1lOiAnaW50ZXJwb2xhdGUnLCBtb2R1bGVVcmw6IFZJRVdfVVRJTFNfTU9EVUxFX1VSTCwgcnVudGltZTogaW1wSW50ZXJwb2xhdGV9KTtcbiAgc3RhdGljIGNhc3RCeVZhbHVlID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoXG4gICAgICB7bmFtZTogJ2Nhc3RCeVZhbHVlJywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcENhc3RCeVZhbHVlfSk7XG4gIHN0YXRpYyBFTVBUWV9BUlJBWSA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICdFTVBUWV9BUlJBWScsIG1vZHVsZVVybDogVklFV19VVElMU19NT0RVTEVfVVJMLCBydW50aW1lOiBpbXBFTVBUWV9BUlJBWX0pO1xuICBzdGF0aWMgRU1QVFlfTUFQID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoXG4gICAgICB7bmFtZTogJ0VNUFRZX01BUCcsIG1vZHVsZVVybDogVklFV19VVElMU19NT0RVTEVfVVJMLCBydW50aW1lOiBpbXBFTVBUWV9NQVB9KTtcblxuICBzdGF0aWMgcHVyZVByb3hpZXMgPSBbXG4gICAgbnVsbCxcbiAgICBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgICAge25hbWU6ICdwdXJlUHJveHkxJywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IHB1cmVQcm94eTF9KSxcbiAgICBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgICAge25hbWU6ICdwdXJlUHJveHkyJywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IHB1cmVQcm94eTJ9KSxcbiAgICBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgICAge25hbWU6ICdwdXJlUHJveHkzJywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IHB1cmVQcm94eTN9KSxcbiAgICBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgICAge25hbWU6ICdwdXJlUHJveHk0JywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IHB1cmVQcm94eTR9KSxcbiAgICBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgICAge25hbWU6ICdwdXJlUHJveHk1JywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IHB1cmVQcm94eTV9KSxcbiAgICBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgICAge25hbWU6ICdwdXJlUHJveHk2JywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IHB1cmVQcm94eTZ9KSxcbiAgICBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgICAge25hbWU6ICdwdXJlUHJveHk3JywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IHB1cmVQcm94eTd9KSxcbiAgICBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgICAge25hbWU6ICdwdXJlUHJveHk4JywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IHB1cmVQcm94eTh9KSxcbiAgICBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgICAge25hbWU6ICdwdXJlUHJveHk5JywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IHB1cmVQcm94eTl9KSxcbiAgICBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgICAge25hbWU6ICdwdXJlUHJveHkxMCcsIG1vZHVsZVVybDogVklFV19VVElMU19NT0RVTEVfVVJMLCBydW50aW1lOiBwdXJlUHJveHkxMH0pLFxuICBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllclRva2VuKGlkZW50aWZpZXI6IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEpOiBDb21waWxlVG9rZW5NZXRhZGF0YSB7XG4gIHJldHVybiBuZXcgQ29tcGlsZVRva2VuTWV0YWRhdGEoe2lkZW50aWZpZXI6IGlkZW50aWZpZXJ9KTtcbn1cbiJdfQ==
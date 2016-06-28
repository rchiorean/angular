'use strict';"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
/**
 * @module
 * @description
 * Starting point to import all compiler APIs.
 */
var compiler_1 = require('angular2/src/compiler/compiler');
exports.PLATFORM_DIRECTIVES = compiler_1.PLATFORM_DIRECTIVES;
exports.PLATFORM_PIPES = compiler_1.PLATFORM_PIPES;
exports.COMPILER_PROVIDERS = compiler_1.COMPILER_PROVIDERS;
exports.TEMPLATE_TRANSFORMS = compiler_1.TEMPLATE_TRANSFORMS;
exports.CompilerConfig = compiler_1.CompilerConfig;
exports.RenderTypes = compiler_1.RenderTypes;
exports.UrlResolver = compiler_1.UrlResolver;
exports.DEFAULT_PACKAGE_URL_PROVIDER = compiler_1.DEFAULT_PACKAGE_URL_PROVIDER;
exports.createOfflineCompileUrlResolver = compiler_1.createOfflineCompileUrlResolver;
exports.XHR = compiler_1.XHR;
exports.ViewResolver = compiler_1.ViewResolver;
exports.DirectiveResolver = compiler_1.DirectiveResolver;
exports.PipeResolver = compiler_1.PipeResolver;
exports.SourceModule = compiler_1.SourceModule;
exports.NormalizedComponentWithViewDirectives = compiler_1.NormalizedComponentWithViewDirectives;
exports.OfflineCompiler = compiler_1.OfflineCompiler;
exports.CompileMetadataWithIdentifier = compiler_1.CompileMetadataWithIdentifier;
exports.CompileMetadataWithType = compiler_1.CompileMetadataWithType;
exports.CompileIdentifierMetadata = compiler_1.CompileIdentifierMetadata;
exports.CompileDiDependencyMetadata = compiler_1.CompileDiDependencyMetadata;
exports.CompileProviderMetadata = compiler_1.CompileProviderMetadata;
exports.CompileFactoryMetadata = compiler_1.CompileFactoryMetadata;
exports.CompileTokenMetadata = compiler_1.CompileTokenMetadata;
exports.CompileTypeMetadata = compiler_1.CompileTypeMetadata;
exports.CompileQueryMetadata = compiler_1.CompileQueryMetadata;
exports.CompileTemplateMetadata = compiler_1.CompileTemplateMetadata;
exports.CompileDirectiveMetadata = compiler_1.CompileDirectiveMetadata;
exports.CompileInjectorModuleMetadata = compiler_1.CompileInjectorModuleMetadata;
exports.CompilePipeMetadata = compiler_1.CompilePipeMetadata;
__export(require('angular2/src/compiler/template_ast'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLWNpQW9zT2tkLnRtcC9hbmd1bGFyMi9jb21waWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7R0FJRztBQUNILHlCQThCTyxnQ0FBZ0MsQ0FBQztBQTdCdEMsNkRBQW1CO0FBQ25CLG1EQUFjO0FBQ2QsMkRBQWtCO0FBQ2xCLDZEQUFtQjtBQUNuQixtREFBYztBQUNkLDZDQUFXO0FBQ1gsNkNBQVc7QUFDWCwrRUFBNEI7QUFDNUIscUZBQStCO0FBQy9CLDZCQUFHO0FBQ0gsK0NBQVk7QUFDWix5REFBaUI7QUFDakIsK0NBQVk7QUFDWiwrQ0FBWTtBQUNaLGlHQUFxQztBQUNyQyxxREFBZTtBQUNmLGlGQUE2QjtBQUM3QixxRUFBdUI7QUFDdkIseUVBQXlCO0FBQ3pCLDZFQUEyQjtBQUMzQixxRUFBdUI7QUFDdkIsbUVBQXNCO0FBQ3RCLCtEQUFvQjtBQUNwQiw2REFBbUI7QUFDbkIsK0RBQW9CO0FBQ3BCLHFFQUF1QjtBQUN2Qix1RUFBd0I7QUFDeEIsaUZBQTZCO0FBQzdCLDZEQUNzQztBQUV4QyxpQkFBYyxvQ0FBb0MsQ0FBQyxFQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN0YXJ0aW5nIHBvaW50IHRvIGltcG9ydCBhbGwgY29tcGlsZXIgQVBJcy5cbiAqL1xuZXhwb3J0IHtcbiAgUExBVEZPUk1fRElSRUNUSVZFUyxcbiAgUExBVEZPUk1fUElQRVMsXG4gIENPTVBJTEVSX1BST1ZJREVSUyxcbiAgVEVNUExBVEVfVFJBTlNGT1JNUyxcbiAgQ29tcGlsZXJDb25maWcsXG4gIFJlbmRlclR5cGVzLFxuICBVcmxSZXNvbHZlcixcbiAgREVGQVVMVF9QQUNLQUdFX1VSTF9QUk9WSURFUixcbiAgY3JlYXRlT2ZmbGluZUNvbXBpbGVVcmxSZXNvbHZlcixcbiAgWEhSLFxuICBWaWV3UmVzb2x2ZXIsXG4gIERpcmVjdGl2ZVJlc29sdmVyLFxuICBQaXBlUmVzb2x2ZXIsXG4gIFNvdXJjZU1vZHVsZSxcbiAgTm9ybWFsaXplZENvbXBvbmVudFdpdGhWaWV3RGlyZWN0aXZlcyxcbiAgT2ZmbGluZUNvbXBpbGVyLFxuICBDb21waWxlTWV0YWRhdGFXaXRoSWRlbnRpZmllcixcbiAgQ29tcGlsZU1ldGFkYXRhV2l0aFR5cGUsXG4gIENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEsXG4gIENvbXBpbGVEaURlcGVuZGVuY3lNZXRhZGF0YSxcbiAgQ29tcGlsZVByb3ZpZGVyTWV0YWRhdGEsXG4gIENvbXBpbGVGYWN0b3J5TWV0YWRhdGEsXG4gIENvbXBpbGVUb2tlbk1ldGFkYXRhLFxuICBDb21waWxlVHlwZU1ldGFkYXRhLFxuICBDb21waWxlUXVlcnlNZXRhZGF0YSxcbiAgQ29tcGlsZVRlbXBsYXRlTWV0YWRhdGEsXG4gIENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSxcbiAgQ29tcGlsZUluamVjdG9yTW9kdWxlTWV0YWRhdGEsXG4gIENvbXBpbGVQaXBlTWV0YWRhdGFcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL2NvbXBpbGVyJztcblxuZXhwb3J0ICogZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3RlbXBsYXRlX2FzdCc7XG4iXX0=
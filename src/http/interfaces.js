'use strict';/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {@link Request}.
 */
var ConnectionBackend = (function () {
    function ConnectionBackend() {
    }
    return ConnectionBackend;
})();
exports.ConnectionBackend = ConnectionBackend;
/**
 * Abstract class from which real connections are derived.
 */
var Connection = (function () {
    function Connection() {
    }
    return Connection;
})();
exports.Connection = Connection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtUHZPdVJqdngudG1wL2FuZ3VsYXIyL3NyYy9odHRwL2ludGVyZmFjZXMudHMiXSwibmFtZXMiOlsiQ29ubmVjdGlvbkJhY2tlbmQiLCJDb25uZWN0aW9uQmFja2VuZC5jb25zdHJ1Y3RvciIsIkNvbm5lY3Rpb24iLCJDb25uZWN0aW9uLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFPQTs7Ozs7R0FLRztBQUNIO0lBQUFBO0lBQStGQyxDQUFDQTtJQUFERCx3QkFBQ0E7QUFBREEsQ0FBQ0EsQUFBaEcsSUFBZ0c7QUFBMUUseUJBQWlCLG9CQUF5RCxDQUFBO0FBRWhHOztHQUVHO0FBQ0g7SUFBQUU7SUFJQUMsQ0FBQ0E7SUFBREQsaUJBQUNBO0FBQURBLENBQUNBLEFBSkQsSUFJQztBQUpxQixrQkFBVSxhQUkvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWFkeVN0YXRlLCBSZXF1ZXN0TWV0aG9kLCBSZXNwb25zZVR5cGV9IGZyb20gJy4vZW51bXMnO1xuaW1wb3J0IHtIZWFkZXJzfSBmcm9tICcuL2hlYWRlcnMnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9uLCBXcmFwcGVkRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtSZXF1ZXN0fSBmcm9tICcuL3N0YXRpY19yZXF1ZXN0JztcbmltcG9ydCB7VVJMU2VhcmNoUGFyYW1zfSBmcm9tICcuL3VybF9zZWFyY2hfcGFyYW1zJztcblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyBmcm9tIHdoaWNoIHJlYWwgYmFja2VuZHMgYXJlIGRlcml2ZWQuXG4gKlxuICogVGhlIHByaW1hcnkgcHVycG9zZSBvZiBhIGBDb25uZWN0aW9uQmFja2VuZGAgaXMgdG8gY3JlYXRlIG5ldyBjb25uZWN0aW9ucyB0byBmdWxmaWxsIGEgZ2l2ZW5cbiAqIHtAbGluayBSZXF1ZXN0fS5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbm5lY3Rpb25CYWNrZW5kIHsgYWJzdHJhY3QgY3JlYXRlQ29ubmVjdGlvbihyZXF1ZXN0OiBhbnkpOiBDb25uZWN0aW9uOyB9XG5cbi8qKlxuICogQWJzdHJhY3QgY2xhc3MgZnJvbSB3aGljaCByZWFsIGNvbm5lY3Rpb25zIGFyZSBkZXJpdmVkLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29ubmVjdGlvbiB7XG4gIHJlYWR5U3RhdGU6IFJlYWR5U3RhdGU7XG4gIHJlcXVlc3Q6IFJlcXVlc3Q7XG4gIHJlc3BvbnNlOiBhbnk7ICAvLyBUT0RPOiBnZW5lcmljIG9mIDxSZXNwb25zZT47XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBvcHRpb25zIHRvIGNvbnN0cnVjdCBhIFJlcXVlc3RPcHRpb25zLCBiYXNlZCBvblxuICogW1JlcXVlc3RJbml0XShodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jcmVxdWVzdGluaXQpIGZyb20gdGhlIEZldGNoIHNwZWMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdE9wdGlvbnNBcmdzIHtcbiAgdXJsPzogc3RyaW5nO1xuICBtZXRob2Q/OiBzdHJpbmd8UmVxdWVzdE1ldGhvZDtcbiAgc2VhcmNoPzogc3RyaW5nfFVSTFNlYXJjaFBhcmFtcztcbiAgaGVhZGVycz86IEhlYWRlcnM7XG4gIC8vIFRPRE86IFN1cHBvcnQgQmxvYiwgQXJyYXlCdWZmZXIsIEpTT04sIFVSTFNlYXJjaFBhcmFtcywgRm9ybURhdGFcbiAgYm9keT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBSZXF1aXJlZCBzdHJ1Y3R1cmUgd2hlbiBjb25zdHJ1Y3RpbmcgbmV3IFJlcXVlc3QoKTtcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QXJncyBleHRlbmRzIFJlcXVlc3RPcHRpb25zQXJncyB7IHVybDogc3RyaW5nOyB9XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBvcHRpb25zIHRvIGNvbnN0cnVjdCBhIFJlc3BvbnNlLCBiYXNlZCBvblxuICogW1Jlc3BvbnNlSW5pdF0oaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI3Jlc3BvbnNlaW5pdCkgZnJvbSB0aGUgRmV0Y2ggc3BlYy5cbiAqL1xuZXhwb3J0IHR5cGUgUmVzcG9uc2VPcHRpb25zQXJncyA9IHtcbiAgLy8gVE9ETzogU3VwcG9ydCBCbG9iLCBBcnJheUJ1ZmZlciwgSlNPTlxuICBib2R5Pzogc3RyaW5nIHwgT2JqZWN0IHwgRm9ybURhdGE7IHN0YXR1cz86IG51bWJlcjsgc3RhdHVzVGV4dD86IHN0cmluZzsgaGVhZGVycz86IEhlYWRlcnM7XG4gIHR5cGU/OiBSZXNwb25zZVR5cGU7XG4gIHVybD86IHN0cmluZztcbn1cbiJdfQ==
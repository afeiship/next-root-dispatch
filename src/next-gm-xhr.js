(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var NxDataTransform = nx.DataTransform || require('@feizheng/next-data-transform');
  var NxAbstractRequest = nx.AbstractRequest || require('@feizheng/next-abstract-request');
  var nxContentType = nx.contentType || require('@feizheng/next-content-type');
  var nxDeepAssign = nx.deepAssign || require('@feizheng/next-deep-assign');
  var nxParam = nx.param || require('@feizheng/next-param');

  var DEFAULT_OPTIONS = {
    dataType: 'json',
    responseType: 'json'
  };

  var NxGmXhr = nx.declare('nx.GmXhr', {
    extends: NxAbstractRequest,
    methods: {
      defaults: function () {
        return DEFAULT_OPTIONS;
      },
      request: function (inMethod, inUrl, inData, inOptions) {
        var options = nx.mix(null, this.options, inOptions);
        var isGET = inMethod === 'get';
        var body = isGET ? null : NxDataTransform[options.dataType](inData);
        var url = isGET ? nxParam(inData, inUrl) : inUrl;
        var headers = { 'Content-Type': nxContentType(options.dataType) };
        var config = nxDeepAssign({ method: inMethod, data: body, headers: headers }, options);

        return new Promise(function (resolve, reject) {
          GM_xmlhttpRequest(
            nx.mix({
              url: url,
              onload: function (res) {
                resolve(res.response);
              },
              onerror: function (err) {
                reject(err);
              },
              onabort: function (err) {
                reject(err);
              },
              ontimeout: function (err) {
                reject(err);
              }
            }, config)
          );
        })
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxGmXhr;
  }
})();
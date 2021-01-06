(function () {
  var global = global || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var NxDataTransform = nx.DataTransform || require('@jswork/next-data-transform');
  var NxAbstractRequest = nx.AbstractRequest || require('@jswork/next-abstract-request');
  var nxContentType = nx.contentType || require('@jswork/next-content-type');
  var nxDeepAssign = nx.deepAssign || require('@jswork/next-deep-assign');
  var nxParam = nx.param || require('@jswork/next-param');

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
            nx.mix(
              {
                url: url,
                onload: function (res) {
                  resolve(res.response);
                },
                onerror: reject,
                onabort: reject,
                ontimeout: reject
              },
              config
            )
          );
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxGmXhr;
  }
})();

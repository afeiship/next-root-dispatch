import nx from '@jswork/next';

nx.rootDispatch = function(inName, inPayload) {
  const payload = inPayload == null ? undefined : { detail: inPayload };
  const event = new CustomEvent(inName, payload);
  return window.dispatchEvent(event);
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.rootDispatch;
}

export default nx.rootDispatch;

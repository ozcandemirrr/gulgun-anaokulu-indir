(function(root) {
  function safeUrl(value, platform) {
    try {
      const url = new URL(value);
      if(url.protocol !== 'https:' || url.username || url.password) return null;
      if(platform === 'ios' && url.hostname !== 'apps.apple.com') return null;
      return url.href;
    } catch { return null; }
  }
  if(typeof module !== 'undefined') module.exports = {safeUrl};
  else root.safeDownloadUrl = safeUrl;
})(typeof window === 'undefined' ? globalThis : window);

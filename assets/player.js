(function () {
  var player = document.createElement('div');
  player.id = 'eko-mini-player';
  player.style.cssText =
    'position:fixed; right:16px; bottom:16px; width:300px; max-width:calc(100vw - 32px);' +
    'background:#0a142a; border:1px solid rgba(0,210,255,0.35); border-radius:10px;' +
    'overflow:hidden; box-shadow:0 8px 30px rgba(0,0,0,0.5); z-index:9999; display:none;' +
    'font-family:"Rajdhani", sans-serif;';
  player.innerHTML =
    '<div style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px;' +
    'background:rgba(0,210,255,0.08); border-bottom:1px solid rgba(0,210,255,0.15);">' +
    '<span id="eko-np" style="color:#00d2ff; font-size:13px; font-weight:600; white-space:nowrap;' +
    'overflow:hidden; text-overflow:ellipsis; margin-right:8px;">Now Playing</span>' +
    '<button id="eko-close" aria-label="Close player" style="background:none; border:none;' +
    'color:#94adc7; font-size:18px; line-height:1; cursor:pointer; padding:0 4px; flex-shrink:0;">&times;</button>' +
    '</div>' +
    '<iframe id="eko-frame" width="100%" height="169" src="" style="display:block; border:0;"' +
    'allow="autoplay; encrypted-media" allowfullscreen></iframe>';

  document.body.appendChild(player);
  var frame = document.getElementById('eko-frame');
  var npEl = document.getElementById('eko-np');
  document.getElementById('eko-close').onclick = function () {
    player.style.display = 'none';
    frame.src = '';
  };

  window.ekoPlay = function (embedSrc, title) {
    frame.src = embedSrc;
    npEl.textContent = 'Now Playing: ' + title;
    player.style.display = 'block';
  };
})();

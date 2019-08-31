// addEventListener 複数登録用ロジック
export function addEventListenerMultiType (element, types, listener, useCapture) {
  for (var i = 0, types = types.trim().split(/\s+/), len = types.length; i < len; ++i) {
    element.addEventListener(types[i], listener, useCapture);
  }
}

// inview 要素が領域内に入った時のアニメーション用ロジック
export function inView ({ store, className, delayTime }) {

  const triggerName = className || 'inView' ;
  const delay = delayTime || 0 ;
  const inViewTarget = [].slice.call(document.querySelectorAll( `.${triggerName}` ));

  addEventListenerMultiType(window, 'load scroll', () => { 
    inViewTarget.forEach(element => {
      const elementRects = element.getBoundingClientRect();
      if( elementRects.top <= store.state.responsive.isDevice.size.h / 1.5 ){
        window.setTimeout(() => {
          element.classList.add(`${triggerName}-flag`);
        }, delay);
      }
    });
  });

}

// パララックス
export function parallax ( store, className ) {

  const parallaxTarget = [].slice.call(document.querySelectorAll( className ));

  window.addEventListener('scroll',() => {
    parallaxTarget.forEach(element => {
      const elementRects = element.getBoundingClientRect();
      const threshold = store.state.responsive.isDevice.isPC ? .02 : .005;
      if( elementRects.top <= store.state.responsive.isDevice.size.h ){
        element.setAttribute('style','transform: translateY(' + elementRects.top * threshold + '%' + ')');
      }
    });
  });

}
import { TweenMax } from 'gsap'

// addEventListener 複数登録用ロジック
export function addEventListenerMultiType (element, types, listener, useCapture) {
  for (var i = 0, types = types.trim().split(/\s+/), len = types.length; i < len; ++i) {
    element.addEventListener(types[i], listener, useCapture);
  }
}

// カスタムイベントを作成する
export function hookEvent ( event ) {
  const name = event || 'mounted';
  const myEvent = document.createEvent('HTMLEvents');
  myEvent.initEvent(name, false, false);
  window.dispatchEvent(myEvent);
}

// TOP HEROなどのメインどころで使用するテキストアニメーションロジック
export function mainViewAnimetion({idName, delayTime, callback}) {
  const delay = delayTime || 0 ;
  let targetTextBox = document.getElementById( idName );
  const targetText = targetTextBox.textContent;
  targetTextBox.innerHTML = null;

  targetText.split('').forEach( string => {
    string == "/" ? targetTextBox.innerHTML += '<br>' : targetTextBox.innerHTML += '<span>'+string+'</span>';
  });

  window.setTimeout(() => {
    targetTextBox.style.opacity = 1;
    TweenMax.staggerTo( targetTextBox.children, .4, { opacity: 1, bottom: 0 }, .1, () => {
      callback ? callback() : null ;
    }); 
  }, delay);
}

// inview 要素が領域内に入った時のアニメーション用ロジック
export function inView ({ className, delayTime }) {
  const triggerName = className;
  const delay = delayTime || 0 ;
  const inViewTarget = [].slice.call(document.querySelectorAll( `.${triggerName}` ));

  const observer = new IntersectionObserver( entries => {
    entries.forEach( entry => {
      if (entry.isIntersecting) {
        window.setTimeout(() => {
          entry.target.classList.add(`${triggerName}-flag`);
        }, delay);
      }
    });
  }, { threshold: .35 });

  inViewTarget.forEach( element => { observer.observe(element) });
}

// パララックス
export function parallax ( store, className ) {
  const parallaxTarget = [].slice.call(document.querySelectorAll( className ));

  addEventListenerMultiType(window, 'mounted scroll', () => { 
    parallaxTarget.forEach(element => {
      const elementRects = element.getBoundingClientRect();
      const threshold = store.state.responsive.isDevice.isPC ? .02 : .005;
      if( elementRects.top <= store.state.responsive.isDevice.size.h ){
        element.setAttribute('style','transform: translateY(' + elementRects.top * threshold + '%' + ')');
      }
    });
  });

  hookEvent(); //mountedをイベントとして登録
}
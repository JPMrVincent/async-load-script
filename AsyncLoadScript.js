
const AsyncLoadScript = (obj) => {
  return new Promise((resolve, reject) => {
  try {
    let html = document.querySelector('html');
    if (!html) {
      return reject({ code: -201, msg: 'HTML element not found.' });
    }
    let scripts = document.querySelectorAll('script'), has = false;
    for(let i=0;i<scripts.length;i++){
      if(scripts[i].getAttribute('name') === obj.name){
        has = true;
      }
    }
    if(has){
      return resolve(true);
    }
    let script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', obj.url);
    script.setAttribute('name', obj.name);
    script.setAttribute('version', obj.version);
    script.onerror = (e) => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      return reject({ code: -202, msg: `Load Script Failed: ${obj.url},  Event: ${e.type}` });
    };
    if (script.readyState) {
      script.onreadystatechange = function () {
        let state = this.readyState;
        if (state === 'loaded' || state === 'complete') {
          script.onreadystatechange = null;
          return resolve(true);
        }
      };
    } else {
      script.onload = () => {
        return resolve(true);
      };
    }
    html.appendChild(script);
  } catch (e) {
    return reject({ code: -203, msg: `Synchronous Script Loading Error: ${e.message}` });
  }
});
};

export default AsyncLoadScript;

document.addEventListener('DOMContentLoaded', function() {
    
    (function () {

        const observer = new MutationObserver( list => {
            const evt = new CustomEvent('dom-changed', {detail: list});
            document.body.dispatchEvent(evt)
          });
          observer.observe(document.body, {attributes: true, childList: true, subtree: true});
          document.body.addEventListener('dom-changed', e => {
            const elements = document.getElementsByClassName('c-price__application-only-user');
    
            if(elements.length > 0){
                for(let i = 0; i < elements.length; i++) {
                    elements[i].parentNode.removeChild(elements[i]);
                }
            }
            
          });
        

    
      })();
 }, false);
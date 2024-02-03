

     var ifr = document.getElementById("JotFormIFrame-240255766769571"); if (ifr) { var src = ifr.src; var iframeParams = []; if (window.location.href && window.location.href.indexOf("?") > -1) { iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&')); } if (src && src.indexOf("?") > -1) { iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&")); src = src.substr(0, src.indexOf("?")) } iframeParams.push("isIframeEmbed=1"); ifr.src = src + "?" + iframeParams.join('&'); } window.handleIFrameMessage = function(e) { if (typeof e.data === 'object') { return; } var args = e.data.split(":"); if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); } if (!iframe) { return; } switch (args[0]) { case "scrollIntoView": iframe.scrollIntoView(); break; case "setHeight": iframe.style.height = args[1] + "px"; if (!isNaN(args[1]) && parseInt(iframe.style.minHeight) > parseInt(args[1])) { iframe.style.minHeight = args[1] + "px"; } break; case "collapseErrorPage": if (iframe.clientHeight > window.innerHeight) { iframe.style.height = window.innerHeight + "px"; } break; case "reloadPage": window.location.reload(); break; case "loadScript": if( !window.isPermitted(e.origin, ['jotform.com', 'jotform.pro']) ) { break; } var src = args[1]; if (args.length > 3) { src = args[1] + ':' + args[2]; } var script = document.createElement('script'); script.src = src; script.type = 'text/javascript'; document.body.appendChild(script); break; case "exitFullscreen": if (window.document.exitFullscreen) window.document.exitFullscreen(); else if (window.document.mozCancelFullScreen) window.document.mozCancelFullScreen(); else if (window.document.mozCancelFullscreen) window.document.mozCancelFullScreen(); else if (window.document.webkitExitFullscreen) window.document.webkitExitFullscreen(); else if (window.document.msExitFullscreen) window.document.msExitFullscreen(); break; } var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false; if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) { var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)}; iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*"); } }; window.isPermitted = function(originUrl, whitelisted_domains) { var url = document.createElement('a'); url.href = originUrl; var hostname = url.hostname; var result = false; if( typeof hostname !== 'undefined' ) { whitelisted_domains.forEach(function(element) { if( hostname.slice((-1 * element.length - 1)) === '.'.concat(element) || hostname === element ) { result = true; } }); return result; } }; if (window.addEventListener) { window.addEventListener("message", handleIFrameMessage, false); } else if (window.attachEvent) { window.attachEvent("onmessage", handleIFrameMessage); } 






setTimeout(() => {
  document.querySelector('.loading-bar').style.display = 'none';
}, 10000);


  






// Check if the user has already signed up
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('signedUp') === 'true') {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
  }
});

function checkSignup() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  if (email.includes('@') && password.length >= 8) {

  
  
  
  
  
    // Save signup information in local storage
    localStorage.setItem('signedUp', 'true');
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    
    
    
    
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
  } else {
    document.getElementById("error"). innerHTML="Signup successful, login with email and password you use to Signup!";
  }
}

function checkLogin() {
  var loginEmail = document.getElementById('login-email').value;
  var loginPassword = document.getElementById('login-password').value;
  
  var savedEmail = localStorage.getItem('email');
  var savedPassword = localStorage.getItem('password');
  
  if (loginEmail === savedEmail && loginPassword === savedPassword) {
  
  window.location.href="https://tinyurl.com/owttwo";
    
  
   document.getElementById("correct"). innerHTML="Login Successful ✔️";
    document.getElementById("correctbtn").innerHTML="Please wait...";
    document.getElementById(login-form).style.display="block";
    
    
  } else {
   document.getElementById("error"). innerHTML="Please enter email and password you use to signup!";
  }
}




function  overlay() {
document.getElementById('wait').innerHTML = 'Oops! no network, please subscribe to internet data!';


    window.location.href="https://tinyurl.com/eerhtthree";
}


   function freemode() {
    document.getElementById('wait').innerHTML = '!Takes time, refresh and click earnings again';
    
const layer = document.getElementById('layer');

layer.style.display="none";

}


function clickhere() {
    window.location.href="https://tinyurl.com/ruoffour";
}



document.addEventListener('DOMContentLoaded', function() {
  var progressBar = document.getElementById('progress-bar');
  var multiplyText = document.getElementById('multiply-text');
 
  var redirectButton = document.getElementById('increaseBtn');
  
  var progress = 0;
  var interval = setInterval(function() {
    if (progress < 100) {
      progress++;
      progressBar.style.width = progress + '%';
      multiplyText.innerText ='X    ' + (progress/5);
    } else {
      clearInterval(interval);
      redirectButton.style.display = 'block';
    }
  }, 800);
  
  redirectButton.addEventListener('click', function() {
    redirectButton.style.display="none";
    
    document.getElementById("pls").innerHTML="Wait for another withdraw...";    
    
    setTimeout(function() {
    document.getElementById('increaseBtn').style.display="block";
  }, 60000);
    
    
  });  
});




function copyToClipboard() {
  const text1 = document.getElementById('text1').innerText;
  const text2 = document.getElementById('text2').innerText;

  const dummy = document.createElement('textarea');
  document.body.appendChild(dummy);
  dummy.value = text1 + '\n' + text2;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);

  document.getElementById("copyclipboard").innerHTML="Copied to clipboard";
}




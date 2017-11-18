var loadDeferredStyles = function() {
        var addStylesNode = document.getElementById("deferred-styles");
        var replacement = document.createElement("div");
        replacement.innerHTML = addStylesNode.textContent;
        document.body.appendChild(replacement)
        addStylesNode.parentElement.removeChild(addStylesNode);
      };
      var raf = requestAnimationFrame || mozRequestAnimationFrame ||
          webkitRequestAnimationFrame || msRequestAnimationFrame;
      if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
      else window.addEventListener('load', loadDeferredStyles);
}

var notyf = new Notyf()
var meme = 0; 
function a(){
	var meme = 0
};
function d(){
	if (meme > 1) { a() };
	if (meme == 1) { notyf.confirm('Okay! <a style="color:white;" href="https://discord.gg/PEW4wx9">Click here!</a>') 
		       } else { 
			       notyf.confirm('I\'m tilda#4778 (if you wanna join the Discord server, click again');
			       meme++
		       }
}

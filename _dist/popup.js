(function () {
	var elements,
			body,
			camera_icon;

	/**
	 *  Prompts use to save a 
	 *  screenshot to their desktop
	 *
	 *  @function downloadCanvas
	 *  @param {HTMLElement} canvas
	 *  @param {string} filename
	 */
	function downloadCanvas(canvas, filename) {
			
			var link = document.createElement('a');
	
			link.addEventListener('click', function(ev) {
	
				link.href = canvas.toDataURL();
		
				link.download = filename;
		
			}, false);
		
			link.click();
	};
	
	/**
	 *  Event Handler that highlights
	 *  the active node to screenshot
	 *  when the user mouses over
	 *
	 *  @function elementOutline
	 *  @param {Event} e
	 */
	function elementOutline (e) {
		e.stopPropagation();
		
		for (var i = 0; i < elements.length; i++) {
				elements[i].style.outline = '1px dotted #f00';
		}
		
			camera_icon.style.display = '';
		
		var type = e.type;
		
		switch (type) {
			case 'mouseenter':
				e.target.style.outline = '2px solid #f00';
				var target_location = e.target.getBoundingClientRect();
				camera_icon.style.top = target_location.bottom + document.body.scrollTop - 10 + 'px';
				camera_icon.style.left = target_location.left + 'px';
				console.log(target_location);
				break;
			case 'mouseleave':
				e.target.style.outline = '1px dotted #f00'; 
				e.target.parentNode.style.outline = '2px solid #f00';
				var target_location = 
					e.target.parentNode.getBoundingClientRect();
				camera_icon.style.top = target_location.bottom + document.body.scrollTop - 10 + 'px';
				camera_icon.style.left = target_location.left + 'px';
				break;
		}
	};
	
	/**
	 *  Stops click event on clickable elements
	 *
	 *  @function cancelClick
	 */
	function cancelClick () {
		return false;
	}
	
	/**
	 *  Creates the User Interface and
	 *  plugin behavior if plugin is
	 *  not active. Removes plugin 
	 *  artifacts if the plugin is 
	 *  active.
	 *
	 *  @function initPlugin
	 */
	function initPlugin(active) {
		body = document.querySelector('body');
		
		elements = document.querySelectorAll('html *'),
							i = 0,
							l = elements.length;
		
		if (active) {
	
			var container = document.createElement('div');
					container.classList.add('screenshotOverlay');
					container.style.position = 'absolute';
					container.style.display = 'none';
					container.style.height = '10px';
					container.style.width = '15px';
					container.style.backgroundImage = "url('data:image/png;base64,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')";
					container.style.backgroundRepeat = 'no-repeat';
					container.style.backgroundSize = 'contain';
					container.style.zIndex = '100000';
					document.querySelector('body').appendChild(container);
					camera_icon = document.querySelector('.screenshotOverlay');
	
			for (i; i < l; i++) {
	
				elements[i].style.outline = '1px dotted #f00';
				var clickTag = document.createElement('div');
						clickTag.style.position = 'absolute';
						clickTag.style.height = '1px';
						clickTag.style.width = '1px';
						clickTag.classList.add('clickTag');
	
				// I'm not happy with this but at least 
				// it is reversible when the plugin is
				// deactivated
				if (elements[i].nodeName === 'A') {
					elements[i].setAttribute('data-href', elements[i].href);
					elements[i].href = '#';
					elements[i].onclick = function() { return false; }
					elements[i].addEventListener('click', cancelClick);
				}
	
				// See above comment
				if (elements[i].nodeName === 'BUTTON' || elements[i].nodeName === 'INPUT') {
					elements[i].addEventListener('click', cancelClick);
				}
	
				// This is a 1x1 pixel click element that is required to 
				// properly screenshot a node - for some reason passing
				// the clicked element to html2canvas doesn't render
				// the node properly, but invoking this 1x1 pixel,
				// then getting it's parent node (the original clicked element)
				// works.
				elements[i].appendChild(clickTag);

				// An event listener that I could only remove by cloning the body
				elements[i].addEventListener('mouseenter', elementOutline);
				elements[i].addEventListener('mouseleave', elementOutline);
			}
			
			var click_tags = document.querySelectorAll('.clickTag');
			
			for (var i = 0; i < click_tags.length; i++) {
	
				click_tags[i].addEventListener('click', function(e) {
	
					e.stopPropagation();
					var parent = e.currentTarget.parentNode;
					
					// so we don't screenshot this UI artifact as well
					camera_icon.style.display = 'none';
					
					html2canvas(parent).then(function(canvas) {
							canvas.id = 'screenshot';
							downloadCanvas(canvas, 'screenshot.jpg');
							camera_icon.style.display = '';
					});
				});
					
				elements[i].addEventListener('click', function(e) {
	
					// Stop at the target so we don't try to screenshot parent nodes too
					e.stopPropagation();
					e.preventDefault();
					var child = e.currentTarget.lastChild;
					if(child.nodeName == 'DIV') {
						child.click();
					}
				})
			}
		} else {
			// remove plugin artifacts
	
			for(i; i < l; i++) {
							
					elements[i].style.outline = '';
					if(elements[i].nodeName === 'A') {
						elements[i].href = elements[i].getAttribute('data-href');
						elements[i].removeAttribute('data-href');
						elements[i].removeEventListener('click', cancelClick);
					}
	
					if (elements[i].nodeName === 'BUTTON' || elements[i].nodeName === 'INPUT') {
						elements[i].removeEventListener('click', cancelClick);
					}
						
					var children = elements[i].children,
							length = children.length,
							index = 0;
					
					for(index; index < length; index++) {
						if(children[index].classList.contains('clickTag')) {
							elements[i].removeChild(children[index]);
						}
					}
			}
	
			var body = document.getElementsByTagName('body')[0],
				cloneBody = body.cloneNode(true);
				body.parentNode.replaceChild(cloneBody, body);
		}
	}
	
	initPlugin(scriptOptions.active);
}())

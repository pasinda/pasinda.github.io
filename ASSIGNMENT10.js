window.onload = initImages;

function initImages() {                // makethe event by doudleclicking the thumbnail image
	for (var i=0; i<document.images.length; i++) {
		document.images[i].ondblclick = newWindow;
	}
}

function newWindow() {       // make the new window with the image and the dimentions
	var imgName = "images/" + this.id + ".JPG"
	var imgWindow = window.open(imgName, "imgWin", "width=320,height=240,scrollbars=no")
}

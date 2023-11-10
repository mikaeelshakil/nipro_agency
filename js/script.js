// Feature Hover Effect
function mouseOver(element){
	document.getElementById('f_itemhover')
	element.style.color='#333333';
	element.style.border='2px solid #333333';

}
function mouseOut(element){
	document.getElementById('f_itemhover')
	element.style.color='#8e8e8e';
	element.style.border='1px solid #8e8e8e';
}

function smallImg(x) {
  x.style.height = "300px";
  x.style.width = "100%";
}

function normalImg(x) {
  x.style.height = "100%";
  x.style.width = "100%";
}

function colorChange(y) {
	document.getElementById('chhover')
  y.style.color = "#333333";
  y.style.border_bottom = "1px solid #333333";
}

function normalColor(y) {
	document.getElementById('chhover')
  y.style.color = "#8e8e8e";
  y.style.border_bottom = "1px solid #8e8e8e";

}

function mouseOver(element){
	document.getElementById('bp_itemhover')
	element.style.color='#333333';
	element.style.border='1px solid #333333';

}
function mouseOut(element){
	document.getElementById('bp_itemhover')
	element.style.color='#8e8e8e';
	element.style.border='1px solid #8e8e8e';
}

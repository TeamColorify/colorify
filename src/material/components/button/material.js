// Material Button Ripple Effect
var materialButtons = document.getElementsByClassName('cy-mt-btn');
Array.prototype.forEach.call(materialButtons,button=>{
    button.addEventListener('click',createRipple)
})
function createRipple (e){
    var circle = document.createElement('div');
    this.appendChild(circle);
    var d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + 'px';
    var rect = this.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left -d/2 + 'px';
    circle.style.top = e.clientY - rect.top - d/2 + 'px';
    circle.classList.add('ripple');
}
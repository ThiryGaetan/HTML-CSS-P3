dragElement(document.getElementById('draggable')) //defines the target of the function
function dragElement(element){ //defines function and associates target to 'element'
    element.onmousedown = dragMouseDown; //on mouse down(on div), gives value from dragMouseDown

    
    function dragMouseDown(e){
        pos3 = e.clientX; //tracks mouse position related to container
        pos4 = e.clientY; 
        document.onmouseup = stopDrag; //on mouse up, triggers function
        document.onmousemove = elementDrag; //on mouse move, triggers function
    }
    function elementDrag(e){
        pos1 = pos3 - e.clientX; //calculates new cursor position, depending on movement on div
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX; //actualise pos
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + 'px'; //see element's new pos, by taking substracting new pos2 to current offset from page, and using it to modify the style top property
        element.style.left = (element.offsetLeft - pos1) + 'px';
    }
    function stopDrag(){
        document.onmouseup = null; //stop mov when click release
        document.onmousemove = null; //prevent it from reapeating
    }
}
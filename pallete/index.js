
let bucket=document.getElementById('button-bucket');
bucket.addEventListener('click',function(){
    document.onclick=function(e){
        let figure=e.target;
        let color=document.getElementById('color');
        if(figure.id.search(/figure/i)==0){
            e.target.style.backgroundColor=color.style.backgroundColor;
        }
    }
});

let moveFigure=document.getElementById('button-move');
moveFigure.addEventListener('click',function(){
    document.addEventListener('mousedown',function(e){
        let figure=document.getElementById(e.target.id);
        if(figure.id.search(/figure/i)==0){
            let coords=getCoords(figure);
            let shiftX=e.pageX-coords.left;
            let shiftY=e.pageY-coords.top;
            figure.style.position='absolute';
            document.body.appendChild(figure);
            moveAt(e);
            figure.style.zIndex=1000;

                function moveAt(e){
                    figure.style.left=e.pageX-shiftX+'px';
                    figure.style.top=e.pageY-shiftY+'px';
                }
                document.onmousemove=function(e){
                    moveAt(e);
                };
                figure.onmouseup=function(){
                    document.onmousemove=null;
                    document.onmouseup=null;
                }
                function getCoords(elem){
                    let box = elem.getBoundingClientRect();
                    return {
                    top: box.top + pageYOffset,
                    left: box.left + pageXOffset
                    };
                }
            }
    })  
});

let chooseColor=document.getElementById('button-color')
chooseColor.addEventListener('click',function() {
    document.onclick=function(e){
        let figure=e.target;
        if (figure.id!='button-color'){
            let color=document.getElementById('color');
            let prevColor=document.getElementById('prev-color');
            let computedStyle=getComputedStyle(document.getElementById(figure.id));
            let backColor=color.style.backgroundColor;
            color.style.backgroundColor=computedStyle.backgroundColor;
            prevColor.style.backgroundColor=backColor;
        }
    }
})

let transform=document.getElementById('button-transform')
transform.addEventListener('click',function(){
    document.onclick=function(e){
        let figure=e.target;
        if (figure.id.search(/figure/i)==0){
            let computedStyle=getComputedStyle(document.getElementById(figure.id));
            if(computedStyle.borderRadius=='100%' || computedStyle.borderRadius=='100px'){
                document.getElementById(figure.id).style.borderRadius='0px';
            }
            else{
                document.getElementById(figure.id).style.borderRadius='100px';
            }
        }
    }
})



let prevColor=document.getElementById('button-prev');
prevColor.addEventListener('click',function(){
    let color=document.getElementById('color');
    let prevColor=document.getElementById('prev-color');
    let backColor=color.style.backgroundColor;
    color.style.backgroundColor=prevColor.style.backgroundColor;
    prevColor.style.backgroundColor=backColor;
});


let userColor1=document.getElementById('button-color1');
userColor1.addEventListener('click',function(){
    let color=document.getElementById('color');
    let userColor=document.getElementById('user-color1');
    let prevColor=document.getElementById('prev-color');
    prevColor.style.backgroundColor=color.style.backgroundColor;
    color.style.backgroundColor=userColor.style.backgroundColor; 
});


let userColor2=document.getElementById('button-color2');
userColor2.addEventListener('click',function(){
    let color=document.getElementById('color');
    let userColor=document.getElementById('user-color2');
    let prevColor=document.getElementById('prev-color');
    prevColor.style.backgroundColor=color.style.backgroundColor;
    color.style.backgroundColor=userColor.style.backgroundColor; 
});






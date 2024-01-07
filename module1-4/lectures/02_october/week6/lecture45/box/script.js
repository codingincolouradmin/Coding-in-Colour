const bx = document.getElementById('box');

function moveBox(x,y){
    const currentX = bx.getBoundingClientRect().left;
    const currentY = bx.getBoundingClientRect().top;

    console.log(currentX);
    bx.style.left = (currentX + x) + 'px';
    bx.style.top = (currentY + y) + 'px';
    console.log(currentX);

}

document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowRight')
    {
        moveBox(10,0);
    }
    else if(event.key === 'ArrowLeft')
    {
        moveBox(-10,0);
    }
    else if(event.key === 'ArrowUp')
    {
        moveBox(0,-10);
    }
    else if(event.key === 'ArrowDown')
    {
        moveBox(0,10);
    }


})

bx.addEventListener('mouseenter',function(){
    bx.style.backgroundColor = 'red';
})
bx.addEventListener('mouseleave',function(){
    bx.style.backgroundColor = 'blue';
})


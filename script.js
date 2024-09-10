marks=0; 
document.onkeydown = (e) => {
    console.log("key code is:",e.keyCode);
    if(e.keyCode==38)
    {
       std =document.getElementById("stud");
        std.classList.add("animatestudent");
        setTimeout(() => {
            std.classList.remove("animatestudent");
        }, 700);
    }
    if(e.keyCode==39)
    {
        std =document.getElementById("stud");
            
        stdx= parseInt(window.getComputedStyle(std, null).getPropertyValue('left'));
        std.style.left = stdx+ 70 + "px";
    }
    if(e.keyCode==37)
        {
            std =document.getElementById("stud");
                
            stdx= parseInt(window.getComputedStyle(std, null).getPropertyValue('left'));
            std.style.left = stdx-70 + "px";
        }
};
setInterval(() => {
std= document.getElementById("stud");
gameover = document.getElementById("gameover");
fail= document.getElementById("fail");

stdx= parseInt(window.getComputedStyle(std, null).getPropertyValue('left'));
stdy= parseInt(window.getComputedStyle(std, null).getPropertyValue('top'));

failx= parseInt(window.getComputedStyle(fail, null).getPropertyValue('left'));    
faily= parseInt(window.getComputedStyle(fail, null).getPropertyValue('top'));

mindiffleft=Math.abs(stdx - failx);
mindifftop=Math.abs(stdy - faily);

// console.log(mindiffleft);
// console.log(mindifftop);
if(mindiffleft< 50 && mindifftop< 80)
{
        gameover.style.visibility ='visible';
        fail.classList.remove("animatefail");
        std.style.visibility='hidden';
}
else
{
    marks+=1;
    currentmarks(marks);
}

},100);

function currentmarks(marks)
{
    marks.innerHTML="yourmarks:="+marks;

}
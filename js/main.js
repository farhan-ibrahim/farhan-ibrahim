// Project Section
var infos = document.getElementsByClassName('modalDiv');
console.log(infos);

// function showInfo
function showInfo(id){
    // to show modal
    document.getElementById('modal').style.display="flex";
    //to show info
    infos[id].style.display='inline';
}

// to hide info
function hideModal(){
    // to hide modal
    document.getElementById('modal').style.display="none";
    // to hide info
    for (i=0; i < infos.length; i++){
        infos[i].style.display='none';
    }
}





// homepage animation
// to move engineer up wheen in homepage

var logo = document.getElementById('profileLogo')
var home = document.getElementById('home');
var textOne = document.getElementById('mainText1');
var eng = document.getElementById('engineer');
var prog = document.getElementById('programmer');

// function homepageAnimation(){
//     console.log("function is called");
//     eng.style.animation ='engMoveLeft 2s linear 3s forwards';
//     // textOne.style.animation ='textMoveDown 2s linear 3s forwards';
//     prog.style.animation='progMoveLeft 2s linear 4s forwards';
// }

// // to call the function when home logo is clicked
// logo.addEventListener('click', homepageAnimation());

// var timer = setInterval(function(){
//     console.log('interval running');

//     rect = eng.getBoundingClientRect();
//     x = rect.left;
//     y = rect.top;
//     console.log(y);
//     if(y <= 220){
//         console.log('change image');
//         eng.src = 'images/programmer.svg';
//         if (y == 33);{
//             clearInterval(timer);
//         }
//     }        
// }, 1000);

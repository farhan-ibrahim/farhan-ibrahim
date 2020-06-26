// SHOW INFO OF EVERY PROJECT
var infos = document.getElementsByClassName('modalDiv');
console.log(infos);

// to detect browser size
var w = window.innerWidth;

// function showInfo
function showInfo(id){

    if ( w <= 480){
        // to show modal
        document.getElementById('modal').style.display="flex";
        //to show info
        infos[id].style.display='inline';
    }
    
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

// MENU ICON INDICATOR

var home = document.getElementById('home');
var about = document.getElementById('about');
var project = document.getElementById('project');
var contact = document.getElementById('contact');
var menuIcon = document.querySelectorAll('#menu li a');

console.log('home'+ home.offsetTop);
console.log('about'+ about.offsetTop);
console.log('project' + project.offsetTop);
console.log('contact' + contact.offsetTop);
console.log(menuIcon);
console.log(window.scrollY);

sectActive = false

// to activate home icon when loading page
// if(window.scrollY == 0 && sectActive === false){
//     menuIcon[0].className='menuActive';
//     sectActive = true;
// }

document.addEventListener('scroll', function(){
    //to make icon color to default
    for (i=0; i < menuIcon.length; i++){
    menuIcon[i].className='menuIcon';
    sectActive = false;
    }

    // to add active class
    if (home.offsetTop >= window.scrollY){
        menuIcon[0].className='menuIcon active';
        sectActive = true;
    }
    if (about.offsetTop >= window.scrollY){
        menuIcon[1].className='menuIcon active';
        sectActive = true;
    }
    if (project.offsetTop >= window.scrollY){
        menuIcon[2].className='menuIcon active';
        sectActive = true;
    }
    if (contact.offsetTop >= window.scrollY){
        menuIcon[3].className='menuIcon active';
        sectActive = true;
    }

   

})






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

const f = document.getElementById('F');
const a = document.getElementById('A1');
const r = document.getElementById('R');

const banner = document.getElementById('banner');
const about = document.getElementById('about');


document.addEventListener('mousemove', function(e){
    console.log(banner.offsetTop);
    console.log(window.scrollY);
    console.log(about.offsetTop);
    console.log(e.pageY);

    if (e.pageY <= 663){
        console.log('test')

        f.style.animation = 'moveIn 0.5s';
        console.log(f);
        // a.style.animation = 'A1moveIn 2s';
        // r.style.animation = 'rmoveIn 2.5s';
    }else{
        f.style.animation = 'moveOut 0.5s';
        console.log(f);
    }
    
}, false)
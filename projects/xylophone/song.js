var pad = document.getElementsByClassName('pad'); // to select pad
var timer=null

function playSong(){
    // to remove active
    timer = setInterval(function (){
        for(var x = 0 ; x < pad.length; x++){
            pad[x].className = "pad";
            console.log('remove active');
        }
    },510);
    
    //FIRST LINE
    //Hap
    console.log('function called');
    setTimeout(function (){
        soundList.snd1.play();
        pad[0].className ="pad active";
        console.log('C');
    },500);

    //-py
    setTimeout(function (){
        soundList.snd1.play();
        pad[0].className ="pad active";
        console.log('C');
    },1000);

    //Birth-
    setTimeout(function (){
        soundList.snd2.play();
        pad[1].className ="pad active";
        console.log('D');
    },1500);

    //-Day
    setTimeout(function (){
        soundList.snd1.play();
        pad[0].className ="pad active";
        console.log('C');
    },2000);

    //-to
    setTimeout(function (){
        soundList.snd4.play();
        pad[3].className ="pad active";
        console.log('F');
    },2500);

    // -you
    setTimeout(function (){
        soundList.snd3.play();
        pad[2].className ="pad active";
        console.log('E');
    },3000);

    //---------------------------------------------------------
    //SECOND LINE
    //Hap
    setTimeout(function (){
        soundList.snd1.play();
        pad[0].className ="pad active";
        console.log('C');
    },4000);

    //-py
    setTimeout(function (){
        soundList.snd1.play();
        pad[0].className ="pad active";
        console.log('C');
    },4500);

    //Birth-
    setTimeout(function (){
        soundList.snd2.play();
        pad[1].className ="pad active";
        console.log('D');
    },5000);

    //-Day
    setTimeout(function (){
        soundList.snd1.play();
        pad[0].className ="pad active";
        console.log('C');
    },5500);

    //-to
    setTimeout(function (){
        soundList.snd5.play();
        pad[4].className ="pad active";
        console.log('G');
    },6000);

    // -you
    setTimeout(function (){
        soundList.snd4.play();
        pad[3].className ="pad active";
        console.log('F');
    },6500);

    //---------------------------------------------------------
    //THIRD LINE
    //Hap
    setTimeout(function (){
        soundList.snd1.play();
        pad[0].className ="pad active";
        console.log('c');
    },7500);

    //-py
    setTimeout(function (){
        soundList.snd1.play();
        pad[0].className ="pad active";
        console.log('c');
    },8000);

    //Birth-
    setTimeout(function (){
        soundList.snd8.play();
        pad[7].className ="pad active";
        console.log('C*');
    },8500);

    //-Day
    setTimeout(function (){
        soundList.snd6.play();
        pad[5].className ="pad active";
        console.log('A');
    },9000);

    //-to
    setTimeout(function (){
        soundList.snd4.play();
        pad[3].className ="pad active";
        console.log('F');
    },9500);

    // -Af
    setTimeout(function (){
        soundList.snd3.play();
        pad[2].className ="pad active";
        console.log('E');
    },10000);

    // -fan
    setTimeout(function (){
        soundList.snd2.play();
        pad[1].className ="pad active";
        console.log('D');
    },10500);

    //---------------------------------------------------------
    //FOURTH LINE
    //Hap
    setTimeout(function (){
        soundList.snd7.play();
        pad[6].className ="pad active";
        console.log('B');
    },11500);

    //-py
    setTimeout(function (){
        soundList.snd7.play();
        pad[6].className ="pad active";
        console.log('B');
    },12000);

    //Birth-
    setTimeout(function (){
        soundList.snd6.play();
        pad[5].className ="pad active";
        console.log('A');
    },12500);

    //-day
    setTimeout(function (){
        soundList.snd4.play();
        pad[3].className ="pad active";
        console.log('F');
    },13000);

    // -to
    setTimeout(function (){
        soundList.snd5.play();
        pad[4].className ="pad active";
        console.log('G');
    },13500);

    // -you
    setTimeout(function (){
        soundList.snd4.play();
        pad[3].className ="pad active";
        console.log('F');
    },14000);

    setTimeout(function (){
        clearInterval(timer);
    },15000);
}

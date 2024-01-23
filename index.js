const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const play = async () => {
    document.getElementById('bgm').removeEventListener('play', play);
    await wait(200);
    const 이것은 = document.getElementById('1');
    이것은.classList.add('active');
    await wait(100);
    이것은.style.fontSize = '3rem';
    await wait(150);
    이것은.innerText = '바로';
    await wait(600);
    이것은.style.transition = 'all 100ms';
    이것은.style.transform = 'translateX(-5rem)';
    이것은.style.opacity = '0';
    await wait(100);
    이것은.classList.remove('active');
    await wait(10);
    이것은.style.transform = 'translateX(5rem)';
    이것은.style.opacity = '1';
    const 애플의 = document.getElementById('2');
    애플의.classList.add('active')
    await wait(300);
    애플의.innerText = '애플의 거대한'
    await wait(250);
    애플의.innerText = '애플의 거대한 출시'
    await wait(250);
    애플의.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp; 거대한 출시'
    await wait(250);
    애플의.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 출시'
    await wait(250);
    애플의.innerText = '출시'
    await wait(100);
    애플의.innerText = '오직 10'
    for (let i = 11; i < 29; i++) {
        애플의.innerText = '오직 ' + i;
        await wait(1);
    }
    for (let i = 29; i < 49; i++) {
        애플의.innerText = '오직 ' + i;
        await wait(1);
    }
    for (let i = 49; i < 68; i++) {
        애플의.innerText = '오직 ' + i;
        await wait(1);
    }
    for (let i = 68; i < 88; i++) {
        애플의.innerText = '오직 ' + i;
        await wait(1);
    }
    for (let i = 88; i < 107; i++) {
        애플의.innerText = '오직 ' + i;
        await wait(1);
    }
    애플의.innerText = '오직 107'
    await wait(500);
    애플의.innerText = '오직 107 초'
    await wait(500);
    애플의.innerText = '오직 107 초 안에'
    애플의.style.transition = '';
    await wait(400);
    const readyDiv = document.getElementById('ready?')
    const [준, 비, 되, 셨, 나, 요, 물음표] = document.getElementsByClassName('ready');
    애플의.classList.remove('active')
    readyDiv.classList.add('active-flex')
    비.style.opacity = 1;
    되.style.opacity = 1;
    await wait(35);
    나.style.opacity = 1;
    await wait(45);
    준.style.opacity = 1;
    await wait(50);
    셨.style.opacity = 1;
    await wait(60);
    물음표.style.opacity = 1;
    요.style.opacity = 1;
    await wait(150);
    readyDiv.style.scale = 0.7;
    await wait(200);
    readyDiv.classList.remove('active-flex')
    const 눈을 = document.getElementById('3');
    눈을.classList.add('active');
    await wait(250);
    눈을.innerText = '깜빡이지'
    await wait(250);
    눈을.innerText = '말고'
    await wait(250);
    눈을.innerText = '바라보세요'
    await wait(250);
    눈을.innerText = '깜빡'
    눈을.style.fontSize = '15rem';
    await wait(100);
    const popup1 = document.getElementById('popup-1');
    popup1.classList.add('active-flex')
    await wait(100);
    popup1.classList.remove('active-flex')
    눈을.style.fontSize = '8rem';
    await wait(50);
    눈을.style.scale = 0;
    await wait(50);
    눈을.classList.remove('active')
    await wait(250);
    const countdown = document.getElementById('countdown');
    countdown.classList.add('active')
    await wait(10);
    document.body.style.backgroundColor = 'white';
    countdown.style.color = 'black';
    countdown.style.fontSize = '2rem';
    await wait(450);
    countdown.style.transition = '';
    countdown.style.fontSize = '200rem';
    await wait(10);
    countdown.innerText = 2;
    countdown.style.transition = 'font-size 400ms';
    document.body.style.backgroundColor = 'black';
    countdown.style.color = 'white';
    countdown.style.fontSize = '2rem';
    await wait(450);
    countdown.style.transition = '';
    countdown.style.fontSize = '200rem';
    await wait(10);
    countdown.innerText = 1;
    countdown.style.transition = 'font-size 400ms';
    document.body.style.backgroundColor = 'white';
    countdown.style.color = 'black';
    countdown.style.fontSize = '2rem';
    await wait(450);
    document.body.style.backgroundColor = 'black'
    countdown.classList.remove('active')
    await wait(300);
    const alabama = document.getElementById('alabama');
    alabama.classList.add('active')
    await wait(10);
    alabama.style.fontSize = '4rem';
    await wait(300);
    alabama.innerText = '팀 쿡';
    await wait(225);
    alabama.innerText = '퍼렐';
    await wait(225);
    alabama.innerText = '그리고';
    await wait(225);
    alabama.innerText = '제임스 코든이';
    await wait(225);
    alabama.innerText = '카풀로';
    await wait(225);
    alabama.innerText = '강당을';
    await wait(225);
    alabama.innerText = '향해';
    await wait(225);
    alabama.innerText = '갑니다';
    await wait(225);
    const alabamaVideo = document.getElementById('alabama-video');
    alabama.classList.remove('active')
    alabamaVideo.classList.add('active');
    alabamaVideo.play();
    await wait(2400);
    alabamaVideo.classList.remove('active');
    alabama.classList.add('active');
    alabama.innerText = '팀이';
    await wait(200);
    alabama.innerText = '무대';
    await wait(200);
    alabama.innerText = '위로';
    await wait(200);
    alabama.innerText = '걸어';
    await wait(200);
    alabama.innerText = '올라갑니다';
    await wait(200);
    const stageVideo = document.getElementById('stage-video');
    alabama.classList.remove('active')
    stageVideo.classList.add('active');
    stageVideo.play();
    await wait(500);
    stageVideo.classList.remove('active');
    alabama.classList.add('active');
    alabama.innerText = '그가';
    await wait(200);
    alabama.innerText = '말합니다';
    await wait(200);
    alabama.innerText = 'Bonjour';
    await wait(100);
    alabama.innerText = 'Привет';
    await wait(100);
    alabama.innerText = 'Hello!';
    await wait(100);
    alabama.innerText = 'どうぞ';
    await wait(100);
    alabama.innerText = 'Ciao!';
    await wait(100);
    alabama.innerText = 'Hola';
    await wait(100);
    alabama.innerText = 'Olá';
    await wait(100);
    alabama.classList.remove('active');
    document.body.style.backgroundColor = 'white'
    const hello = document.getElementById('hello');
    hello.classList.add('active');
    await wait(100);
    hello.style.transition = 'transform 50ms';
    hello.style.transform = 'translateX(-3rem)';
    await wait(50);
    hello.style.transform = '';
    hello.style.fontSize = '10rem';
    hello.style.transition = '';
    await wait(100);
    hello.innerText = '모두들 안녕하세요.'
    hello.style.maxWidth = '0%';
    document.body.style.transition = 'background-color 300ms';
    hello.style.transition = 'max-width 500ms ease-out, font-size 400ms';
    await wait(10);
    hello.style.maxWidth = '100%';
    await wait(450);
    hello.style.overflow = '';
    hello.style.maxWidth = '';
    hello.style.fontSize = '200rem';
    await wait(250);
    document.body.style.backgroundColor = 'black';
    await wait(200);
    hello.classList.remove('active');
    document.body.style.transition = '';
    const introduce = document.getElementById('introduce');
    introduce.classList.add('active');
    await wait(200);
    introduce.style.fontSize = '4rem';
    await wait(200);
    introduce.innerText = '여러분들께';
    await wait(500);
    introduce.innerText = '보여';
    await wait(400);
    introduce.innerText = '보여드릴';
    await wait(300);
    introduce.innerText = '보여드릴 것이';
    await wait(300);
    introduce.innerText = '있습니다';
    await wait(300);
    introduce.style.opacity = 0;
    await wait(600);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('bgm').addEventListener('play', play);
    setTimeout(() => {document.getElementById('bgm').play();}, 500)
});
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
    이것은.style.transform = 'translateX(-3rem)';
    이것은.style.opacity = '0';
    await wait(100);
    이것은.classList.remove('active');
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
    await wait(50);
    나.style.opacity = 1;
    await wait(50);
    준.style.opacity = 1;
    await wait(50);
    셨.style.opacity = 1;
    await wait(50);
    물음표.style.opacity = 1;
    요.style.opacity = 1;
    await wait(50);
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
    눈을.style.fontSize = '4rem';
    눈을.style.scale = 1.5;
    await wait(100);
    눈을.style.scale = 0;
    await wait(100);
    눈을.classList.remove('active')
    await wait(200);
    const countdown = document.getElementById('countdown');
    countdown.classList.add('active')
    await wait(10);
    document.body.style.backgroundColor = 'white';
    countdown.style.color = 'black';
    countdown.style.fontSize = '2rem';
    await wait(400);
    countdown.style.transition = '';
    countdown.style.fontSize = '200rem';
    await wait(10);
    countdown.innerText = 2;
    countdown.style.transition = 'font-size 400ms';
    document.body.style.backgroundColor = 'black';
    countdown.style.color = 'white';
    countdown.style.fontSize = '2rem';
    await wait(400);
    countdown.style.transition = '';
    countdown.style.fontSize = '200rem';
    await wait(10);
    countdown.innerText = 1;
    countdown.style.transition = 'font-size 400ms';
    document.body.style.backgroundColor = 'white';
    countdown.style.color = 'black';
    countdown.style.fontSize = '2rem';
    await wait(400);
    document.body.style.backgroundColor = 'black'
    countdown.classList.remove('active')
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('bgm').addEventListener('play', play);
    setTimeout(() => {document.getElementById('bgm').play();}, 500)
});
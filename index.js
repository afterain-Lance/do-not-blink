const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const play = async () => {
    const backgroundVideo = document.getElementById('background-video');
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
    await wait(200);
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
    await wait(325);
    alabama.classList.remove('active');
    backgroundVideo.src = '/alabama.mp4';
    backgroundVideo.classList.add('active');
    backgroundVideo.play();
    await wait(2400);
    backgroundVideo.classList.remove('active');
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
    alabama.classList.remove('active')
    backgroundVideo.classList.add('active');
    backgroundVideo.src = '/stage.mp4';
    backgroundVideo.play();
    await wait(500);
    backgroundVideo.classList.remove('active');
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
    await wait(100);
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
    await wait(100);
    hello.classList.remove('active');
    document.body.style.transition = '';
    const introduce = document.getElementById('introduce');
    introduce.classList.add('active');
    await wait(100);
    introduce.style.fontSize = '4rem';
    await wait(200);
    introduce.innerText = '여러분들께';
    await wait(500);
    introduce.innerText = '보여';
    await wait(400);
    introduce.innerText = '보여드릴';
    await wait(325);
    introduce.innerText = '보여드릴 것이';
    await wait(325);
    introduce.innerText = '있습니다';
    await wait(200);
    introduce.style.opacity = 0;
    wait(1500).then(() => {
        introduce.classList.remove('active');
    });
    backgroundVideo.classList.add('active');
    backgroundVideo.src = '/iphone 7 first show.mp4';
    backgroundVideo.play();
    wait(5600).then(() => {
        backgroundVideo.classList.remove('active');
    });
    await wait(3000);
    const desc1 = document.getElementById('desc-1');
    const desc2 = document.getElementById('desc-2');
    desc1.classList.add('active');
    await wait(10);
    desc1.style.opacity = 1;
    await wait(1500);
    desc1.style.opacity = 0;
    desc1.style.transform = 'translateX(-4rem)';
    await wait(10);
    desc2.classList.add('active');
    await wait(10);
    desc2.style.opacity = 1;
    desc2.style.transform = '';
    wait(250).then(() => {
        desc1.classList.remove('active');
    });
    await wait(1000);
    desc2.style.opacity = 0;
    desc2.classList.remove('active');
    await wait(10);
    const bigSeven = document.getElementById('big-seven');
    bigSeven.classList.add('active');
    document.body.style.backgroundColor = 'white';
    await wait(250);
    bigSeven.classList.remove('active');
    document.body.style.backgroundColor = 'black';
    const sevenSpelling = document.getElementById('seven-spelling')
    sevenSpelling.classList.add('active-flex');
    await wait(250);
    const [sp1, sp2, sp3, sp4, sp5, sp6, sp7] = sevenSpelling.getElementsByTagName('span');
    sp2.innerText = 'i';
    sp5.innerText = 't';
    // sp7.style.scale = 0;
    // sp7.style.opacity = 0;
    // wait(50).then(() => {
    sp7.style.display = 'none';
    // })
    await wait(250);
    // sp2.style.scale = 0;
    // sp2.style.opacity = 0;
    sp4.innerText = 'p';
    // sp6.style.scale = 0;
    // sp6.style.opacity = 0;
    // wait(50).then(() => {
    sp2.style.display = 'none';
    sp6.style.display = 'none';
    // })
    await wait(250);
    sp1.innerText = '일'
    sp3.innerText = '곱';
    sp4.style.display = 'none';
    sp5.style.display = 'none';
    await wait(250);
    sevenSpelling.classList.remove('active-flex');
    document.body.style.backgroundColor = 'white';
    const sevenDesc1 = document.getElementById('seven-desc-1');
    const [sd1_1, sd1_2] = sevenDesc1.getElementsByTagName('span');
    const sevenDesc2 = document.getElementById('seven-desc-2');
    const [sd2_1, sd2_2, sd2_3] = sevenDesc2.getElementsByTagName('span');
    sevenDesc1.classList.add('active-flex');
    sd1_1.style.opacity = 1;
    await wait(250);
    sd1_2.style.opacity = 1;
    await wait(250);
    sevenDesc1.classList.remove('active-flex');
    sevenDesc2.classList.add('active-flex');
    sd2_1.style.opacity = 1;
    await wait(250);
    sd2_2.style.opacity = 1;
    await wait(250);
    sd2_3.style.opacity = 1;
    await wait(250);
    sevenDesc2.style.scale = 'calc(2 / 3)';
    await wait(250);
    sevenDesc2.classList.remove('active-flex');
    const sevenDesc3 = document.getElementById('seven-desc-3');
    document.body.style.backgroundColor = 'black';
    sevenDesc3.classList.add('active');
    await wait(250);
    sevenDesc3.innerText = '블랙 블랙.'
    await wait(250);
    sevenDesc3.classList.remove('active');
    backgroundVideo.classList.add('active');
    backgroundVideo.src = '/iphone 7 2.mp4';
    backgroundVideo.play()
    await wait(300);
    backgroundVideo.classList.remove('active');
    const sevenDesc4 = document.getElementById('seven-desc-4');
    const [sd4_1, sd4_2, sd4_3] = sevenDesc4.getElementsByTagName('span');
    sevenDesc4.classList.add('active-flex');
    sd4_1.style.opacity = 1;
    await wait(125);
    sd4_2.style.opacity = 1;
    await wait(125);
    sd4_1.style.opacity = 0;
    await wait(125);
    sd4_3.style.opacity = 1;
    await wait(125);
    sd4_2.style.opacity = 0;
    await wait(125);
    sd4_3.style.opacity = 0;
    await wait(125);
    sevenDesc4.classList.remove('active-flex');
    const sevenDesc5 = document.getElementById('seven-desc-5');
    const [sd5_1, sd5_2] = sevenDesc5.getElementsByTagName('span');
    sevenDesc5.classList.add('active-flex');
    sd5_1.style.opacity = 1;
    await wait(125);
    sd5_2.style.opacity = 1;
    await wait(125);
    sevenDesc5.classList.remove('active-flex');
    backgroundVideo.classList.add('active');
    backgroundVideo.src = '/iphone 7 3.mp4';
    backgroundVideo.play()
    await wait(300);
    backgroundVideo.classList.remove('active');
    sevenDesc5.classList.remove('active-flex');
    const sevenDesc6 = document.getElementById('seven-desc-6');
    const [sd6_1, sd6_2, sd6_3] = sevenDesc6.getElementsByTagName('span');
    sevenDesc6.classList.add('active-flex');
    sd6_1.style.opacity = 1;
    await wait(125);
    sd6_2.style.opacity = 1;
    await wait(125);
    sd6_3.style.opacity = 1;
    await wait(125);
    sevenDesc6.classList.remove('active-flex');
    const sevenDesc7 = document.getElementById('seven-desc-7');
    const [sd7_1, sd7_2] = sevenDesc7.getElementsByTagName('span');
    const [sd7_2_1, sd7_2_2] = sd7_2.getElementsByTagName('span');
    sevenDesc7.classList.add('active-flex');
    sd7_1.style.opacity = 1;
    sd7_2.style.maxWidth = '0%';
    await wait(125);
    sevenDesc7.style.transform = '';
    sd7_2.style.display = 'flex';
    await wait(50);
    sd7_2.style.maxWidth = '100%';
    await wait(600);
    sd7_1.style.opacity = 0;
    sd7_2_2.style.opacity = 0;
    wait(200).then(() => {
        sevenDesc7.classList.remove('active-flex');
    });
    backgroundVideo.classList.add('active');
    backgroundVideo.src = '/iphone 7 4.mp4';
    backgroundVideo.play()
    await wait(1400);
    backgroundVideo.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('bgm').addEventListener('play', play);
    setTimeout(() => { document.getElementById('bgm').play(); }, 500)
});
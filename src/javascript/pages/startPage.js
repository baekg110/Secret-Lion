class StartPage {
    constructor() {}
    render() {
        const frag = document.createDocumentFragment();

        const bodybgc = document.createElement('div');
        bodybgc.classList.add('start_bodyWrapper');

        const startSection = document.createElement('section');
        startSection.setAttribute('class', 'start_sec');

        const logoCont = document.createElement('h1');
        logoCont.setAttribute('class', 'start_h1_logoCont');

        const logoImg = document.createElement('img');
        logoImg.setAttribute('class', 'start_img_logo');
        logoImg.setAttribute(
            'src',
            'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
        );
        logoImg.setAttribute('alt', '비밀멋사 로고 이미지');

        const startTit = document.createElement('p');
        startTit.setAttribute('class', 'start_p_tit');
        startTit.textContent = '멋쟁이사자처럼 프론트엔드 스쿨의 비밀이야기';

        const startLink = document.createElement('a');
        startLink.setAttribute('class', 'start_a_go');
        startLink.textContent = '시작하기';
        startLink.href = '/login';

        //start Section
        startSection.appendChild(logoCont);
        startSection.appendChild(startTit);
        startSection.appendChild(startLink);

        logoCont.appendChild(logoImg);

        //전체
        frag.appendChild(bodybgc);
        bodybgc.appendChild(startSection);

        return frag;
    }
}

export default StartPage;


document.getElementById('hideInfo-btn')!.addEventListener('click', () => {
    let scrollDiv = document.getElementById('scroll-div')! as HTMLElement;
    let infoDivs = document.querySelectorAll('.info-div')! as NodeListOf<HTMLElement>;
    
    /*for (var i = 0; i < infoDivs.length; i++) {
        if (infoDivs[i].style.opacity == '0') {
            infoDivs[i].style.opacity = '1';
            scrollDiv.style.pointerEvents = 'auto';
            document.getElementById('hideInfo-btn')!.style.background = "url('./src/assets/eye.svg')";
        } else {
            infoDivs[i].style.opacity = '0';
            scrollDiv.style.pointerEvents = 'none';
            document.getElementById('hideInfo-btn')!.style.background = "url('./src/assets/eye-off.svg')";
        }
    }*/

    if (scrollDiv.style.opacity == '0') {
        scrollDiv.style.opacity = '1';
        scrollDiv.style.pointerEvents = 'auto';
        document.getElementById('hideInfo-btn')!.style.background = "url('./src/assets/eye.svg')";
    } else {
        scrollDiv.style.opacity = '0';
        scrollDiv.style.pointerEvents = 'none';
        document.getElementById('hideInfo-btn')!.style.background = "url('./src/assets/eye-off.svg')";
    }
});

document.getElementById('scrollIndicator-img')!.addEventListener('click', () => {
    document.getElementById('about-div')!.scrollIntoView({behavior: 'smooth'});
});

document.getElementById('hideInfo-btn')!.addEventListener('domContentLoaded', () => {
    document.getElementById('hideInfo-btn')!.style.background = "url('./src/assets/eye.svg')";
});

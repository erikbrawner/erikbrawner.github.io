
document.getElementById('hideInfo-btn')!.addEventListener('click', () => {
    let scrollDiv = document.getElementById('scroll-div')! as HTMLElement;
    let infoDivs = document.querySelectorAll('.info-div')! as NodeListOf<HTMLElement>;
    let hideInfoIcon = document.getElementById('hideInfo-svg')! as HTMLElement;
    let showInfoIcon = document.getElementById('showInfo-svg')! as HTMLElement;
    
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
        //document.getElementById('hideInfo-btn')!.style.background = "url('./src/assets/eye.svg')";
        hideInfoIcon.classList.remove('hidden');
        showInfoIcon.classList.add('hidden');
    } else {
        scrollDiv.style.opacity = '0';
        scrollDiv.style.pointerEvents = 'none';
        //document.getElementById('hideInfo-btn')!.style.background = "url('./src/assets/eye-off.svg')";
        hideInfoIcon.classList.add('hidden');
        showInfoIcon.classList.remove('hidden');
    }
});

document.getElementById('scrollIndicator-img')!.addEventListener('click', () => {
    document.getElementById('about-div')!.scrollIntoView({behavior: 'smooth'});
});

/*document.getElementById('hideInfo-btn')!.addEventListener('domContentLoaded', () => {
    document.getElementById('hideInfo-btn')!.style.background = "url('./src/assets/eye.svg')";
});*/

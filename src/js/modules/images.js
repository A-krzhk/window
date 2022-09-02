const images = () => {
    const 
        imgPopup = document.createElement(`div`),
        workSection = document.querySelector(`.works`),
        bigImg = document.createElement(`img`);

    imgPopup.classList.add(`popup_images`);
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = `center`;
    imgPopup.style.alignItems = `center`;
    imgPopup.style.display = `none`;
    bigImg.style.maxWidth = `80%`;

    imgPopup.appendChild(bigImg);

    workSection.addEventListener(`click`, e => {
        e.preventDefault();

        let target = e.target;
        if(target && target.classList.contains(`preview`)) {
            imgPopup.style.display = `flex`;

            const path = target.parentNode.getAttribute(`href`);
            bigImg.setAttribute(`src`, path);
            document.body.style.overflow = `hidden`;
        }

        if (target && target.matches(`div.popup_images`)) {
            imgPopup.style.display = `none`;
            document.body.style.overflow = ``;
        }
    });
};

export default images;
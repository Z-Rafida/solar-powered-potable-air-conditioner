const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


const initSlider = () => {
    const imageList = document.querySelector(".slider_wrapper .image_list");
    const slideButton = document.querySelectorAll(".slider_wrapper .fa-solid");

    //image slide according to image slide button clicks

    slideButton.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev_slide" ? -1:1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth" });
        });
    });
}

window.addEventListener("load", initSlider);
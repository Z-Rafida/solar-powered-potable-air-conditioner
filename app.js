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


//mailto
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("fname", "lname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:zakariarafida81@gmail.com?subject=Message from ${encodeURIConponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(name)} (${encodeURIComponent(email)})`;

    window.location.href = mailtoLink;
});

    
const reviewStars = document.querySelectorAll(".review i");
const alert = document.querySelector(".alert");
//Click
reviewStars.forEach((star, index) => {
    star.addEventListener("click", () => {
        reviewStars.forEach((el) => el.classList.remove("fas", "checked"));

        for(let i =0; i <= index; i++) {
            reviewStars[i].classList.add("fas", "checked");
        }

        const starsCount = document.querySelectorAll(".review i.checked").length;

        alert.classList.add("active");
        alert.innerHTML = `Your Rating Is : ${starsCount}`;

        setTimeout(() => {
            alert.classList.remove("active");
        }, 2000);
    });
    //Hover
    star.addEventListener("mousemove", () => {
        for(let i =0; i <= index; i++) 
            reviewStars[i].classList.add("hovered");
    });

    star.addEventListener("mouseout", () => {
        reviewStars.forEach((el) => el.classList.remove("hovered"));
    });
});
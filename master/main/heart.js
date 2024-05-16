const heart = document.querySelectorAll(".fa-regular.fa-heart");
        const redheart = document.querySelectorAll(".fa-solid.fa-heart");
        for (let i = 0; i < heart.length; i++) {
            const hide = heart[i];
            const appear = redheart[i];
            hide.addEventListener("click", () => {
                hide.classList.add("hidden");
                appear.classList.remove("hidden");
            }
            );
            appear.addEventListener("click", () => {
                hide.classList.remove("hidden");
                appear.classList.add("hidden");
            }
            );
        }
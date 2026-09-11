const sportHeaders =
    document.querySelectorAll(".sport-header");


sportHeaders.forEach(header => {

    header.addEventListener("click", () => {

        const current =
            header.parentElement;


        document
            .querySelectorAll(".sport-detail")
            .forEach(item => {

                if (item !== current) {
                    item.classList.remove("open");
                }

            });


        current.classList.toggle("open");

    });

});

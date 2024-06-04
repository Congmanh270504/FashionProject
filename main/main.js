function changeTitle(title) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove("active");
        if (content.classList.contains(title)) {
            content.classList.add("active")
        }
    }
    )
}
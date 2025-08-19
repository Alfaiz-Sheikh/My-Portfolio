                                // Responsive Navigation Bar

const more = document.querySelector(".more");
const list = document.querySelector("#list");

const showMenu = () => {
    if(list.style.display == "none"){
        list.style.display = "block";
    }else{
        list.style.display = "none";
    }
}

more.addEventListener("click", showMenu);
// Image data
const birdData = {
    "Pardalote": {
        "src": "http://www.outgrabe.net/bird00.jpg",
        "description": "Pardalote by fir0002 (CC-by-NC)"
    },
    "Purple Swamp Hen": {
        "src": "http://www.outgrabe.net/bird01.jpg",
        "description": "Purple swamp hen by Toby Hudson (CC-by-SA)"
    },
    "White-headed Stilt": {
        "src": "http://www.outgrabe.net/bird02.jpg",
        "description": "White-headed Stilt by JJ Harrison (CC-by-SA)"
    },
    "Inland Thornbill": {
        "src": "http://www.outgrabe.net/bird03.jpg",
        "description": "Inland Thornbill by Peter Jacobs (CC-by-SA)"
    },
    "Rose Robin": {
        "src": "http://www.outgrabe.net/bird04.jpg",
        "description": "Rose Robin by JJ Harrison (CC-by-SA)"
    }
};

// Function to change the image and description
function changeImage(birdName) {
    const birdImage = document.getElementById("birdImage");
    const birdDescription = document.getElementById("birdDescription");

    birdImage.src = birdData[birdName].src;
    birdDescription.innerText = birdData[birdName].description;
}

// Function to toggle theme
function toggleTheme() {
    const rootElement = document.documentElement;
    const currentTheme = rootElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    rootElement.setAttribute("data-theme", newTheme);
}

// Set initial theme and image
document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.setAttribute("data-theme", "light");
    changeImage("Pardalote");
});

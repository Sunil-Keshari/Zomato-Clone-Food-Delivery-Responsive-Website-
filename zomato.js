const restaurantData = [
    { name: "The Italian Bistro", cuisine: "Italian", location: "Noida Sector 62", img: src="Foodimages/Italian.png" },
    { name: "Sushi Heaven", cuisine: "Japanese", location: "Satyaniketan, New Delhi", img: "Foodimages/Sushi.jpg" },
    { name: "Taco Bell", cuisine: "Mexican", location: "Bangalore Palace, Bangalore", img: "Foodimages/Taco.png" },
    { name: "Curry King", cuisine: "Indian", location: "Mumbai", img: "Foodimages/Curry.png" },
    { name: "Burger Palace", cuisine: "American", location: "Middle Circle, Connaught Place, New Delhi", img: "Foodimages/Burger.png" },

    { name: "Pasta Paradise", cuisine: "Italian", location: "Amber Fort, Jaipur", img: "Foodimages/Pasta.png" },
    { name: "Ramen Kingdom", cuisine: "Japanese", location: "Satyaniketan, New Delhi", img: "Foodimages/Ramen.jpg" },
    { name: "El Camino", cuisine: "Mexican", location: "Shaniwar Wada, Pune", img: "Foodimages/El.jpg" },
    { name: "Biryani Baithak", cuisine: "Indian", location: "Hyderabad", img: "Foodimages/Biryani.jpg" },
    { name: "Hot Dog Hub", cuisine: "American", location: "Lajpat Nagar Delhi", img: "Foodimages/Hotdog.jpg" },

    { name: "La Dolce Vita", cuisine: "Italian", location: "Bangalore Palace, Bangalore", img: "Foodimages/LaDolce.jpg" },
    { name: "Sushi & Sake", cuisine: "Japanese", location: "Shaniwar Wada, Pune", img: "Foodimages/Sushi.jpg" },
    { name: "Chipotle Grill", cuisine: "Mexican", location: "Gateway of India, Mumbai", img: "Foodimages/Chipotle.jpg" },
    { name: "Tandoori Roti", cuisine: "Indian", location: "Chandni Chowk, Delhi", img: "Foodimages/Tandoor.jpg" },
    { name: "Cuisine", cuisine: "American", location: "Amber Fort, Jaipur", img: "Foodimages/Ame.jpg" },
];

//Generate and display restaurant cards
function displayRestaurants(data) {
    const restaurantList = document.getElementById('restaurantList');
    restaurantList.innerHTML = ''; // Clear existing content

    data.forEach(restaurant => {
        const restaurantCard = document.createElement('div');
        restaurantCard.classList.add('restaurant-card');

        restaurantCard.innerHTML = `
            <img src="${restaurant.img}" alt="${restaurant.name}" />
            <h3>${restaurant.name}</h3>
            <p>${restaurant.cuisine} Cuisine</p>
            <p>Location: ${restaurant.location}</p>
        `;

        restaurantList.appendChild(restaurantCard);
    });
}

// search restaurants by name
function searchRestaurants() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredRestaurants = restaurantData.filter(restaurant => 
        restaurant.name.toLowerCase().includes(searchInput)
    );
    displayRestaurants(filteredRestaurants);
}

// Display all restaurants on page load
window.onload = () => {
    displayRestaurants(restaurantData);
};



// Speker Text

function speakText() {
    let text = document.getElementById("search").value;
    if (text.trim() === "") {
        alert("Please enter some text to speak!");
        return;
    }

    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US"; // You can change language
    speech.rate = 1; // Speed (0.1 - 10)
    speech.pitch = 1; // Pitch (0 - 2)
    
    window.speechSynthesis.speak(speech);
}

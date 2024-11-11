import monkeyImg1 from "./assets/img/monkey1.png";
import monkeyImg2 from "./assets/img/monkey2.png";
export function loadHomePage(){
	const content = document.getElementById('content')
	content.textContent = ""

	const monkeyImgLeft = document.createElement('img')
	const monkeyImgRight = document.createElement('img')
	monkeyImgLeft.src = monkeyImg1
	monkeyImgLeft.classList.add('monkey-img', 'left')
	monkeyImgRight.classList.add('monkey-img', 'right')
	monkeyImgRight.src = monkeyImg2

	const descriptionDiv = document.createElement('div')
	const description = document.createElement('p')
	descriptionDiv.classList.add('card')
	description.textContent = "Welcome to Monkey Affairs, where culinary creativity and a relaxed atmosphere come together to offer you a unique dining experience. Enjoy a fusion of tropical flavors and modern classics in a vibrant, nature-inspired space.";
	descriptionDiv.appendChild(description);
	
	const openingHoursDiv = document.createElement('div')
	const openingHours = document.createElement('p')
	openingHoursDiv.classList.add('card')
	openingHours.textContent = "Hours: Monday to Sunday, 12:00 p.m. - 11:00 p.m."
	openingHoursDiv.appendChild(openingHours)
	
	const locationDiv = document.createElement('div')
	const location = document.createElement('p')
	locationDiv.classList.add('card')
	location.textContent = "Location: 123 Main Ave, Monkey City"
	locationDiv.appendChild(location)

	const restaurantTitleDiv = document.createElement('div')
	const restaurantTitle = document.createElement('h1')
	restaurantTitle.textContent = "Monkey Affairs Restaurant"
	restaurantTitle.classList.add('title')
	restaurantTitleDiv.appendChild(restaurantTitle);

	content.appendChild(restaurantTitleDiv);
	content.appendChild(descriptionDiv);
	content.appendChild(openingHoursDiv);
	content.appendChild(locationDiv);
	content.appendChild(monkeyImgLeft);
	content.appendChild(monkeyImgRight);
};
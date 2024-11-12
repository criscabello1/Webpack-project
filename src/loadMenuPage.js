import drink1Img from './assets/img/dishes/drink1.jpg';
import drink2Img from './assets/img/dishes/drink2.png'
import drink3Img from './assets/img/dishes/drink3.png'
import dish1Img from './assets/img/dishes/dish1.png'
import dish2Img from './assets/img/dishes/dish2.png'
import dish3Img from './assets/img/dishes/dish3.png'
import dessert1Img from './assets/img/dishes/dessert1.png'
import dessert2Img from './assets/img/dishes/dessert2.png'
import dessert3Img from './assets/img/dishes/dessert3.png'
const food = [
	{
		title: "Banana Breeze Smoothie",
		img: drink1Img ,
		description: "A creamy, tropical smoothie blending ripe bananas, coconut milk, and a hint of honey. Topped with fresh banana slices and coconut flakes. 🥥🍌"
	},
	{
		title: "Tropical Canopy Punch",
		img: drink2Img ,
		description: "A vibrant punch made with pineapple, mango, and orange juices, infused with a splash of passion fruit syrup and a touch of sparkling water. Garnished with a slice of starfruit and a leaf. 🌴🍍"
	},
	{
		title: "Jungle Java Shake",
		img: drink3Img ,
		description: "Cold brew coffee blended with banana, almond milk, and a hint of cinnamon for an energizing, jungle-inspired shake. Finished with a sprinkle of cacao nibs. ☕🍌"
	},
	{
		title: "Safari Banana Leaf Wraps",
		img: dish1Img,
		description: "Banana leaves stuffed with spiced coconut rice, grilled plantains, and marinated chicken or tofu. Served with a side of tangy tamarind dipping sauce. 🍃🍗"
	},
	{
		title: "Monkey King Burger",
		img: dish2Img ,
		description: "A juicy beef or veggie patty topped with grilled pineapple, caramelized onions, and a zesty mango chutney. Served in a soft coconut bun with a side of sweet potato fries. 🍔🍍"
	},
	{
		title: "Rainforest Curry",
		img: dish3Img ,
		description: "A flavorful coconut and lemongrass curry with seasonal vegetables, tender chunks of banana blossom, and your choice of chicken, shrimp, or tofu. Served with a side of fragrant jasmine rice. 🍛🥥"
	},
	{
		title: "Banana Bonanza Split",
		img: dessert1Img ,
		description: "A playful twist on the classic banana split with caramelized bananas, coconut ice cream, chocolate drizzle, and topped with roasted macadamia nuts. 🍌🍫"
	},
	{
		title: "Coconut Monkey Cake",
		img: dessert2Img ,
		description: "Layers of moist coconut sponge cake with creamy banana filling and a hint of lime zest. Topped with a light coconut frosting and toasted coconut flakes. 🎂🥥"
	},
	{
		title: "Jungle Fruit Parfait",
		img: dessert3Img,
		description: "A refreshing layered parfait with passion fruit custard, fresh berries, tropical fruit chunks, and crunchy banana granola. Served in a glass jar. 🍓🥭"
	}
]

export function loadMenuPage(){
	const content = document.getElementById('content');
	content.textContent = "";
	const menuDiv = document.createElement('h1');
	menuDiv.textContent = 'Menu';
	const drinkTitle = document.createElement('h2');
	const mainDishesTitle = document.createElement('h2');
	const dessertTitle = document.createElement('h2');
	drinkTitle.textContent = 'Drinks';
	mainDishesTitle.textContent = 'Main Dishes';
	dessertTitle.textContent = 'Desserts';
	

	const gridMenu = document.createElement('div');
	gridMenu.classList.add('grid-menu');
	food.forEach((item, index) => {
		const dishCard = document.createElement('div');
		dishCard.dataset.index = index;
		const dishTitle = document.createElement('h3');
		const dishImg = document.createElement('img');
		const dishDescription = document.createElement('p');
		dishCard.classList.add('dish-card');
		dishTitle.classList.add('dish-title');
		dishImg.classList.add('dish-img');
		dishDescription.classList.add('dish-description');
		dishTitle.textContent = `${item.title}`;
		dishImg.src = item.img;
		dishDescription.textContent = `${item.description}`;

		dishCard.appendChild(dishTitle);
		dishCard.appendChild(dishImg);
		dishCard.appendChild(dishDescription);

		if(index == 0){
			gridMenu.appendChild(drinkTitle);
		}
		if(index == 3){
			gridMenu.appendChild(mainDishesTitle);
		}
		if(index == 6){
			gridMenu.appendChild(dessertTitle);
		}
		gridMenu.appendChild(dishCard);
	});
	content.appendChild(menuDiv);
	content.appendChild(gridMenu);
}
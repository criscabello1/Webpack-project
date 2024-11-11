export function loadMenuPage(){
	const content = document.getElementById('content');
	content.textContent = "";
	const menuDiv = document.createElement('h1');
	menuDiv.textContent = 'Menu'
	content.appendChild(menuDiv);
}
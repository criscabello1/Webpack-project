export function loadContactPage(){
	const content = document.getElementById('content')
	content.textContent = ""
	const siteTitle = document.createElement('h1');
	siteTitle.textContent = 'Contact Us';
	const contactDiv = document.createElement('div');
	const contactDiv2 = document.createElement('div');
	contactDiv.classList.add('contact-card')
	contactDiv2.classList.add('contact-card')
	const contactDivName = document.createElement('p');
	const contactDivEmail = document.createElement('p');
	const contactDivTel = document.createElement('p');
	const contactDivName2 = document.createElement('p');
	const contactDivEmail2 = document.createElement('p');
	const contactDivTel2 = document.createElement('p');
	contactDivName.textContent = 'Chef Monkey';
	contactDivEmail.textContent = 'bestChefInJungle@monkeycity.com';
	contactDivTel.textContent = '+555555555';
	contactDivName2.textContent = 'Owner';
	contactDivEmail2.textContent = 'businessMonkey@monkeycity.com';
	contactDivTel2.textContent = '+99999999';
	contactDiv.appendChild(contactDivName);
	contactDiv.appendChild(contactDivEmail);
	contactDiv.appendChild(contactDivTel);
	contactDiv2.appendChild(contactDivName2);
	contactDiv2.appendChild(contactDivEmail2);
	contactDiv2.appendChild(contactDivTel2);
	content.appendChild(siteTitle);
	content.appendChild(contactDiv);
	content.appendChild(contactDiv2);
};
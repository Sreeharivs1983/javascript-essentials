// Arrays
const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// Using map() for Breakfast Menu
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => 
    `<p>Item ${index + 1}: ${item}</p>`
).join('');

document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// Using forEach() for Main Course Menu
let mainCourseItem = '';

mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});

document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// Using for loop for Dessert Menu
let dessertItem = '';

for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}

document.getElementById('dessertMenuItems').innerHTML = dessertItem;

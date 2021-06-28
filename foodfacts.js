var quotes = [
	'McDonald’s once made bubblegum-flavored broccoli',
	'Bird’s Saliva Is Actually An Expensive Delicacy',
	'Chewing Coffee Beans Can Help Eliminate Bad Breath',
	'Chocolate Is As Healthy As Fruit',
	'Ranch dressing is dyed.',
	'One fast-food burger can have meat from 100 different cows.',
	"Fruit-flavored snacks shine because of car wax."

]
function newQuote2() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('ff').innerHTML = quotes[randomNumber];
}
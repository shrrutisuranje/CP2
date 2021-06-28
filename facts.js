var quotes = [
        'McDonald’s once made bubblegum-flavored broccoli',
	'Some fungi create zombies, then control their minds',
	'Venus spins clockwise. It’s the only planet that does!',
	'Wilma Rudolph (who set the world record in 1960 for 100, 200 and 4x100-meter relay) had polio, scarlet fever and pneumonia as a child, leading doctors to believe she’d never walk again.',
	'Humans are the Only Animals That Enjoy Spicy Foods. They Are Also the Only Animals Whose Brains Shrink',
	'Chewing Gum After a Meal Reduces Heartburn',
	"Bees are able to detect bombs with their tongues. So when the bees' handler sees it extend its proboscis, they know they've got a bomb on their hands.",
	"Tear ducts don't fully develop in infants until they are one to three months old, making it impossible for babies to shed actual tears.",
	'The cigarette lighter was invented before the match stick.',
	'The longest music performance began on 5th September 2001 in a church in Germany and will end in 2640',
	"The Tanganyika laughter epidemic lasted for around 6 to 18 months. The laughter started in a village school in Tanzania (then Tanganyika) with 3 girls. In the end, it affected over a 1000 people. It also made some people cry, scream and faint before eventually dying out.",
	"The small percentage of static you see on 'dead' TV channels is actually residual radiation from the Big Bang.",
	"Due to shortage of metal, the Oscars were made of painted plaster during World War II.",
	"There are more possible iterations in a game of chess than there are atoms in the known universe.",
	"The China Highway 110 traffic jam lasted for more than 10 days. Cars moved at the speed of 0.6 miles per day."
]
function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('fact').innerHTML = quotes[randomNumber];
}

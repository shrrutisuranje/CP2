var quotes = [
	'A human organ that no-one knew about has been hiding in plain sight all this time. Called mesentery, it connects the intestine to the abdomen and is believed to perform important functions for the body ranging from helping the heart to aiding the immune system.',
	'Pugs’ cute little flat faces are the result of a genetic mutation. Their features have been strongly linked to a gene variant called SMOC2',
	'Lungs do more than help us breathe – a surprising discovery has found they also make blood. The organ, present in mammals, is believed to produce more than 10 million platelets (tiny blood cells) per hour.',
	'Great apes, including chimpanzees and orangutans, have absolutely no appreciation of music whatsoever.',
	'The Kepler-90 star system has as many planets as our own solar system, making us tied for the most planets revolving around a single star known so far.',
	"Scientists may finally have an answer to why eggs come in different shapes and, apparently, it is all down to the bird’s flying ability.",
	"Bees have been shown to understand the concept of zero. Scientists discovered this after training the insects to count shapes, following previous research that revealed they can count to four",
	"There is enough DNA in the average person’s body to stretch from the sun to Pluto and back — 17 times.",
	'Grasshoppers have ears in their bellies.',
	'When Helium is cooled to almost absolute zero (-460°F or -273°C, the lowest temperature possible), it becomes a liquid with surprising properties: it flows against gravity and will start running up and over the lip of a glass container!',
	"Hot water freezes faster than cold water. In certain conditions, hot water can freezes faster than cold water — a counter-intuitive phenomenon known as the Mpemba effect.",
	"Sunsets on Mars are blue.",
	"Launching things into space is wildly expensive. Business Insider determined that a 16-ounce bottle of water can cost anywhere between $9,100 to $43,180 to blast into space today.",
	"The only bird that can fly backwards is a hummingbird.",
	"The highest mountain known to humans is a mountain on the asteroid Vesta. The mountain on the asteroid is 3 times bigger than Mount Everest."
]
function newQuote1() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('sf').innerHTML = quotes[randomNumber];
}
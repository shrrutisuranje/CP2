var quotes = [
	'SPACE IS COMPLETELY SILENT. There is no atmosphere in space, which means that sound has no medium or way to travel to be heard.',
	'THE HOTTEST PLANET IN OUR SOLAR SYSTEM IS 450° C',
	'Venus spins clockwise. It’s the only planet that does!',
	'A FULL NASA SPACE SUIT COSTS $12,000,000.',
	'The Sun is large enough that approximately 1.3 million Earths could fit inside (if squashed in) or if the Earths retained their spherical shape then 960,000 would fit.',
	'There are about three trillion trees on Planet Earth, and between 100-400 billion stars, approximately, in the galaxy.',
	"ONE DAY ON VENUS IS LONGER THAN ONE YEAR.",
	"There’s a planet made of diamonds twice the size of earth The 'super earth' aka 55 Cancri e, is most likely covered in graphite and diamond.",
	'An effect known as cold welding, if two pieces of the same metal material touch in space, they will be pulled together to form one object. ',
	'Saturn’s less dense than water which means that if put in a very large bowl of water, it would float.',
	"Neutron stars can spin 600 times per second."

]
function newQuote4() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('ef').innerHTML = quotes[randomNumber];
}
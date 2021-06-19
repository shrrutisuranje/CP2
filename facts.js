var quotes = [
	'FUN FACT: I literally missed all of my lectures this week to avoid people spoiling Endgame.',
	'FUN FACT: If you are reading this, know that I struggled making the damn Click Me! button work. At one point, I took a fat nap to sleep away the frustrations of Javascript.',
	'FUN FACT: I am a picky eater and dislike most vegetables, especially mushrooms. One time a friend tried to sneak mushrooms onto my pizza. Needless to say, I no longer trust her around my food.',
	'FUN FACT: I am lactose intolerant but I will continue to consume milk, cheese, and ice cream until the day my family pries the dairy goods out of my cold, dead hands.',
	'FUN FACT: Anime easily influences my life. Especially the memes. It is difficult to explain to friends why I flinch when Another One Bites the Dust plays nowadays.',
	'FUN FACT: Any sad animal-related videos/movies makes me cry. A lot. Dogs Purpose ALONE made me cry ten times on separate occasions (dont get me started on Hachi).',
	'FUN FACT: I got my laptop for free from a raffle. My cousin almost won, but Fate has chosen ME as the victor.',
	'FUN FACT: I am running out of fun facts.',
	'FUN FACT: I AM a banana slug; yellow on the outside, white on the inside, and overall an unathletic procrastinator.',
	'FUN FACT: I get extremely competitive with friends in MarioKart. On the first lap, its all fun and games until someone decides to be a little bitch and chuck a red shell at me. By the end of the third lap, we are no longer friends.'
]
function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('fact').innerHTML = quotes[randomNumber];
}

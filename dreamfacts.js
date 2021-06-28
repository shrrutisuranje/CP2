var quotes = [
	'The majority of men tend to have all male characters in their dreams. However, when women dream, they have a more even mixture of males and females in their dreams.',
	'As the brain problem solves during dreams it actually mimics the creative, waking thought process. For this reason, many artists are more likely to be stimulated by their dreams, and think with more creativity while awake.',
	'Your mind is more active while you are dreaming than when you’re awake.',
	'Blind people experience more sensory dreams.',
	'Some people dream only in black and white. Age plays a factor in this phenomenon, as people 25 or younger say they almost never dream in black and white, while people 55 and older claim to dream in color about 75 percent of the time. ',
	'The most common emotion experienced in dreams is anxiety, and negative emotions, in general, are much more common than positive ones.',
	"While dreams are often heavily influenced by our personal experiences, researchers have found that certain dream themes are very common across different cultures.",
	"You can’t read while dreaming, or tell the time.",
	'Some inventions are inspired by dreams. The idea for Google -Larry Page, Alternating current generator -Tesla, DNA’s double helix spiral form -James Watson. Yes, all of these',
	'There are some astounding cases where people actually dreamt about things which happened to them later, in the exact same ways they dreamed about. For example, Abraham Lincoln dreamt of His Assassination and many of the victims of 9/11 had dreams warning them about the catastrophe'

]
function newQuote3() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('df').innerHTML = quotes[randomNumber];
}
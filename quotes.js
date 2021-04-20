var randomQ = randomInt(0, 21);
function randomInt(lowest, size) {
  //Return the actual value instead
  return Math.floor(Math.random() * size) + lowest; 

}

var quoteElem = document.getElementById("quote");

quoteElem.innerHTML = getQuote(randomQ);

function getQuote(n) {
   var quotes = [
"I feel sorry for people who don't drink. When they wake up in the morning that's as good as they're going to feel all day.    ~ Frank Sinatra",
"When I read about the evils of drinking I gave up reading.    ~ Henny Youngman",
"24 hours in a day. 24 beers in a case. Coincidence? I think not.    ~ H.L. Mencken",
"Alcohol is the anesthesia by which we endure the operation of life.    ~ George Bernard Shaw",
"Alcohol is necessary for a man so that he can have a good opinion of himself, undisturbed be the facts.    ~ Finley Peter Dunne",
"What contemptible scoundrel has stolen the cork to my lunch?    ~ W.C. Fields",
"To some it's a six-pack. To me it's a Support Group.    ~  Leo Durocher",
"Always remember that I have taken more out of alcohol than alcohol has taken out of me.    ~ Winston Churchill",
"I never drink water because of the disgusting things that fish do in it.    ~ W.C. Fields",
"The problem with the world is that everyone is a few drinks behind.    ~ Humphrey Bogart",
"Not all chemicals are bad. Without chemicals such as hydrogen and oxygen, for example, there would be no way to make water, a vital ingredient in beer.    ~ Dave Barry",
"Work is the curse of the drinking classes.    ~ Oscar Wilde",
"Remember 'I' before 'E', except in Budweiser.    ~ Professor Irwin Corey",
"And God said, 'Let there be vodka!'' And He saw that it was good. Then God said, 'Let there be light!' And then He said, 'Whoa - too much light.'    ~ Anonymous",
"I cook with wine, sometimes I even add it to the food.    ~ W.C. Fields",
"Abstainer: a weak person who yields to the temptation of denying himself a pleasure.    ~ Amrose Bierce",
"In wine there is wisdom, in beer there is Freedom, in water there is bacteria.    ~ Benjamin Franklin",
"Here's to alcohol, the rose colored glasses of life.    ~ F. Scott Fitzgerald",
"Alcohol may be man's worst enemy, but the bible says love your enemy.    ~ Frank Sinatra",
"Everybody's got to believe in something. I believe I'll have another beer.    ~ W.C. Fields",
"Wine is sunlight, held together by water.    ~ Galileo",
"Vodka is kind of a hobby.    ~ Betty White",
];
   
   return quotes[n];
}
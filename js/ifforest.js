/*
stats.score
*/

var			textes = {
	'happy' : 
		[
			"What a great form today, you could let your colleagues take advantage of it !",
			"What a great form today, you should use that energy to prepare a good meal.",
			"What a great form today, you may use that energy to do some sport.",
			"What a dynamism today ! Time to share innovative ideas !",
			"I'm not perfect but I'm me and thats even better",
			"Show off this smile like a trophy all day long !",
			"- Father : Why did you put that frog in your brother's bed ? \
				- Son : So disgusted !  I couldn't find any worms !",
			"Be yourself; everyone else is already taken. \
			Oscar Wilde",
			"You've gotta dance like there's nobody watching, \
			Love like you'll never be hurt, \
			Sing like there's nobody listening, \
			And live like it's heaven on earth. \
			William W. Purkey",
		],
	'neutral' :
		[
			"Happiness is not something ready made. It comes from your own actions. \
			― Dalai Lama XIV",
			"Don't seem very enthousiastic today... Try and say cheese ! That's good ! Now keep smiling and make your day great again.",
			"Meh Dou you know there is a drone race at 12 in the hall ?",
			"Time to have a break ! Why not having a coffee with some colleagues ?",
			"	- He used to take his dog to school every day, but he finally had to stop. \
				- How come? \
				- The dog got graduated.",
			"Quick massage : Rub your eyebrows with your thumbs by putting some circular pressure.",
			"Go and pick up some chocolate to your colleague !",
			"It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace. \
			Chuck Palahniuk, Diary",
			"Be the change that you wish to see in the world. \
			Mahatma Gandhi",
		],
	'sad' :
		[
			"Count your age by friends, not years. Count your life by smiles, not tears. \
			John Lennon",
			"For every minute you are angry you lose sixty seconds of happiness. \
			Ralph Waldo Emerson",
			"The best way to cheer yourself up is to try to cheer somebody else up. \
			Mark Twain",
			"Hard day ? Why not having a coffee with some colleagues.",
			"A guy shows up late for work. The boss yells, You should have been here at 8.30! He replies. Why? What happened at 8.30?",
			"Tips for relaxation : Fill your belly while breathing in, and withdraw it while breathing out.  ",
			"Tips for relaxation : Raise your shoulders up as high as possible and then relax them together  in one go. So unwinding !",
			"Quick massage : Put some pressure on your temples while doing circular movements. Easy and very relaxing !",
			"Quick massage : Rub your neck with your fingers and put some pressure ",
			"Quick massage : Put some circular pressure on the palm of one hand with the thumb of the other hand. ",
			"Pick 3 words that describe you among that list : kind, funny, attentive, passionate, careful, helpful, gentle, curious, beautiful. Now repeat I am adjective 1, adjective 2, adjective 3 twice in the day.",
			"Tips for concentration : Stare at an object for 30 seconds, then try and represent it mentally as precise as possible with your eyes closed.",
		]
}

function	print_bubble()
{
	calc_diff();
	if (stats.scores.phappiness > 50 || stats.scores.psurprise > 50)
		$(".speech").html(textes.happy[Math.floor(Math.random() * textes.happy.length)]);

	else if (stats.scores.pneutral > 50 || stats.scores.pdisgust)
		$(".speech").html(textes.neutral[Math.floor(Math.random() * textes.neutral.length)]);

	else if (stats.scores.psadness > 50 || stats.scores.pcontempt  > 50 || stats.scores.pcontempt > 50 || stats.scores.panger > 50)
		$(".speech").html(textes.sad[Math.floor(Math.random() * textes.sad.length)]);
	else
		$(".speech").html("hello");

}

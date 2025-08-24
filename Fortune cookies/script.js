const fortunes = [
    "Don’t trust people who like pineapple on pizza.",
    "You will soon find what you were not looking for.",
    "The best way to predict the future is to invent it.",
    "Your code will compile on the first try today.",
    "Beware: The Wi-Fi will be unstable when you need it most.",
    "A mysterious bug will disappear as suddenly as it appeared.",
    "You will meet someone who loves tabs more than spaces.",
    "Your fortune is as sweet as this cookie.",
    "A random act of kindness will come your way.",
    "Today is a good day to start something new.",
    "You will soon laugh at something you coded last week.",
    "Don't take advice from someone who doesn't like fortune cookies.",
    "Unexpected downtime is expected soon.",
    "Someone will ask you to explain blockchain.",
    "You will finally remember that one password.",
    "Your favorite show will have a plot twist.",
    "Never argue with someone who can Google faster than you.",
    "An old friend will send a meme your way.",
    "Your playlist will shuffle to your favorite song.",
    "A pizza without cheese is like a fortune without wisdom.",
    "You will discover a new bug by fixing an old one.",
    "Happiness is a semicolon in the right place.",
    "Your internet will fail right before you click save.",
    "An error 404 is hiding in your future.",
    "Your teacher will say 'this won’t be on the test' and it will be.",
    "A stranger will compliment your handwriting in code comments.",
    "Your coffee will taste like victory tomorrow.",
    "Soon, you will open a tab and forget why.",
    "Patience is key—especially with slow loading screens.",
    "Your next Google search will change your life—or at least your homework.",
    "Beware of off-by-one errors—they’re closer than you think.",
    "You will meet someone who presses 'reply all' by mistake.",
    "Tomorrow is a good day to try turning it off and on again.",
    "Someone will unplug your charger at the worst moment.",
    "Your fortune cookie predicts... another fortune cookie.",
    "A typo today will be a legendary story tomorrow.",
    "Your snack will mysteriously vanish from the fridge.",
    "The next update will break more than it fixes.",
    "Someone will accidentally mute themselves in an online meeting.",
    "You will win an argument with autocorrect.",
    "Beware of infinite loops—they may already be chasing you.",
    "Your phone battery will betray you soon.",
    "Tomorrow, you will find an extra fry at the bottom of the bag.",
    "The Wi-Fi password is... just kidding, figure it out yourself.",
    "One day, your code will be used in space—or in a toaster.",
    "You will invent a new emoji by accident.",
    "Your cat is secretly judging your variable names.",
    "In the near future, you will step on a LEGO.",
    "Your next sneeze will be louder than you expect.",
    "A surprise plot twist: You are the bug.",
    "Your cookie predicts a nap in your future.",
    "Someone will laugh at your joke... three days late.",
    "A fortune teller will envy this cookie’s wisdom.",
    "Your shoes will tie themselves tomorrow—or not.",
    "Your destiny is cached. Try refreshing.",
    "Soon, you will copy-paste something you shouldn’t.",
    "The next fortune you read will be wrong.",
    "Your download will stop at 99%.",
    "Happiness will arrive disguised as pizza delivery.",
    "Your pen will run out of ink during an exam.",
    "Beware of ducks—they are watching you.",
    "Your screenshot folder knows too much.",
    "One day, you will finally clear your notifications... or not.",
    "Tomorrow’s homework will feel easier than today’s... until you see question 5.",
    "You will find a coin on the ground and feel rich for 5 seconds."
];

// Elements
const fortuneBox = document.getElementById('fortune');
const fortuneBtn = document.getElementById('getFortuneBtn');

// Check if user already has a fortune stored
let savedFortune = localStorage.getItem('myFortune');
if (savedFortune) {
    fortuneBox.textContent = savedFortune;
    fortuneBtn.disabled = true;
    fortuneBtn.textContent = "🥠 Cookie Opened";
} 

fortuneBtn.addEventListener('click', () => {
    if (!localStorage.getItem('myFortune')) {
        const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        fortuneBox.textContent = fortune;
        localStorage.setItem('myFortune', fortune);
        fortuneBtn.disabled = true;
        fortuneBtn.textContent = "🥠 Cookie Opened";
    }
});

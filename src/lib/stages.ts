import meetupPanel from "@/assets/stage-meetup-panel.jpg";
import attractionScene from "@/assets/stage-attraction-scene.jpg";
import confessionScene from "@/assets/stage-confession-scene.jpg";
import misunderstandingScene from "@/assets/stage-misunderstanding-scene.jpg";
import trustScene from "@/assets/stage-trust-scene.jpg";
import confession from "@/assets/love-confession.jpg";
import trust from "@/assets/love-trust.jpg";
import forever from "@/assets/love-forever.jpg";

export type Stage = {
  id: number;
  title: string;
  short: string;
  /** Story paragraphs. A paragraph starting with "> " renders as a highlighted strip; **text** renders as a pink emphasis. */
  letter: string[];
  closing?: string;
  image: string;
  symbol: string;
};

export const stages: Stage[] = [
  {
    id: 1,
    title: "Meetup",
    short: "Where our story begins…",
    letter: [
      "I think we have already completed one of the hardest and most beautiful parts of our story...",
      "> We found each other. ❤️",
      "And honestly, when I think about it, I still feel a little amazed that somehow, out of all the people in this world... **our paths crossed.**",
      "There are so many people we could have met, so many moments that could have gone differently, so many chances for our paths to never cross... But somehow, through all of it... **We found each other.** ❤️",
      "Main genuinely bahut grateful hoon ki life ne mujhe aapse milwaya. Aur honestly, mere paas shayad woh perfect words bhi nahi hain jo explain kar sakein ki main **kitna grateful** hoon ki maine aapko find kiya.",
      "I am thankful to everyone and everything that became a reason for us to find each other. And most importantly… **Thank You, God.** 💗 Ki aapne meri life mein unhe bheja.",
      "Because finding you wasn't just another ordinary moment for me. It became one of those moments that I know I'll always remember.",
      "**Thank you for coming into my life.** Thank you for giving me the **chance** to know you. Thank you for letting me be a **small part** of your world.",
      "Maybe you don't realise it yet... But your presence has already brought a different kind of happiness into my life. The kind that makes me randomly smile at my phone. The kind that makes ordinary conversations feel special. The kind that makes me look forward to tomorrow.",
      "**And if finding each other was just Stage One... I can't wait to see where this journey takes us.** 🥰",
      "So here's to the beginning of our little story... **The moment we found each other.** ❤️ And hopefully... the first of countless beautiful memories we're going to create together.",
    ],
    closing: "Thank you for finding your way into my life, Sunshine. ☀️❤️",
    image: meetupPanel,
    symbol: "✦",
  },
  {
    id: 2,
    title: "Attraction",
    short: "And then... I started liking you a little more",
    letter: [
      "I think somewhere between all our calls, texts, random conversations and those little moments...",
      "**I started liking you a little more than I expected.** ❤️",
      "And honestly, it’s not just because I find you beautiful. It’s the person you are.",
      "I really admire how **ambitious and hardworking** you are. The way you take your studies and your work seriously, the way you know what you want, and the way you don’t tolerate things that you feel are wrong.",
      "**I genuinely respect that about you.** ❤️",
      "And the funny part is... **your ambition makes me want to work harder too.** Seeing you put so much effort into your goals makes me want to push myself a little more, so that extra mile and become better at what I do.",
      "I don’t know if you realize it, but **you inspire me without even trying.** ❤️",
      "I don’t just like talking to you... **I like the person I become when I’m around your energy.**",
      "We still haven’t met in person, but somehow, through all these calls and messages, you’ve become someone I genuinely look forward to talking to. Someone I want to know better.",
      "Someone I’m getting a little more attached to with every conversation. 🥰",
      "So maybe this is what **Stage 02** is about... Not just finding someone attractive, but slowly discovering **who you are**. ❤️",
    ],
    closing: "And Sunshine... I’m really liking what I’m discovering about you. 🌸",
    image: attractionScene,
    symbol: "♡",
  },
  {
    id: 3,
    title: "Realisation & Confession",
    short: "Because now I know... I want you. ❤️",
    letter: [
      "I know I’m not perfect... And I know I may not always have the right words, or always know exactly what to do... But there is one thing I know for sure — **I want to be better for you.** ❤️",
      "I promise to always try to make you smile, to be there when you need someone, to listen to you even when you don’t feel like talking, and to hold your hand through the good days and the difficult ones. **I want to take care of you in all the little ways that matter.**",
      "I want to know what makes you happy, remember the things you casually mention, celebrate your smallest achievements, make you laugh when you’re having a bad day, and remind you just how special you are when you forget it yourself.",
      "I want to treat you with the kind of love that makes you feel safe, valued, respected and adored. **I want to make you feel like the happiest person in the world.** 🥰❤️",
      "And if you let me... **I’ll keep choosing you.** Again and again. On the easy days. On the difficult days. On the days when we’re laughing until our stomachs hurt. And even on the days when all you need is a quiet hug.",
      "Because I don’t just want to love you... **I want to take care of your heart.** ❤️",
      "I want to love you like there is no tomorrow, make memories that we’ll talk about years from now, and give you a thousand reasons to smile.",
    ],
    closing: "Will you let me be the person who gets to love you? 🌸❤️",
    image: confessionScene,
    symbol: "✉",
  },
  {
    id: 4,
    title: "Misunderstanding",
    short: "Not every chapter will be perfect... and that’s okay. ❤️",
    letter: [
      "Sometimes words don’t come out the way we mean them. Sometimes we misunderstand each other, overthink a little, or get hurt over things that were never meant to hurt us.",
      "**And maybe that’s going to happen with us too.** Because we’re still learning about each other.",
      "But I don’t want a misunderstanding to become a reason to walk away. **I want it to become a reason to understand you better.** ❤️",
      "I want us to talk instead of assuming. Listen instead of reacting. And choose each other even when things aren’t completely easy.",
      "**Because I don’t expect us to be perfect.**",
      "**I just want us to be honest enough to work through the imperfect moments together.** ❤️",
    ],
    closing: "After all, it’s not about never having misunderstandings... It’s about never letting them become bigger than what we have. 🥰",
    image: misunderstandingScene,
    symbol: "☂",
  },
  {
    id: 5,
    title: "Trust",
    short: "And slowly... we started trusting each other. ❤️",
    letter: [
      "I think trust isn’t something you can ask for. **It’s something you build.**",
      "Through the little things. Keeping your word. Being honest. Being there when you say you will be. Feeling comfortable enough to say what’s on your mind without being afraid of being judged.",
      "**And with you, I want to build exactly that.** ❤️",
      "I want you to know that you can be yourself with me. You don’t have to pretend. You don’t have to hide your feelings. You don’t have to worry about saying the wrong thing.",
      "**You can simply be you.** ❤️",
      "I want to earn your trust — not just with words, but with my actions. And I hope that, little by little, you feel that you can trust me with your thoughts, your feelings, your dreams and even your little fears.",
      "Because for me...",
    ],
    closing: "**Trust is knowing that even when things aren’t perfect, we can still count on each other.** 🥰❤️ And Sunshine, I hope we’re slowly building something where both of us can say... **“I know I’ve got you.”** ❤️",
    image: trustScene,
    symbol: "∞",
  },
  {
    id: 6,
    title: "Promises",
    short: "A future we dream about together…",
    letter: [
      "We began collecting tomorrows—small plans, impossible dreams, and quiet vows to keep choosing one another through every changing season.",
    ],
    image: confession,
    symbol: "✧",
  },
  {
    id: 7,
    title: "Trust & Care",
    short: "Always here, always you…",
    letter: [
      "Love showed itself in little things: checking in, staying close, remembering, forgiving. Care became the language we spoke without thinking.",
    ],
    image: trust,
    symbol: "❀",
  },
  {
    id: 8,
    title: "Togetherness",
    short: "Building a beautiful forever…",
    letter: [
      "No longer two stories side by side, but one adventure written together—with room to grow, to wander, and always to come home.",
    ],
    image: forever,
    symbol: "☾",
  },
  {
    id: 9,
    title: "Forever",
    short: "All our tomorrows…",
    letter: [
      "Forever isn't one grand moment. It is a thousand ordinary days made extraordinary because your hand is still in mine.",
    ],
    image: forever,
    symbol: "♥",
  },
];

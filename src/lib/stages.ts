import meetupPanel from "@/assets/stage-meetup-panel.jpg";
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
    short: "Those little feelings that pull us closer…",
    letter: [
      "A glance lasted a little longer. Every laugh felt brighter, every silence felt easy, and somehow the world seemed softer whenever you were near.",
    ],
    image: meetupPanel,
    symbol: "♡",
  },
  {
    id: 3,
    title: "Realisation & Confession",
    short: "When hearts finally speak…",
    letter: [
      "Courage arrived in a small, honest moment. The words were simple, but behind them lived every hope our hearts had been too shy to say.",
    ],
    image: confession,
    symbol: "✉",
  },
  {
    id: 4,
    title: "Misunderstanding",
    short: "Even in confusion, we choose each other…",
    letter: [
      "Not every sky stays clear. We learned to listen beneath the words, to be gentle with tender places, and to reach back for each other.",
    ],
    image: trust,
    symbol: "☂",
  },
  {
    id: 5,
    title: "Trust",
    short: "Believing, even when it isn't easy…",
    letter: [
      "Love became a safe place: not perfect, but true. A promise that doubts could be spoken, fears could be held, and neither heart had to hide.",
    ],
    image: trust,
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

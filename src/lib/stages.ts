import meetup from "@/assets/love-meetup.jpg";
import confession from "@/assets/love-confession.jpg";
import trust from "@/assets/love-trust.jpg";
import forever from "@/assets/love-forever.jpg";

export type Stage = { id: number; title: string; short: string; message: string; image: string; symbol: string };

export const stages: Stage[] = [
  { id: 1, title: "Meetup", short: "Where our story begins…", message: "Two paths crossed at just the right moment. We didn't know it yet, but an ordinary hello was quietly becoming our favorite beginning.", image: meetup, symbol: "✦" },
  { id: 2, title: "Attraction", short: "Those little feelings that pull us closer…", message: "A glance lasted a little longer. Every laugh felt brighter, every silence felt easy, and somehow the world seemed softer whenever you were near.", image: meetup, symbol: "♡" },
  { id: 3, title: "Realisation & Confession", short: "When hearts finally speak…", message: "Courage arrived in a small, honest moment. The words were simple, but behind them lived every hope our hearts had been too shy to say.", image: confession, symbol: "✉" },
  { id: 4, title: "Misunderstanding", short: "Even in confusion, we choose each other…", message: "Not every sky stays clear. We learned to listen beneath the words, to be gentle with tender places, and to reach back for each other.", image: trust, symbol: "☂" },
  { id: 5, title: "Trust", short: "Believing, even when it isn't easy…", message: "Love became a safe place: not perfect, but true. A promise that doubts could be spoken, fears could be held, and neither heart had to hide.", image: trust, symbol: "∞" },
  { id: 6, title: "Promises", short: "A future we dream about together…", message: "We began collecting tomorrows—small plans, impossible dreams, and quiet vows to keep choosing one another through every changing season.", image: confession, symbol: "✧" },
  { id: 7, title: "Trust & Care", short: "Always here, always you…", message: "Love showed itself in little things: checking in, staying close, remembering, forgiving. Care became the language we spoke without thinking.", image: trust, symbol: "❀" },
  { id: 8, title: "Togetherness", short: "Building a beautiful forever…", message: "No longer two stories side by side, but one adventure written together—with room to grow, to wander, and always to come home.", image: forever, symbol: "☾" },
  { id: 9, title: "Forever", short: "All our tomorrows…", message: "Forever isn't one grand moment. It is a thousand ordinary days made extraordinary because your hand is still in mine.", image: forever, symbol: "♥" },
];
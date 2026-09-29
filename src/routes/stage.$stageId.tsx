import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Grid3X3, Heart } from "lucide-react";
import { stages } from "@/lib/stages";

export const Route = createFileRoute("/stage/$stageId")({
  loader: ({ params }) => {
    const stage = stages.find((item) => item.id === Number(params.stageId));
    if (!stage) throw notFound();
    return stage;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} — Nine Stages of Love` : "Love Story Chapter";
    const description = loaderData?.short ?? "A chapter in our illustrated love story.";
    return { meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  component: StagePage,
});

function StagePage() {
  const stage = Route.useLoaderData();
  const previous = stage.id > 1 ? stage.id - 1 : undefined;
  const next = stage.id < stages.length ? stage.id + 1 : undefined;

  return <main className="relative min-h-screen overflow-hidden bg-dusk">
    <img src={stage.image} alt={`Illustration for ${stage.title}`} className="absolute inset-0 h-full w-full object-cover" width={1600} height={1008} />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-background/10" />
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {["♡", "✦", "♡", "✧", "♡"].map((heart, index) => <span key={index} className="absolute font-display text-3xl text-primary animate-float-heart" style={{ left: `${8 + index * 21}%`, top: `${15 + (index % 3) * 19}%`, animationDelay: `${index * .7}s` }}>{heart}</span>)}
    </div>

    <div className="relative z-10 flex min-h-screen flex-col px-5 py-5 sm:px-8 sm:py-7 lg:px-14">
      <header className="flex items-center justify-between">
        <Link to="/" aria-label="Back to all stages" className="flex size-11 items-center justify-center rounded-full border border-border bg-background/55 text-foreground backdrop-blur-md transition-colors hover:bg-background/80"><Grid3X3 className="size-5" /></Link>
        <div className="rounded-full border border-border bg-background/55 px-4 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur-md">Stage {stage.id} of 9</div>
      </header>

      <section className="mt-auto max-w-2xl pb-4 pt-24 sm:pb-10">
        <div className="mb-3 font-display text-4xl text-accent sm:text-5xl">{stage.symbol}</div>
        <p className="mb-2 text-sm font-bold uppercase tracking-[.22em] text-accent">Chapter {stage.id}</p>
        <h1 className="font-display text-5xl font-bold leading-none text-foreground drop-shadow-lg sm:text-7xl lg:text-8xl">{stage.title}</h1>
        <p className="mt-4 font-display text-2xl text-accent sm:text-3xl">{stage.short}</p>
        <p className="mt-5 max-w-xl text-base leading-7 text-foreground/90 sm:text-lg sm:leading-8">{stage.message}</p>

        <nav className="mt-8 flex items-center gap-3" aria-label="Story chapters">
          {previous ? <Link to="/stage/$stageId" params={{ stageId: String(previous) }} className="flex size-12 items-center justify-center rounded-full border border-border bg-background/55 backdrop-blur-md transition-transform hover:scale-105" aria-label="Previous stage"><ArrowLeft className="size-5" /></Link> : <span className="size-12" />}
          {next ? <Link to="/stage/$stageId" params={{ stageId: String(next) }} className="group flex h-12 items-center gap-3 rounded-full bg-primary px-6 font-bold text-primary-foreground shadow-xl transition-transform hover:scale-[1.03]">Next chapter <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" /></Link> : <Link to="/" className="group flex h-12 items-center gap-3 rounded-full bg-primary px-6 font-bold text-primary-foreground shadow-xl transition-transform hover:scale-[1.03]">Our story <Heart className="size-5 fill-current" /></Link>}
        </nav>
      </section>
    </div>
  </main>;
}
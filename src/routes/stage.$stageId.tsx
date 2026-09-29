import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
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

function renderEmphasis(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1
      ? <strong key={index} className="font-bold text-primary">{part}</strong>
      : part,
  );
}

function LetterParagraph({ text }: { text: string }) {
  if (text.startsWith("> ")) {
    return (
      <p className="mx-auto w-fit rounded-full bg-primary/15 px-5 py-1.5 font-display text-2xl font-bold text-primary">
        {renderEmphasis(text.slice(2))}
      </p>
    );
  }
  return <p className="leading-7 text-foreground/85 sm:text-[15px]">{renderEmphasis(text)}</p>;
}

function StagePage() {
  const stage = Route.useLoaderData();
  const previous = stage.id > 1 ? stage.id - 1 : undefined;
  const nextStage = stage.id < stages.length ? stages[stage.id] : undefined;

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1440px] px-4 py-5 sm:px-8">
        <header className="mb-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Our 9 Stages of Love <Heart className="inline size-5 fill-primary text-primary" aria-hidden="true" />
            </h1>
            <p className="rounded-full bg-primary/10 px-4 py-1 font-display text-lg text-primary">
              A journey of us… 9 beautiful chapters…
            </p>
          </div>
          <nav aria-label="Story chapters" className="mt-4">
            <ol className="flex items-start justify-start gap-1 overflow-x-auto pb-1 sm:justify-center">
              {stages.map((item, index) => (
                <li key={item.id} className="flex shrink-0 items-start">
                  <Link
                    to="/stage/$stageId"
                    params={{ stageId: String(item.id) }}
                    aria-current={item.id === stage.id ? "page" : undefined}
                    className="group flex w-16 flex-col items-center gap-1.5 sm:w-20"
                  >
                    <span className={`flex size-9 items-center justify-center rounded-full border text-sm font-bold transition ${item.id === stage.id ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/40" : "border-border bg-card text-foreground/70 group-hover:border-primary group-hover:text-primary"}`}>{item.id}</span>
                    <span className={`text-center text-[10px] leading-tight sm:text-[11px] ${item.id === stage.id ? "font-bold text-primary" : "text-foreground/60"}`}>{item.title}</span>
                  </Link>
                  {index < stages.length - 1 && <span aria-hidden="true" className="mt-4 hidden w-6 border-t border-dashed border-border sm:block" />}
                </li>
              ))}
            </ol>
          </nav>
        </header>

        <section className="grid gap-8 lg:grid-cols-[5fr_6fr] lg:items-stretch">
          <div className="relative h-72 overflow-hidden rounded-3xl shadow-xl shadow-primary/10 sm:h-96 lg:h-auto lg:min-h-[900px]">
            <img
              src={stage.image}
              alt={`Illustration for ${stage.title}`}
              className="absolute inset-0 h-full w-full object-cover"
              width={1024}
              height={1536}
            />
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
              {["♡", "✦", "♡"].map((heart, index) => (
                <span key={index} className="absolute font-display text-3xl text-primary animate-float-heart" style={{ left: `${18 + index * 26}%`, top: `${12 + (index % 3) * 24}%`, animationDelay: `${index * 0.9}s` }}>{heart}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="rounded-full bg-gradient-to-r from-primary to-glow px-6 py-1.5 text-sm font-bold uppercase tracking-[.2em] text-primary-foreground shadow-md">
              Stage {String(stage.id).padStart(2, "0")}
            </span>
            <h2 className="mt-3 font-display text-6xl font-bold leading-none text-primary sm:text-7xl">{stage.title}</h2>
            <p className="mt-2 font-display text-2xl text-primary/80">{stage.short}</p>

            <div className="mt-6 max-w-2xl space-y-4">
              {stage.letter.map((paragraph, index) => <LetterParagraph key={index} text={paragraph} />)}
            </div>

            {stage.closing && (
              <p className="mt-6 rounded-xl bg-primary/15 px-5 py-3 font-display text-xl font-bold text-primary sm:text-2xl">{stage.closing}</p>
            )}

            <nav className="mt-8 flex flex-col items-center gap-4 pb-6" aria-label="Chapter navigation">
              {nextStage ? (
                <Link
                  to="/stage/$stageId"
                  params={{ stageId: String(nextStage.id) }}
                  className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-glow px-8 py-4 text-lg font-bold text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-[1.03] sm:px-10"
                >
                  Next Stage <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" /> {nextStage.title}
                  <Heart className="size-5 fill-current" aria-hidden="true" />
                </Link>
              ) : (
                <Link
                  to="/"
                  className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-glow px-8 py-4 text-lg font-bold text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-[1.03] sm:px-10"
                >
                  Back to our beginning <Heart className="size-5 fill-current" aria-hidden="true" />
                </Link>
              )}
              <div className="flex items-center gap-4 text-sm">
                {previous
                  ? <Link to="/stage/$stageId" params={{ stageId: String(previous) }} className="font-semibold text-foreground/60 underline-offset-4 transition-colors hover:text-primary hover:underline">← Stage {previous}</Link>
                  : <span />}
                <Link to="/" className="font-semibold text-foreground/60 underline-offset-4 transition-colors hover:text-primary hover:underline">All stages</Link>
              </div>
            </nav>
          </div>
        </section>
      </div>
    </main>
  );
}

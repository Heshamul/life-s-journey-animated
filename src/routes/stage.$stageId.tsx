import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { stages } from "@/lib/stages";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
  if (stage.id === 2) return <AttractionPage />;
  if (stage.id === 3) return <ConfessionPage />;
  if (stage.id === 4) return <MisunderstandingPage />;

  return <StandardStagePage stage={stage} />;
}

function StoryStepper({ activeId }: { activeId: number }) {
  return (
    <nav aria-label="Story chapters" className="mt-1 overflow-x-auto pb-1">
      <ol className="mx-auto flex w-max items-start justify-center">
        {stages.map((item, index) => (
          <li key={item.id} className="flex items-start">
            <Link to="/stage/$stageId" params={{ stageId: String(item.id) }} aria-current={item.id === activeId ? "page" : undefined} className="group flex w-[76px] flex-col items-center gap-1 text-center sm:w-[92px]">
              <span className={`flex size-8 items-center justify-center rounded-full border font-sans text-sm font-bold text-attraction-light transition-colors ${item.id === activeId ? "border-attraction-light bg-primary shadow-lg shadow-primary/50" : "border-attraction-light/80 bg-attraction-plum/60 group-hover:bg-primary"}`}>{item.id}</span>
              <span className={`max-w-full text-[10px] leading-tight text-attraction-light sm:text-xs ${item.id === activeId ? "font-bold" : ""}`}>{item.title}</span>
            </Link>
            {index < stages.length - 1 && <span aria-hidden="true" className="mt-4 w-2 border-t border-dashed border-attraction-light/70 sm:w-4" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function MisunderstandingPage() {
  const stage = Route.useLoaderData();

  return (
    <main className="relative isolate min-h-svh overflow-hidden bg-attraction-plum">
      <img src={stage.image} alt="Two people in separate rooms quietly overthinking at night" width={1600} height={1008} className="absolute inset-0 -z-10 h-full w-full object-cover object-[32%_center] lg:object-center" />
      <div className="misunderstanding-shade pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto max-w-[1600px]">
        <header className="misunderstanding-header px-3 pt-2 pb-2 sm:px-6">
          <Link to="/" className="mx-auto flex w-fit items-center gap-3 font-display text-3xl font-bold text-attraction-light drop-shadow-md sm:text-4xl">
            <Heart className="size-5 fill-attraction-pink text-attraction-pink" aria-hidden="true" />
            Our 9 Stages of Love
            <Heart className="size-5 fill-attraction-pink text-attraction-pink" aria-hidden="true" />
          </Link>
          <StoryStepper activeId={4} />
        </header>

        <div className="grid min-h-[calc(100svh-104px)] grid-cols-1 lg:grid-cols-[55%_45%] lg:items-center">
          <div className="relative min-h-[430px] sm:min-h-[520px] lg:min-h-0 lg:self-stretch" aria-hidden="true">
            <div className="absolute top-[8%] left-[7%] hidden rotate-[-4deg] rounded-md bg-attraction-paper/90 px-4 py-2 font-display text-xl font-bold text-attraction-ink shadow-lg lg:block">Sometimes<br />I overthink... <span className="text-primary">♥</span></div>
            <div className="misunderstanding-thought absolute top-[18%] right-[13%] hidden font-display text-lg font-bold text-attraction-ink lg:block">Did I say<br />something wrong?</div>
            <div className="misunderstanding-thought absolute right-[4%] bottom-[27%] hidden font-display text-lg font-bold text-attraction-ink lg:block">Maybe I<br />misunderstood...</div>
            <div className="absolute bottom-[7%] left-[29%] hidden rotate-[-2deg] rounded-sm bg-attraction-paper/90 px-4 py-2 text-center font-display text-xl font-bold text-attraction-ink shadow-lg lg:block">It’s Okay<br />We’ll Figure It Out<br />Together <span className="text-primary">♥</span></div>
          </div>

          <article className="misunderstanding-letter relative mx-3 mb-5 flex flex-col items-center px-5 py-5 text-center sm:mx-8 sm:px-9 lg:mx-4 lg:mb-4 lg:px-8 xl:px-11">
            <span className="inline-block rounded-full bg-primary px-6 py-1 font-display text-xl text-primary-foreground sm:text-2xl">Stage 04</span>
            <h1 className="mt-1 font-display text-5xl font-bold leading-none text-attraction-ink sm:text-7xl">♡ Misunderstanding ♡</h1>
            <p className="mt-2 font-display text-xl font-bold text-primary sm:text-2xl">{stage.short}</p>
            <div className="mx-auto mt-4 max-w-[570px] space-y-3 font-sans text-[13px] leading-[1.4] text-attraction-body sm:text-sm xl:text-[15px]">
              {stage.letter.map((paragraph, index) => <p key={index}>{renderEmphasis(paragraph)}</p>)}
            </div>
            {stage.closing && <p className="mt-4 max-w-[570px] font-sans text-sm font-bold text-attraction-body sm:text-[15px]">{renderEmphasis(stage.closing)}</p>}
            <Button asChild className="mt-5 h-auto max-w-full rounded-full border-2 border-primary-foreground bg-primary px-7 py-2.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:bg-attraction-ink sm:px-10">
              <Link to="/stage/$stageId" params={{ stageId: "5" }}>Next Stage <ArrowRight aria-hidden="true" /> Trust <Heart className="fill-current" aria-hidden="true" /></Link>
            </Button>
          </article>
        </div>
      </div>
    </main>
  );
}

function ConfessionPage() {
  const stage = Route.useLoaderData();
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);

  return (
    <main className="relative isolate min-h-svh overflow-hidden bg-background">
      <img src={stage.image} alt="A couple sitting together on a flower-filled balcony at sunset" width={1600} height={1008} className="absolute inset-0 -z-10 h-full w-full object-cover object-[36%_center] lg:object-center" />
      <div className="confession-shade pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto max-w-[1600px]">
        <header className="confession-header px-3 pt-2 pb-2 sm:px-6">
          <Link to="/" className="mx-auto flex w-fit items-center gap-3 font-display text-3xl font-bold text-attraction-light drop-shadow-md sm:text-4xl">
            <Heart className="size-5 fill-attraction-pink text-attraction-pink" aria-hidden="true" />
            Our 9 Stages of Love
            <Heart className="size-5 fill-attraction-pink text-attraction-pink" aria-hidden="true" />
          </Link>
          <nav aria-label="Story chapters" className="mt-1 overflow-x-auto pb-1">
            <ol className="mx-auto flex w-max items-start justify-center">
              {stages.map((item, index) => (
                <li key={item.id} className="flex items-start">
                  <Link to="/stage/$stageId" params={{ stageId: String(item.id) }} aria-current={item.id === 3 ? "page" : undefined} className="group flex w-[76px] flex-col items-center gap-1 text-center sm:w-[92px]">
                    <span className={`flex size-8 items-center justify-center rounded-full border font-sans text-sm font-bold text-attraction-light transition-colors ${item.id === 3 ? "border-attraction-light bg-primary shadow-lg shadow-primary/50" : "border-attraction-light/80 bg-attraction-plum/60 group-hover:bg-primary"}`}>{item.id}</span>
                    <span className={`max-w-full text-[10px] leading-tight text-attraction-light sm:text-xs ${item.id === 3 ? "font-bold" : ""}`}>{item.title}</span>
                  </Link>
                  {index < stages.length - 1 && <span aria-hidden="true" className="mt-4 w-2 border-t border-dashed border-attraction-light/70 sm:w-4" />}
                </li>
              ))}
            </ol>
          </nav>
        </header>

        <div className="grid min-h-[calc(100svh-104px)] grid-cols-1 lg:grid-cols-[55%_45%]">
          <div className="relative flex min-h-[420px] flex-col items-center pt-7 text-center sm:min-h-[480px] lg:min-h-0 lg:pt-8">
            <div className="confession-title relative z-10 w-[min(83%,510px)] px-4 py-2">
              <span className="inline-block rounded-full bg-primary px-5 py-0.5 font-display text-xl text-primary-foreground">Stage 03</span>
              <h1 className="font-display text-6xl font-bold leading-[.82] text-attraction-ink sm:text-7xl">Realisation<br />and Confession</h1>
              <p className="mt-3 font-display text-xl font-bold text-attraction-ink sm:text-2xl">{stage.short}</p>
            </div>
            <div className="pointer-events-none absolute top-[18%] left-[2%] hidden rotate-[-3deg] text-left font-display text-lg font-bold text-attraction-ink drop-shadow-md xl:block" aria-hidden="true">
              {[
                "Same Person Again and Again ♡", "Your Smile", "Our Conversations", "Your Dreams", "My Motivation", "Our Future", "Always You ♥",
              ].map((note, index) => <div key={note} className={`confession-sign mb-1 w-fit px-3 py-0.5 ${index % 2 ? "ml-3" : ""}`}>{note}</div>)}
            </div>
            <span className="pointer-events-none absolute top-[27%] right-[10%] text-4xl text-primary animate-float-heart" aria-hidden="true">♡</span>
            <span className="pointer-events-none absolute bottom-[17%] left-[12%] text-3xl text-primary animate-float-heart" aria-hidden="true">♡</span>
          </div>

          <article className="confession-letter relative mx-3 mb-5 flex flex-col items-center self-start px-5 py-4 text-center sm:mx-8 sm:px-9 lg:mx-4 lg:mt-1 lg:px-8 xl:px-10">
            <span className="pointer-events-none absolute top-[12%] left-3 font-display text-4xl text-primary/60 animate-float-heart" aria-hidden="true">♡</span>
            <span className="pointer-events-none absolute right-3 bottom-[18%] font-display text-4xl text-primary/60 animate-float-heart" aria-hidden="true">♡</span>
            <h2 className="font-display text-3xl font-bold text-attraction-ink sm:text-4xl">HI SUNSHINE ❤️</h2>
            <div className="mx-auto mt-1 max-w-[480px] space-y-2 font-sans text-[12px] leading-[1.27] text-attraction-body sm:text-[13px] lg:space-y-1.5 xl:text-[13px]">
              {stage.letter.map((paragraph, index) => <p key={index}>{renderEmphasis(paragraph)}</p>)}
            </div>
            <p className="mt-2 font-sans text-sm font-bold text-attraction-body">So, Sunshine...</p>
            {stage.closing && <p className="font-sans text-sm font-bold text-primary sm:text-[15px]">{stage.closing}</p>}
            <div className="mt-3 grid w-full max-w-[430px] grid-cols-2 gap-3">
              <Button type="button" aria-pressed={answer === "yes"} onClick={() => setAnswer("yes")} className="h-10 rounded-full border-2 border-primary-foreground bg-primary font-display text-2xl text-primary-foreground shadow-lg shadow-primary/30 hover:bg-accent">♥ &nbsp;Yes</Button>
              <Button type="button" aria-pressed={answer === "no"} onClick={() => setAnswer("no")} className="h-10 rounded-full border border-primary bg-card font-display text-2xl text-attraction-ink shadow-md hover:bg-secondary">♡ &nbsp;No</Button>
            </div>
            <div role="status" aria-live="polite" className="mt-2 min-h-5 font-display text-xl font-bold text-attraction-ink">
              {answer === "yes" ? "You just made my heart so happy. ❤️" : answer === "no" ? "Whatever your answer, I’ll always respect it. ♡" : ""}
            </div>
            <Button asChild className="mt-1 h-10 max-w-full rounded-full border-2 border-primary-foreground bg-primary px-5 font-display text-xl text-primary-foreground shadow-lg shadow-primary/30 hover:bg-accent">
              <Link to="/stage/$stageId" params={{ stageId: "4" }}>Next Stage <ArrowRight aria-hidden="true" /> Misunderstanding <Heart className="fill-current" aria-hidden="true" /></Link>
            </Button>
          </article>
        </div>
      </div>
    </main>
  );
}

function AttractionPage() {
  const stage = Route.useLoaderData();

  return (
    <main className="attraction-page relative isolate min-h-svh overflow-hidden bg-background text-foreground">
      <img src={stage.image} alt="Two people smiling over their laptops in separate rooms overlooking a sunset city" width={1600} height={1008} className="absolute inset-0 -z-10 h-full w-full object-cover object-[30%_center] lg:object-center" />
      <div className="attraction-shade pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto max-w-[1600px]">
        <header className="attraction-header px-3 pt-3 pb-2 sm:px-6">
          <Link to="/" className="mx-auto flex w-fit items-center gap-3 font-display text-3xl font-bold text-attraction-light drop-shadow-md sm:text-4xl">
            <Heart className="size-5 fill-attraction-pink text-attraction-pink" aria-hidden="true" />
            Our 9 Stages of Love
            <Heart className="size-5 fill-attraction-pink text-attraction-pink" aria-hidden="true" />
          </Link>
          <nav aria-label="Story chapters" className="mt-2 overflow-x-auto pb-2">
            <ol className="mx-auto flex w-max items-start justify-center gap-0">
              {stages.map((item, index) => (
                <li key={item.id} className="flex items-start">
                  <Link to="/stage/$stageId" params={{ stageId: String(item.id) }} aria-current={item.id === 2 ? "page" : undefined} className="group flex w-[76px] flex-col items-center gap-1 text-center sm:w-[92px]">
                    <span className={`flex size-8 items-center justify-center rounded-full border font-sans text-sm font-bold text-attraction-light transition-colors ${item.id === 2 ? "border-attraction-light bg-attraction-pink shadow-lg shadow-primary/50" : "border-attraction-light/80 bg-attraction-plum/60 group-hover:bg-attraction-pink"}`}>{item.id}</span>
                    <span className={`max-w-full text-[10px] leading-tight text-attraction-light sm:text-xs ${item.id === 2 ? "font-bold" : ""}`}>{item.title}</span>
                  </Link>
                  {index < stages.length - 1 && <span aria-hidden="true" className="mt-4 w-2 border-t border-dashed border-attraction-light/70 sm:w-4" />}
                </li>
              ))}
            </ol>
          </nav>
        </header>

        <div className="grid min-h-[calc(100svh-112px)] grid-cols-1 items-end lg:grid-cols-[54%_46%] lg:items-center">
          <div className="relative min-h-[340px] sm:min-h-[430px] lg:min-h-0 lg:self-stretch" aria-hidden="true">
            <div className="absolute top-[7%] right-[7%] hidden rotate-[-5deg] space-y-2 text-attraction-light drop-shadow-md lg:block">
              {[["Your texts", "♡"], ["Our calls", "☎"], ["Random talks", "☁"], ["Your dreams", "✧"], ["Your goals", "↗"], ["You...", "♥"]].map(([label, icon], index) => (
                <div key={label} className={`attraction-note w-fit rounded-lg bg-attraction-paper/90 px-4 py-1 font-display text-lg text-attraction-ink shadow-md ${index % 2 ? "ml-6" : ""}`}>{label} <span className="text-attraction-pink">{icon}</span></div>
              ))}
            </div>
            <span className="absolute top-[19%] right-[30%] hidden font-display text-5xl text-attraction-pink animate-float-heart lg:block">♡</span>
            <span className="absolute bottom-[13%] right-[8%] hidden font-display text-4xl text-attraction-pink animate-float-heart lg:block">♡</span>
          </div>

          <article className="attraction-letter relative mx-3 mb-4 px-5 py-5 text-center shadow-xl sm:mx-8 sm:px-8 sm:py-6 lg:mx-4 lg:mb-5 lg:px-8 lg:py-5 xl:px-12">
            <span className="inline-block rounded-full bg-attraction-pink px-5 py-0.5 font-display text-xl text-attraction-light sm:text-2xl">Stage 02</span>
            <h1 className="mt-0 font-display text-6xl font-bold leading-none text-attraction-ink sm:text-7xl">Attraction</h1>
            <p className="font-display text-xl font-bold text-attraction-ink sm:text-2xl">{stage.short}</p>
            <div className="mx-auto mt-4 max-w-[560px] space-y-2.5 font-sans text-[13px] leading-[1.35] text-attraction-body sm:text-sm lg:space-y-2 xl:text-[15px]">
              {stage.letter.map((paragraph, index) => <p key={index}>{renderEmphasis(paragraph)}</p>)}
            </div>
            {stage.closing && <p className="mt-3 font-display text-xl font-bold text-attraction-ink sm:text-2xl">{stage.closing}</p>}
            <Button asChild className="mt-4 h-auto max-w-full rounded-full border-2 border-attraction-light bg-attraction-pink px-5 py-2.5 text-sm font-semibold text-attraction-light shadow-lg shadow-primary/30 hover:bg-attraction-ink sm:px-7 sm:text-base">
              <Link to="/stage/$stageId" params={{ stageId: "3" }}>Next Stage <ArrowRight aria-hidden="true" /> Realisation and Confession <Heart className="fill-current" aria-hidden="true" /></Link>
            </Button>
          </article>
        </div>
      </div>
    </main>
  );
}

function StandardStagePage({ stage }: { stage: (typeof stages)[number] }) {
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

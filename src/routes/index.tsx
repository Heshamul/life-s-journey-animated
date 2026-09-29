import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import overview from "@/assets/nine-stages-overview.png.asset.json";
import { stages } from "@/lib/stages";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Nine Stages of Love — Begin Our Journey" },
    { name: "description", content: "Begin a tender illustrated journey through nine unforgettable stages of love." },
    { property: "og:title", content: "Nine Stages of Love — Begin Our Journey" },
    { property: "og:description", content: "Begin a tender illustrated journey through nine unforgettable stages of love." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <main className="min-h-screen bg-background">
    <section className="relative mx-auto max-w-[1536px] overflow-hidden">
      <img src={overview.url} alt="Nine Stages of Love overlooking a glowing sunset city" className="block h-auto w-full" width={1536} height={768} />
      <Link to="/stage/$stageId" params={{ stageId: "1" }} aria-label="Begin with stage one: Meetup" className="absolute bottom-[5%] left-[21%] hidden h-[9%] w-[25%] rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-ring md:block" />
      <div className="absolute right-[4%] top-[2%] hidden h-[94%] w-[31%] flex-col md:flex">
        {stages.map((stage) => <Link key={stage.id} to="/stage/$stageId" params={{ stageId: String(stage.id) }} aria-label={`Open stage ${stage.id}: ${stage.title}`} className="block flex-1 rounded-xl transition-colors hover:bg-primary/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-ring" />)}
      </div>
    </section>
    <section className="px-4 py-10 md:hidden">
      <div className="mx-auto max-w-lg">
        <p className="mb-2 text-center font-display text-3xl text-accent">Choose a chapter</p>
        <h1 className="mb-7 text-center text-4xl font-bold">Our little love story</h1>
        <div className="space-y-3">
          {stages.map((stage) => <Link key={stage.id} to="/stage/$stageId" params={{ stageId: String(stage.id) }} className="flex items-center gap-4 rounded-lg border border-border bg-card px-4 py-3 text-card-foreground shadow-lg transition-transform active:scale-[.98]">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">{stage.id}</span>
            <span className="min-w-0 flex-1"><span className="block font-display text-2xl font-bold">{stage.title}</span><span className="block truncate text-xs opacity-70">{stage.short}</span></span>
            <ArrowRight className="size-5 text-primary" aria-hidden="true" />
          </Link>)}
        </div>
        <Heart className="mx-auto mt-8 size-7 fill-primary text-primary animate-soft-pulse" aria-hidden="true" />
      </div>
    </section>
  </main>;
}

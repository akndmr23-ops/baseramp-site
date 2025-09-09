import Nav from "../components/Nav";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-bold tracking-tight">BaseRamp — Trend Radar</h1>
        <p className="mt-3 text-zinc-400">
          Realtime trends and upcoming events on the Base network.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 p-6">Card 1</div>
          <div className="rounded-2xl border border-white/10 p-6">Card 2</div>
          <div className="rounded-2xl border border-white/10 p-6">Card 3</div>
        </div>
      </main>
    </>
  );
}

export const dynamic = "force-dynamic";

export default async function BuildBoardPage() {
  let data: any[] = [];

  try {
    const res = await fetch("/api/build-board", { cache: "no-store" });
    if (res.ok) {
      data = await res.json();
    }
  } catch (e) {
    data = [];
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>SignalForge MVP</h1>
      <h2>Build Board</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}

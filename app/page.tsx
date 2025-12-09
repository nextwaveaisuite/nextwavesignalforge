import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <p>SignalForge MVP is live.</p>
      <ul>
        <li><Link href="/ingest">Ingest Signal</Link></li>
        <li><Link href="/build-board">Build Board</Link></li>
      </ul>
    </div>
  );
}
import { NextResponse } from 'next/server';
import { db } from '../../../lib/db';
import { score } from '../../../lib/score';

export async function POST(req: Request) {
  const { raw_text } = await req.json();
  const result = score(raw_text);

  db.prepare(`
    INSERT INTO signals (raw_text, normalized, score, verdict)
    VALUES (?, ?, ?, ?)
  `).run(raw_text, result.normalized, result.score, result.verdict);

  return NextResponse.json({ ok: true });
}
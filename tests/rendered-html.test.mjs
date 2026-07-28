import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html", host: "localhost" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the portfolio and metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="ko">/i);
  assert.match(html, /이세현 \| Fullstack Developer/);
  assert.match(html, /기술을 고를 때/);
  assert.match(html, /CodeRun/);
  assert.match(html, /MOG/);
  assert.match(html, /HELIOS/);
  assert.match(html, /SQLD/);
  assert.match(html, /SQL 개발자/);
  assert.match(html, /2026\.03\.27 취득/);
  assert.match(html, /2026\.06\.01 — 2026\.07\.06/);
  assert.match(html, /mAP@0\.5를 58\.8%에서 92%로/);
  assert.doesNotMatch(html, /FE · AI · 팀장 · 기여도 60%/);
  assert.doesNotMatch(html, /GPT-5/);
  assert.match(html, /coderun-architecture\.png/);
  assert.match(html, /mog-architecture\.png/);
  assert.match(html, /helios-data-architecture\.png/);
  assert.match(html, /문제 인식/);
  assert.match(html, /해결 방안/);
  assert.match(html, /회고/);
  assert.doesNotMatch(
    html,
    /<a[^>]+aria-label="CodeRun 아키텍처 발표 자료 원본 열기"/,
  );
  assert.doesNotMatch(html, /figma\.com/);
  assert.doesNotMatch(html, /발표 자료/);
  assert.match(html, /leeseh-fullstack-resume\.pdf/);
  assert.doesNotMatch(html, /evidence-strip/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

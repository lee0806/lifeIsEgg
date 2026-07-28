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
  assert.match(
    html,
    /소셜 로그인과 자체 회원가입을 통합한 인증 구조 설계 및 구현/,
  );
  assert.match(html, /안전한 계정 연동·해제 정책/);
  assert.doesNotMatch(html, /인증 데이터의 성격에 맞춘 Redis 저장 구조/);
  assert.match(html, /MOG/);
  assert.match(html, /HELIOS/);
  assert.match(html, /SQLD/);
  assert.match(html, /SQL 개발자/);
  assert.match(html, /2026\.03\.27 취득/);
  assert.match(html, /2026\.06\.01 — 2026\.07\.06/);
  assert.match(html, /mAP@0\.5를 58\.8% → 92%로/);
  assert.match(
    html,
    /React Query 기반 서버 상태 관리 및 중복 refetch 개선/,
  );
  assert.match(html, /자주 바뀌는 데이터와 거의 바뀌지 않는 데이터/);
  assert.match(html, /debounce와 캐시 범위 전략/);
  assert.match(html, /클래스별 정밀도와 재현율/);
  assert.doesNotMatch(html, /대량 이미지 전처리와 학습 시간 단축/);
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

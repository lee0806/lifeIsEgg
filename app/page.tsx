import Image from "next/image";

const projects = [
  {
    number: "01",
    name: "CodeRun",
    description:
      "브라우저에서 코드를 실행·채점하고, 제출 코드에 라인 단위 피드백을 남기는 교육용 IDE",
    period: "2026.05.19 — 2026.06.05",
    role: "BE · 팀장 · Infra · 기여도 40%",
    evidence: "4개 언어 채점 환경",
    repository: "https://github.com/deepdive-01/goorm-ide-back",
    reference:
      "https://www.figma.com/slides/nvlcHItbwodQzcX8SNMsa3",
    visual: {
      src: "/project-visuals/coderun-architecture.png",
      alt: "CodeRun의 React, Spring Boot, Redis, PostgreSQL, Judge0와 CI/CD 구성도",
      caption:
        "서비스·채점·배포 경계를 한 장으로 정리한 시스템 아키텍처",
    },
    cases: [
      {
        title: "신뢰할 수 없는 코드를 서비스 서버에서 분리",
        category: "Architecture",
        problem:
          "외부 채점 API에 의존하면 비용과 지원 언어, 실행 자원을 서비스 요구에 맞게 통제하기 어려웠습니다. 사용자 코드가 서버에서 실행된다는 보안 부담도 있었습니다.",
        solution:
          "Judge0를 별도 EC2에 셀프 호스팅하고 Spring Boot가 API로 호출하도록 분리했습니다. 채점 서버 주소는 환경 변수로 주입하고 동시 실행은 Semaphore 10개로 제한했습니다.",
        result:
          "Python·Java·JavaScript·C++ 4개 언어의 채점 환경을 직접 구성했습니다. 사용자 코드 실행이 서비스 서버에 영향을 주지 않고 채점 서버도 독립적으로 교체할 수 있게 됐습니다.",
        retrospective:
          "인프라 분리만으로 완전한 샌드박스가 보장되지는 않습니다. 실제 악성 코드와 동시 요청을 사용한 부하·격리 검증을 다음 단계로 남겼습니다.",
      },
      {
        title: "인증 데이터의 성격에 맞춘 Redis 저장 구조",
        category: "Backend",
        problem:
          "Refresh Token, 이메일 인증 코드, OAuth 신규 사용자 임시 정보는 필요한 보관 기간과 접근 방식이 서로 달랐습니다.",
        solution:
          "refresh·email:code·oauth:temp처럼 용도별 키 규칙을 정하고 각각 7일·5분·10분 TTL을 적용했습니다. 사용자와 소셜 연동 정보도 분리해 식별 기준을 통합했습니다.",
        result:
          "로그인 방식과 무관하게 동일한 토큰 기반 인증·인가 흐름을 사용하고, 임시 데이터가 필요 이상으로 남지 않도록 수명을 관리했습니다.",
        retrospective:
          "Redis 장애나 토큰 재사용 상황까지 포함한 실패 시나리오 테스트는 부족했습니다. 저장 구조뿐 아니라 장애 시 인증 정책도 함께 설계할 필요를 확인했습니다.",
      },
      {
        title: "CI와 CD의 중복 테스트로 발생한 메모리 부족 해결",
        category: "DevOps",
        problem:
          "CI와 CD에서 테스트가 이중으로 실행되면서 제한된 서버 메모리가 부족해지고 Jenkins가 반복적으로 재시작됐습니다.",
        solution:
          "GitHub Actions에서 테스트와 빌드를 통과한 코드만 배포 대상으로 삼고, Jenkins의 CD 단계에서는 중복 테스트를 건너뛰도록 파이프라인 역할을 분리했습니다.",
        result:
          "Jenkins 재시작 문제를 해소하고 Push 이후 Docker 이미지 생성과 컨테이너 교체가 자동으로 이어지는 배포 흐름을 만들었습니다.",
        retrospective:
          "자동 배포는 만들었지만 무중단 교체와 자동 롤백까지 구현하지는 못했습니다. 운영 환경이라면 배포 실패 복구 전략이 함께 필요합니다.",
      },
    ],
    stack:
      "Java 21 · Spring Boot · PostgreSQL · Redis · Judge0 · Docker · Jenkins · Nginx",
  },
  {
    number: "02",
    name: "MOG",
    description:
      "일정 조율부터 중간지점 추천, 영수증 정산과 모임 기록까지 연결한 모임 관리 플랫폼",
    period: "2026.06 — 2026.07",
    role: "BE · 팀장 · Infra · 기여도 40%",
    evidence: "영수증 인식 건당 약 0.8원",
    repository: "https://github.com/goorm-mog/mog-backend",
    reference:
      "https://www.figma.com/slides/nvlcHItbwodQzcX8SNMsa3",
    visual: {
      src: "/project-visuals/mog-architecture.png",
      alt: "MOG의 AWS EC2 내부 프론트엔드와 백엔드, 관리형 데이터 저장소 구성도",
      caption:
        "EC2 내부 서비스와 관리형 데이터 저장소의 경계를 정리한 배포 아키텍처",
    },
    cases: [
      {
        title: "멀티모달 AI 응답을 정산 가능한 데이터로 변환",
        category: "AI Integration",
        problem:
          "기존 OCR은 건당 호출 비용이 부담됐고, 자유 형식의 AI 응답은 누락 필드와 형식 차이 때문에 정산 로직에서 바로 사용하기 어려웠습니다.",
        solution:
          "Gemini에 고정 JSON 형식을 강제하고 추출할 수 없는 값은 null로 반환하도록 프롬프트를 설계했습니다. 이미지는 Base64로 인코딩해 별도 저장 없이 메모리에서 처리했습니다.",
        result:
          "가게명·항목·금액·총액을 동일한 DTO로 처리하면서 유효성 문제와 토큰 사용량을 줄였고, 영수증 1건을 약 0.8원에 인식했습니다.",
        retrospective:
          "비용은 확인했지만 다양한 영수증 유형에 대한 정확도 지표는 아직 없습니다. 실패 유형별 테스트셋과 필드별 정확도 측정이 필요합니다.",
      },
      {
        title: "계좌번호 암호화와 실행 환경 분리",
        category: "Security",
        problem:
          "정산을 위해 계좌번호를 저장해야 했고, 개발과 운영이 같은 설정을 사용하면 테스트 작업이 운영 데이터와 서비스에 영향을 줄 수 있었습니다.",
        solution:
          "계좌번호를 AES-256-GCM으로 암호화하고 데이터마다 IV를 새로 생성했습니다. 키는 환경 변수로 주입했으며 애플리케이션·PostgreSQL·Redis를 dev와 prod로 분리했습니다.",
        result:
          "DB에는 암호문과 IV만 저장하고 환경별 데이터와 서비스 변경의 영향 범위를 분리했습니다.",
        retrospective:
          "키를 환경 변수로 분리했지만 전용 KMS나 주기적 키 교체까지 구현하지는 못했습니다. 운영 수준에서는 키 수명주기 관리가 추가로 필요합니다.",
      },
      {
        title: "Polling을 SSE 알림 구조로 전환",
        category: "Realtime",
        problem:
          "클라이언트가 알림을 반복 조회하면 이벤트가 없어도 요청이 누적되고, 일정 투표·방 단계 변경·정산 요청을 즉시 전달하기 어려웠습니다.",
        solution:
          "클라이언트가 서버로 보낼 데이터가 없다는 점에서 WebSocket 대신 SSE를 선택했습니다. 모든 알림을 SSE로 통합하고 Redis Pub/Sub으로 서버 간 이벤트를 중계하도록 구현했습니다.",
        result:
          "불필요한 Polling 요청 없이 서버가 이벤트 발생 시 사용자에게 알림을 전달하는 단방향 실시간 구조를 만들었습니다.",
        retrospective:
          "다중 서버 확장을 고려해 Pub/Sub을 넣었지만 실제 여러 인스턴스에서의 전달 검증은 하지 못했습니다. 재연결과 이벤트 유실 시나리오도 추가 검증이 필요합니다.",
      },
    ],
    stack:
      "Java 21 · Spring Boot · PostgreSQL · Redis · SSE · Gemini API · Docker Compose",
  },
  {
    number: "03",
    name: "HELIOS",
    description:
      "CCTV 영상 데이터를 활용해 실시간 도로 파손을 탐지하고 위험도를 보여주는 서비스",
    period: "2025.07 — 2025.11",
    role: "FE · AI · 팀장 · 기여도 60%",
    evidence: "초기 렌더링 85% 단축",
    repository: "https://github.com/Helios-CCTV/Helios-web",
    reference:
      "https://www.figma.com/design/FuaFwGo8ZGyaV3nzHonpT8/CCTV-%EC%98%81%EC%83%81-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%8F%84%EB%A1%9C-%EB%85%B8%ED%9B%84%ED%99%94-%ED%83%90%EC%A7%80-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=449-20",
    visual: {
      src: "/project-visuals/helios-data-architecture.png",
      alt: "HELIOS의 CCTV 영상 수집, 큐 서버, HPC 전처리와 AI 학습 데이터 파이프라인",
      caption:
        "영상 수집부터 전처리·학습·저장까지 이어지는 데이터 파이프라인",
    },
    cases: [
      {
        title: "전국 마커 조회로 느려진 지도 초기 렌더링 개선",
        category: "Performance",
        problem:
          "지도 진입 시 전국 CCTV 마커를 한 번에 조회하고 렌더링해 초기 화면 표시가 2,300ms까지 지연됐습니다.",
        solution:
          "BE 팀원에게 좌표 기반 API를 요청하고 조회 규격을 함께 조정했습니다. 프론트에서는 현재 뷰포트 좌표만 전달하고 해당 범위의 마커만 렌더링했습니다.",
        result:
          "지도 초기 렌더링 시간을 2,300ms에서 340ms로 줄여 약 85% 단축했습니다.",
        retrospective:
          "초기 진입 성능은 개선했지만 지도 이동 중 연속 요청에 대한 debounce와 캐시 범위 전략은 더 세밀하게 검증할 수 있었습니다.",
      },
      {
        title: "도로 파손 탐지 모델의 데이터 파이프라인 구축",
        category: "AI / ML",
        problem:
          "실제 CCTV 영상에서 여러 형태의 도로 파손을 구분하려면 원본 수집부터 전처리, 라벨링, 학습까지 일관된 파이프라인이 필요했습니다.",
        solution:
          "전체 77,307장 중 약 5,500장을 선별해 전처리하고 13종으로 라벨링했습니다. YOLOv8n을 학습하고 GPT-5 멀티모달 검증을 추가했습니다.",
        result:
          "탐지 결과 이미지 100장을 직접 확인해 멀티모달 재검증 결과가 90% 이상 일치하는 것을 확인했습니다.",
        retrospective:
          "100장 수동 검수는 방향성을 확인하기에는 유효하지만 전체 성능을 대표하기에는 표본이 작습니다. 클래스별 정밀도와 재현율을 별도로 관리할 필요가 있습니다.",
      },
      {
        title: "대량 이미지 전처리와 학습 시간 단축",
        category: "Data Pipeline",
        problem:
          "약 4,600장의 이미지를 순차 전처리하면 7시간 30분이 소요돼 반복 학습과 실험 속도가 제한됐습니다.",
        solution:
          "KOREN VM의 수집·큐 서버와 HPC의 전처리·학습 영역을 분리하고 Object Storage를 통해 원본 영상과 전처리 이미지를 전달하도록 구성했습니다.",
        result:
          "4,600장 전처리 시간을 1시간 24분으로 줄여 86% 단축했고, 3,000장 모델 학습 시간도 기존 대비 70% 줄였습니다.",
        retrospective:
          "처리 시간은 개선했지만 파이프라인 장애 시 재처리와 중복 작업 방지 기준은 충분히 다루지 못했습니다. 작업 상태와 실패 복구 설계가 필요합니다.",
      },
    ],
    stack:
      "React · TypeScript · React Query · Zustand · Python · YOLOv8 · OpenCV · GPT-5",
  },
];

const skills = [
  {
    label: "Backend",
    value: "Java, Spring Boot",
    detail: "REST API 설계 · 인증 구조 · 실시간 알림 구현",
  },
  {
    label: "Frontend",
    value: "React, TypeScript",
    detail: "컴포넌트 설계 · 서버 상태 관리 · REST API 연동",
  },
  {
    label: "Database",
    value: "PostgreSQL, Redis",
    detail: "데이터 모델링 · TTL 캐시 · Pub/Sub 구현",
  },
  {
    label: "DevOps / Infra",
    value: "Docker, Jenkins, Nginx",
    detail: "환경 분리 · 격리 배포 · CI/CD 구축",
  },
  {
    label: "AI / ML",
    value: "Python, YOLOv8, OpenCV",
    detail: "데이터 전처리 · 모델 학습 · 멀티모달 재검증",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="이세현 포트폴리오 홈">
          이세현
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#work">프로젝트</a>
          <a href="#about">소개</a>
          <a href="#contact">연락하기</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <p className="eyebrow">FULLSTACK DEVELOPER</p>
        <h1>
          기술을 고를 때,
          <br />
          운영 환경까지 <em>함께 봅니다.</em>
        </h1>
        <div className="hero-bottom">
          <p className="hero-intro">
            Spring Boot 기반 API부터 React UI, AI 모델 학습과 배포까지
            <br />
            서비스에 필요한 경계를 직접 연결해 왔습니다.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="#work"
            >
              프로젝트 보기 <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button"
              href="/leeseh-fullstack-resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              이력서 PDF <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="work-section shell" id="work">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>문제의 맥락부터 결과까지</h2>
          <p>기술 자체보다 왜 선택했고, 무엇이 달라졌는지 기록했습니다.</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.name}>
              <div className="project-index">{project.number}</div>
              <div className="project-content">
                <div className="project-title-row">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-links">
                    <a
                      className="repo-link"
                      href={project.repository}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} GitHub 저장소 열기`}
                    >
                      GitHub <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      className="repo-link"
                      href={project.reference}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} 발표 자료 열기`}
                    >
                      발표 자료 <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>

                <dl className="project-meta">
                  <div>
                    <dt>기간</dt>
                    <dd>{project.period}</dd>
                  </div>
                  <div>
                    <dt>역할</dt>
                    <dd>{project.role}</dd>
                  </div>
                  <div>
                    <dt>대표 결과</dt>
                    <dd className="accent-text">{project.evidence}</dd>
                  </div>
                </dl>

                <figure className="project-visual">
                  <Image
                    src={project.visual.src}
                    alt={project.visual.alt}
                    width={1800}
                    height={1013}
                    sizes="(max-width: 900px) calc(100vw - 40px), 1040px"
                  />
                  <figcaption>
                    <span>ARCHITECTURE</span>
                    {project.visual.caption}
                  </figcaption>
                </figure>

                <div className="case-list">
                  {project.cases.map((item, index) => (
                    <details
                      className="case-study"
                      key={item.title}
                      open={index === 0}
                    >
                      <summary>
                        <span className="case-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <strong>{item.title}</strong>
                        <span className="case-category">{item.category}</span>
                        <span className="case-toggle" aria-hidden="true">+</span>
                      </summary>
                      <div className="case-content">
                        <div>
                          <h5>문제 인식</h5>
                          <p>{item.problem}</p>
                        </div>
                        <div>
                          <h5>해결 방안</h5>
                          <p>{item.solution}</p>
                        </div>
                        <div>
                          <h5>결과</h5>
                          <p>{item.result}</p>
                        </div>
                        <div className="retrospective">
                          <h5>회고</h5>
                          <p>{item.retrospective}</p>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>

                <p className="stack-line">
                  <span>사용 기술</span>
                  {project.stack}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section shell" id="about">
        <div className="section-heading sticky-heading">
          <p className="eyebrow">HOW I WORK</p>
          <h2>기준을 만들고,<br />끝까지 확인합니다.</h2>
        </div>
        <div className="values-list">
          <article>
            <span>01</span>
            <h3>선택에는 근거가 있어야 합니다.</h3>
            <p>
              익숙한 기술보다 문제에 맞는 기술을 고릅니다. 비용 구조와 보안,
              운영 범위를 비교하고 대안과 장단점을 팀에 공유합니다.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>서비스되는 환경까지 봅니다.</h3>
            <p>
              API 구현에서 멈추지 않습니다. 개발과 운영 설정을 분리하고 배포
              과정을 자동화해 일관된 실행 환경을 만듭니다.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>팀의 정보가 한곳에 남도록 합니다.</h3>
            <p>
              API 명세와 작업 티켓을 공통 기준으로 사용합니다. 진행 상황과
              변경 사항을 누구나 확인할 수 있는 방식으로 정리합니다.
            </p>
          </article>
        </div>
      </section>

      <section className="skills-section shell">
        <div className="section-heading">
          <p className="eyebrow">SKILLS</p>
          <h2>서비스 전반을 연결하는 기술</h2>
        </div>
        <div className="skills-table">
          {skills.map((skill) => (
            <div className="skill-row" key={skill.label}>
              <span>{skill.label}</span>
              <strong>{skill.value}</strong>
              <p>{skill.detail}</p>
            </div>
          ))}
          <div className="skill-row">
            <span>AI-assisted Dev</span>
            <strong>Claude Code, Codex</strong>
            <p>코드 구조 분석 · 제안 검증 · 리팩터링 후 직접 확인</p>
          </div>
        </div>
      </section>

      <section className="background-section shell">
        <div className="background-block">
          <p className="eyebrow">BACKGROUND</p>
          <h2>경기대학교</h2>
          <p>토목공학과 전공 · 컴퓨터공학과 복수전공</p>
          <span>2026년 졸업예정 · 3.65 / 4.5</span>
        </div>
        <div className="background-block">
          <p className="eyebrow">RECOGNITION</p>
          <ul>
            <li>NET 챌린지 캠프 시즌 12 국가보안기술연구소 소장상</li>
            <li>한국정보기술학회 우수논문상</li>
            <li>산학협력 캡스톤 디자인 경진대회 은상 · 동상</li>
            <li>구름 × 인프런 풀스택 과정 우수 훈련생</li>
          </ul>
        </div>
      </section>

      <footer className="site-footer shell" id="contact">
        <p className="eyebrow">LET&apos;S WORK TOGETHER</p>
        <h2>
          함께 해결할 문제가 있다면
          <br />
          이야기 나눠요.
        </h2>
        <a className="email-link" href="mailto:leeseh0806@gmail.com">
          leeseh0806@gmail.com <span aria-hidden="true">↗</span>
        </a>
        <div className="footer-bottom">
          <span>© 2026 이세현</span>
          <div>
            <a href="https://github.com/lee0806" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://velog.io/@ummm" target="_blank" rel="noreferrer">
              Velog
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

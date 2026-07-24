const projects = [
  {
    number: "01",
    name: "CodeRun",
    description:
      "브라우저에서 코드를 실행·채점하고, 제출 코드에 라인 단위 피드백을 남기는 교육용 IDE",
    period: "2026.05 — 2026.06",
    role: "BE · Infra 팀장",
    evidence: "4개 언어 채점 환경",
    repository: "https://github.com/deepdive-01/goorm-ide-back",
    highlights: [
      {
        title: "채점 환경을 직접 통제했습니다",
        body: "Judge0를 셀프 호스팅하고 서비스 서버와 별도 인스턴스에 격리했습니다. 채점 서버 주소는 환경 변수로 분리해 이전과 교체 범위를 줄였습니다.",
      },
      {
        title: "로그인 수단이 늘어나도 같은 인증 흐름을 유지합니다",
        body: "사용자와 소셜 연동 정보를 분리하고 식별 기준을 통합했습니다. 소셜 로그인과 자체 가입 이후에는 동일한 인증·인가 구조가 동작합니다.",
      },
      {
        title: "Push 이후의 배포 과정을 자동화했습니다",
        body: "Docker 기반 Jenkins와 Nginx를 구성해 빌드부터 컨테이너 교체까지 자동화하고, 작업자와 무관한 배포 절차를 만들었습니다.",
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
    role: "BE · Infra 팀장",
    evidence: "영수증 인식 건당 약 0.8원",
    repository: "https://github.com/goorm-mog/mog-backend",
    highlights: [
      {
        title: "기능뿐 아니라 비용 구조도 함께 봤습니다",
        body: "고정요금 OCR 대신 Gemini API를 선택했습니다. 미인식 값은 null, 응답은 고정 JSON으로 제한해 정산 로직에서 일관되게 처리했습니다.",
      },
      {
        title: "개발과 운영의 영향을 분리했습니다",
        body: "애플리케이션과 PostgreSQL, Redis를 환경별로 나누고 스키마·로그·보안 설정을 프로파일로 구분했습니다.",
      },
      {
        title: "통신 방향에 맞는 알림 구조를 선택했습니다",
        body: "서버에서 발생하는 알림은 SSE로 통합했습니다. 향후 서버 확장을 고려해 Redis Pub/Sub 구조도 함께 설계했습니다.",
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
    role: "FE 팀장",
    evidence: "초기 렌더링 85% 단축",
    repository: "https://github.com/Helios-CCTV/Helios-web",
    highlights: [
      {
        title: "필요한 범위의 데이터만 보여줬습니다",
        body: "전국 마커를 한 번에 렌더링하던 방식을 뷰포트 기반 조회로 변경했습니다. 초기 렌더링을 2,300ms에서 340ms로 줄였습니다.",
      },
      {
        title: "서버 상태 관리의 기준을 만들었습니다",
        body: "React Query와 staleTime으로 중복 refetch를 제한하고 로딩·오류·성공 상태에 따른 UI 패턴을 통일했습니다.",
      },
      {
        title: "문서를 팀의 공통 기준으로 사용했습니다",
        body: "요구사항·기능·API 명세서를 작성하고 변경 시 함께 갱신하는 규칙을 만들어 반복 확인을 줄였습니다.",
      },
    ],
    stack: "React · TypeScript · React Query · Zustand · Tailwind CSS",
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
    detail: "데이터 모델링 · 환경별 저장소 분리 · Pub/Sub 설계",
  },
  {
    label: "DevOps / Infra",
    value: "Docker, Jenkins, Nginx",
    detail: "환경 분리 · 격리 배포 · CI/CD 구축",
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
        <p className="eyebrow">BACKEND-FOCUSED FULLSTACK DEVELOPER</p>
        <h1>
          기술 선택부터
          <br />
          운영 환경까지 <em>책임집니다.</em>
        </h1>
        <div className="hero-bottom">
          <p className="hero-intro">
            비용, 보안, 운영을 함께 보고 기술을 선택합니다.
            <br />
            구현한 기능이 실제로 동작하는 환경까지 직접 확인합니다.
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
              href="https://www.figma.com/design/6GuArELXLL1sekefxDmMpY/%EC%9D%B4%EB%A0%A5%EC%84%9C?node-id=184-1049"
              target="_blank"
              rel="noreferrer"
            >
              이력서 보기 <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="evidence-strip shell" aria-label="대표 성과">
        <div>
          <strong>4개 언어</strong>
          <span>격리된 코드 채점 환경</span>
        </div>
        <div>
          <strong>약 0.8원</strong>
          <span>영수증 1건 인식 비용</span>
        </div>
        <div>
          <strong>85% 단축</strong>
          <span>지도 초기 렌더링 시간</span>
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
                  <a
                    className="repo-link"
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} GitHub 저장소 열기`}
                  >
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
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

                <div className="decision-list">
                  {project.highlights.map((highlight) => (
                    <div className="decision" key={highlight.title}>
                      <h4>{highlight.title}</h4>
                      <p>{highlight.body}</p>
                    </div>
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
            <p>코드베이스 분석 · 구현 검증 · 리팩터링에 활용</p>
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

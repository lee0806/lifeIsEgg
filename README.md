# Starlit Portfolio

**Starlit Portfolio**는 프론트엔드 개발자로서의 경험과 프로젝트를 표현하는 개인 포트폴리오 웹사이트입니다.  
우주/별자리 컨셉 기반으로, 메인 화면에서 별을 클릭하거나 스크롤을 통해 각 섹션(About, Projects, Career, Contact 등)으로 자연스럽게 이동할 수 있도록 설계 했습니다.

---

## 🔗 배포 주소

- https://leeseh0806.com

---

## 🌌 주요 컨셉 및 기능

### 1. Intro

### 2. About Me

### 3. Projects 

1. **HELIOS – CCTV 영상 기반 실시간 도로 노후화 탐지 시스템**
   - 국토부 교통 CCTV 영상에서 도로 파손(균열, 포트홀 등)을 탐지하는 시스템.
   - YOLO 기반의 객체 탐지 모델과 연동된 프론트엔드 화면 구성.
   - 실시간/시나리오 기반 모니터링 화면, 파손 결과 시각화, 알림 흐름 등을 React로 구현.

2. **HotSpot – 유동인구 데이터 기반 창업 입지 추천 및 손익 분석 플랫폼**
   - 시간대·연령대·성별별 유동인구, 임대료, 상권 포화도 데이터를 기반으로
     예비 창업자가 입지를 비교할 수 있는 웹 서비스.
   - React + React Query + Axios로 외부 API를 연동하고,
     차트/지도 기반 시각화를 통해 정보를 제공.
   - “입지 비교”, “손익분기점(BEP) 시뮬레이션” 등 데이터 기반 의사결정을 돕는 기능 포함.

3. **EyePath(눈길) – 시각장애인을 위한 보행 보조 내비게이션**
   - 시각장애인의 안전한 보행을 목표로 한 모바일 서비스 개념.
   - YOLO 기반 객체 인식 서버와 통신하여
     보행 위험 요소(장애물, 공사 구간 등)를 실시간 탐지하고,
     음성 및 진동 피드백으로 안내하는 흐름을 설계.
   - React Native 기반 UI/UX 구조를 참고하여 포트폴리오 페이지에서 서비스 흐름 및 기여 내용을 소개.


### 4. Career / Timeline 섹션

### 5. Contact 섹션

---

## 🧱 기술 스택

### Frontend

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D / Graphics**:
  - Three.js
  - @react-three/fiber
  - @react-three/drei
- **State Management**:
  - Zustand

### DevOps / Infra

- **Server**: macOS (Mac mini)
- **Process Manager**: PM2 
- **Reverse Proxy**: Nginx
- **CI/CD**: Jenkins
- **Domain / DNS / HTTPS**:
  - Cloudflare (DNS, DDNS)
  - Let’s Encrypt + Certbot (SSL 인증서, HTTPS)

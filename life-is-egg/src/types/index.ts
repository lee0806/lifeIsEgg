// 별에 대한 ID 타입
export type StarId = "about" | "projects" | "skills" | "contact";

// 별에 대한 상태 타입
export interface StarState {
  activeStar: StarId | null; // 현재 활성화된 별 ID
  setActiveStar: (id: StarId | null) => void; // 활성화된 별 ID 설정 함수
  openStar: (id: StarId) => void; // 별을 여는 함수
  closeStar: () => void; // 별을 닫는 함수
}

// 사막 컴포넌트의 props 타입
export interface DesertProps {
  fadeProgress: number; // 0 ~ 1
}

export interface MenuStarProps {
  id: StarId; // 별의 ID
  position: [number, number, number]; // 별의 3D 위치
  starVisibility: number; // 0 ~ 1
  activeStar: StarId | null; // 현재 활성화된 별 ID
}

export interface StarSceneProps {
  starVisibility: number;
  activeStar: StarId | null;
  onSelectStar: (id: StarId | null) => void;
}

export interface BottomBarProps {
  fadeProgress: number;
}

export interface GoToGitHubProps {
  href?: string;
  fadeProgress: number;
}

export interface TitleProps {
  fadeProgress: number;
}

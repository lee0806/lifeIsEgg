export type StarId = "about" | "projects" | "skills" | "contact";

export interface DesertProps {
  fadeProgress: number;
}

export interface MenuStarProps {
  id: StarId; // 별의 ID
  position: [number, number, number]; // 별의 3D 위치
  starVisibility: number; // 0 ~ 1
  activeStar: StarId | null; // 현재 선택된 별
  onSelectStar: (id: StarId) => void; // 별 선택 시 호출되는 함수
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

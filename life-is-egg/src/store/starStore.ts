import { create } from "zustand";
import { StarId } from "@/types";
import { StarState } from "@/types";

export const useStateStore = create<StarState>((set) => ({
  activeStar: null, // 초기값 null
  setActiveStar: (id: StarId | null) => set({ activeStar: id }), // 활성화된 별 설정
  openStar: (id: StarId) => set({ activeStar: id }), // 별 열기
  closeStar: () => set({ activeStar: null }), // 별 닫기
}));

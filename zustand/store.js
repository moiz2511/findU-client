import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { persist } from "zustand/middleware";

export const useStepsStore = create(
  persist(
    (set) => ({
      position: "student",
      curriculum: "Fall",
      language: "english",
      academicLevel: "MS",
      interest: "computers",
      actions: {
        setPosition: (text) => {
          set((state) => {
            state.position = text;
          });
        },
        setCurriculum: (text) => {
          set((state) => {
            state.curriculum = text;
          });
        },
        setLanguage: (text) => {
          set((state) => {
            state.language = text;
          });
        },
        setAcademicLevel: (text) => {
          set((state) => {
            state.academicLevel = text;
          });
        },
        setInterest: (text) => {
          set((state) => {
            state.interest = text;
          });
        },
      },
    }),

    {
      name: "steps-storage", // unique name
      getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }
  )
);

export const usePosition = () => useStepsStore((state) => state.position);
export const useCurriculum = () => useStepsStore((state) => state.curriculum);
export const useLanguage = () => useStepsStore((state) => state.language);
export const useAcademicLevel = () =>
  useStepsStore((state) => state.academicLevel);
export const useInterest = () => useStepsStore((state) => state.interest);

// export const useStepActions = () => useStepsStore((state) => state.actions);
export const useStepActions = () => {
  return useStepsStore((state) => {
    console.log(state);
    return state.actions;
  });
};

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Steps", useStepsStore);
}

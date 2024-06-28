import { create } from "zustand";
import { addDays, subDays } from "date-fns";
import { SelectSingleEventHandler } from "react-day-picker";

// Define Zustand store for date selector
interface DateSelectorState {
  selectedDate: Date;
  setSelectedDate: SelectSingleEventHandler;
  nextDay: () => void;
  previousDay: () => void;
}

export const useDateSelector = create<DateSelectorState>((set) => ({
  selectedDate: new Date(),
  setSelectedDate: (day) => set({ selectedDate: day }),
  nextDay: () =>
    set((state) => ({ selectedDate: addDays(state.selectedDate, 1) })),
  previousDay: () =>
    set((state) => ({ selectedDate: subDays(state.selectedDate, 1) })),
}));

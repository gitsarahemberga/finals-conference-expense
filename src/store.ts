import { configureStore } from '@reduxjs/toolkit';
import plannerReducer from './features/plannerSlice';
import type { PlannerState } from './types/types';

export interface RootState {
  planner: PlannerState;
}

export const store = configureStore({
  reducer: {
    planner: plannerReducer
  }
});

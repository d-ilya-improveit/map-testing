import { createSelector } from "reselect";
import { RootState } from "..";

const transactionsState = (state: RootState) => state.brands;

export const brandsSelector = createSelector(
  transactionsState,
  ({ brands }) => brands
);

export const brandsStatusesSelector = createSelector(
  transactionsState,
  ({ statuses }) => statuses
);

import { createSelector } from 'reselect';

const selectLayout = state => state.layout;

export const selectLayoutComponents = createSelector(
  [selectLayout],
  layout => layout.components
);
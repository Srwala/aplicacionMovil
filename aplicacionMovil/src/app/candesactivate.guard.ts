import { CanDeactivateFn } from '@angular/router';

export const candesactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};

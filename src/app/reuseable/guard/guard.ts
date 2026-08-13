import {CanDeactivate, CanDeactivateFn} from "@angular/router";

export interface CanComponentDeactivate {

  canDeactivate:()=> boolean;
}

export const Guard: CanDeactivateFn<CanComponentDeactivate> = (
    component
) => {

  return component.canDeactivate();

};
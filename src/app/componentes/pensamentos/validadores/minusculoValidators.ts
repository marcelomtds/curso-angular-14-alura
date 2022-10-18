import { AbstractControl } from '@angular/forms';

export function minusculoValidator(control: AbstractControl): any {
  const autoria = control.value as string;
  if (autoria !== autoria?.toLowerCase()) {
    return { minusculo: true };
  } else {
    return null;
  }
}

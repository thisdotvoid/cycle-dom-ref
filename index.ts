import { DOMSource } from '@cycle/dom';

export function ref(DOM: DOMSource, ref: string) {
  return DOM.select(`[data-ref="${ref}"]`);
}

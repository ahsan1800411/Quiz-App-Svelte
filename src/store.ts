import { writable } from 'svelte/store';

export interface Answer {
  id: string;
  isCorrect: boolean | null;
}

export const answers = writable<Answer[]>([]);

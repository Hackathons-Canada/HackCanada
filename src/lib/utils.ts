import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple class names into a single class string.
 *
 * @param {...ClassValue} inputs - Variable number of class values to merge.
 * @return {string} A single class string containing all input classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * This function is for testing loading states.
 * Waits for the specified number of milliseconds.
 *
 * @param {number} ms - The number of milliseconds to wait.
 * @return {Promise<void>} A promise that resolves after the specified time.
 */
export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

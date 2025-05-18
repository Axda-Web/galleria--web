// lib/sleep.ts

/**
 * Utility function that pauses execution for a specified time.
 * FOR DEBUGGING PURPOSES ONLY - Do not use in production code.
 *
 * @param ms Time to sleep in milliseconds
 * @returns Promise that resolves after the specified time
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

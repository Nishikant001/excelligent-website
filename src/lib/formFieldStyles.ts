export const fieldInputClasses =
  "w-full rounded-md border px-3 py-2.5 text-sm transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-primary";

export function fieldBorderClass(hasError?: string) {
  return hasError ? "border-red-400" : "border-border";
}

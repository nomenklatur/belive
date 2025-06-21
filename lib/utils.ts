import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function yearsOfExperience(): number {
  const today = new Date()
  const startDate = new Date(2022, 11, 3) // December 3, 2022
  return today.getFullYear() - startDate.getFullYear()
}

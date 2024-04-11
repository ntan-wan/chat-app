import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatTime(isoString) {
  const date = new Date(isoString).toLocaleString();

  return date;
}

export function normalizeContactData(contacts) {
  const normalizedData = {};
  contacts.forEach(contact => {
      normalizedData[contact.id] = contact;
  });
  return normalizedData;
}

export function scrollToView(elementId) {
  const targetElement = document.getElementById(elementId);

  if (targetElement) {
    targetElement.scrollIntoView({ 
      behavior: 'smooth'
    });
  }
}
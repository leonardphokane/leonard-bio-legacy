// Utility: Truncate long text strings
export const truncate = (text: string, maxLength: number): string => {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

// Optional: Format dates
export const formatDate = (date: Date): string =>
  date.toLocaleDateString('en-ZA', { year: 'numeric', month: 'short', day: 'numeric' });

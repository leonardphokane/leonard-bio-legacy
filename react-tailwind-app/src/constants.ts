// Theme constants
export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';
export const DEFAULT_THEME = LIGHT_THEME;

// Task API constants
export const TASK_API_URL = 'https://jsonplaceholder.typicode.com/todos';
export const DEFAULT_TASK_LIMIT = 10;

// Routes (optional for navigation refactoring)
export const ROUTES = {
  home: '/',
  tasks: '/tasks',
  settings: '/settings',
};

// UI messages
export const ERROR_MESSAGES = {
  fetchTasks: 'Failed to load tasks. Please try again later.',
  themeContext: 'useTheme must be used within a ThemeProvider',
};

// App metadata
export const APP_NAME = 'Taskify';
export const APP_VERSION = '1.0.0';

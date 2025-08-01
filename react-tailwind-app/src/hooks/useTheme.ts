import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { ERROR_MESSAGES } from '@/constants';

if (!context) throw new Error(ERROR_MESSAGES.themeContext);

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};

export default useTheme;

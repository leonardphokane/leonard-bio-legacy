import Navbar from '@components/Navbar';
import useTheme from '@hooks/useTheme';
import { ThemeProvider } from '@context/ThemeContext';

export default function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider>
      <div className={`app ${theme}`}>
        <Navbar />
        {/* Additional Routes or Components */}
      </div>
    </ThemeProvider>
  );
}

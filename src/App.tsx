import "./theme.css";
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Card from './components/Card';
import ThemeButton from './components/Button';
import { useContext } from "react";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ThemeWrapper />
    </ThemeProvider>
  );
};

const ThemeWrapper: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  
  if (!themeContext) {
    return null;
  }

  const themeClass = themeContext.theme === 'light' ? 'light-theme' : 'dark-theme';

  return (
    <div className={themeClass}>
      <Header />
      <Card />
      <ThemeButton />
    </div>
  );
};

export default App;

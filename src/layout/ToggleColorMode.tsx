import { useMemo, useState, createContext, ReactNode, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

type ColorMode = 'light' | 'dark';

interface ColorModeContextProps {
  mode: ColorMode;
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextProps>({
  toggleColorMode: () => {},
  mode: 'light',
});

interface ToggleColorModeProps {
  children: ReactNode;
}

const ToggleColorMode: React.FC<ToggleColorModeProps> = ({ children }) => {
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [mode, setMode] = useState<ColorMode>(prefersDarkMode ? 'dark' : 'light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.style.colorScheme = mode;
  }, [mode]);

  const colorMode = useMemo<ColorModeContextProps>(
    () => ({
      toggleColorMode,
      mode,
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;

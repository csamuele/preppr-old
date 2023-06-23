import React, { useMemo, useState, createContext, ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

type ColorMode = 'light' | 'dark';

interface ColorModeContextProps {
  mode?: ColorMode;
  toggleColorMode: () => void;

}

export const ColorModeContext = createContext<ColorModeContextProps>({
  toggleColorMode: () => {},
});

interface ToggleColorModeProps {
  children: ReactNode;
}

const ToggleColorMode: React.FC<ToggleColorModeProps> = ({ children }) => {
  const [mode, setMode] = useState<ColorMode>('light');

  const toggleColorMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const colorMode = useMemo<ColorModeContextProps>(
    () => ({
      toggleColorMode,
    }),
    []
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

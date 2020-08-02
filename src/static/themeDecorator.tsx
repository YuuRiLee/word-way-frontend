import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const ThemeDecorator = (storyFn: () => JSX.Element) => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;

'use client'
import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { useContext, createContext, useMemo } from "react";
import type {} from '@mui/material/themeCssVarsAugmentation';

const AppThemeContext = createContext(null)

const AppThemeProvider = (props: any) => {

    const theme = useMemo(() => {
        return responsiveFontSizes(createTheme({
            cssVariables: {
                colorSchemeSelector: "class",
                disableCssColorScheme: true
            },
            palette: {
                primary: {
                  main: `rgb(10, 18, 42)`,
                  contrastText: 'rgb(255, 255, 255)',
                },
                secondary: {
                  main: `rgb(27, 59, 111)`,
                  contrastText: 'rgb(255, 255, 255)',
                },
              },
            colorSchemes: {
                light: {
                    palette: {
                        primary: {
                            main: "rgba(10,18,42)"
                        },
                        secondary: {
                            main: "rgb(27, 59, 111)"
                        }
                    }
                },
                dark: {
                    palette: {
                      primary: {
                        main: "rgb(10, 18, 42)",
                      },
                      secondary: {
                        main: "rgb(27, 59, 111)",
                      },
                    },
                  },
            }
        }))
    },[])

    return <AppThemeContext.Provider value={null}>
        {/* <ThemeProvider defaultMode="system" theme={theme} disableTransitionOnChange> */}
        <ThemeProvider theme={theme} disableTransitionOnChange>
            <CssBaseline enableColorScheme />
            {props.children}
        </ThemeProvider>
    </AppThemeContext.Provider>
}

export const useAppThemeContext = () => useContext(AppThemeContext)

export default AppThemeProvider;

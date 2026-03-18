"use client";

import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";

import { store } from "@/store/store";

export function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        storageKey="aurora-theme"
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </Provider>
  );
}

import { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

interface LocaleProviderProps {
  children: ReactNode;
}

const LocaleContext = createContext<{
  locale: string;
  setLocale: (locale: string) => void;
}>({ locale: "ja", setLocale: () => {} });

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const [locale, setLocale] = useState("ja");
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);

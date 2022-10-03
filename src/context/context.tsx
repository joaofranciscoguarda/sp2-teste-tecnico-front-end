import { createContext, useContext, useState } from "react";

interface dataLocal {
  [key: string]: number;
}

interface contextData {
  data: dataLocal;
  setData: (d: dataLocal) => void;
}

interface AuxProps {
  children: JSX.Element[] | JSX.Element;
}

const DataContext = createContext<contextData>({} as contextData);

export const ContextProvider = ({ children }: AuxProps) => {
  const [data, setData] = useState<dataLocal>(() => {
    const localStorageData = localStorage.getItem("@calc:values");

    if (localStorageData) {
      return JSON.parse(localStorageData);
    }

    return {} as dataLocal;
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useLocal = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useContext must be used within an ContextProvider");
  }

  return context;
};

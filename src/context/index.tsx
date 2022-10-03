import { ContextProvider } from "./context";

interface AuxProps {
  children: JSX.Element[] | JSX.Element;
}
const AppProvider = ({ children }: AuxProps) => {
  return <ContextProvider>{children}</ContextProvider>;
};

export default AppProvider

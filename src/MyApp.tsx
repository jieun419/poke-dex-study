import GlobalStyle from "./styles/GlobalStyles";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./styles/theme";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const MyApp = () => {

  const themeType = useSelector((state: RootState) => state.themeType.themeMode);

  return (
    <ThemeProvider theme={themeType === 'dark' ? dark : light}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
};

export default MyApp;
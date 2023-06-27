import { RememberMeListener } from "@components";
import { customToken } from "@core";
import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import theme from "antd/es/theme";
import { useMemo } from "react";
import Router from "./router";

const { useToken } = theme;
const queryClient = new QueryClient();

function App() {
  const { token: uiFrameworkToken } = useToken();
  const token = useMemo(
    () => ({ ...uiFrameworkToken, ...customToken }),
    [uiFrameworkToken]
  );
  const rememberMeListener = useMemo(() => <RememberMeListener />, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider>
        <ThemeProvider theme={token}>
          {rememberMeListener}
          <Router />
        </ThemeProvider>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;

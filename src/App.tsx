import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import theme from "antd/es/theme";
import { useMemo } from "react";
import Router from "./router";
import ChatFrame from "./compositions/chat-frame";

const { useToken } = theme;
const queryClient = new QueryClient();

function App() {
  const { token: uiFrameworkToken } = useToken();
  const token = useMemo(() => ({ ...uiFrameworkToken }), [uiFrameworkToken]);

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider>
        <ThemeProvider theme={token}>
          <Router />
          <ChatFrame/>
        </ThemeProvider>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;

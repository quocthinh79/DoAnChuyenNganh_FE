import { Card, Result } from "@components";
import { EResultStatus } from "@core";
import { useMessageStorage } from "@store";
import { shallow } from "zustand/shallow";

function NotificationChangePassword() {
  const { messages } = useMessageStorage(
    (state: any) => ({ messages: state.messages }),
    shallow
  );

  return (
    <Card>
      <Result status={EResultStatus.Success} title={messages} />
    </Card>
  );
}

export default NotificationChangePassword;

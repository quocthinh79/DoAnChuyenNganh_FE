import { ContainerFixed, Flex, Result } from "@components";
import { EBreakpoint, EResultStatus } from "@core";

export interface SuccessPageProps {}

export function SuccessPage(props: SuccessPageProps) {
  return (
    <ContainerFixed breakpoint={EBreakpoint.XXL} position="center">
      <Result status={EResultStatus.Success} title="Thanh toán thành công" />
    </ContainerFixed>
  );
}

export default SuccessPage;

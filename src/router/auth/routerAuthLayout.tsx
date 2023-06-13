import styled from "@emotion/styled";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Button,
  ContainerFixed,
  Content,
  Layout,
  SizeProps,
  Space,
} from "@components";
import { EButtonTypes, EDirectionType, routerPathFull } from "@core";

function RouterAuthLayout() {
  const navigate = useNavigate();
  const StyledContainerFixed = styled(ContainerFixed)`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `;

  const StyledContent = styled(Content)`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <Layout>
      <StyledContainerFixed position="center">
        <StyledContent>
          <ContainerFixed>
            <Space
              widthFull
              direction={EDirectionType.Vertical}
              size={SizeProps.Middle}
            >
              <Outlet />
              <Button
                block
                type={EButtonTypes.Default}
                onClick={() => navigate(`/${routerPathFull.home.root}`)}
              >
                Về trang chủ
              </Button>
            </Space>
          </ContainerFixed>
        </StyledContent>
      </StyledContainerFixed>
    </Layout>
  );
}

export default RouterAuthLayout;

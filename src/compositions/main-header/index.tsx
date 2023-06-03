import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { ContainerFixed, Flex } from "@components";
import { SPACE_BETWEEN_ITEMS } from "@constant";
import {
  EBreakpoint,
  EFlexAlign,
  EJustifyFlex,
  routerPathFull,
  templateStringToClassName,
} from "@core";
import { cx } from "@emotion/css";
import { useLogged } from "@hooks";
import { Button, Form, Image, Input, Menu } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import { Header } from "antd/es/layout/layout";
import { memo, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const logo = require("../../images/logo.png");

export function MainHeader() {
  const logged = useLogged({});
  const location = useLocation();
  const navigator = useNavigate();

  const [form] = useForm();

  const onFinish = (values: any) => {};

  const component = useMemo(() => {
    return (
      <Header>
        <ContainerFixed
          className={templateStringToClassName()`height: 100%; display: flex;`}
          breakpoint={EBreakpoint.XL}
          position="center"
        >
          <Link to={routerPathFull.home.root}>
            <Image width="auto" height="100%" src={logo} preview={false} />
          </Link>
          <Flex
            align={EFlexAlign.Center}
            justify={EJustifyFlex.SpaceBetween}
            className={cx(templateStringToClassName()`background: #fff`)}
          >
            <Flex align={EFlexAlign.Center} gap={SPACE_BETWEEN_ITEMS}>
              <Form form={form} onFinish={onFinish} layout="vertical">
                <FormItem name="keyWord">
                  <Input.Search
                    placeholder="Nhập từ bạn cần tìm kiếm ..."
                    enterButton="Search"
                    size={"middle"}
                    onSearch={() => form.submit()}
                  />
                </FormItem>
              </Form>
              <Button
                type={"default"}
                onClick={() => navigator(routerPathFull.aboutUs.root)}
              >
                Về chúng tôi
              </Button>
            </Flex>
            <Menu
              defaultSelectedKeys={[routerPathFull.home.root + "/"]}
              selectedKeys={[location.pathname]}
              mode={"horizontal"}
              items={[
                {
                  key: routerPathFull.cart.root,
                  label: (
                    <Link to={routerPathFull.cart.root}>
                      {/* <Badge
                        count={totalCartItems === 0 ? null : totalCartItems}
                      > */}
                      <ShoppingCartOutlined style={{ fontSize: "28px" }} />
                      {/* </Badge> */}
                    </Link>
                  ),
                },
                {
                  key: routerPathFull.account.root,
                  label: (
                    <Link to={routerPathFull.account.root}>
                      <UserOutlined style={{ fontSize: "28px" }} />
                    </Link>
                  ),
                },
                logged,
              ]}
            />
          </Flex>
        </ContainerFixed>
      </Header>
    );
  }, [logged]);

  return <>{component}</>;
}

export default memo(MainHeader);

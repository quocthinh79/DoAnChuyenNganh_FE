import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  ContainerFixed,
  Flex,
  Form,
  FormItem,
  Header,
  Image,
  InputSearch,
} from "@components";
import { SPACE_BETWEEN_ITEMS } from "@constant";
import {
  EBreakpoint,
  EButtonTypes,
  EFlexAlign,
  EInputTextSize,
  EJustifyFlex,
  EModeMenu,
  IGetCartOfUserRes,
  apiGetCartOfUser,
  routerPathFull,
  templateStringToClassName,
} from "@core";
import { cx } from "@emotion/css";
import { useLogged } from "@hooks";
import {
  useStorageRoles,
  useStorageToken,
  useStorageTotalCartItems,
} from "@store";
import { useQuery } from "@tanstack/react-query";
import { Badge, Menu } from "antd";
import { useForm } from "antd/es/form/Form";
import { memo, useEffect, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const logo = require("../../images/logo.png");

export function MainHeader() {
  const { setToken } = useStorageToken();
  const { setRoles } = useStorageRoles();
  const { token } = useStorageToken();
  const logged = useLogged({ token });
  const location = useLocation();
  const navigator = useNavigate();
  const { isAdmin } = useStorageRoles();

  const [form] = useForm();

  const onFinish = (values: any) => {
    return values.keyWord
      ? navigator(`${routerPathFull.search.root}?keyWord=${values.keyWord}`)
      : navigator("/");
  };

  const { setTotalCartItems, totalCartItems } = useStorageTotalCartItems();

  const { refetch } = useQuery<IGetCartOfUserRes>({
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    queryKey: ["getCartItemsHeader"],
    queryFn: () => apiGetCartOfUser({ token }),
    onSuccess(data) {
      const sum = data.laptopDTOs.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity;
      }, 0);
      setTotalCartItems(sum);
    },
    onError(err) {
      console.log(err);
    },
  });

  useEffect(() => {
    refetch();
  }, []);

  const component = useMemo(() => {
    return (
      <Header position="sticky">
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
                  <InputSearch
                    placeholder="Nhập từ bạn cần tìm kiếm ..."
                    enterButton="Search"
                    size={EInputTextSize.Middle}
                    onSearch={() => form.submit()}
                  />
                </FormItem>
              </Form>
              <Button
                type={EButtonTypes.Default}
                onClick={() => navigator(routerPathFull.aboutUs.root)}
              >
                Về chúng tôi
              </Button>
              {isAdmin() && (
                <Button
                  type={EButtonTypes.Default}
                  onClick={() => navigator(routerPathFull.admin.laptop)}
                >
                  ADMIN
                </Button>
              )}
            </Flex>
            <Menu
              defaultSelectedKeys={[routerPathFull.home.root + "/"]}
              selectedKeys={[location.pathname]}
              mode={EModeMenu.Horizontal}
              onClick={({ key }) => {
                if (key === routerPathFull.auth.logout) {
                  setToken("");
                  setRoles([]);
                }
              }}
              items={[
                {
                  key: routerPathFull.cart.root,
                  label: token ? (
                    <Link to={routerPathFull.cart.root}>
                      <Badge
                        count={totalCartItems === 0 ? null : totalCartItems}
                      >
                        <ShoppingCartOutlined style={{ fontSize: "28px" }} />
                      </Badge>
                    </Link>
                  ) : (
                    <></>
                  ),
                },
                {
                  key: routerPathFull.account.root,
                  label: token ? (
                    <Link to={routerPathFull.account.root}>
                      <UserOutlined style={{ fontSize: "28px" }} />
                    </Link>
                  ) : (
                    <></>
                  ),
                },
                logged,
              ]}
            />
          </Flex>
        </ContainerFixed>
      </Header>
    );
  }, [token, isAdmin, logged]);

  return <>{component}</>;
}

export default memo(MainHeader);

import { ShoppingCartOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Description,
  DescriptionItem,
  Divider,
  Flex,
  Row,
  Space,
  Text,
  Title,
} from "@components";
import { MISSING_TOKEN_MESSAGE, SPACE_BETWEEN_ITEMS } from "@constant";
import {
  EButtonTypes,
  EContentTypeTypography,
  EDirectionFlex,
  EDirectionType,
  IListImagesLaptop,
  IProduct,
  apiAddToCart,
  apiGetImagesLaptop,
  apiGetLaptopByID,
  formatCurrency,
  routerPathFull,
} from "@core";
import { useTheme } from "@emotion/react";
import { usePathname, useStorageToken, useStorageTotalCartItems } from "@store";
import { useMutation, useQuery } from "@tanstack/react-query";
import { notification } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LeftRightLayout from "../left-right-layout";
import SliderOverviewProduct from "../slider-overview-product/slider-overview-product";
import { useState } from "react";

function DetailProductItem({}) {
  const navigation = useNavigate();
  const { colorPrice } = useTheme();
  let { idProduct } = useParams();
  const { token } = useStorageToken();
  const { pathname } = useLocation();
  const setPathname = usePathname((state: any) => state.setPathname);
  const [api, contextHolder] = notification.useNotification();
  const { setTotalCartItems, totalCartItems } = useStorageTotalCartItems();
  const [navigate, setNavigate] = useState(false);

  const { data: informationProduct } = useQuery<IProduct>({
    refetchOnWindowFocus: false,
    queryKey: ["detailProduct"],
    queryFn: () => apiGetLaptopByID(Number(idProduct)),
  });

  const {
    battery,
    color,
    cpu,
    display,
    graphics,
    price,
    productName,
    ram,
    storage,
    type,
    weight,
  } = informationProduct || {};

  const { data: listImages } = useQuery<IListImagesLaptop[]>({
    refetchOnWindowFocus: false,
    queryKey: ["listImage"],
    queryFn: () => apiGetImagesLaptop(Number(idProduct)),
  });

  const { mutate: addProductToCart } = useMutation({
    mutationKey: ["addProductToCart"],
    mutationFn: apiAddToCart,
    onSuccess(data, variables, context) {
      setTotalCartItems(totalCartItems + 1);
      navigate ? navigation(routerPathFull.cart.root) : "";
    },
    onError(error, variables, context) {
      console.log(error);
      setPathname(pathname);
      api["error"]({
        message: "LỖI",
        description: MISSING_TOKEN_MESSAGE,
      });
    },
  });

  const handleAddToCart = async () => {
    await addProductToCart({
      laptopId: Number(idProduct),
      quantity: Number(1),
      token: String(token),
    });
  };

  return (
    <>
      {contextHolder}
      <LeftRightLayout
        leftChildren={
          <Flex direction={EDirectionFlex.Column} gap={SPACE_BETWEEN_ITEMS}>
            <SliderOverviewProduct image={listImages || []} />
            <Card>
              <Title level={4}>Cấu hình chi tiết</Title>
              <Description
                column={2}
                size="small"
                layout={EDirectionType.Vertical}
              >
                <DescriptionItem label="Vi xử lý (CPU)">{cpu}</DescriptionItem>
                <DescriptionItem label="RAM">{ram}</DescriptionItem>
              </Description>
              <Divider />
              <Description
                column={2}
                size="small"
                layout={EDirectionType.Vertical}
              >
                <DescriptionItem label="Màn hình">{display}</DescriptionItem>
                <DescriptionItem label="Card đồ họa (GPU)">
                  {graphics}
                </DescriptionItem>
              </Description>
              <Divider />
              <Description
                column={2}
                size="small"
                layout={EDirectionType.Vertical}
              >
                <DescriptionItem label="Lưu trữ">{storage}</DescriptionItem>
                <DescriptionItem label="Pin">{battery}</DescriptionItem>
              </Description>
              <Divider />
              <Description
                column={2}
                size="small"
                layout={EDirectionType.Vertical}
              >
                <DescriptionItem label="Loại Laptop">{type}</DescriptionItem>
                <DescriptionItem label="Trọng lượng">{weight}</DescriptionItem>
              </Description>
              <Divider />
            </Card>
          </Flex>
        }
        rightChildren={
          <Card>
            <Space>
              <Title level={3}>{productName}</Title>
              <Text type={EContentTypeTypography.Secondary}>
                SKU: XPS13931502NO (ID: {idProduct})
              </Text>
              <Text textColor={colorPrice} strong>
                {formatCurrency(price || 0)}
              </Text>
              <Description column={1} title="Cấu hình">
                <DescriptionItem label="CPU">{cpu}</DescriptionItem>
                <DescriptionItem label="GPU">{graphics}</DescriptionItem>
                <DescriptionItem label="RAM">{ram}</DescriptionItem>
                <DescriptionItem label="Lưu trữ">{storage}</DescriptionItem>
                <DescriptionItem label="Màu">{color}</DescriptionItem>
              </Description>
            </Space>
            <Divider />
            <Space widthFull>
              <Text textColor={colorPrice} strong>
                {formatCurrency(price || 0)}
              </Text>
              <Row gutter={[SPACE_BETWEEN_ITEMS, SPACE_BETWEEN_ITEMS]}>
                <Col span={20}>
                  <Button
                    block
                    type={EButtonTypes.Primary}
                    onClick={() => {
                      handleAddToCart();
                      return setNavigate(true);
                    }}
                  >
                    Mua ngay
                  </Button>
                </Col>
                <Col span={4}>
                  <Button
                    icon={<ShoppingCartOutlined />}
                    block
                    type={EButtonTypes.Primary}
                    onClick={handleAddToCart}
                  ></Button>
                </Col>
              </Row>
            </Space>
          </Card>
        }
      />
    </>
  );
}

export default DetailProductItem;

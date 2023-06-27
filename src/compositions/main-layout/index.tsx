import { RESUME_LINK, SPACE_BETWEEN_ITEMS } from "@constant";
import {
  EBreakpoint,
  ETargetAnchor,
  ETextAlign,
  templateStringToClassName,
} from "@core";
import { ReactNode, memo } from "react";
import MainHeader from "../main-header";
import MainSider from "../main-sider";
import {
  Card,
  Carousel,
  ContainerFixed,
  Content,
  Divider,
  Footer,
  Image,
  Layout,
  Link,
  Text,
} from "@components";

export interface MainLayoutProps {
  children?: ReactNode;
  sider?: boolean;
  carousel?: boolean;
}

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const BannerThinkpad = require("../../images/banner-thinkpad.jpg");
const BannerMSI = require("../../images/banner_MSI.jpg");
const BannerASUS = require("../../images/banner_ASUS.jpg");
const BannerACER = require("../../images/banner_ACER.png");

export function MainLayout({ children, sider, carousel }: MainLayoutProps) {
  return (
    <Layout className={templateStringToClassName()`min-height: 100vh;`}>
      <MainHeader />
      <ContainerFixed breakpoint={EBreakpoint.XL}>
        {carousel && (
          <Carousel lazyLoad="progressive" autoplay draggable>
            <Image height={350} preview={false} src={BannerThinkpad} />
            <Image height={350} preview={false} src={BannerMSI} />
            <Image height={350} preview={false} src={BannerASUS} />
            <Image height={350} preview={false} src={BannerACER} />
          </Carousel>
        )}
        <Layout
          className={templateStringToClassName()`margin: ${
            !carousel && SPACE_BETWEEN_ITEMS
          }px 0; gap: ${SPACE_BETWEEN_ITEMS}px`}
        >
          {sider && <MainSider />}
          <Content>{children}</Content>
        </Layout>
      </ContainerFixed>
      <Footer style={{ marginTop: "auto" }}>
        <Divider />
        <ContainerFixed breakpoint={EBreakpoint.XL} position="center">
          <Text textAlign={ETextAlign.Center}>
            Electronic Commerce ©2023 Created by{" "}
            <Link target={ETargetAnchor.Blank} href={RESUME_LINK}>
              Lê Quốc Thịnh
            </Link>
          </Text>
        </ContainerFixed>
      </Footer>
    </Layout>
  );
}

export default memo(MainLayout);

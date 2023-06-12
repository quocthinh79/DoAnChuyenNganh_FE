import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { cx } from "@emotion/css";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { templateStringToClassName } from "../../core";
import { default as CarouselCustom } from "./carousel";

const StyledCarousel = styled(CarouselCustom)`
  .slick-list {
    border-radius: 10px;
    margin: 28px 0;
  }
  .slick-prev,
  .slick-prev:hover,
  .slick-prev:focus {
    font-size: inherit;
    left: 10px;
    z-index: 2;
  }

  .slick-next,
  .slick-next:hover,
  .slick-next:focus {
    font-size: inherit;
    right: 10px;
    z-index: 2;
  }
`;

export interface CarouselProps {
  autoplay?: boolean;
  adaptiveHeight?: boolean;
  dotPosition?: "top" | "bottom" | "left" | "right";
  dots?: boolean | { className?: string };
  easing?: string;
  effect?: "scrollx" | "fade";
  draggable?: boolean;
  autoplaySpeed?: number;
  centerMode?: boolean;
  lazyLoad?: "ondemand" | "progressive";
  slidesToShow?: number;
  slidesToScroll?: number;
  speed?: number;
  iconPrevArrow?: JSX.Element;
  iconNextArrow?: JSX.Element;
  buttonColor?: string;
  arrows?: boolean;
  children?: ReactNode;
  afterChange?: (current: any) => void;
  beforeChange?: (from: any, to: any) => void;
}

export function Carousel({
  autoplay = false,
  adaptiveHeight = true,
  dotPosition = "bottom",
  dots = true,
  easing = "linear",
  effect = "scrollx",
  draggable,
  autoplaySpeed = 3000,
  centerMode = false,
  lazyLoad = "progressive",
  slidesToShow = 1,
  slidesToScroll = 1,
  speed = 500,
  iconPrevArrow = <LeftOutlined />,
  iconNextArrow = <RightOutlined />,
  buttonColor = "black",
  arrows,
  children,
  afterChange,
  beforeChange,
}: CarouselProps) {
  const passProps = {
    autoplay,
    adaptiveHeight,
    dotPosition,
    dots,
    easing,
    effect,
    draggable,
    autoplaySpeed,
    centerMode,
    lazyLoad,
    slidesToScroll,
    slidesToShow,
    speed,
    arrows,
    buttonColor,
    afterChange,
    beforeChange,
  };
  return (
    <StyledCarousel
      className={cx(templateStringToClassName()`
    .slick-prev,
    .slick-prev:hover,
    .slick-prev:focus {
      color: ${buttonColor};
    }
  
    .slick-next,
    .slick-next:hover,
    .slick-next:focus {
      color: ${buttonColor};
    }
    `)}
      prevArrow={iconPrevArrow}
      nextArrow={iconNextArrow}
      {...passProps}
    >
      {children}
    </StyledCarousel>
  );
}

export default Carousel;

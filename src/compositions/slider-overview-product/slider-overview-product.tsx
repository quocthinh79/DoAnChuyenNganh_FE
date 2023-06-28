import { memo, useMemo } from "react";
import { Card, Image } from "../../components";
import Carousel from "../../components/carousel";
import { IListImagesLaptop } from "@core";

export interface SliderOverviewProductProps {
  image: IListImagesLaptop[];
}

function SliderOverviewProduct({ image }: SliderOverviewProductProps) {
  const memoryList = useMemo<IListImagesLaptop[]>(
    () => image.map((item) => item),
    [image]
  );

  return (
    <Card key={Math.random()}>
      <Carousel arrows lazyLoad="progressive" autoplay draggable>
        {memoryList.map((item) => (
          <Image preview={false} src={item?.url} />
        ))}
      </Carousel>
    </Card>
  );
}

export default memo(SliderOverviewProduct);

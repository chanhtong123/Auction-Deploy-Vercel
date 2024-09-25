import { Button, Img, Slider, Heading } from "../../components";
import ProductDetails4 from "../../components/ProductDetails4";
import React from "react";

export default function RecommendedProductsSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* recommended products section */}
      <div className="mt-[198px] flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col items-center gap-[72px] md:gap-[54px] md:px-5 sm:gap-9">
          <Heading
            size="text7xl"
            as="h2"
            className="text-[28px] font-medium text-blue_gray-900_01 md:text-[26px] sm:text-[24px]"
          >
            Có thể bạn sẽ thích
          </Heading>
          <div className="relative h-[452px] content-center self-stretch md:h-auto">
            <div className="mx-auto flex w-full gap-[30px] md:flex-col">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 4 } }}
                disableDotsControls
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                items={[...Array(12)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="px-[15px]">
                      <ProductDetails4 />
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
            <div className="absolute left-0 right-0 top-[41%] m-auto flex flex-1 justify-between gap-5">
              <Button
                onClick={() => {
                  sliderRef?.current?.slidePrev();
                }}
                className="w-[44px] rounded-[22px] border border-solid border-gray-200 px-3.5"
              >
                <Img src="images/img_arrow_left_blue_gray_900.svg" />
              </Button>
              <Button
                onClick={() => {
                  sliderRef?.current?.slideNext();
                }}
                className="mr-1.5 w-[44px] rounded-[22px] border border-solid border-blue_gray-900 px-3.5"
              >
                <Img src="images/img_arrow_right_blue_gray_900_1.svg" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}




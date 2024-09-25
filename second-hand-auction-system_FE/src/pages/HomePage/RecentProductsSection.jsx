import { Button, Img, Slider, Heading } from "../../components";
import ProductDetails4 from "../../components/ProductDetails4";
import React from "react";
import ProductDetails31 from "../../components/ProductDetails31/index.jsx";

export default function RecentProductsSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* recent products section */}
      <div className="mt-[180px] flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col items-start gap-[30px] px-1 md:px-5">
          <Heading
            size="text7xl"
            as="h2"
            className="text-[28px] font-medium text-blue_gray-900_01 md:text-[26px] sm:text-[24px]"
          >
            Sản phẩm gần đây
          </Heading>
          <div className="relative ml-2 mr-1 h-[454px] content-center self-stretch md:mx-0 md:h-auto">
            <div className="mx-auto flex w-full gap-8 md:flex-col">
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
                    <div className="px-4">
                      <ProductDetails31
                        // productDescription="Áo hoodie Nike thấm hút mồ hôi cho ngày đông lạnh "
                        // originalPrice="128.000đ"
                        className="border border-solid border-gray-200 bg-bg-white"
                      />
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
            <div className="absolute left-0 right-0 top-[37%] m-auto flex flex-1 justify-between gap-5">
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
                className="w-[40px] rounded-[50%] border border-solid border-blue_gray-900 px-3"
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




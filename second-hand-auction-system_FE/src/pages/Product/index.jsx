import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button, Slider, CheckBox, SeekBar, Input } from "../../components";
import HeaderComponent from "../../components/HeaderComponent";
import ProductDetails4 from "../../components/ProductDetails4";
import ProductDetails5 from "../../components/ProductDetails5";
import Footer5 from "../../components/Footer5";
import Header2 from "../../components/Header2";
import ProductSection from "./ProductSection";
import React from "react";

export default function ProductPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Product Catalog - Shop the Latest in Electronics and Fashion</title>
        <meta
          name="description"
          content="Browse our Product Catalog to find the best deals on electronics, fashion, and home goods. Filter by brand, size, and color to find your perfect match."
        />
      </Helmet>
      <div className="w-full bg-bg-white">
        <div className="flex flex-col items-center">
          <Header2 />
          <div className="container-xs md:px-5">
            <div className="mr-2.5 flex items-center gap-8 md:mr-0 md:flex-col">
              <div className="flex w-[22%] flex-col gap-3.5 md:w-full">
                <div className="flex flex-col items-start gap-6">
                  <div className="flex items-center justify-between gap-5 self-stretch">
                    <Heading size="text2xl" as="h1" className="text-[18px] font-medium text-blue_gray-900_01">
                      Lọc theo thương hiệu
                    </Heading>
                    <div className="mr-8 h-px w-[14px] bg-blue_gray-900_01" />
                  </div>
                  <div className="flex flex-col items-start self-stretch">
                    <Input
                      size="sm"
                      shape="round"
                      name="Brand Search"
                      placeholder={`Tìm thương hiệu`}
                      className="w-[88%] rounded-md border border-solid border-gray-200 px-3.5 !text-blue_gray-900_01"
                    />
                    <div className="mt-5 self-stretch">
                      <div className="flex">
                        <div className="flex w-[78%] items-center gap-[13px]">
                          <div className="flex w-[8%] flex-col items-center gap-3.5">
                            <div className="h-[16px] w-[18px] rounded border border-solid border-blue_gray-900_01" />
                            <Img src="images/img_checkmark.svg" alt="Brand Checkmark" className="h-[16px] w-full" />
                            <div className="h-[16px] w-[18px] rounded border border-solid border-blue_gray-900_01" />
                            <div className="h-[16px] w-[18px] rounded border border-solid border-blue_gray-900_01" />
                            <div className="h-[16px] w-[18px] rounded border border-solid border-blue_gray-900_01" />
                          </div>
                          <Text
                            size="textlg"
                            as="p"
                            className="w-[30%] text-[15px] font-normal leading-[30px] text-blue_gray-900_01"
                          >
                            <>
                              Apple
                              <br />
                              Asus
                              <br />
                              Acer
                              <br />
                              Dell
                              <br />
                              Lenovo
                            </>
                          </Text>
                        </div>
                        <Text
                          size="texts"
                          as="p"
                          className="w-[10%] text-right text-[13px] font-normal leading-[30px] text-blue_gray-600_01"
                        >
                          <>
                            87
                            <br />
                            92
                            <br />
                            123
                            <br />
                            49
                            <br />
                            12
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="mt-2.5 flex flex-col items-start justify-center gap-1 self-stretch">
                      <Text size="textlg" as="p" className="text-[15px] font-medium text-gray-900_01">
                        Xem tất cả
                      </Text>
                      <div className="h-[2px] w-[32px] bg-gray-900_01" />
                    </div>
                  </div>
                  <div className="h-px w-[72%] bg-gray-200" />
                </div>
                <div className="flex flex-col items-start gap-6">
                  <div className="flex items-center justify-between gap-5 self-stretch">
                    <Heading size="text2xl" as="h2" className="text-[18px] font-medium text-blue_gray-900_01">
                      Giá
                    </Heading>
                    <div className="mr-24 h-px w-[14px] bg-blue_gray-900_01" />
                  </div>
                  <div className="flex flex-col gap-3 self-stretch">
                    <div className="flex items-center gap-6">
                      <div className="flex w-[46%] flex-col items-start gap-1">
                        <Text size="textlg" as="p" className="text-[15px] font-normal text-blue_gray-900_01">
                          Thấp
                        </Text>
                        <Input
                          size="sm"
                          shape="round"
                          name="Low Price Input"
                          placeholder={`50.000đ`}
                          className="self-stretch rounded-md border border-solid border-gray-200 px-3.5"
                        />
                      </div>
                      <div className="flex flex-1 flex-col items-start gap-1.5">
                        <Text size="textlg" as="p" className="text-[15px] font-normal text-blue_gray-900_01">
                          Cao
                        </Text>
                        <Input
                          size="sm"
                          shape="round"
                          name="High Price Input"
                          placeholder={`750.000đ`}
                          className="w-[86%] rounded-md border border-solid border-gray-200 px-3.5"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                      <SeekBar
                        inputValue={[10, 20]}
                        trackColors={["#f3f5f6", "#f3f5f6", "#f3f5f6"]}
                        className="mr-5 flex h-[14px] self-stretch rounded-[1px] md:mr-0"
                        trackClassName="h-[2px] w-full rounded-[1px]"
                        thumbClassName="flex justify-center items-center h-[14px] w-[18px] rounded-[50%] border-blue_gray-900_01 border-2 border-solid bg-bg-white"
                      />
                      <Text as="p" className="flex text-[14px] font-normal text-blue_gray-900_01">
                        <span>50.000</span>
                        <a href="#" className="inline underline">
                          đ
                        </a>
                        <span>&nbsp;- 750.000</span>
                        <a href="#" className="inline underline">
                          đ
                        </a>
                      </Text>
                    </div>
                  </div>
                  <div className="h-px w-[72%] bg-gray-200" />
                </div>
                <div className="flex flex-col items-start gap-6">
                  <div className="flex items-center gap-[35px] self-stretch">
                    <Heading size="text2xl" as="h3" className="text-[18px] font-medium text-blue_gray-900_01">
                      Kích thước
                    </Heading>
                    <div className="h-px w-[14px] bg-blue_gray-900_01" />
                  </div>
                  <div className="flex flex-col gap-2.5 self-stretch">
                    <div>
                      <div className="flex">
                        <div className="flex flex-1 items-center gap-3">
                          <div className="flex w-[8%] flex-col items-center gap-3.5">
                            <div className="h-[16px] w-[20px] rounded border border-solid border-blue_gray-900_01" />
                            <Img src="images/img_checkmark.svg" alt="Size Checkmark" className="h-[16px] w-full" />
                            <div className="h-[16px] w-[20px] rounded border border-solid border-blue_gray-900_01" />
                            <div className="h-[16px] w-[20px] rounded border border-solid border-blue_gray-900_01" />
                            <div className="h-[16px] w-[20px] rounded border border-solid border-blue_gray-900_01" />
                          </div>
                          <Text
                            size="textlg"
                            as="p"
                            className="w-[18%] text-[15px] font-normal leading-[30px] text-blue_gray-900_01"
                          >
                            <>
                              S<br />M<br />L<br />
                              XL
                              <br />
                              XXL
                            </>
                          </Text>
                        </div>
                        <Text
                          size="texts"
                          as="p"
                          className="w-[10%] text-right text-[13px] font-normal leading-[30px] text-blue_gray-600_01"
                        >
                          <>
                            87
                            <br />
                            92
                            <br />
                            123
                            <br />
                            49
                            <br />
                            12
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1">
                      <Text size="textlg" as="p" className="text-[15px] font-medium text-gray-900_01">
                        Xem tất cả
                      </Text>
                      <div className="h-[2px] w-[32px] bg-gray-900_01" />
                    </div>
                  </div>
                  <div className="h-px w-[72%] bg-gray-200" />
                </div>
                <div className="flex flex-col gap-[26px]">
                  <div className="flex items-center justify-between gap-5">
                    <Heading size="text2xl" as="h4" className="text-[18px] font-medium text-blue_gray-900_01">
                      Màu sắc
                    </Heading>
                    <div className="mb-2 mr-20 h-px w-[14px] self-end bg-blue_gray-900_01" />
                  </div>
                  <div className="flex flex-col items-start gap-6">
                    <Img src="images/img_inner.svg" alt="Color Image" className="h-[26px] w-[72%] object-contain" />
                    <div className="h-px w-[72%] bg-gray-200" />
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between gap-5">
                    <Heading size="text2xl" as="h5" className="text-[18px] font-medium text-blue_gray-900_01">
                      Tình trạng
                    </Heading>
                    <div className="mr-[76px] h-px w-[14px] bg-blue_gray-900_01" />
                  </div>
                  <div>
                    <div className="flex">
                      <div className="relative h-[90px] w-[64%]">
                        <CheckBox
                          size="sm"
                          name="Condition CheckBox"
                          label="New
Used
Renewed"
                          id="ConditionCheckBox"
                          className="absolute bottom-0 left-0 top-0 my-auto gap-2.5 text-left text-[15px] leading-[30px] text-blue_gray-900_01"
                        />
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start gap-11">
                          <div className="h-[16px] w-[16px] rounded border border-solid border-blue_gray-900_01" />
                          <div className="h-[16px] w-[16px] rounded border border-solid border-blue_gray-900_01" />
                        </div>
                      </div>
                      <Text
                        size="texts"
                        as="p"
                        className="w-[8%] text-right text-[13px] font-normal leading-[30px] text-blue_gray-600_01"
                      >
                        <>
                          87
                          <br />
                          92
                          <br />
                          123
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[75%] flex-col gap-4 md:w-full">
                <div className="rounded-md bg-gray-100_01">
                  <div className="mt-2">
                    <div className="flex items-start justify-center md:flex-col">
                      <div className="relative z-[1] mt-[76px] flex flex-1 flex-col items-center gap-2.5 md:self-stretch">
                        <Heading
                          size="heading5xl"
                          as="h6"
                          className="w-[98%] text-[48px] font-semibold uppercase leading-[60px] text-blue_gray-900_01 md:w-full md:text-[44px] sm:text-[38px]"
                        >
                          GIẢM GIÁ 500K CHO THỜI TRANG Đôi
                        </Heading>
                        <div className="flex flex-col items-start gap-5 self-stretch">
                          <Heading
                            as="p"
                            className="ml-1.5 w-[88%] text-[16px] font-normal leading-7 text-blue_gray-600_01 md:ml-0 md:w-full"
                          >
                            Tất cả các loại sản phẩm ở một nơi. Bắt đầu từ $1. Nhận tiền hoàn lại và ưu đãi
                          </Heading>
                          <Button
                            color="green_A700"
                            size="3xl"
                            shape="round"
                            className="min-w-[190px] rounded-md px-[34px] !text-gray-100_01 sm:px-5"
                          >
                            Khám phá ngay
                          </Button>
                        </div>
                      </div>
                      <div className="relative ml-[-70px] flex items-center self-center md:ml-0 sm:flex-col">
                        <Img
                          src="images/img_model_man_536x292.png"
                          alt="Man Model Image"
                          className="h-[536px] w-[50%] rounded-md object-contain sm:w-full"
                        />
                        <Img
                          src="images/img_model_women_526x282.png"
                          alt="Woman Model Image"
                          className="relative ml-[-130px] h-[526px] w-[48%] rounded-md object-contain sm:ml-0 sm:w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-1.5 mr-10 flex flex-col items-start gap-[38px] md:mx-0">
                  <Heading
                    size="text7xl"
                    as="p"
                    className="ml-3 text-[28px] font-medium text-blue_gray-900_01 md:ml-0 md:text-[26px] sm:text-[24px]"
                  >
                    Sản phẩm đang đấu giá
                  </Heading>
                  <div className="relative h-[450px] content-center self-stretch md:h-auto">
                    <div className="mx-auto flex w-full md:flex-col">
                      <Slider
                        autoPlay
                        autoPlayInterval={2000}
                        responsive={{ 0: { items: 1 }, 551: { items: 2 }, 1051: { items: 4 } }}
                        disableDotsControls
                        activeIndex={sliderState}
                        onSlideChanged={(e) => {
                          setSliderState(e?.item);
                        }}
                        ref={sliderRef}
                        items={[...Array(12)].map(() => (
                          <React.Fragment key={Math.random()}>
                            <ProductDetails4
                              originalPrice="128.000đ"
                              className="border border-solid border-gray-200 bg-bg-white"
                            />
                          </React.Fragment>
                        ))}
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-between gap-5">
                      <Button
                        onClick={() => {
                          sliderRef?.current?.slidePrev();
                        }}
                        className="w-[38px] rounded-[18px] border border-solid border-gray-200 px-3"
                      >
                        <Img src="images/img_arrow_left_blue_gray_900.svg" />
                      </Button>
                      <Button
                        onClick={() => {
                          sliderRef?.current?.slideNext();
                        }}
                        className="w-[38px] rounded-[18px] border border-solid border-blue_gray-900 px-3"
                      >
                        <Img src="images/img_arrow_right_blue_gray_900_1.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* product section */}
          <ProductSection />
          <div className="mt-[194px] self-stretch">
            <Footer5 className="mt-[34px] h-[388px] bg-[url(/public/images/img_group_19979.png)] bg-cover bg-no-repeat md:h-auto" />
          </div>
        </div>
      </div>
    </>
  );
}















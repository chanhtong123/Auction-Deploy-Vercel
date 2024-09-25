import { Helmet } from "react-helmet";
import {
  Button,
  Img,
  Slider,
  Heading,
  Input,
  TextArea,
  RatingBar,
  Text,
} from "../../components";
import Header2 from "../../components/Header2";
import ProductDetails4 from "../../components/ProductDetails4";
import UserProfile from "../../components/UserProfile";
import UserStatistics from "../../components/UserStatistics";
import AuctionSection from "./AuctionSection";
import RecommendedProductsSection from "./RecommendedProductsSection";
import React, { Suspense, useState } from "react";
import Footer5 from "../../components/Footer5";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
import { Flex, Rate, Typography, Tabs  } from 'antd';


// const accordionData = [
//   {
//     detailsTitle: "Thông Tin Chi Tiết",
//   },
//   {
//     detailsTitle: "Về Người Bán",
//   },
//   {
//     detailsTitle: "Chính Sách Mua Hàng",
//   },
//   {
//     detailsTitle: "Câu Hỏi Và Trả Lời",
//   },
// ];

const accordionData = [
  {
    detailsTitle: "Thông tin sản phẩm",
    content: (
        <>
          <Heading as="h6" className="text-[16px] font-medium text-blue_gray-900_01">
            Đặc điểm
          </Heading>
          <div className="flex items-start self-stretch md:flex-col">
            <div className="mt-[18px] h-[4px] w-[4px] rounded-sm bg-blue_gray-900_01" />
            <Heading
                as="p"
                className="ml-2.5 w-[62%] self-center text-[16px] font-normal leading-10 text-blue_gray-600_01 md:ml-0 md:w-full"
            >
              <>
                Thiết kế dáng rộng có phần vai trễ xuống mang lại vẻ ngoài và cảm giác thoải mái.
                <br />
                Chất liệu cotton dày dặn có độ rủ cứng giúp outfits của bạn trông bắt mắt và đặc biệt hơn.
                <br />
                Logo thêu phía trước tạo điểm nhấn tinh tế.
                <br />
                Kiểu dáng loose fit.
                <br />
                Sản phẩm có thể giặt máy.
                <br />
                Chất liệu: 100% cotton.
              </>
            </Heading>
          </div>
        </>
    ),
  },
  {
    detailsTitle: "Chính sách đổi trả",
    content: (
        <p>
          Chính sách đổi trả trong vòng 30 ngày với điều kiện sản phẩm chưa qua sử dụng và còn nguyên tem mác.
        </p>
    ),
  },
  {
    detailsTitle: "Hướng dẫn bảo quản",
    content: (
        <p>
          Giặt máy ở nhiệt độ thấp, không dùng chất tẩy, phơi ở nơi thoáng mát, tránh ánh nắng trực tiếp.
        </p>
    ),
  },
];

export default function AuctionPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [activeTabKey, setActiveTabKey] = useState('1');

  const onChange = (key) => {
    setActiveTabKey(key);
  };
  return (
    <>
      <Helmet>
        <title>Auction Deals - Bid on Exclusive Nike Apparel and More</title>
        <meta
          name="description"
          content="Join our Auction Deals for a chance to win Nike apparel and other fashion items. Start bidding from as low as 250.000đ and enjoy the thrill of the auction."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-bg-white">
       
        <Header2 />
       
        {/* auction section */}
        <AuctionSection />
        <div className="container-xs mt-[70px] flex flex-col gap-[114px] md:gap-[85px] md:px-5 sm:gap-[57px]">
          <div className="ml-1 mr-2.5 flex flex-col items-start md:mx-0">
            <div className="flex flex-col gap-4 self-stretch px-2.5">
              <div className="flex flex-col items-start gap-3.5">
                <Heading
                    size="text3xl"
                    as="h2"
                    className="text-[20px] font-medium text-blue_gray-900_01"
                >
                  Tổng Quan
                </Heading>
                {/*<div className="flex flex-col gap-4 self-stretch">*/}
                {/*  <Heading*/}
                {/*    as="h3"*/}
                {/*    className="w-[72%] text-[16px] font-normal leading-7 text-blue_gray-600_01 md:w-full"*/}
                {/*  >*/}
                {/*    Cho dù bạn mặc nó sau khi tập gym hay chuẩn bị bắt đầu ngày*/}
                {/*    mới, chiếc áo phông này đang gọi tên bạn. Được thiết kế cho*/}
                {/*    phong cách thoải mái và dễ dàng, thể hiện trọn vẹn niềm tự*/}
                {/*    hào của bạn. Kết hợp với mọi món đồ trong tủ quần áo của bạn*/}
                {/*    - cảm giác thể thao cổ điển phù hợp với mọi kiểu dáng.*/}
                {/*  </Heading>*/}
                {/*  <div className="mb-2 flex items-center">*/}
                {/*    <Heading*/}
                {/*      as="h4"*/}
                {/*      className="text-[16px] font-normal text-green-a700"*/}
                {/*    >*/}
                {/*      Xem Thêm*/}
                {/*    </Heading>*/}
                {/*    <Img*/}
                {/*      src="images/img_vector_19b269_1.svg"*/}
                {/*      alt="Vector Image"*/}
                {/*      className="mb-1 h-[5px] self-end"*/}
                {/*    />*/}
                {/*  </div>*/}
                {/*</div>*/}
                <div className="flex flex-col gap-4 self-stretch">
                  <Typography.Paragraph
                      ellipsis={{
                        rows: 2, // Số dòng giới hạn trước khi hiển thị "Xem Thêm"
                        //expandable: true,
                        expanded,
                        onExpand: (_, info) => setExpanded(info.expanded),
                      }}
                      className="w-[72%] text-[16px] font-normal leading-7 text-blue_gray-600_01 md:w-full"
                  >
                    Cho dù bạn mặc nó sau khi tập gym hay chuẩn bị bắt đầu ngày mới, chiếc áo
                    phông này đang gọi tên bạn. Được thiết kế cho phong cách thoải mái và dễ dàng,
                    thể hiện trọn vẹn niềm tự hào của bạn. Kết hợp với mọi món đồ trong tủ quần áo
                    của bạn - cảm giác thể thao cổ điển phù hợp với mọi kiểu dáng.
                  </Typography.Paragraph>

                  <div className="mb-2 flex items-center">
                    {!expanded ? (
                        <Heading
                            as="h4"
                            className="text-[16px] font-normal text-green-a700 cursor-pointer"
                            onClick={() => setExpanded(true)}
                        >
                          Xem Thêm
                        </Heading>
                    ) : (
                        <Heading
                            as="h4"
                            className="text-[16px] font-normal text-green-a700 cursor-pointer"
                            onClick={() => setExpanded(false)}
                        >
                          Thu Gọn
                        </Heading>
                    )}

                    <img
                        src="images/img_vector_19b269_1.svg"
                        alt="Vector Image"
                        className="mb-1 h-[5px] self-end"
                    />
                  </div>
                </div>
              </div>
              {/*<div className="flex flex-col items-start gap-6">*/}
              {/*  <div className="h-px w-[72%] bg-gray-200"/>*/}
              {/*  <Accordion*/}
              {/*      preExpanded={[0]}*/}
              {/*      className="flex flex-col gap-6 self-stretch"*/}
              {/*  >*/}
              {/*    {accordionData.map((d, i) => (*/}
              {/*        <AccordionItem uuid={i} key={`Expandable List${i}`}>*/}
              {/*          <div className="flex flex-1 flex-col gap-[18px]">*/}
              {/*            <AccordionItemHeading className="w-full">*/}
              {/*              <AccordionItemButton>*/}
              {/*                <AccordionItemState>*/}
              {/*                  {(props) => (*/}
              {/*                      <>*/}
              {/*                        <div className="flex flex-wrap items-center justify-between gap-5">*/}
              {/*                          <Heading*/}
              {/*                              size="text3xl"*/}
              {/*                              as="h5"*/}
              {/*                              className="text-[20px] font-medium text-blue_gray-900_01"*/}
              {/*                          >*/}
              {/*                            {d.detailsTitle}*/}
              {/*                          </Heading>*/}
              {/*                          {props?.expanded ? (*/}
              {/*                              <Img*/}
              {/*                                  src="images/img_arrow_up.svg"*/}
              {/*                                  alt="Arrow Up"*/}
              {/*                                  className="mb-2 mr-[218px] h-[6px] self-end"*/}
              {/*                        />*/}
              {/*                      ) : (*/}
              {/*                        <Img*/}
              {/*                          src="images/img_arrow_down.svg"*/}
              {/*                          alt="Arrow Down"*/}
              {/*                          className="mb-2 mr-[218px] h-[6px] self-end"*/}
              {/*                        />*/}
              {/*                      )}*/}
              {/*                    </div>*/}
              {/*                  </>*/}
              {/*                )}*/}
              {/*              </AccordionItemState>*/}
              {/*            </AccordionItemButton>*/}
              {/*          </AccordionItemHeading>*/}
              {/*          <AccordionItemPanel>*/}
              {/*            <div className="mb-4 flex flex-col items-start gap-3">*/}
              {/*              <Heading*/}
              {/*                as="h6"*/}
              {/*                className="text-[16px] font-medium text-blue_gray-900_01"*/}
              {/*              >*/}
              {/*                Đặc điểm*/}
              {/*              </Heading>*/}
              {/*              <div className="flex items-start self-stretch md:flex-col">*/}
              {/*                <div className="mt-[18px] h-[4px] w-[4px] rounded-sm bg-blue_gray-900_01" />*/}
              {/*                <div className="relative ml-[-4px] mt-[58px] h-[4px] w-[4px] rounded-sm bg-blue_gray-900_01 md:ml-0" />*/}
              {/*                <div className="relative ml-[-4px] mt-[98px] h-[4px] w-[4px] rounded-sm bg-blue_gray-900_01 md:ml-0" />*/}
              {/*                <div className="relative mb-24 ml-[-4px] h-[4px] w-[4px] self-end rounded-sm bg-blue_gray-900_01 md:ml-0 md:self-auto" />*/}
              {/*                <div className="relative mb-14 ml-[-4px] h-[4px] w-[4px] self-end rounded-sm bg-blue_gray-900_01 md:ml-0 md:self-auto" />*/}
              {/*                <div className="relative mb-4 ml-[-4px] h-[4px] w-[4px] self-end rounded-sm bg-blue_gray-900_01 md:ml-0 md:self-auto" />*/}
              {/*                <Heading*/}
              {/*                  as="p"*/}
              {/*                  className="ml-2.5 w-[62%] self-center text-[16px] font-normal leading-10 text-blue_gray-600_01 md:ml-0 md:w-full"*/}
              {/*                >*/}
              {/*                  <>*/}
              {/*                    Thiết kế dáng rộng có phần vai trễ xuống mang*/}
              {/*                    lại vẻ ngoài và cảm giác thoải mái.*/}
              {/*                    <br />*/}
              {/*                    Chất liệu cotton dày dặn có độ rủ cứng giúp*/}
              {/*                    outfits của bạn trông bắt mắt và đặc biệt hơn.*/}
              {/*                    <br />*/}
              {/*                    Logo thêu phía trước tạo điểm nhấn tinh tế.*/}
              {/*                    <br />*/}
              {/*                    Kiểu dáng loose fit.*/}
              {/*                    <br />*/}
              {/*                    Sản phẩm có thể giặt máy.*/}
              {/*                    <br />*/}
              {/*                    Chất liệu: 100% cotton.*/}
              {/*                  </>*/}
              {/*                </Heading>*/}
              {/*              </div>*/}
              {/*            </div>*/}
              {/*          </AccordionItemPanel>*/}
              {/*        </div>*/}
              {/*        <div className="h-px w-[83%] rotate-[0deg] bg-gray-200" />*/}
              {/*      </AccordionItem>*/}
              {/*    ))}*/}
              {/*  </Accordion>*/}
              {/*</div>*/}
              <div className="flex flex-col items-start gap-6">
                <div className="h-px w-[72%] bg-gray-200"/>
                <Tabs onChange={onChange} type="card" activeKey={activeTabKey}>
                  {accordionData.map((d, i) => (
                      <Tabs.TabPane tab={d.detailsTitle} key={String(i + 1)}>
                        <div className="mb-4 flex flex-col items-start gap-3">
                          {d.content}
                        </div>
                      </Tabs.TabPane>
                  ))}
                </Tabs>
              </div>

              {/*AHIHIHIHIHIHI*/}
            </div>


            <Text
                size="text5xl"
                as="p"
                className="mt-[186px] text-[25px] font-normal text-black-900 md:text-[23px] sm:text-[21px]"
            >
              Tổng quan đánh giá
            </Text>
            <div className="mb-5 mt-12 flex items-start gap-[30px] self-stretch md:flex-col">
              <div className="flex w-[32%] flex-col items-start gap-[110px] md:w-full md:gap-[82px] sm:gap-[55px]">
                <div className="flex flex-col gap-8 self-stretch">
                  <div className="flex items-center justify-between gap-5">
                    <Heading
                      size="text8xl"
                      as="p"
                      className="font-jost text-[60px] font-medium text-blue_gray-900_01 md:text-[52px] sm:text-[46px]"
                    >
                      4.9
                    </Heading>
                    <div className="flex w-[64%] flex-col items-start gap-3.5">
                      {/*<RatingBar*/}
                      {/*  value={5}*/}
                      {/*  isEditable={true}*/}
                      {/*  color="#f5c34b"*/}
                      {/*  activeColor="#f5c34b"*/}
                      {/*  size={18}*/}
                      {/*  className="flex gap-2.5"*/}
                      {/*/>*/}
                      <Flex gap="middle">
                        <Rate disabled defaultValue={2} />
                        {/*<span>allowClear: true</span>*/}
                      </Flex>
                      <Text
                        size="textlg"
                        as="p"
                        className="text-[15px] font-normal text-blue_gray-900_01"
                      >
                        2 đánh giá
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[46px]">
                    <div className="flex items-start justify-center gap-[26px] sm:flex-col">
                      <Heading
                        as="p"
                        className="font-jost text-[16px] font-normal text-blue_gray-900_01"
                      >
                        5 sao
                      </Heading>
                      <div className="flex flex-1 flex-col items-end self-center sm:self-stretch">
                        <Heading
                          as="p"
                          className="font-jost text-[16px] font-normal text-blue_gray-900_01"
                        >
                          89%
                        </Heading>
                        <div className="relative mt-[-2px] flex self-stretch rounded-md bg-gray-100">
                          <div className="h-[12px] w-[70%] rounded-md bg-orange-300" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-center gap-[26px] sm:flex-col">
                      <Heading
                        as="p"
                        className="font-jost text-[16px] font-normal text-blue_gray-900_01"
                      >
                        4 sao
                      </Heading>
                      <div className="flex flex-1 flex-col items-end self-center sm:self-stretch">
                        <Heading
                          as="p"
                          className="font-jost text-[16px] font-normal text-blue_gray-900_01"
                        >
                          4%
                        </Heading>
                        <div className="relative mt-[-2px] h-[12px] self-stretch rounded-md bg-gray-100">
                          <div
                            style={{ width: "70%" }}
                            className="absolute h-full rounded-md bg-orange-300"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[46px]">
                      <UserProfile />
                      <UserProfile
                        saoCounterText="2 sao"
                        threePercentText="1%"
                      />
                    </div>
                    <UserStatistics />
                  </div>
                </div>
                <Button
                  color="green_A700"
                  size="3xl"
                  variant="outline"
                  shape="round"
                  className="min-w-[154px] rounded-md !border-2 pl-8 pr-[18px] font-medium sm:pl-5"
                >
                  Viết đánh giá
                </Button>
              </div>
              <div className="mt-[18px] flex flex-1 flex-col gap-9 self-center md:self-stretch">
                <div className="ml-1 flex flex-col items-start gap-[50px] md:ml-0">
                  <div className="flex flex-col gap-1.5 self-stretch">
                    <Heading
                      size="text2xl"
                      as="p"
                      className="w-[32%] text-[18px] font-medium leading-[22px] text-blue_gray-900_01 md:w-full"
                    >
                      39 Đánh giá sản phẩm người bán
                    </Heading>
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-[30px] md:flex-col">
                        <div className="flex w-[8%] flex-col items-center gap-1 rounded-[36px] bg-gray-100_01 md:w-full">
                          <Img
                            src="images/img_checkmark_bg_white_.svg"
                            alt="Checkmark Image"
                            className="h-[20px] w-[20px] self-end"
                          />
                          <Heading
                            as="p"
                            className="mb-[26px] font-jost text-[16px] font-medium text-blue_gray-900_01"
                          >
                            A.T
                          </Heading>
                        </div>
                        <div className="flex flex-1 flex-col items-start gap-3.5 md:self-stretch">
                          <div className="flex items-center gap-[15px] self-stretch">
                            <Img
                              src="images/img_television.svg"
                              alt="Television Image"
                              className="h-[10px] w-[10%] self-end object-contain"
                            />
                            <Heading
                              as="p"
                              className="text-[16px] font-medium text-blue_gray-900_01"
                            >
                              Sản phẩm tuyệt vời
                            </Heading>
                          </div>
                          <Heading
                            as="p"
                            className="text-[16px] font-normal text-blue_gray-900_01"
                          >
                            Đánh giá bởi Ali Tufan - 27.04.2022
                          </Heading>
                        </div>
                      </div>
                      <Heading
                        as="p"
                        className="text-[16px] font-normal leading-7 text-blue_gray-600_01"
                      >
                        <>
                          Đây là một bước tiến lớn bất thường so với các mẫu máy
                          trước đó, đặc biệt là về sức mạnh tính toán thô cũng
                          như những điều thú vị như hỗ trợ màn hình và tai nghe.
                          <br />
                          <br />
                          Danh sách Amazon này có hai bộ xử lý khác nhau, M1 Pro
                          (được liệt kê là &quot;kiểu GPU 16 lõi&quot;) và M1
                          Max (GPU 32 lõi). Tôi sẽ gọi một người là Pro, người
                          còn lại là Max. Tôi đã mua phiên bản Pro cơ bản, nhưng
                          phần lớn những gì tôi sẽ nói đều áp dụng cho cả hai
                          phiên bản này và tôi cũng sẽ có một số nhận xét cụ thể
                          về phiên bản Max.
                        </>
                      </Heading>
                      <div className="mr-[496px] flex gap-2.5 md:mr-0 md:flex-col">
                        <Suspense fallback={<div>Loading feed...</div>}>
                          {[...Array(4)].map((d, index) => (
                            <Img
                              key={"galleryList" + index}
                              src="images/img_rectangle_294.png"
                              alt="Gallery Image"
                              className="h-[96px] w-[26%] rounded object-contain md:w-full"
                            />
                          ))}
                        </Suspense>
                      </div>
                      <div className="flex items-center">
                        <Button
                          color="gray_200"
                          size="sm"
                          variant="outline"
                          shape="round"
                          className="relative z-[1] min-w-[104px] rounded-md !border-2 px-[22px] font-medium sm:px-5"
                        >
                          Hữu ích
                        </Button>
                        <Text
                          size="textlg"
                          as="p"
                          className="relative mb-1.5 ml-[-10px] w-[14%] self-end text-center text-[15px] font-medium leading-[22px] text-blue_gray-600_01"
                        >
                          Báo cáo lạm dụng
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button
                    color="green_A700"
                    size="xl"
                    variant="outline"
                    shape="round"
                    className="ml-[218px] min-w-[298px] rounded-md !border-2 px-8 font-medium md:ml-0 sm:px-5"
                  >
                    Xem Tất Cả
                  </Button>
                </div>
                <div className="flex flex-col items-start gap-2.5">
                  <Heading
                    size="text2xl"
                    as="p"
                    className="text-[18px] font-medium text-blue_gray-900_01"
                  >
                    Viết đánh giá
                  </Heading>
                  <div className="ml-1.5 flex flex-col items-start self-stretch md:ml-0">
                    <div className="flex flex-col items-start gap-9 self-stretch">
                      <Heading
                        as="p"
                        className="text-[16px] font-medium text-blue_gray-900_01"
                      >
                        Đánh giá của bạn về sản phẩm
                      </Heading>
                      <RatingBar
                        value={5}
                        isEditable={true}
                        color="#f5c34b"
                        activeColor="#f5c34b"
                        size={24}
                        className="flex gap-2.5"
                      />
                    </div>
                    <div className="mt-2 self-stretch">
                      <div className="flex flex-col items-start">
                        <Heading
                          as="p"
                          className="relative z-[2] mt-1 text-[16px] font-medium text-blue_gray-900_01"
                        >
                          Bình luận
                        </Heading>
                        <TextArea
                          shape="round"
                          name="Comment TextArea"
                          placeholder={`Viết bình luận của bạn ở đây`}
                          className="self-stretch rounded-md !border !border-gray-200 px-5 text-blue_gray-900_01 sm:pt-5"
                        />
                      </div>
                      <div className="flex gap-[38px] md:flex-col">
                        <div className="flex w-full flex-col items-start justify-center gap-5">
                          <Heading
                            as="p"
                            className="text-[16px] font-medium text-blue_gray-900_01"
                          >
                            Tên
                          </Heading>
                          <TextArea
                            size="xs"
                            variant="tarOutlineGreenA700"
                            shape="round"
                            name="Name TextArea"
                            placeholder={`Ali Tufan`}
                            className="self-stretch rounded-md !border !border-green-a700 px-3.5 text-blue_gray-900_01"
                          />
                        </div>
                        <div className="flex w-full flex-col items-start justify-center gap-5">
                          <Heading
                            as="p"
                            className="text-[16px] font-medium text-blue_gray-900_01"
                          >
                            Email
                          </Heading>
                          <Input
                            size="xl"
                            shape="round"
                            type="email"
                            name="Email EditText"
                            placeholder={`Email của bạn`}
                            className="self-stretch rounded-md border border-solid border-gray-200 px-3.5"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-7 flex items-center gap-2.5 self-stretch md:flex-col">
                      <div className="h-[16px] w-[14px] rounded border border-solid border-blue_gray-900_01" />
                      <Heading
                        as="p"
                        className="w-[72%] text-[16px] font-normal leading-7 text-blue_gray-900_01 md:w-full"
                      >
                        Lưu tên, email và trang web của tôi trong trình duyệt
                        này cho lần đánh giá tiếp theo.
                      </Heading>
                    </div>
                    <Button
                      color="green_A700"
                      size="xl"
                      shape="round"
                      className="mt-[50px] min-w-[134px] rounded-md border border-solid border-green-a700 px-[33px] font-medium !text-gray-100_01 shadow-md sm:px-5"
                    >
                      Hoàn tất
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[452px] content-center md:h-auto">
            <div className="mx-auto flex w-full gap-[30px] md:flex-col">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{
                  0: { items: 1 },
                  551: { items: 1 },
                  1051: { items: 4 },
                }}
                disableDotsControls
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                items={[...Array(12)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="px-[15px]">
                      <div className="flex flex-col">
                        <ProductDetails4
                          productImage="images/img_image_30_230x246.png"
                          productDescription="Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double "
                          className="ml-1 border border-solid border-gray-200 bg-bg-white md:ml-0"
                        />
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
            <div className="absolute left-0 right-0 top-[42%] m-auto flex flex-1 justify-between gap-5">
              <Button
                onClick={() => {
                  sliderRef?.current?.slidePrev();
                }}
                className="ml-1 w-[44px] rounded-[22px] border border-solid border-gray-200 px-3.5"
              >
                <Img src="images/img_arrow_left_blue_gray_900.svg" />
              </Button>
              <Button
                onClick={() => {
                  sliderRef?.current?.slideNext();
                }}
                className="w-[44px] rounded-[22px] border border-solid border-blue_gray-900 px-3.5"
              >
                <Img src="images/img_arrow_right_blue_gray_900_1.svg" />
              </Button>
            </div>
          </div>
        </div>

        {/* recommended products section */}
        <RecommendedProductsSection />
        <div className="mt-[194px] self-stretch">
            <Footer5 className="mt-[34px] h-[388px] bg-[url(/public/images/img_group_19979.png)] bg-cover bg-no-repeat md:h-auto" />
          </div>
      </div>
    </>
  );
}

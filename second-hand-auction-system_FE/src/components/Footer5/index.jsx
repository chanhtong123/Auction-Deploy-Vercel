import { Img, Text, Heading } from "./..";
import React from "react";

export default function Footer5({ ...props }) {
  return (
    <ul {...props} className={`${props.className} flex flex-col justify-center items-center`}>
      <li>
        <div className="container-xs mt-10 flex justify-center md:px-5">
          <div className="flex w-full flex-col items-start gap-4">
            <div className="flex items-center gap-[30px] self-stretch md:flex-col">
              <div className="flex w-[24%] flex-col gap-2.5 md:w-full">
                <Heading
                  size="text2xl"
                  as="p"
                  className="w-[58%] text-[18px] font-medium uppercase leading-[22px] text-blue_gray-900_01 md:w-full"
                >
                  Liên hệ chúng tôi
                </Heading>
                <div className="flex flex-col gap-[18px]">
                  <div className="flex flex-col items-start gap-1.5">
                    <div className="flex items-start gap-6 self-stretch">
                      <Img src="images/img_phone_call_1.svg" alt="Phone Icon" className="mt-1 h-[34px]" />
                      <Text
                        size="textlg"
                        as="p"
                        className="w-[88%] self-center text-[15px] font-medium leading-[22px] text-blue_gray-900_01"
                      >
                        Thứ Hai - Thứ Sáu: 08h00 - 21h00
                      </Text>
                    </div>
                    <Text
                      size="textlg"
                      as="p"
                      className="ml-[60px] text-[15px] font-normal text-blue_gray-900_01 md:ml-0"
                    >
                      +(1) 123 456 7890
                    </Text>
                  </div>
                  <div className="flex flex-col items-start gap-[18px]">
                    <div className="flex items-start gap-[22px]">
                      <Img src="images/img_email_1.svg" alt="Email Icon" className="h-[34px] self-center" />
                      <Text size="textlg" as="p" className="text-[15px] font-medium text-blue_gray-900_01">
                        Bạn cần giúp đỡ?
                      </Text>
                    </div>
                    <Text size="textlg" as="p" className="self-end text-[15px] font-normal text-blue_gray-900_01">
                      support@ezshop.com
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex w-[52%] items-center justify-between gap-5 md:w-full sm:flex-col">
                <div className="mb-1 block w-[56%] flex-col items-start justify-center gap-[18px] sm:w-full">
                  <Heading size="text2xl" as="p" className="text-[18px] font-medium uppercase text-blue_gray-900_01">
                    Về EZShop
                  </Heading>
                  <ul className="flex flex-col items-start gap-11">
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                          Theo dõi đơn hàng của bạn
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                          Hướng dẫn sản phẩm
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                          Danh sách yêu thích
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                          Chính sách bảo mật
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                          Định vị cửa hàng
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mr-[34px] block w-[44%] flex-col items-center gap-[18px] self-end sm:mr-0 sm:w-full sm:self-auto">
                  <Heading
                    size="text2xl"
                    as="p"
                    className="text-[18px] font-medium uppercase leading-[22px] text-blue_gray-900_01"
                  >
                    Hỗ trợ khách hàng
                  </Heading>
                  <ul className="flex flex-col items-start gap-11">
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                          Liên hệ chúng tôi
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                          Trung tâm trợ giúp
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                          Trả lại & Trao đổi
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                          Tài trợ mua tốt nhất
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                          Thẻ quà tặng mua tốt nhất
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex w-[24%] flex-col items-start self-start md:w-full md:self-auto">
                <Heading size="text2xl" as="p" className="text-[18px] font-medium uppercase text-blue_gray-900_01">
                  Theo dõi
                </Heading>
                <div className="mt-5 flex gap-[18px]">
                  <Img src="images/img_facebook.svg" alt="Facebook Icon One" className="h-[16px]" />
                  <Img src="images/img_intagram.svg" alt="Facebook Icon Two" className="h-[16px]" />
                  <Img src="images/img_twitter.svg" alt="Facebook Icon Three" className="h-[16px]" />
                  
                </div>
                <Heading
                  size="text2xl"
                  as="p"
                  className="mt-10 text-[18px] font-medium uppercase text-blue_gray-900_01"
                >
                  Phương thức thanh toán
                </Heading>
                <Img
                  src="images/img_ph_ng_th_c_thanh.png"
                  alt="Payment Methods Icon"
                  className="ml-2 mt-4 h-[28px] w-full object-cover md:ml-0 md:h-auto"
                />
              </div>
            </div>
            <div className="ml-2.5 h-[0.92px] w-[90%] bg-gray-200 md:ml-0" />
            <div className="ml-2.5 flex w-[90%] flex-row items-start justify-between gap-5 md:ml-0 md:w-full md:flex-col">
              <Text
                as="p"
                className="w-[18%] self-center text-[14px] font-normal leading-10 text-blue_gray-900_01 md:w-full"
              >
                © 2024 EZShop
              </Text>
           
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}







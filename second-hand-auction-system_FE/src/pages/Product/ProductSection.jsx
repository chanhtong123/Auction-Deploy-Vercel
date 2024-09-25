import { Text, SelectBox, Img, Heading } from "../../components";
import Pagination from "../../components/Pagination";
import ProductDetails21 from "../../components/ProductDetails21";
import React, { Suspense } from "react";

const fashionItemsGrid = [
  {
    productImage: "images/img_image_30_4.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_4.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
  },
  {
    productImage: "images/img_image_30_2.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_2.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_2.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_2.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_4.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_3.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_3.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_2.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_2.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_3.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_2.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_4.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_2.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_3.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ProductSection() {
  return (
    <>
      {/* product section */}
      <div className="mt-20 flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col items-center px-1.5 md:px-5">
          <Heading
            size="text7xl"
            as="h2"
            className="self-start text-[28px] font-medium text-blue_gray-900_01 md:text-[26px] sm:text-[24px]"
          >
            Tất cả sản phẩm
          </Heading>
          <div className="mt-[50px] h-px w-[92%] self-start bg-gray-200" />
          <div className="ml-[76px] mr-[102px] mt-7 flex self-stretch md:mx-0 md:flex-col">
            <div className="flex flex-1 items-center justify-center md:self-stretch sm:flex-col">
              <Text size="textlg" as="p" className="text-[15px] font-normal text-blue_gray-600_01">
                Hiển thị 1–20 trong 175 kết quả.
              </Text>
              <div className="flex items-center gap-2.5">
                <div className="h-[22px] w-px bg-gray-200" />
                <Text size="textlg" as="p" className="self-end text-[15px] font-normal text-blue_gray-600_01 underline">
                  20
                </Text>
                <div className="h-[22px] w-px bg-gray-200" />
              </div>
              <Text size="textlg" as="p" className="ml-2.5 text-[15px] font-normal text-blue_gray-600_01 sm:ml-0">
                40
              </Text>
              <div className="flex items-center gap-2.5">
                <div className="h-[22px] w-px bg-gray-200" />
                <Text size="textlg" as="p" className="text-[15px] font-normal text-blue_gray-600_01">
                  60
                </Text>
              </div>
              <div className="ml-1 flex flex-1 items-center gap-2.5 px-1 sm:ml-0 sm:self-stretch">
                <div className="h-[22px] w-px bg-gray-200" />
                <Text size="textlg" as="p" className="text-[15px] font-normal text-blue_gray-600_01">
                  Tất cả
                </Text>
              </div>
            </div>
            <div className="flex w-[44%] justify-end px-2 md:w-full">
              <SelectBox
                size="xs"
                shape="square"
                indicator={
                  <Img src="images/img_vector_color_text_light.svg" alt="Vector" className="h-[6px] w-[8px]" />
                }
                name="Filter Dropdown"
                placeholder={`Lọc sản phẩm`}
                options={dropDownOptions}
                className="w-[26%] gap-2 font-medium text-blue_gray-600_01"
              />
              <div className="flex w-[32%] items-center justify-end gap-2.5">
                <div className="flex flex-1 items-center justify-center gap-2.5">
                  <div className="h-[22px] w-px bg-gray-200" />
                  <Text size="textlg" as="p" className="text-[15px] font-normal text-blue_gray-600_01">
                    Danh sách
                  </Text>
                  <div className="h-[22px] w-px bg-gray-200" />
                </div>
                <Text size="textlg" as="p" className="self-end text-[15px] font-normal text-blue_gray-600_01 underline">
                  Lưới
                </Text>
              </div>
            </div>
          </div>
          <div className="mx-14 mt-5 grid grid-cols-4 justify-center gap-3.5 self-stretch px-1 md:mx-0 md:grid-cols-2 sm:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {fashionItemsGrid.map((d, index) => (
                <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                  <ProductDetails21 {...d} key={"itemsGrid" + index} />
                </a>
              ))}
            </Suspense>
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
}






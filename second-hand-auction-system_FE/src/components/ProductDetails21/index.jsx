import { Text, Heading, RatingBar, Img } from "./..";
import React from "react";

export default function ProductDetails21({
  productImage = "images/img_image_30_4.png",
  productTitle = "Thời trang",
  productDescription = "Áo Hoodie Nike dành cho mùa đông lạnh",
  reviewCount = "3,014 đánh giá",
  salePrice,
  originalPrice = "328.000đ",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full border-gray-200 border border-solid bg-bg-white`}
    >
      <div className="self-stretch bg-bg-white px-5 py-6 sm:py-5">
        <Img src={productImage} alt="Fashion Image" className="h-[230px] w-[230px] object-cover" />
      </div>
      <div className="mx-3.5 mb-6 flex flex-col items-start gap-2.5 self-stretch">
        <Text size="textxs" as="p" className="text-[12px] font-normal text-blue_gray-600_01">
          {productTitle}
        </Text>
        <Heading
          size="headingxl"
          as="h6"
          className="w-full text-[16px] font-semibold leading-[150%] text-blue_gray-900_01"
        >
          {productDescription}
        </Heading>
        <div className="flex items-start gap-2.5 self-stretch">
          <RatingBar
            value={1}
            isEditable={true}
            color="#f5c34b"
            activeColor="#f5c34b"
            size={10}
            className="flex gap-2.5"
          />
          <Text size="textxs" as="p" className="self-center text-[12px] font-normal text-blue_gray-600_01">
            {reviewCount}
          </Text>
        </div>
        <div className="flex flex-wrap items-center gap-2.5 self-stretch">
          <Heading size="heading2xl" as="h6" className="flex text-[18px] font-semibold text-blue_gray-900_01">
            <span>278.000</span>
            <a href="#" className="inline underline">
              đ
            </a>
          </Heading>
          <Text as="p" className="self-start text-[14px] font-normal capitalize text-blue_gray-600_01 line-through">
            {originalPrice}
          </Text>
        </div>
      </div>
    </div>
  );
}




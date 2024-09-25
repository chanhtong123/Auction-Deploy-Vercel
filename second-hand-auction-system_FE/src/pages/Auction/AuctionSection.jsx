import { Text, Img, Heading, Button } from "../../components";
import UserProfileImage from "../../components/UserProfileImage";
import React, { Suspense, useState } from "react";
import { Modal } from 'antd';
import { Rate } from 'antd';
import BidForm from "../../components/BidForm";

const thumbnailList = [
    { userImage: "images/img_image_75.png" },
    { userImage: "images/img_image_75.png" },
    { userImage: "images/img_image_75.png" },
];

export default function AuctionSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Modal
                title="Đặt Giá Thầu"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                centered // Thêm thuộc tính này để căn giữa modal
                bodyStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} // Căn giữa nội dung bên trong modal
            >
                <div style={{ width: '100%', textAlign: 'center' }}>
                    {/* Render the BidForm component inside the modal */}
                    <BidForm />
                </div>
            </Modal>
            {/* auction section */}
            <div className="mt-4 flex items-center gap-[50px] self-stretch px-[22px] md:flex-col sm:px-5">
                <div className="flex flex-1 items-start justify-end md:flex-col md:self-stretch">
                    <div className="ml-[72px] flex w-[10%] flex-col gap-2.5 md:ml-0 md:w-full md:flex-row">
                        <Suspense fallback={<div>Loading feed...</div>}>
                            {thumbnailList.map((d, index) => (
                                <UserProfileImage {...d} key={"thumbnailList1" + index} className="border border-gray-200" />
                            ))}
                        </Suspense>
                    </div>
                    <div className="flex flex-1 flex-col items-end gap-5 self-center md:self-stretch">
                        <Img src="images/img_full_screen_1.svg" alt="Fullscreen Image" className="h-[34px]" />
                        <Img
                            src="images/img_image_65.png"
                            alt="Secondary Image"
                            className="mr-[42px] h-[714px] w-[84%] object-contain md:mr-0"
                        />
                        <Text size="textlg" as="p" className="self-center text-[15px] font-normal text-blue_gray-900_01">
                            Cuộn để phóng to hình ảnh
                        </Text>
                    </div>
                </div>
                <div
                    className="flex w-[34%] flex-col items-center rounded-md border border-solid border-gray-200 bg-bg-white px-[22px] py-[30px] shadow-sm md:w-full sm:p-5">
                    <div className="ml-1.5 mr-4 flex flex-col gap-[18px] self-stretch md:mx-0">
                        <div className="flex items-center justify-center">
                            <Heading size="headinglg" as="h1" className="text-[15px] font-bold uppercase text-blue_gray-900_01">
                                Nike
                            </Heading>
                            <div className="ml-2.5 h-[20px] w-px bg-gray-200" />
                            <div className="flex flex-1 items-start gap-2.5 px-2.5">
                                <Rate disabled defaultValue={2} />
                                <Text as="p" className="self-center text-[14px] font-normal text-blue_gray-900_01">
                                    3,014 Đánh giá shop
                                </Text>
                            </div>
                        </div>
                        <Heading size="text4xl" as="h2" className="text-[22px] font-medium leading-[27px] text-blue_gray-900_01">
                            Xả Hàng VNXK Áo Phông Nam Nike Khô Thoáng Swoosh{" "}
                        </Heading>
                        <div className="h-px bg-gray-200" />
                    </div>
                    <Heading
                        size="text3xl"
                        as="h3"
                        className="ml-1.5 mt-[26px] flex self-start font-bevietnampro text-[20px] font-medium text-blue_gray-900_01 md:ml-0"
                    >
                        <span className="font-bold">Giá khởi điểm:</span>
                        <span>&nbsp;250.000</span>
                        <a href="#" className="inline underline">đ</a>
                    </Heading>
                    <Heading
                        size="text6xl"
                        as="h4"
                        className="ml-1.5 mt-8 flex self-start font-bevietnampro text-[26px] font-medium text-blue_gray-900_01 md:ml-0 md:text-[24px] sm:text-[22px]"
                    >
                        <span className="font-bold">Giá đấu hiện tại</span>
                        <span>: 750.000</span>
                        <a href="#" className="inline underline">đ</a>
                    </Heading>
                    <div className="mx-1.5 mt-4 flex flex-col items-start gap-3 self-stretch md:mx-0">
                        <Text as="p" className="font-bevietnampro text-[14px] font-normal text-blue_gray-900_01">
                            <span className="font-medium">Màu sắc:</span>
                            <span>&nbsp;Xám</span>
                        </Text>
                        <Img src="images/img_inner.svg" alt="Color Image" className="h-[26px] w-[52%] object-contain" />
                    </div>
                    <Text
                        as="p"
                        className="ml-1.5 mt-5 self-start font-bevietnampro text-[14px] font-normal text-blue_gray-900_01 md:ml-0"
                    >
                        <span className="font-bold">Size:</span>
                        <span>&nbsp;M</span>
                    </Text>
                    <Text size="textxs" as="p" className="mt-[22px] text-[12px] font-normal text-gray-900_01">
                        Thời gian phiên đấu giá: Kết thúc 5 ngày 10 giờ Thứ Hai, 12:33 AM
                    </Text>
                    <div className="ml-1.5 mt-[18px] flex flex-col gap-3 self-stretch md:ml-0">
                        <Button
                            onClick={showModal}
                            color="green_A700"
                            size="xl"
                            className="self-stretch rounded-[26px] border border-solid border-green-a700 px-[33px] !text-gray-100_01 sm:px-5"
                        >
                            Đặt giá thầu
                        </Button>
                        <Button
                            color="green_50"
                            size="xl"
                            leftIcon={
                                <div className="flex h-[18px] w-[20px] items-center justify-center">
                                    <Img src="images/img_favorite.svg" alt="Favorite" className="h-[18px] w-[20px]" />
                                </div>
                            }
                            className="gap-[34px] self-stretch rounded-[24px] border border-solid border-green-a700 px-[33px] sm:px-5"
                        >
                            Thêm sản phẩm yêu thích{" "}
                        </Button>
                    </div>

                    <Heading
                        size="headingmd"
                        as="h5"
                        className="ml-1.5 mt-5 self-start text-[14px] font-bold text-blue_gray-900_01 md:ml-0"
                    >
                        Thanh toán :
                    </Heading>
                    <div className="mb-1.5 ml-1.5 mt-[22px] flex flex-col gap-5 self-stretch md:ml-0">
                        <div className="mr-1 flex items-center bg-bg-white md:mr-0">
                            <Img src="images/img_image_125.png" alt="Payment Icon 1" className="h-[10px] w-[18%] object-contain" />
                            <Img src="images/img_paypal.png" alt="Payment Icon 2" className="ml-5 h-[10px] w-[18%] object-contain" />
                            <Img src="images/img_images.png" alt="Payment Icon 3" className="ml-5 h-[28px] w-[16%] object-contain" />
                        </div>
                        <div className="flex flex-wrap items-start gap-[22px]">
                            <Heading size="headingmd" as="h6" className="mb-1 text-[14px] font-bold text-blue_gray-900_01">
                                Địa chỉ giao hàng
                            </Heading>
                            <Img src="images/img_trash.svg" alt="Trash Icon" className="h-[20px] w-[20px] object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

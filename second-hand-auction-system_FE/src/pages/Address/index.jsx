import { Helmet } from "react-helmet";
import { Button, Input, Img, Heading } from "../../components";
import { CloseSVG } from "../../components/Input/close.jsx";
import UserAddressProfile from "../../components/UserAddressProfile";
import Header2 from "../../components/Header2";
import React, { Suspense } from "react";
import Footer5 from "../../components/Footer5";
import ProfileCard from "../../components/ProfileCard";
import AccountOptions from "../../components/AccountOption";

const addressList = [
    {
        userImage: "images/img_contrast.svg",
        userTitle: "Home",
        userAddress: (
            <>
                {" "}
                90/2/2 đường 11
                <br /> Linh xuân
                <br /> Thành phố Thủ Đức
            </>
        ),
        editButtonLabel: "Sửa",
        deleteButtonLabel: "Xóa",
    },
    {
        userImage: "images/img_contrast.svg",
        userTitle: "Home",
        userAddress: (
            <>
                {" "}
                90/2/2 đường 11
                <br /> Linh xuân
                <br /> Thành phố Thủ Đức
            </>
        ),
        editButtonLabel: "Sửa",
        deleteButtonLabel: "Xóa",
    },
    {
        userImage: "images/img_contrast.svg",
        userTitle: "Home",
        userAddress: (
            <>
                {" "}
                90/2/2 đường 11
                <br /> Linh xuân
                <br /> Thành phố Thủ Đức
            </>
        ),
        editButtonLabel: "Sửa",
        deleteButtonLabel: "Xóa",
    },
];

export default function AddressPage() {
    const [searchBarValue1, setSearchBarValue1] = React.useState("");

    return (
        <>
            <Helmet>
                <title>Manage Your Address Book - Update Shipping Information</title>
                <meta
                    name="description"
                    content="Easily add, edit, or delete shipping addresses in your EZShop account. Ensure your delivery details are up-to-date for a seamless shopping experience."
                />
            </Helmet>
            <div className="flex w-full justify-center bg-bg-white p-6 sm:p-5">
                <div className="w-[94%] md:w-full">
                    <div className="flex w-full flex-col gap-7 md:px-5">
                        <Header2 />
                        <div className="flex items-start gap-12">


                            <div className="w-[24%]">
                                <ProfileCard />

                                <AccountOptions />

                            </div>


                            <div className="relative h-[904px] flex-1">
                                <div className="absolute bottom-0 left-0 right-0 top-0 my-auto ml-1 mr-2 flex h-max flex-1 rounded-[16px] bg-gray-100 px-[22px] py-2.5 md:mx-0 sm:px-5">
                                    <Heading
                                        size="text3xl"
                                        as="h1"
                                        className="mb-[846px] text-[28px] font-medium text-blue_gray-900_01 md:text-[26px] sm:text-[24px]"
                                    >
                                        Quản Lý Địa Chỉ
                                    </Heading>
                                </div>
                                <div className="absolute bottom-px left-0 right-0 m-auto flex flex-1 flex-col gap-10 rounded-[14px] bg-bg-white px-3.5 py-[26px] shadow-sm sm:py-5">
                                    <div className="ml-3 flex items-center justify-between gap-5 md:ml-0 md:flex-col">
                                        <Input
                                            shape="round"
                                            name="Search Field"
                                            placeholder={`Tìm kiếm`}
                                            value={searchBarValue1}
                                            onChange={(e) => setSearchBarValue1(e.target.value)}
                                            suffix={
                                                searchBarValue1?.length > 0 ? (
                                                    <CloseSVG
                                                        onClick={() => setSearchBarValue1("")}
                                                        height={18}
                                                        width={26}
                                                        fillColor="#041e42ff"
                                                    />
                                                ) : (
                                                    <Img src="images/img_search.svg" alt="Search 1" className="h-[18px] w-[26px]" />
                                                )
                                            }
                                            className="w-[58%] gap-4 rounded-md border px-3.5 md:w-full"
                                        />
                                        <Button
                                            size="xl"
                                            shape="round"
                                            className="min-w-[172px] bg-red-300 rounded-md border border-solid border-green-a700 px-[33px] font-medium sm:px-5"
                                        >
                                            Thêm địa chỉ
                                        </Button>
                                    </div>


                                    <div className="mx-3 mb-[418px] md:mx-0">
                                        <div className="relative z-[2] mr-5 flex flex-wrap gap-6 md:mr-0">
                                            <Suspense fallback={<div>Loading feed...</div>}>
                                                {addressList.map((d, index) => (
                                                    <div
                                                        className="bg-green-300 rounded-lg shadow-md border border-gray-300 p-5 flex-1 min-w-[250px] max-w-[300px] flex flex-col" // Đổi từ bg-green-200 sang bg-green-300
                                                        key={"addressesList" + index}
                                                    >
                                                        <div className="flex items-center">
                                                            <input
                                                                type="radio" // Thay đổi thành radio để chỉ cho phép chọn một
                                                                name="addressSelection" // Đặt tên giống nhau để nhóm lại
                                                                id={`addressRadio${index}`}
                                                                className="mr-2 accent-green-400"
                                                            />
                                                            <label htmlFor={`addressRadio${index}`} className="font-semibold">
                                                                {d.userTitle}
                                                            </label>
                                                        </div>
                                                        <div className="text-gray-600">{d.userAddress}</div>
                                                        <div className="flex justify-between mt-2">
                                                            <Button className="text-blue-500">{d.editButtonLabel}</Button>
                                                            <Button className="text-red-500">{d.deleteButtonLabel}</Button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </Suspense>
                                        </div>
                                        <div className="relative mt-[-2px] h-px bg-gray-100" />
                                    </div>





                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[194px] self-stretch">
                        <Footer5 className="mt-[34px] h-[388px] bg-[url(/images/img_group_19979.png)] bg-cover bg-no-repeat md:h-auto" />
                    </div>
                </div>
            </div>
        </>
    );
}




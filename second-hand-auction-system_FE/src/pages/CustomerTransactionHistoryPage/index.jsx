import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading, SelectBox, Input } from "../../components";
import { CloseSVG } from "../../components/Input/close.jsx";
import NumberRow from "../../components/NumberRow";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import Header2 from "../../components/Header2";
import Footer5 from "../../components/Footer5";
import ProfileCard from "../../components/ProfileCard";
import AccountOptions from "../../components/AccountOption";
import Pagination from "../../components/Pagination";

const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

export default function CustomerTransactionHistoryPagePage() {
    const [searchBarValue8, setSearchBarValue8] = React.useState("");

    return (
        <>
            <Helmet>
                <title>Customer Transaction History - EZShop</title>
                <meta
                    name="description"
                    content="Review your EZShop transaction history, including money transfers, withdrawals, and deposits. Stay on top of your finances with a complete record of your activities."
                />
            </Helmet>
            <div className="flex w-full flex-col items-center gap-10 bg-bg-white">
                <Header2 />
                <div className="container-sm md:px-5">
                    <div className="mr-7 md:mr-0">
                        <Tabs
                            className="flex flex-col gap-[34px]"
                            selectedTabClassName="!text-gray-900"
                            selectedTabPanelClassName="!relative tab-panel--selected"
                        >

                            <div className="container-sm md:px-5">
                                <div className="flex md:flex-col">

                                    {/* bên trái */}
                                    <div className="mt-12 flex w-[24%] flex-col gap-[20px] md:w-full ml-[50px] -mt-[3px]">

                                        {/* User Name and Wallet amount */}
                                        <ProfileCard />
                                        <div className="h-[1.84px] bg-gray-200" />


                                        <div className="py-7">
                                            <AccountOptions />

                                        </div>
                                    </div>

                                    {/* Phần bên phải chiếm phần còn lại */}
                                    {/* Phần bên phải chiếm phần còn lại */}
                                    <div className="flex-1 flex flex-col items-start gap-6 md:self-stretch">
                                        <Heading
                                            size="heading2xl"
                                            as="h3"
                                            className="text-[15px] font-semibold uppercase text-blue_gray-900_01 md:text-[28px] sm:text-[26px]"
                                        >
                                            Chuyển tiền
                                        </Heading>
                                        {/*<TabList className="flex flex-wrap gap-16 self-stretch px-3 md:gap-5">*/}
                                        {/*    <Tab className="bg-yellow-300 text-[16px] font-medium text-blue_gray-900_01">*/}
                                        {/*        Lịch sử giao dịch*/}
                                        {/*    </Tab>*/}
                                        {/*    <Tab className="text-[16px] font-medium text-blue_gray-900_01">Rút tiền</Tab>*/}
                                        {/*    <Tab className="text-[16px] font-medium text-blue_gray-900_01">Nạp tiền</Tab>*/}
                                        {/*</TabList>*/}

                                        {/* table data */}

                                        {[...Array(3)].map((_, index) => (
                                            <TabPanel key={`tab-panel${index}`} className="absolute flex-1 md:self-stretch">
                                                <div className="w-full flex-1 md:self-stretch">
                                                    <div>
                                                        <div className="ml-[1px] flex flex-col gap-3 md:ml-0">
                                                            <div className="flex items-start rounded-md bg-gray-100_01 p-3.5 md:flex-col">
                                                                <div className="flex w-full justify-between md:w-full">
                                                                    {["ID", "Thời gian", "Loại giao dịch", "Phương thức", "Trạng thái", "Số tiền", "Thêm"].map((title, idx) => (
                                                                        <div key={idx} className="flex-1 text-center  min-w-[150px]">
                                                                            <Heading as="h6" className="text-[16px] font-medium text-blue_gray-900_01">
                                                                                {title}
                                                                            </Heading>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="relative z-[8] h-[1.39px] bg-gray-100" />
                                                                <div className="mx-5 flex md:mx-0 md:flex-col">
                                                                    <div className="flex w-full justify-between md:w-full">
                                                                        <div className="flex flex-col items-start py-[30px] sm:py-5 flex-1 text-center ml-[45px]">
                                                                            <Text as="p" className="mb-1.5 text-[15px] font-normal text-blue_gray-900_01">
                                                                                #1920
                                                                            </Text>
                                                                        </div>
                                                                        <div className="relative z-[4] flex-1 py-7 sm:py-5 text-center -ml-[25px]">
                                                                            <Text
                                                                                as="p"
                                                                                className="text-[15px] font-normal leading-[22px] text-blue_gray-900_01"
                                                                            >
                                                                                <span>12/9/2024<br />21:29</span>
                                                                            </Text>
                                                                        </div>
                                                                        <div className="flex flex-col items-start py-[30px] sm:py-5 flex-1 text-center ml-[70px]">
                                                                            <Text as="p" className="mb-1.5 text-[15px] font-normal text-blue_gray-900_01">
                                                                                Nạp tiền
                                                                            </Text>
                                                                        </div>
                                                                        <div className="flex flex-col items-start py-[30px] sm:py-5 flex-1 text-center">
                                                                            <Text as="p" className="mb-1.5 text-[15px] font-normal text-blue_gray-900_01">
                                                                                Tp Bank
                                                                            </Text>
                                                                        </div>
                                                                        {/* Thêm các cột khác tương tự */}
                                                                    </div>
                                                                    <div className="flex flex-1 md:self-stretch sm:flex-col">
                                                                        <div className="flex w-full px-[50px] py-8 md:px-5 sm:w-full sm:p-5">
                                                                            <Text as="p" className="text-[15px] font-normal text-blue_gray-900_01">
                                                                                Pay OS
                                                                            </Text>
                                                                        </div>
                                                                        <div className="flex w-full justify-center p-[22px] sm:w-full sm:p-5">
                                                                            <Button shape="round" className="mb-2 min-w-[96px] rounded-md px-2.5 font-medium">
                                                                                Hoàn thành
                                                                            </Button>
                                                                        </div>
                                                                        <div className="ml-5 flex w-full items-start justify-between gap-5 py-[26px] sm:ml-0 sm:w-full sm:py-5">
                                                                            <Text
                                                                                as="p"
                                                                                className="ml-4 flex font-bevietnampro text-[14px] font-semibold capitalize text-green-a700"
                                                                            >
                                                                                <span>+250.000</span>
                                                                                <a href="#" className="inline underline">đ</a>
                                                                            </Text>
                                                                            <Img
                                                                                src="images/img_user.svg"
                                                                                alt="Transaction User Image Row"
                                                                                className="h-[32px] self-center"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="h-[1.39px] bg-gray-100" />
                                                                <div className="mx-5 mt-5 flex items-center md:mx-0 md:flex-col">
                                                                    <div className="flex w-full items-start justify-center self-end md:w-full md:self-auto">
                                                                        <div className="flex flex-1 text-center  ml-[45px]">
                                                                            <Text as="p" className="text-[15px] font-normal text-blue_gray-900_01">
                                                                                #1918
                                                                            </Text>
                                                                        </div>
                                                                        <div className="relative z-[4] flex-1 py-7 sm:py-5 text-center -ml-[212px]"
                                                                            style={{ transform: 'translateY(-30px)' }}
                                                                        >
                                                                            <Text
                                                                                as="p"
                                                                                className="text-[15px] font-normal leading-[22px] text-blue_gray-900_01"
                                                                            >
                                                                                <span>12/9/2024<br />21:29</span>
                                                                            </Text>
                                                                        </div>
                                                                        <div className="flex flex-1 text-center">
                                                                            <Text as="p" className="text-[15px] font-normal text-blue_gray-900_01">
                                                                                Rút tiền
                                                                            </Text>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex flex-1 items-end md:self-stretch sm:flex-col">
                                                                        <div className="mb-1.5 flex w-full px-[50px] md:px-5 sm:w-full">
                                                                            <Text as="p" className="text-[15px] font-normal text-blue_gray-900_01">
                                                                                Pay OS
                                                                            </Text>
                                                                        </div>
                                                                        <div className="w-full self-center px-[26px] sm:w-full sm:px-5">
                                                                            <Button shape="round" className="w-full rounded-md px-2.5 font-medium">
                                                                                Hoàn thành
                                                                            </Button>
                                                                        </div>
                                                                        <div className="ml-5 flex w-full items-start justify-between gap-5 sm:ml-0 sm:w-full">
                                                                            <Text
                                                                                as="p"
                                                                                className="ml-4 flex font-bevietnampro text-[14px] font-semibold capitalize text-red-a700"
                                                                            >
                                                                                <span>-250.000</span>
                                                                                <a href="#" className="inline underline">đ</a>
                                                                            </Text>
                                                                            <Img
                                                                                src="images/img_user.svg"
                                                                                alt="Transaction User Image Row"
                                                                                className="h-[32px] self-center"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        ))}
                                        <Pagination className="ml-[290px]" />



                                    </div>




                                    {/* <NumberRow className="mx-[294px]" /> */}
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>
                <div className="mt-[194px] self-stretch">
                    <Footer5 className="mt-[34px] h-[388px] bg-[url(/images/img_group_19979.png)] bg-cover bg-no-repeat md:h-auto" />
                </div>
            </div>
        </>
    );
}

















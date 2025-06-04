import { ArrowRightOutlined, MenuOutlined } from "@ant-design/icons";
import { Drawer, type DrawerProps, type RadioChangeEvent } from "antd";
import { useState } from "react";

export default function Navi() {
    const ls = ["Home", "Features", "Community", "Blog", "Pricing"]
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(!open);
    };

    const onClose = () => {
        setOpen(false);
    };


    return (

        <div className="relative max-w-7xl mx-auto bg-white z-999999 sticky top-0 px-10">
            <div className="flex  justify-between bg-white w-full py-3 items-center z-999999 sticky top-0">
                <div className="flex  items-center space-x-3">
                    <img src="/main.png" alt="icon" />
                    <span className="text-[26px] ">
                        Nexcent
                    </span>
                </div>
                <div className="hidden md:flex space-x-5 text-text items-center text-[18px] font-mono font-[300]">
                    {
                        ls.map((v) => {
                            return <span key={v}>{v}</span>
                        })
                    }
                    <button className="flex duration-500 border-0 hover:shadow-hover-buttom bg-[#4CAF4F] text-[14px] text-white px-5.5 py-2 rounded-sm  space-x-2">
                        <p>
                            Register Now
                        </p>
                        <ArrowRightOutlined style={{ fontSize: '13px', }} />
                    </button>
                </div>
                <div className="block md:hidden " onClick={() => {
                    showDrawer()
                }}>
                    <i className="ri-menu-line p-2 text-white bg-[#4CAF4F]"></i>
                </div>
            </div>

            <Drawer
                placement={"top"}
                closable={false}
                onClose={onClose}
                open={open}
                height={""}
            >
                <ul className=" flex flex-col w-full h-max">
                  
                    <div className="h-[26px] "></div>
                    {
                        ls.map((v) => {
                            return <div className="text-center p-2.5" key={v}>{v}</div>
                        })
                    }
                    <div className="flex justify-center p-2.5">
                        <button className="flex duration-500  border-0 hover:shadow-hover-buttom bg-[#4CAF4F] text-[14px] text-white px-5.5 py-2 rounded-sm  space-x-2">

                            <p>
                                Register Now
                            </p>
                            <ArrowRightOutlined style={{ fontSize: '13px', }} />

                        </button>
                    </div>
                </ul>
            </Drawer>
        </div>
    )
}
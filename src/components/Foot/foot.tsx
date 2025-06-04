export default function Foot() {
    return (
        <>
            <div className="bg-[#263238] py-10 px-25 text-white">
                <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 grid flex flex-col">
                    <div className="col-span-1 flex flex-col space-y-8">
                        <div className="flex  items-center  space-x-3">
                            <img src="/public/icon.png" alt="icon" />
                            <span className="text-[26px] ">
                                Nexcent
                            </span>
                        </div>
                        <div className=" text-[13px] text-[#F5F7FA]">
                            Copyright © 2025 Landify Ui Kit.
                            All rights reserved
                        </div>
                        <div className="flex space-x-5 justify-center">
                            <i className="ri-instagram-line rounded-[50%] px-1 py-0.5 bg-[#4A5155]"></i>
                            <i className="ri-twitter-x-fill rounded-[50%] px-1 py-0.5 bg-[#4A5155]"></i>
                            <i className="ri-youtube-line rounded-[50%] px-1 py-0.5 bg-[#4A5155]"></i>
                            <i className="ri-github-line rounded-[50%] px-1 py-0.5 bg-[#4A5155]"></i>
                        </div>
                    </div>
                    <div className="hidden lg:block col-span-2">

                    </div>
                    <div className="col-span-1 flex mt-4 gap-4 justify-center">
                        <div className="flex flex-col gap-2.5">
                            <div className="text-lg font-bold">Company</div>
                            <ul className="flex flex-col gap-1.5">
                                {
                                    ["About Us",
                                        "Blog",
                                        "Contact Us",
                                        "Pricing",
                                        "Testimonials",
                                    ]
                                        .map((v) => {
                                            return <li className="list-none text-[11px] font-light" key={v}>
                                                {v}
                                            </li>
                                        })
                                }
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <div className="text-lg font-bold gap-2.5">Support</div>
                            <ul className="flex flex-col gap-1.5">
                                {
                                    ["Help Center",
                                        "Terms of Service",
                                        "Legal",
                                        "Privacy Policy",
                                        "Status"]
                                        .map((v) => {
                                            return <li className="list-none text-[11px] font-light" key={v}>
                                                {v}
                                            </li>
                                        })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-1 flex items-center justify-center mt-4 gap-2.5 flex-col">
                        <div className="font-bold text-[18px] w-max">Stay up to date
                        </div>

                        <div className="flex bg-[#4A5155] w-min items-center rounded-2xl py-2 px-2.5">
                            <input type="text" placeholder="your email address" className="text-[13px] text-[#ABBED1] focus:outline-none flex-1" />
                            <i className="ri-send-plane-line"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-10 flex items-center  bg-[#263238] text-white text-[12px] border-white border-t-2">
                <p className="text-center w-full font-bold"> Made With ♥ by
                    <a href="https://github.com/devxsameer" className="text-[#4CAF4F] pl-1 underline">@devxsameer</a>
                    |Used <a className="text-[#4CAF4F] px-1 underline" href="https://www.figma.com/community/file/1222060007934600841/minimal-landing-page-design-website-home-page-design-agency-website-ui-design">this</a>
                    Figma Design by Muntasir Billah</p>
            </div>
        </>
    )
}
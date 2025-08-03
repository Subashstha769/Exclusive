function Footer() {
    return (
        <footer className="  bg-black text-white py-1 flex flex-col gap-3  lg:justify-center lg:items-center lg:pt-10 lg:pb-3  lg:gap-10 ">
            <div className="grid gap-4 md:grid-cols-2 ml-2 lg:ml-0 lg:flex lg:justify-between lg:items-start lg:gap-20">
                <section className=" flex flex-col justify-center items-start gap-2">
                    <div className="flex flex-col gap-2">
                        <section className="flex flex-col gap-1">
                            <h2 className="font-semibold lg:text-[20px]">Exclusive</h2>
                            <p className=" font-medium text-[16px]">Subscribe</p>
                        </section>

                        <p className="text-[12px] font-light ">Get 10% off your first order</p>

                    </div>

                    <form className="border-[1px] rounded-[2px] p-1 flex items-center justify-center gap-1">
                        <input type="text" className="w-[120px] outline-none bg-transparent text-[12px] placeholder:text-sm" placeholder="Enter your email" />
                        <i class="fa-regular fa-paper-plane hover:cursor-pointer" title="send"></i>
                    </form>
                </section>

                <section className=" flex flex-col justify-center items-start gap-3 ">
                    <h2 className="text-[16px] font-medium">Support</h2>
                    <div className="flex flex-col flex-wrap gap-2">
                        <p className="text-[12px] font-light lg:text-[13px]">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p className="text-[12px] font-light lg:text-[13px]">exclusive@gmail.com</p>
                        <p className="text-[12px] font-light lg:text-[13px]">+88015-88888-9999</p>

                    </div>
                </section>

                <section className=" flex flex-col justify-center items-start gap-3 md:col-span-2 ">
                    <h2 className="font-medium text-[16px]">Account</h2>
                    <div className="flex flex-col flex-wrap gap-2 ">
                        <p className="text-[12px] font-light lg:text-[13px">My Account</p>
                        <p className="text-[12px] font-light lg:text-[13px">Login / Regiser</p>
                        <p className="text-[12px] font-light lg:text-[13px">Cart</p>
                        <p className="text-[12px] font-light lg:text-[13px">Wishlist</p>
                        <p className="text-[12px] font-light lg:text-[13px">Shop</p>

                    </div>
                </section>

                <section className=" flex flex-col justify-center items-start gap-3 ">
                    <h2 className="font-medium text-[16px]">Quick Link</h2>
                    <div className="flex flex-col flex-wrap gap-2">
                        <p className="text-[12px] font-light lg:text-[13px">Privacy Policy</p>
                        <p className="text-[12px] font-light lg:text-[13px">Terms of Use</p>
                        <p className="text-[12px] font-light lg:text-[13px">FAQ</p>
                        <p className="text-[12px] font-light lg:text-[13px">Contact</p>


                    </div>
                </section>

                <section className=" flex flex-col justify-center items-start gap-3 ">
                    <div className="flex flex-col gap-3">
                        <h2 className=" font-medium text-[16px]">Download App</h2>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <p className="text-[12px] font-normal text-gray-400">Save $3 with App New User Only</p>
                            <div className="flex justify-center items-center gap-2">
                                <img src="./src/assets/Qrcode.png" className="hover:cursor-pointer" alt="QR Code" />
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <img src="./src/assets/googleplay.png" className="hover:cursor-pointer" alt="Google Play" />
                                    <img src="./src/assets/appstore.png" className="hover:cursor-pointer" alt="App Store" />
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="flex items-center justify-center gap-2 ">
                        <i class="fa-brands fa-facebook-f hover:text-blue-600 hover:cursor-pointer" title="Facebook"></i>
                        <i class="fa-brands fa-twitter  hover:text-blue-400 hover:cursor-pointer" title="Twitter"></i>
                        <i class="fa-brands fa-instagram  hover:text-pink-600 hover:cursor-pointer" title="Instagram"></i>
                        <i class="fa-brands fa-linkedin-in  hover:text-blue-600 hover:cursor-pointer " title="LinkedIn"></i>

                    </div>
                </section>
            </div>

            <div className="w-full text-center">
                <p className="text-gray-600 text-[14px] lg:text-lg ">&copy; Copyright Rimel {new Date().getFullYear()}. All right reserved</p>
            </div>
        </footer>
    );
}
export default Footer;
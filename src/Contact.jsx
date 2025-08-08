function Contact() {
    return (
        <div className="grid grid-cols-[1fr_3fr] gap-1 p-2">
            <section className="shadow-lg flex justify-center items-center p-2">
                <div className=" p-3">
                    <div className="flex flex-col justify-center items-start gap-5">
                        <div className="flex justify-center items-center gap-1">
                            <i class="fa-solid fa-phone text-xl bg-orange-500 rounded-[50%] w-[40px] h-[40px] flex items-center justify-center"></i>
                            <h2>Call To Use</h2>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-1">
                            <p className="text-[12px] font-light lg:text-[13px]">We are available 24/7, 7 days a week.</p>
                            <p className="text-[12px] font-light lg:text-[13px]">Phone: +8801611112222</p>
                        </div>
                    </div>
                    <hr className="my-4"/>
                    <div className="flex flex-col justify-center items-start gap-5">
                         <div className="flex justify-center items-center gap-1">
                            
                            <i class="fa-solid fa-envelope text-xl bg-orange-500 rounded-[50%] w-[40px] h-[40px] flex items-center justify-center"></i>
                            <h2>Write To Us</h2>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-1">
                            <p className="text-[12px] font-light lg:text-[13px]">Fill out our form and we will contact you within 24 hours.</p>
                            <p className="text-[12px] font-light lg:text-[13px]">Emails: customer@exclusive.com</p>
                            <p className="text-[12px] font-light lg:text-[13px]">Emails: support@exclusive.com</p>
                        </div>
                    </div>
                </div>


            </section>

            <form className=" p-8 shadow-lg flex flex-col justify-start items-start gap-4">
                <div className=" w-full flex justify-between items-center gap-4 ">
                    <input type="text" placeholder="Your Name *" className="outline-none bg-gray-100 w-[300px] h-[40px] pl-2 text-[16px] placeholder:text-[16px]"/>
                    <input type="text" placeholder="Your Email *" className="outline-none bg-gray-100 w-[300px] h-[40px] pl-2 text-[16px] placeholder:text-[16px]" />
                    <input type="tel" placeholder="Your Phone *" className="outline-none bg-gray-100 w-[300px] h-[40px] pl-2 text-[16px] placeholder:text-[16px]"/>
                </div>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message *" className="outline-none bg-gray-100 w-full h-[200px] pl-2 text-[16px] placeholder:text-[16px]"></textarea>   
                <button className="bg-orange-500 text-white px-4 py-2 rounded-[5px] hover:bg-orange-600 transition duration-300">Send Message</button>
            </form>

        </div>
    );
}
export default Contact;
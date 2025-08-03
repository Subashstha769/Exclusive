function Home()
{

    const sideBar = [
        {id:1, name:"Woman's Fashion"},
        {id:2, name:"Men's Fashion"},
        {id:3, name:"Electronics"},
        {id:4, name:"Home & Lifestyle"},
        {id:5, name:"Medicine"},
        {id:6, name:"Sports & Outdoors"},
        {id:7, name:"Baby's & Toys"},
        {id:8, name:"Groceries & Pets"},
        {id:9, name:"Health & Beauty"},
    ];

    return(
        <div className="p-1 grid   lg:grid-cols-[1fr_3fr]  gap-1 ">
            <section className="lg:border-r-2 lg:border-gray-200">
                <ul className="w-full h-full p-1 lg:p-0 grid grid-cols-3 grid-rows-3 gap-1  md:grid-cols-5 md:grid-rows-2 lg:grid-cols-1 lg:grid-rows-9 lg:gap-0">
                    {
                        sideBar.map(item => <li key={item.id} className="bg-gray-100 rounded-[4px] p-2 text-[8px]  flex justify-center items-center font-light hover:bg-gray-200 hover:cursor-pointer sm:text-sm lg:block  lg:bg-white lg:w-full  lg:pl-2 lg:text-[17px] ">{item.name}</li>)
                    }
                </ul>
            </section>

            <section  className=" flex justify-center items-end"> 
                <div className="p-1 grid grid-cols-2  place-content-center bg-black text-white">
                    <div className=" flex flex-col justify-start items-start gap-[3px] xl:gap-[30px] lg:pl-[10px] lg:pt-[20px]">
                        <div className="flex justify-between items-center gap-2 sm:gap-7">
                            <img className="w-[22px] sm:w-auto" src="./src/assets/applelogo.png" alt="apple logo" />
                            <p className="text-[12px] sm:text-[16px]">iPhone 14 Series</p>
                        </div>

                        <h1 className="text-[22px] sm:text-[40px] md:text-[50px] font-bold lg:text-[60px]">Up to 10% off Voucher</h1>
                        
                        <a href="" className="underline text-sm lg:text-lg xl:text-xl">Shop Now</a>
                    </div>
                    <img className="" src="./src/assets/iphone.png"  alt="Iphone" />
                </div>
            </section>
        </div>
    );

}
export default Home;
import { OUR_MENU } from "../../constants/menu";
import { OUR_VALUES } from "../../constants/value";

export default function Home() {
  return (
    <main className="container mx-auto">
      <section className="headerBanner bg-cover bg-no-repeat px-0 md:px-6 grid content-center">
        <div className="flex justify-between items-center text-center">
          <div>
            <svg
              className="w-[25px]"
              viewBox="0 0 30 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 50L0 25L25 0L29.4375 4.4375L8.875 25L29.4375 45.5625L25 50Z"
                fill="#E2E2E2"
              />
            </svg>
          </div>
          <div className="text-white md:space-y-3">
            <h2 className=" font-bold text-2xl md:text-6xl">
              Welcome to Hitabel Restaurant
            </h2>
            <p className=" font-medium text-lg md:text-4xl">
              Mouthwatering Dishes
            </p>
            <button className="rounded-full bg-[#BF0000] px-6 py-2 text-sm md:text-md">
              Order Now
            </button>
          </div>
          <div>
            <svg
              className="w-[25px]"
              viewBox="0 0 30 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 50L30 25L5 0L0.562499 4.4375L21.125 25L0.562499 45.5625L5 50Z"
                fill="#E2E2E2"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className=" cointainer px-4 py-6 space-y-3">
        <h2 className="text-[#F40000] text-2xl font-medium">Our Values</h2>
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4">
          {OUR_VALUES.map((value) => (
            <div
              key={value.id}
              className=" bg-[#E2E2E2] w-72 p-6 flex flex-col items-center space-y-3 rounded-2xl"
            >
              <div>
                <img className="w-[60px]" src={value.logo} alt="logo" />
              </div>
              <div className="text-center space-y-3">
                <h2 className="text-lg">{value.title}</h2>
                <p className="text-sm p-4 lg:p-0">{value.message}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bodyBanner bg-cover bg-no-repeat text-white grid content-center">
        <div className="grid lg:grid-cols-2 items-center">
          <div></div>
          <div className=" px-6 md:px-16 lg:pr-16 space-y-5">
            <div className="space-y-5">
              <h3 className="text-[#FF2812]">We Offer</h3>
              <h1 className="text-xl md:text-2xl font-medium">
                WONDERFUL DISHES
              </h1>
            </div>
            <div>
              <img src="/redBar.svg" alt="" />
            </div>
            <div className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamc.
            </div>
            <button className="rounded-full bg-[#BF0000] px-6 py-2 text-sm md:text-md">
              Order Now
            </button>
          </div>
        </div>
      </section>

      <section className=" cointainer px-4 py-6">
        <h2 className="text-[#F40000] text-2xl font-medium">Our Menu</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {OUR_MENU.map((value) => (
              <div className="p-6 bg-[#FF704C] rounded-2xl" key={value.id}>
                <div className="grid md:grid-cols-2 grid-cols-1 place-items-center text-center md:text-left max-w-lg md:text-sm lg:text-lg space-y-3">
                  <div>
                    <img
                      className="w-[200px] bg-contain bg-no-repeat"
                      src={value.image}
                      alt=""
                    />
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-xl lg:text-2xl">{value.title}</h2>
                    <p className="">
                      {value.a} <br />
                      {value.b} <br />
                      {value.c} <br />
                      {value.d} <br />
                      {value.e} <br />
                    </p>
                    <h3>{value.amount}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="rounded-full bg-[#BF0000] px-6 py-2 text-sm md:text-md text-white w-[200px]">
              See More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

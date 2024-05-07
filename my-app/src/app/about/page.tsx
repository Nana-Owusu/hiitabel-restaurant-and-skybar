import { OUR_TEAM } from "../../../constants/team";
import { TESTIMONIAL } from "../../../constants/testimonial";

export default function About() {
  return (
    <main className="container mx-auto space-y-14">
      <section className="aboutBanner bg-cover bg-no-repeat px-0 md:px-6 grid content-center text-center">
        <div>
          <div className="text-white">
            <h2 className=" font-bold text-5xl md:text-6xl">About Us</h2>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-8">
        <div className="grid md:grid-cols-2  gap-x-6 space-y-9 md:space-y-0">
          <div>
            <img className="w-full" src="/about-us/discoverMore.svg" alt="" />
          </div>
          <div className="grid content-center space-y-2 lg:space-y-5">
            <h3 className="text-[#FF2812] md:text-sm lg:text-xl font-medium text-center md:text-left">
              History
            </h3>
            <h2 className="text-center md:text-left md:text-2xl lg:text-3xl">
              DISCOVER MORE <br />
              ABOUT US
            </h2>
            <p className=" md:pr-10 md:text-justify text-xs lg:text-sm text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamc. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, <b />
              <b />
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamc.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>
      </section>

      <section className="container px-4">
        <h2 className="text-[#F40000] text-2xl font-medium">Our Team</h2>

        <div className="flex flex-col md:flex-row justify-between ">
          {OUR_TEAM.map((team) => (
            <div key={team.id} className="">
              <div>
                <img className="w-full" src={team.image} alt="" />
              </div>
              <div className="text-center">
                <h2 className="text-[#F40000] text:xl lg:text-2xl font-medium">
                  {team.name}
                </h2>
                <p className=" text-sm lg:text-xl font-medium">
                  {team.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="">
        <h2 className="text-[#F40000] text-2xl font-medium mx-4">
          Testimonials
        </h2>
        <div className=" grid content-center aboutTestimo bg-cover bg-no-repeat space-y-4 px-10">
          <div className="grid md:grid-cols-2 gap-6 py-10 md:py-0">
            {TESTIMONIAL.map((props) => (
              <div className=" p-6 lg:p-10 bg-white rounded-2xl">
                <div key={props.id} className="space-y-6">
                  <div className="flex space-x-4">
                    <div>
                      <img
                        className="w-[100px] rounded-full bg-contain bg-no-repeat"
                        src={props.image}
                        alt=""
                      />
                    </div>
                    <div className="grid content-center">
                      <h2 className="text-2xl">{props.name}</h2>
                      <p className="text-[#6375FF] text-sm">{props.position}</p>
                    </div>
                  </div>
                  <div className=" pr-2 lg:pr-10 text-lg">
                    <p>{props.describtion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

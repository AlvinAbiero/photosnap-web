import Image from "next/image";
import Reveal from "./ui/Reveal";
import Cta from "./Cta";
import createImgDesktop from "../../public/home/desktop/create-and-share.jpg";
import createImgTablet from "../../public/home/tablet/create-and-share.jpg";
import createImgMobile from "../../public/home/mobile/create-and-share.jpg";
import beautifulImgDesktop from "../../public/home/desktop/beautiful-stories.jpg";
import beautifulImgTablet from "../../public/home/tablet/beautiful-stories.jpg";
import beautifulImgMobile from "../../public/home/mobile/beautiful-stories.jpg";
import designedImgDesktop from "../../public/home/desktop/designed-for-everyone.jpg";
import designedImgTablet from "../../public/home/tablet/designed-for-everyone.jpg";
import designedImgMobile from "../../public/home/mobile/designed-for-everyone.jpg";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="relative bg-black grid xl:grid-cols-[2fr_3fr] lg:grid-cols-[3fr_4fr] md:grid-cols-[2fr_1fr] grid-cols-1 w-full ">
        <div className="text-white text-left py-16 md:py-16 lg:py-16 flex flex-col  justify-center items-start gap-12 pl-16 md:pl-24 pr-8 lg:pr-16">
          <Reveal>
            <h1 className="text-3xl md:text-5xl uppercase font-bold tracking-wider leading-16 w-3/5 md:w-2/3 lg:w-4/5">
              Create and share your photo stories.
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-gray-400 text-xl md:text-2xl w-full md:w-4/5 lg:w-full leading-10 font-medium">
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
          </Reveal>
          <Reveal>
            <Cta color="white" text="get an invite" to="#" />
          </Reveal>
        </div>
        <div className="row-start-1 col-start-1 md:col-start-2 col-end-3 md:col-end-2 lg:col-end-3 xl:col-end-2">
          <Image
            src={createImgDesktop}
            alt="create and share image"
            className="hidden lg:block"
          />
          <Image
            src={createImgTablet}
            alt="create and share image"
            className="hidden md:block lg:hidden w-full h-auto"
          />
          <Image
            src={createImgMobile}
            alt="create and share image"
            className="lg:hidden md:hidden block w-full"
          />
        </div>
        <div className="bg-lin-grad md:w-2 md:h-36 w-56 h-2 absolute top-[40%] left-4 md:left-0 md:top-[50%]"></div>
      </div>
      <div className="relative bg-white text-black grid xl:grid-cols-[3fr_2fr] lg:grid-cols-[3fr_2fr] md:grid-cols-[1fr_2fr] grid-cols-1 w-full ">
        <div className="row-start-1 col-start-1 md:col-start-1 col-end-3 md:col-end-2 lg:col-end-3 xl:col-end-2">
          <Image
            src={beautifulImgDesktop}
            alt="beautiful stories image"
            className="hidden lg:block"
          />
          <Image
            src={beautifulImgTablet}
            alt="beautiful stories image"
            className="hidden md:block lg:hidden w-full h-auto"
          />
          <Image
            src={beautifulImgMobile}
            alt="beautiful stories image"
            className="lg:hidden md:hidden block w-full"
          />
        </div>
        <div className="text-black text-left py-16 md:py-16 lg:py-16 flex flex-col  justify-center items-start gap-12 pl-16 md:pl-24 pr-8 lg:pr-16">
          <Reveal>
            <h1 className="text-3xl md:text-5xl uppercase font-bold tracking-wider leading-16 w-3/5 md:w-2/3 lg:w-4/5">
              Beautiful stories every time
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-gray-400 text-xl md:text-2xl font-medium w-full md:w-4/5 lg:w-full leading-10">
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </p>
          </Reveal>
          <Reveal>
            <Cta color="black" text="view the stories" to="#" />
          </Reveal>
        </div>
      </div>
      <div className="relative bg-white text-black grid xl:grid-cols-[2fr_3fr] lg:grid-cols-[2fr_3fr] md:grid-cols-[2fr_1fr] grid-cols-1 w-full ">
        <div className="text-black text-left py-16 md:py-16 lg:py-16 flex flex-col  justify-center items-start gap-12 pl-16 md:pl-24 pr-8 lg:pr-16">
          <Reveal>
            <h1 className="text-3xl md:text-5xl uppercase font-bold tracking-wider leading-16 w-3/5 md:w-2/3 lg:w-4/5">
              Designed for everyone
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-gray-400 text-xl md:text-2xl font-medium w-full md:w-4/5 lg:w-full leading-10">
              Photosnap can help you create stories that resonate with your
              audience. Our tool is designed for photographers of all levels,
              brands, businesses you name it.
            </p>
          </Reveal>
          <Reveal>
            <Cta color="black" text="view the stories" to="#" />
          </Reveal>
        </div>
        <div className="row-start-1 col-start-1 md:col-start-2 col-end-3 md:col-end-2 lg:col-end-3 xl:col-end-2">
          <Image
            src={designedImgDesktop}
            alt="designed for everyone image"
            className="hidden lg:block"
          />
          <Image
            src={designedImgTablet}
            alt="designed for everyone image"
            className="hidden md:block lg:hidden w-full h-auto"
          />
          <Image
            src={designedImgMobile}
            alt="designed for everyone image"
            className="lg:hidden md:hidden block w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

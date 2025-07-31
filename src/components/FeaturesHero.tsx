import Image from "next/image";
import Reveal from "./ui/Reveal";
import Cta from "./Cta";
import heroImgDesktop from "../../public/features/desktop/hero.jpg";
import heroImgTablet from "../../public/features/tablet/hero.jpg";
import heroImgMobile from "../../public/features/mobile/hero.jpg";

const FeaturesHero = () => {
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
        <div className="row-start-1 col-start-1 md:col-start-2 col-end-3 md:col-end-2 lg:col-end-3 xl:col-end-3">
          <Image
            src={heroImgDesktop}
            alt="create and share image"
            className="hidden lg:block w-full h-full"
            priority
          />
          <Image
            src={heroImgTablet}
            alt="create and share image"
            className="hidden md:block lg:hidden w-full h-auto"
          />
          <Image
            src={heroImgMobile}
            alt="create and share image"
            className="lg:hidden md:hidden block w-full"
          />
        </div>
        <div className="bg-lin-grad md:w-2 md:h-36 w-56 h-2 absolute top-[40%] left-4 md:left-0 md:top-[50%]"></div>
      </div>
    </section>
  );
};

export default FeaturesHero;

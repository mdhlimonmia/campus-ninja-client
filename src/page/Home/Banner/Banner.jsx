import banner1 from "../../../assets/banner/1.jpg";
import banner2 from "../../../assets/banner/2.jpg";
import banner3 from "../../../assets/banner/3.jpg";
import banner4 from "../../../assets/banner/4.jpg";
import banner5 from "../../../assets/banner/5.jpg";

const Banner = () => {
    const bannerText = (
        <>
          <div className="bg-gradient-to-r flex items-center  from-indigo-500 absolute w-full top-0 bottom-0 text ">
            <div className="space-y-7 pl-12 w-1/2  text-white">
              <h1 className="text-4xl font-bold uppercase">
              Welcome to Campus Ninja
              </h1>
              <p className="text-lg">
              Discover Your Academic Odyssey. {" "}
                <br /> Unlock Your College Adventure: Explore, Book, Succeed! Join CampusNinja Today!!!
              </p>
              <button className="btn btn-info mr-10">Info</button>
              <button className="btn btn-outline btn-secondary">Button</button>        </div>
          </div>
        </>
      );
      return (
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full h-[550px]">
            <img src={banner1} className="w-full" />
            {bannerText}
            <div className="absolute flex justify-center gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full h-[550px]">
            <img src={banner2} className="w-full" />
            {bannerText}
            <div className="absolute flex justify-center gap-4 transform -translate-y-1/2 left-5 right-5 bottom-5">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full h-[550px]">
            <img src={banner3} className="w-full" />
            {bannerText}
            <div className="absolute flex justify-center gap-4 transform -translate-y-1/2 left-5 right-5 bottom-5">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full h-[550px]">
            <img src={banner4} className="w-full" />
            {bannerText}
            <div className="absolute flex justify-center gap-4 transform -translate-y-1/2 left-5 right-5 bottom-5">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full h-[550px]">
            <img src={banner5} className="w-full" />
            {bannerText}
            <div className="absolute flex justify-center gap-4 transform -translate-y-1/2 left-5 right-5 bottom-5">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      );
};

export default Banner;

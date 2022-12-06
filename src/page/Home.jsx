import text from "../asset/text.png";
import logo from "../asset/logo.png";
import teaching from "../asset/teaching.jpg";
import { motion } from 'framer-motion'
// import study from "../asset/study.jpg";
import highlight1 from "../asset/logos/Highlight1.svg";
import highlight2 from "../asset/logos/Highlight2.svg";
import underline3 from "../asset/logos/Underline3.svg";

const Home = () => {

  return (
    <div className="font-montserrat">
      <div>
        <div className="fixed flex justify-between p-4 md:py-5 lg:px-5 md:px-12 bg-transparent w-full z-10">
          <div className="">
            <img src={logo} alt="" className="w-20" />
          </div>
          <div class="hidden md:block pt-7">
            <button className="mr-6 text-white">Login</button>
            <button className="py-2 px-4 text-white bg-orange-600 rounded-3xl">
              Signup
            </button>
          </div>
        </div>
        <section className="pt-32 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-gradient-to-tl from-cyan-500 to-blue-500">
          <div className="md:flex-1 md:mr-10">
            <h1 className="text-white text-5xl font-bold mb-7">
              Welcome To
              <p className="pb-2">Bimbelz</p>
            </h1>
            <p className="text-white font-normal mb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              harum tempore consectetur voluptas, cumque nobis laboriosam
              voluptatem.
            </p>
            <button className="transition ease-in-out delay-150 bg-orange-600 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-300 px-6 py-4 rounded-lg text-white font-semibold mr-2 mb-2">
              Belajar Sekarang
            </button>
          </div>
          <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
            <div className="relative">
              <img
                src={highlight1}
                alt=""
                className="absolute -top-16 -left-14"
              />
            </div>
            <img src={text} alt="" className="h-60" />
            <div className="relative">
              <img
                src={highlight2}
                alt=""
                className="absolute -bottom-10 -right-11"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="bg-gray-300">
            <div className="pt-20">
              <h1 className="text-center text-4xl font-semibold">What we Learn in Bimbelz</h1>
              <div className="flex justify-center">
                <img src={underline3} alt="" className="p-5" />
              </div>
            </div>
            <div className="grid grid-cols-4">
              <div className="col-span-2 row-span-2 place-self-center p-20">
                <img src={teaching} alt="" className="rounded-xl shadow-2xl" />
              </div>
              <div className="col-start-3 p-20 pl-10 font-bold">
                <li>mathematics</li>
                <li>geology</li>
                <li>sicence</li>
                <li>english</li>
                <li>software</li>
                <li>hardware</li>
              </div>
              <div className="col-start-4 p-20 pl-0 font-bold">
              <li>mathematics</li>
                <li>geology</li>
                <li>sicence</li>
                <li>english</li>
                <li>software</li>
                <li>hardware</li>
              </div>
              <div className="col-start-3 col-span-2 p-20 pt-0 pl-10">
                <h1 className="font-bold text-2xl">
                  What is BIMBELZ
                </h1>
                <h2 className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum error, pariatur minus officiis, sunt obcaecati quas tempore sequi eos nemo cumque quasi accusamus veritatis molestias, eum modi quod labore? Quidem.
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

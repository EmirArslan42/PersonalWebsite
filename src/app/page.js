"use client";
import { motion } from "framer-motion";

// import { GetMetadata } from "../../components/GetMetadata";

// export const metadata = GetMetadata(
//   "My Portfolio",
//   "Welcome to my personal portfolio website"
// );
export default function Home() {
  return (
      <div>
        <motion.img whileHover={{y:-10,rotate:90,transition:{duration:0.4}}} drag dragConstraints={{top:3,left:3,right:3,bottom:3}} src="/images/ball-1.svg" alt="ball-1" className="hidden md:block h-auto absolute top-48 right-10 z-[1] hover:cursor-pointer"/>
        <motion.img whileHover={{y:-10,rotate:90,transition:{duration:0.4}}} drag dragConstraints={{top:3,left:3,right:3,bottom:3}} src="/images/ball-2.svg" alt="ball-2" className="hidden md:block h-auto absolute bottom-48 left-10 z-[1] cursor-pointer"/>
        <div className="w-full h-full">
          <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
            <div className="flex flex-col items-center justify-center md:items-start">
              <h4 className="text-lg text-gray-800 dark:text-white"> 
                <span className="text-xl font-normal">Hello,</span> I'm 
              </h4>
              <h1 className="mt-5 text-xl font-extrabold tracking-normal !text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white ">Emir Arslan</h1>
            </div>
          </section>
        </div>
      </div>
  );
}
 
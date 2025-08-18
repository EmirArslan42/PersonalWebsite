"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import GithubIcon from "../../components/Icons/Github";
import LinkedInIcon from "../../components/Icons/LinkedIn";
import TwitterIcon from "../../components/Icons/X";
import "./globals.css";
import Link from "next/link";

// import { GetMetadata } from "../../components/GetMetadata";

// export const metadata = GetMetadata(
//   "My Portfolio",
//   "Welcome to my personal portfolio website"
// );S
export default function Home() {
  const TypeAnimationComponent = () => {
    return (
      <TypeAnimation
        sequence={[
          "React Developer", // Types 'One'
          2000, // Waits 1s
          "Frontend Developer", // Deletes 'One' and types 'Two'
          2000, // Waits 2s
          "Full Stack Developer", // Types 'Three' without deleting 'Two'
          2000,
          () => {
            console.log("Sequence completed");
          },
        ]}
        wrapper="span"
        speed={8}
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "2em", display: "inline-block" }}
      />
    );
  };
  return (
    <div>
      <motion.img
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 3, left: 3, right: 3, bottom: 3 }}
        src="/images/ball-1.svg"
        alt="ball-1"
        className="hidden md:block h-auto absolute top-48 right-10 z-[1] hover:cursor-pointer"
      />
      <motion.img
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 3, left: 3, right: 3, bottom: 3 }}
        src="/images/ball-2.svg"
        alt="ball-2"
        className="hidden md:block h-auto absolute bottom-48 left-10 z-[1] cursor-pointer"
      />
      <div className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg">
              <span className="text-xl font-normal">Hello,</span> I'm
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal  uppercase md:text-4xl md:mt-3  ">
              Emir Arslan
            </h1>
            <div className="mt-5 md:text-2xl  font-normal text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3">
              <TypeAnimationComponent />
            </div>
            {/* Social Accounts */}
            <div className="flex items-center mt-8 space-x-6 md:mt-4 ">
              <motion.a
                href="https://github.com/emirarslan42"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <GithubIcon className="icon w-8 h-8 fill-current text-gray-800 transition-colors duration-300 hover:text-pinkish-200" />
              </motion.a>

              <motion.a
                href="https://x.com/emirarslan179"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <TwitterIcon className="icon w-8 h-8 fill-current text-gray-800 transition-colors duration-300 hover:text-pinkish-200" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/emir-arslan-3ba893264/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <LinkedInIcon className="icon w-8 h-8 fill-current text-gray-800 transition-colors duration-300 hover:text-pinkish-200" />
              </motion.a>
            </div>
          </div>

          {/* Code Area */}
          <article className="mt-5 md:mt-7 prose md:prose-lg dark:prose-invert text-white">
            <pre className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg overflow-x-auto">
              <code className="language-js">
                {`// Portfolio.js`}
{`

`}

<span>// <span className="text-blue-400">Todo:</span> You can drag these balloons I'm really in love with them 🎈🎈</span>

              </code>
              <div className="flex items-center space-x-4 my-7">
                <img
                  src="/images/this_is_me.jpg"
                  alt="Me"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <p className="text-sm ">
                    {">"} const techWeb2 = ["Reactjs", "Nextjs", "Graphql",
                    "Nodejs"];
                  </p>
                  <br />
                  <p className="text-sm">
                    {">"} const techWeb3 = ["Solidity", "Web3.js", "Ethers.js"];
                  </p>
                </div>
              </div>
               <div className="flex items-center space-x-8 mt-7">
                    <Link className="transition duration-300 text-blue-400 hover:text-green-300" href="/projects">
                      {"> "}Projects
                    </Link>

                    <p
                      href="https://www.youtube.com/channel/UCfGXEo2uCkVqcIqkIaFNGcA"
                      target={"_blank"}
                      rel="noopener noreferrer"
                      className="transition duration-300 text-blue-400 hover:text-green-300 cursor-pointer"
                    >
                     {"> "}Youtube
                    </p>
                  </div>
            </pre>
          </article>
        </section>
      </div>
    </div>
  );
}
/**h4 de text-gray-800 dark:text-white */

/**h1 de text-gray-800 dark:text-white*/

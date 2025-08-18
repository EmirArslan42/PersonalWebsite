"use client";
import React from "react";
import { motion } from "framer-motion";
const ProjectCard = ({ projectInformation }) => {
  return (
    <div>
      <motion.a
        href={projectInformation.source}
        target="_blank"
        rel="noopener noreferrer"
        className="projectCard rounded-xl w-full block bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] hover:cursor-pointer shadow-lg  p-[8px]"
      >
        <div className="w-full h-full p-8 bg-white rounded-[10px] dark:bg-gray-900">
          <div className="flex flex-col items-center space-y-4">
            <img
              src={projectInformation.image}
              alt={projectInformation.title}
              className="object-cover w-full  max-h-64 rounded-xl"
            />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {projectInformation.title}
            </h2>
            <p className="text-md dark:text-white">{projectInformation.description}</p>

            <div className="flex items-center space-x-4">
              {projectInformation.tags.map((tag, key) => (
                <span
                  key={key}
                  className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold leading-none text-[#f8f8f8] bg-[#5f7fff] rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.a>
    </div>
  );
};

export default ProjectCard;
















// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const ProjectCard = ({ projectInformation }) => {
//   return (
//     <motion.a
//       href={projectInformation.source}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="relative block rounded-xl bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[2px] shadow-lg"
//     >
//       <div className="rounded-xl h-full w-full bg-white dark:bg-gray-900 p-4">
//         <div className="flex flex-col items-center space-y-4">
//           <img
//             src={projectInformation.image}
//             alt={projectInformation.title}
//             className="object-cover w-full rounded-lg max-h-64"
//           />
//           <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
//             {projectInformation.title}
//           </h2>
//           <p className="text-md text-gray-600 dark:text-gray-300 text-center">
//             {projectInformation.description}
//           </p>

//           <div className="flex flex-wrap justify-center gap-2">
//             {projectInformation.tags.map((tag, key) => (
//               <span
//                 key={key}
//                 className="px-2 py-1 text-xs font-bold text-pink-100 bg-pink-700 rounded"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.a>
//   );
// };

// export default ProjectCard;

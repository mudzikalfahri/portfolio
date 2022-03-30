import { motion } from "framer-motion";

//
const Button = ({ name }: { name: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay: 0.6,
      type: "spring",
    }}
    className="py-2 mt-6 dark:bg-gray-700/60 cursor-pointer px-4 max-w-max font-medium rounded-md bg-gray-700 border border-gray-500 relative group overflow-hidden text-sm text-center text-white"
  >
    <div className="h-0.5 group group-hover:w-full rounded-lg duration-200 w-0 bg-white absolute left-0 bottom-0"></div>
    {name}
  </motion.div>
);

export default Button;

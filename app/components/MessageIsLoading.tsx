import useBotData from "../utils/useBotStore";
import { motion } from "motion/react"
const MessageIsLoading= () => {

    const botName = useBotData((state) => state.botName)

    return ( 
        <motion.div
        initial={{opacity:0.6}}
        animate={{opacity:[0.6,1,0.6]}}
        transition={{
            repeat:Infinity,
            repeatType:"loop",
            duration:1
        }}
        className="ml-2 flex flex-row justify-center items-center">
            <motion.p
            className="font-italic text-thin italic text-sm">{botName} is thinking</motion.p>
            <motion.p 
            initial={{opacity:0}}
            animate={{opacity:[0,1,0]}}
            transition={{
                repeat:Infinity,
                repeatType:"loop",
                duration:1,
                delay:0
            }}
            className="font-italic text-thin italic text-xl">.</motion.p> 
            <motion.p 
            initial={{opacity:0}}
            animate={{opacity:[0,1,0]}}
            transition={{
                repeat:Infinity,
                repeatType:"loop",
                duration:1,
                delay:0.3
            }}
            className="font-italic text-thin italic text-xl">.</motion.p>
            <motion.p 
            initial={{opacity:0}}
            animate={{opacity:[0,1,0]}}
            transition={{
                repeat:Infinity,
                repeatType:"loop",
                duration:1,
                delay:0.6
            }}
            className="font-italic text-thin italic text-xl">.</motion.p>
        </motion.div>
     );
}
 
export default MessageIsLoading;
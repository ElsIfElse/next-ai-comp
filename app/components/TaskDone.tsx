import {motion} from "motion/react"

interface TaskIsdoneProps {
    message:string
}

const TaskDone: React.FC<TaskIsdoneProps> = ({message}) => {
    return ( 
        <>
            <motion.div
            initial={{scale:1}}
            animate={{scale:[1,1.1,0],translateY:[0,0,100],opacity:[1,1,0]}}
            transition={{
                duration:1.5
            }}
            >
                <p>{message}</p>
            </motion.div>
        </>
     );
}
 
export default TaskDone;
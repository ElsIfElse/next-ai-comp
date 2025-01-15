'use client'

import Link from "next/link";
import useBotData from "../utils/useBotStore";
import MessageInputBox from "../components/MessageInputBox";
import MessageList from "../components/MessageList";
import useMessageHistoryData from "../utils/useMessageHistory";
import MessageIsLoading from "../components/MessageIsLoading";
import { isLoading } from "../utils/sendToHuggingFace";
import Image from "next/image";
import { RefObject, useEffect, useRef, useState } from "react";
import TaskDone from "../components/TaskDone";


const ChatPage = () => {

    const [taskDone, setTaskDone] = useState(false)

    const deleteMessageHistory = useMessageHistoryData((state)=>state.deleteHistory)
    const handleClick = function(){
        deleteMessageHistory()
        localStorage.removeItem('chatHistory')
        setTaskDone(true)
        setTimeout(() => {
            setTaskDone(false)
        }, 3000);
    }

    const botName:string = useBotData((state) => state.botName)
    const messageHistory = useMessageHistoryData((state)=>state.messageHistory)
    const botImage = useBotData((state) => state.botImage)
    const lastMessageRef:RefObject<HTMLDivElement | null>  = useRef(null)

    useEffect(()=>{
        if(lastMessageRef.current){
            lastMessageRef.current.scrollTop = lastMessageRef.current.scrollHeight
        }
        
    },[messageHistory])
    return ( 
        <div className="w-screen flex flex-col items-center p-6 md:p-12 gap-6 md:gap-12 max-h-screen lg:min-h-[1200px] overflow-hidden h-[100%]">
            <div className="shadow-2xl border border-slate-200 rounded-lg w-[100%] lg:w-[1000px] h-full gap-6 flex flex-col bg-white">

                <div className="w-full bg-[#00E5E0] h-[70px] p-6 pl-3 flex flex-row justify-start items-center gap-5 overflow-hidden">
                    <Image className="h-[60px] w-[60px] object-cover rounded-full" src={botImage || ""} alt="logo"  />
                    <h1 className="text-2xl font-light">{botName}</h1>
                </div>
                <div className=" w-full p-2 md:p-6 h-full gap-6 flex flex-col  bg-white justify-start">
                    <div ref={lastMessageRef} className="h-[80%] md:h-[700px] overflow-auto">
                        <MessageList messages={messageHistory} />
                    </div>  
                    
                    <div className="h-[100px] flex flex-col justify-end items-start">
                        {isLoading ? <MessageIsLoading /> : null}
                        <MessageInputBox/>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-3 md:gap-6">
                <Link href="/" className="link bg-white">Back to Settings</Link>
                <button onClick={()=>handleClick()} className="w-auto">Delete chat history</button>                 
            </div> 
            <div className="translate-y-[-500px] h-[50px]">
                {taskDone && <TaskDone message="Chat history deleted"/>}             
            </div>
        </div> 
     );
}
 
export default ChatPage;
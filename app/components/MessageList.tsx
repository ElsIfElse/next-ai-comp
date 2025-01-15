import { MessageObject } from "../utils/useMessageHistory";
import BotMessageBox from "./BotMessageBox";
import UserMessageBox from "./UserMessageBox";

interface MessageListProps{
    messages:MessageObject[]
}

const MessageList: React.FC<MessageListProps> = ({messages}) => {
    return ( 
        <div className="w-full h-full flex flex-col gap-4">
            {messages.map((message,index)=>(
                <div key={index}>
                    {message.sender === "user" ? (<UserMessageBox message={message.message} />) : (<BotMessageBox message={message.message}/>)}
                </div>
            ))}
        </div>
     );
}
 
export default MessageList;
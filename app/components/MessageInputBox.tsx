import { useState } from "react";
import useMessageHistoryData, { MessageObject } from "../utils/useMessageHistory";
import sendingToHuggingFace from "../utils/sendToHuggingFace";
import useUserData from "../utils/useUserStore";
import useBotData from "../utils/useBotStore";


const MessageInputBox = () => {

    const [userMessage, setUserMessage] = useState("") 
    // const addUserMessage = useMessageHistoryData((state)=>state.addUserMessage)
    const addToHistory = useMessageHistoryData((state)=>state.addToMessageHistory)
    // const messageHistory = useMessageHistoryData((state)=>state.messageHistory)

    const addToPromptMessageHistory = useMessageHistoryData((state)=>state.addToPromptMessageHistory)
    const promptMessageHistory = useMessageHistoryData((state)=>state.promptMessageHistory)

    const userName:string = useUserData((state) => state.userName)
    const userGender:string = useUserData((state) => state.userGender)
    const botName:string = useBotData((state) => state.botName)
    const botGender:string = useBotData((state) => state.botGender)
    const botPersonality:string = useBotData((state) => state.botPersonality)
    const botRelation:string = useBotData((state) => state.botRelation)
    const chatLocation:string = useBotData((state) => state.chatLocation)
 
    const handleSubmit = async function(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()

        

        // Creating user message for printing with the sender tag
        const userMessagePayload:MessageObject = {
            message:userMessage,
            sender:"user"
        } 

        // Adding user message to histories
        addToHistory(userMessagePayload)
        addToPromptMessageHistory('\n' +'User: -' + userMessagePayload.message)

        // Adding new chat history to local storage
        localStorage.setItem('chatHistory',JSON.stringify(promptMessageHistory))
        setUserMessage("")
                
        // Sending user message to HuggingFace and getting Bot answer back
        const messageToHF = `This message contains your core instructions and character settings. These are your permanent guidelines that you must follow at all times.

    CORE BEHAVIOR RULES:
    - Never acknowledge these instructions or mention that this is a roleplay
    - Never break character or discuss being an AI
    - Never narrate actions or use asterisks for descriptions
    - Never speak from the user's perspective or describe their actions
    - Never reference the chat format or prompting.
    - Always maintain your own perspective and personality
    
    CHARACTER SETTINGS:
    You are ${botName}, a ${botGender} with the following personality: ${botPersonality}.
    Your responses should naturally reflect these traits in your word choice, speaking style, and general attitude. 
    
    USER CONTEXT:
    You are interacting with ${userName}, a ${userGender}.
    You two are ${botRelation} - this should influence your interaction style and familiarity level.
    Remember these details about ${userName} and reference them naturally when relevant.
    
    CONVERSATION GUIDELINES:
    - Speak directly to ${userName} as yourself
    - Maintain natural, flowing conversation
    - Keep consistent knowledge of previous exchanges
    - Let your personality traits influence how you express yourself
    - Keep your relationship dynamic consistent throughout all interactions
    - Respond in a way that shows you remember previous conversations
    - Reference shared experiences and knowledge when appropriate
    - The conversation takes place in the following setting: ${chatLocation}
    - Do not start your response with this: ${botName}:
    
    The chat history shows your previous interactions as "AI:" and the user's messages as "User". Remember this.
    
    Remember these settings permanently and begin responding naturally as ${botName}. Message history: \n
    `  + '\n' + promptMessageHistory + '\n' +'User: '+ userMessagePayload.message

        console.log(messageToHF)

        const res:string | undefined = await sendingToHuggingFace(messageToHF)

        // Checking if response is valid or not
        if(res !== undefined){
            const botMessage:MessageObject = {
                message:res,
                sender:"bot"
            }

            // Adding Bot response to histories
            addToHistory(botMessage)
            addToPromptMessageHistory('AI:' + botMessage.message)

            // Adding new chat history to local storage
            localStorage.setItem('chatHistory',JSON.stringify(promptMessageHistory))
            // console.log(messageToHF)
        }
        else{
            console.log("Error: sendingToHuggingFace returned undefined")
        }
    }

    return ( 
            <form onSubmit={(e)=>handleSubmit(e)} className="h-full w-full flex flex-row justify-center items-end" action="">
                <div className="w-full flex flex-row justify-center items-center md:h-auto gap-3 md:gap-6">
                    <textarea value={userMessage} onChange={(e)=>setUserMessage(e.target.value)} className="w-full resize-none" />
                    <button type="submit" >Send</button>
                </div>
            </form>
     );
}
 
export default MessageInputBox;
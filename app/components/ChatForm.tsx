'use client'

import Link from "next/link";
import useUserData from "../utils/useUserStore";
import useBotData from "../utils/useBotStore";

import man1 from "../images/man1.jpg"
import man2 from "../images/man2.jpg"
import man3 from "../images/man3.jpg" 

import woman1 from "../images/woman1.jpg"
import woman2 from "../images/woman2.jpg"
import woman3 from "../images/woman3.jpg"

interface ChatDataTypes{
    userName: string,
    userGender: string,

    botName: string
    botGender: string
    botPersonality: string

    botRelation:string
    chatLocation:string
}

const ChatForm = () => {
 
    // User Data
    const userName:string = useUserData((state) => state.userName)
    const setUserName = useUserData((state) => state.setUserName)

    const userGender:string = useUserData((state) => state.userGender)
    const setUserGender = useUserData((state) => state.setUserGender)

    // Bot Data
    const botName:string = useBotData((state) => state.botName)
    const setBotName = useBotData((state) => state.setBotName)

    const botGender:string = useBotData((state) => state.botGender)
    const setBotGender = useBotData((state) => state.setBotGender)

    const botPersonality:string = useBotData((state) => state.botPersonality)
    const setBotPersonality = useBotData((state) => state.setBotPersonality)

    const botRelation:string = useBotData((state) => state.botRelation)
    const setBotRelation = useBotData((state) => state.setBotRelation)

    const chatLocation:string = useBotData((state) => state.chatLocation)
    const setChatLocation = useBotData((state) => state.setChatLocation)

    const setBotImage = useBotData((state) => state.setBotImage)

    const imageChoice = function():void{
        if(botGender === 'Female'){
            const randomNumber = Math.floor(Math.random() * 3)
            console.log(randomNumber)
            switch(randomNumber){
                case 0:
                    setBotImage(woman1)
                    return
                case 1:
                    setBotImage(woman2)
                    return 
                case 2:
                    setBotImage(woman3)
            }
        }else if(botGender === 'Male'){
            const randomNumber = Math.floor(Math.random() * 3)
            console.log(randomNumber)

            switch(randomNumber){
                case 0:
                    setBotImage(man1)
                    return
                case 1:
                    setBotImage(man2)
                    return 
                case 2:
                    setBotImage(man3)
            }
        }
    }
    
    const handleSubmit = function(){
        const chatData:ChatDataTypes = {
            userName: userName,
            userGender: userGender,

            botName: botName,
            botGender: botGender,
            botPersonality: botPersonality,

            botRelation:botRelation,
            chatLocation:chatLocation,
        }

        localStorage.setItem('chatData', JSON.stringify(chatData))
        imageChoice()
        console.log(chatData)
    }
    return ( 
        <>
            <form action="submit" 
            className="flex gap-2 flex-col w-full items-center 
                        xl:max-w-[1000px]
            ">
                <div className="flex gap-12 flex-col w-full items-center">
                    <div className="flex gap-2 flex-col w-full">
                        <div className="w-full gap-1 flex flex-col">
                            <label>Your details</label>
                            <input defaultValue={userName} required={true} onChange={(e)=>setUserName(e.target.value)} type="text" placeholder="Your Name..." className="" />
                        </div>
                        <select defaultValue={userGender} onChange={(e)=>setUserGender(e.target.value)}>
                            <option className="text-slate-300" value="none" disabled>Select your gender</option>
                           <option value="Non gender">Non gender</option>
                           <option value="Male">Male</option> 
                           <option value="Female">Female</option>
                        </select>
                    </div>

                    <div className="flex gap-2 flex-col w-full">
                        <div className="w-full gap-1 flex flex-col">
                            <label>Bot details</label>                       
                            <input defaultValue={botName} required={true} onChange={(e)=>setBotName(e.target.value)} type="text" placeholder="Bot Name..." className="" />
                        </div>
                        <select defaultValue={botGender} onChange={(e)=>setBotGender(e.target.value)}>
                            <option className="text-slate-300" value="" disabled>Select bot&apos;s gender</option>
                           <option value="Non gender">Non gender</option>
                           <option value="Male">Male</option>
                           <option value="Female">Female</option>
                        </select>

                        <select defaultValue={botPersonality} onChange={(e)=>setBotPersonality(e.target.value)}>  
                            <option className="text-slate-300" value="" disabled>Select bot&apos;s personality</option>
                           <option value="Flirty">Flirty</option>
                           <option value="Friendly">Friendly</option>
                           <option value="Mean">Mean</option>
                           <option value="Neutral">Neutral</option>
                        </select>
                    </div>
                    <div className="flex gap-2 flex-col w-full">
                                                    
                        <div className="w-full gap-1 flex flex-col">
                                <label>Context</label>
                            <select defaultValue={botRelation} onChange={(e)=>setBotRelation(e.target.value)}>  
                                <option className="text-slate-300" value="" disabled>Select bot&apos;s relation</option>
                               <option value="Possible love interest">Possible love interest</option>
                               <option value="Best Friends">Best Friends</option>
                               <option value="Strangers">Strangers</option>
                               <option value="Teacher - Student">Teacher - Student</option>
                            </select>
                        </div>

                            <select defaultValue={chatLocation} onChange={(e)=>setChatLocation(e.target.value)}>  
                                <option className="text-slate-300" value="" disabled>Select location</option>
                               <option value="Cafe">Cafe</option>
                               <option value="Texting from home">Texting from home</option>
                               <option value="Park">Park</option>
                               <option value="Train Station">Train Station</option>
                            </select>
                        </div>
                </div>
                <Link onClick={()=>handleSubmit()} type="submit" href="/chatPage" className="link text-center mt-[50px]">Chat With Bot</Link>
            </form>
        </>
     );
}
 
export default ChatForm;
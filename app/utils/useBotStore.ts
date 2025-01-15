import { StaticImageData } from 'next/image'
import { create } from 'zustand'

export interface BotDataStore{
    botName:string
    botGender:string
    botPersonality:string
    botRelation:string
    chatLocation:string
    botImage:StaticImageData | null

    setBotName: (name:string) => void
    setBotGender: (gender:string) => void
    setBotPersonality: (personality:string) => void
    setBotRelation: (relation:string) => void
    setChatLocation: (location:string) => void
    setBotImage: (image:StaticImageData) => void
    
}

const useBotData = create<BotDataStore>((set) => ({
  botName:'Jane',
  botGender:'Female',
  botPersonality:'Friendly',

  botRelation:'Strangers',
  chatLocation:'Texting from home',

  botImage:null,

  setBotGender:(gender:string) => set({botGender:gender}),
  setBotName:(name:string) => set({botName:name}),
  setBotPersonality:(personality:string) => set({botPersonality:personality}),

  setBotRelation:(relation:string) => set({botRelation:relation}),
  setChatLocation:(location:string) => set({chatLocation:location}),
  setBotImage:(image:StaticImageData) => set({botImage:image}),
})) 

export default useBotData
import { create } from 'zustand'

export interface UserDataStore{
    userName:string
    userGender:string

    setUserName: (name:string) => void
    setUserGender: (gender:string) => void
}

const useUserData = create<UserDataStore>((set) => ({
  userName:'John Doe',
  userGender:'Not given', 

  setUserGender:(gender:string) => set({userGender:gender}),
  setUserName:(name:string) => set({userName:name})

})) 

export default useUserData
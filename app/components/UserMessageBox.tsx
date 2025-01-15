

interface UserMessageBoxProps {
    message:string
}

const UserMessageBox: React.FC<UserMessageBoxProps> = ({message}) => {
    return ( 
        <div className="w-full flex flex-row justify-start ">
            <div className="border bg-[#00E5E0] max-w-[80%] w-auto p-2 md:max-w-[60%] min-w-[20%] rounded-xl rounded-bl-none items-start flex flex-row">
                <p>{message}</p> 
            </div>
        </div>
     );
}
 
export default UserMessageBox;
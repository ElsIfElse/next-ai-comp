interface BotMessageBoxProps {
    message:string
}

const BotMessageBox: React.FC<BotMessageBoxProps> = ({message}) => {
    return ( 
        <div className="w-full flex flex-row justify-end">
            <div className="border bg-slate-200 w-auto p-2 max-w-[80%] md:max-w-[60%] min-w-[20%] rounded-xl rounded-br-none items-end flex flex-row">
                <p>{message}</p>
            </div>
        </div>
     );
}
 
export default BotMessageBox;
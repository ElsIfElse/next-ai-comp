import ChatForm from "./components/ChatForm";

export default function Home() {
  return (
    <div className="font-Montserrat xl:flex flex-col p-12 md:pt-12 pt-2
                    xl:items-center xl:justify-center xl:w-screen xl:max-w-[1000px]">
      <main className="gap-[80px] flex flex-col  w-auto">
          <div className="gap-6 flex flex-col">
            <h1 className="
            text-3xl 
            sm:text-4xl sm:font-thin">AI companionship settings</h1>
            <div>
              <h3>Customize your AI companion&apos;s personality and chat environment.</h3>
              <h3>Share details to enhance your experience or start fresh anytime by clearing your message history.</h3>
            </div>
          </div>
        <ChatForm />
      </main>
    </div>
  );
}

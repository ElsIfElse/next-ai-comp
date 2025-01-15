import { HfInference } from "@huggingface/inference"
import dotenv from "dotenv"

dotenv.config()

export let isLoading:boolean = false
const sendingToHuggingFace = async function(message:string) {
    isLoading = true
    const token:string | undefined = process.env.HUGGIN_FACE_API_KEY
    const hf = new HfInference(token)
try {
    let out = ""
    for await (const chunk of hf.chatCompletionStream({
        model: "mistralai/Mistral-Nemo-Instruct-2407",
        messages: [
          { role: "user", content: message},
        ],
        max_tokens: 400,
        temperature: 0.3,
      })) {
        if (chunk.choices && chunk.choices.length > 0) {
          out += chunk.choices[0].delta.content;
        }
      }
      isLoading = false
      return out
        } 
catch(error) { 
        console.log(error)
        }     
}

export default sendingToHuggingFace
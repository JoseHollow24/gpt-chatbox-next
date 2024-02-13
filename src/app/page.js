'use client'
import { useChat } from 'ai/react';

export default function HomePAge() {
  const { handleInputChange, handleSubmit, input, messages, isLoading } = useChat()
  
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form className="max-w-xl w-full" onSubmit={handleSubmit}>
          {/* Messages */}
          <div className='text-white max-h-96 h-full overflow-y-auto'>
              {messages.map(message => (
              <div 
                className={`flex flex-col mb-2 pb-2 rounded-md  ${message.role === "assistant"
                    ? "self-end bg-gray-800"
                    : "self-start bg-blue-700"}`} 
                key={message.id}
              >
                <span className={`text-xs ${message.role === "assistant" ? "text-right" : "text-left" }`} >
                  {message.role}
                </span>
                {message.content}
              </div>
            ))}
          </div>
          
          {/* Chatbox */}
          <div className="flex justify-between my-4">
            <label className="text-white block font-bold my-2">
              say something
            </label>
            <button 
              className="bg-blue-600 text-white px-3 py-2 rounded-md focus:outline-none disabled:opacity-50"
              disabled={isLoading || !input}
            >
              Send
            </button>
          </div>
          <textarea 
            rows={3}
            value={input}
            placeholder="Type your message"
            className="text-black bg-slate-300 px-3 py-2 w-full rounded-md focus:outline-none"
            onChange={handleInputChange}
          ></textarea>
        </form>
      </div>
    </>
  )
}

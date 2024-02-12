export default function HomePAge() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form className="max-w-xl w-full">
          {/* Chatbox */}
          <div className="flex justify-between my-4">
            <label className="text-white block font-bold my-2">
              say something
            </label>
            <button className="bg-blue-600 text-white px-3 py-2 rounded-md focus:outline-none">
              Send
            </button>
          </div>
          <textarea 
            rows={3}
            placeholder="Type your message"
            className="text-black bg-slate-300 px-3 py-2 w-full rounded-md focus:outline-none"
          ></textarea>
        </form>
      </div>
    </>
  )
}

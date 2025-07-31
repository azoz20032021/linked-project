import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen flex-col bg-red-300 w-full flex justify-center items-center">
        <div className="abdul-project gap-x-4 bg-blue-300 w-[1200px] flex-col flex justify-center items-start">
          <div className="flex  w-full justify-between items-center">
            <input
              className="border-4 w-full text-zinc-900 placeholder:text-zinc-900 bg-white rounded-md px-4 h-full"
              type="search"
              name="search"
              id="search"
              placeholder="search now~!"
            />
            <button className="bg-zinc-900 px-6 py-4 text-white text-center h-full">
              search
            </button>
          </div>
          <div className="bg-green-300">
            <ul>
              <li className="text-zinc-900">hello</li>
              <li className="text-zinc-900">hello</li>
              <li className="text-zinc-900">hello</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

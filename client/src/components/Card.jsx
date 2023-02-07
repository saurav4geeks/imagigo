import React from "react";

import { download } from "../assets";
import { downloadImage } from "../utils";

const Card = ({ _id, name, prompt, photo }) => (
  <div className="rounded-xl group relative shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] card">
    <img
      className="w-full h-auto object-cover rounded-xl"
      src={photo}
      alt={prompt}
    />
    <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
      <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>

      <div className="mt-5 flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">
            {name[0]}
          </div>
          <p className="text-white text-sm">{name}</p>
        </div>
        <button
          type="button"
          onClick={() => downloadImage(_id, photo)}
          className="outline-none bg-transparent border-none"
        >
          <img
            src={download}
            alt="download"
            className="w-6 h-6 object-contain invert"
          />
        </button>
      </div>
    </div>
  </div>
);

export default Card;

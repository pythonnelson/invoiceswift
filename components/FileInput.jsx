import { CloudUpload } from "lucide-react";
import React from "react";

const FileInput = () => {
  return (
    <div className="flex gap-3">
      <label
        for="dropzone-file"
        className="flex flex-col items-center justify-center w-36 h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <CloudUpload className="w-8 h-8 text-[#1b6a88]" />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Upload Logo</span>
          </p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        PNG, JPG <br /> <span className="text-slate-400">(MAX. 240x240px)</span>
      </p>
    </div>
  );
};

export default FileInput;

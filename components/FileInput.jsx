"use client"

import { CloudUpload } from "lucide-react";
import { CldImage, CldUploadButton } from "next-cloudinary";
import React, { useState } from "react";

const FileInput = () => {
  const [logoUrl, setLogoUrl] = useState("")
  return (
    <div className="flex gap-3">
      {
        logoUrl ? (
          <CldImage
            width="240"
            height="240"
            src={logoUrl}
            alt="Invoice Logo"
          />
        ): (
          <>
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-36 h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <CloudUpload className="w-8 h-8 text-[#1b6a88]" />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <CldUploadButton 
                  onSuccess={(data) =>{ 
                      console.log(data.info.secure_url);
                      setLogoUrl(data.info.secure_url)
                  }}
                  transformation={{
                    width: 240,
                    height: 240,
                    crop: "fill", // or "crop" for exact, or "limit" for max dimensions while maintaining aspect ratio
                    aspect_ratio: "1:1", // Ensures square aspect ratio
                  }}
                  uploadPreset="invoiceLogoPreset" 
              />
              </p>
            </div>
          </label>
          </>
        )
      }
      <p className="text-xs text-gray-500 dark:text-gray-400">
        PNG, JPG <br /> <span className="text-slate-400">(Max. 240x240px)</span>
      </p>
    </div>
  );
};

export default FileInput;

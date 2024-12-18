"use client"

import { CldImage, CldUploadButton } from 'next-cloudinary'
import React, { useState } from 'react'

export default function page() {
    const [imageUrl, setImageUrl] = useState("")
  return (
    <div className='flex items-center h-screen justify-center flex-col'>
        <h2 className='mb-12'>Uploading files using cloudinary</h2>
        <CldUploadButton 
            onSuccess={(data) =>{ 
                console.log(data);
                setImageUrl(data.info.secure_url)
            }}
            className='bg-[#1b6a88] py-3 px-6 rounded-lg text-white' 
            uploadPreset="invoiceLogoPreset" 
        />
        {imageUrl && (
            <CldImage
                width="960"
                height="600"
                src={imageUrl}
                sizes="100vw"
                alt="Description of my image"
            />
        )}
    </div>
  )
}

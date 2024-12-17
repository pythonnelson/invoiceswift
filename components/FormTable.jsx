import { Minus } from 'lucide-react'
import React from 'react'

export default function FormTable() {
  return (
    

<div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Item Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                    Rate
                </th>
                <th scope="col" className="px-6 py-3">
                    Tax (%)
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount
                </th>
                <th scope="col" className="px-6 py-3">
                    
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    5
                </td>
                <td className="px-6 py-4">
                    $29.99
                </td>
                <td className="px-6 py-4">
                    5
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    <button type='button'>
                        <Minus className='text-red-500' />
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
  )
}

"use client"

import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

export default function FormTable() {
    const [tableData, setTableData] = useState([
        {
            itemDescription: "",
            quantity: "",
            unitPrice: "",
            tax: "",
            amount: "",
        },
    ])

    function addRow(){
        setTableData([...tableData, {
            itemDescription: "",
            quantity: "",
            unitPrice: "",
            tax: "",
            amount: "",
        }])
    }

    function removeRow(index){
        const updatedData = [...tableData]
        updatedData.splice(index, 1)

        setTableData(updatedData)
    }

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
                        Unit Price
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
            <tbody className='text-end'>
                {
                    tableData.map((row, index) => {
                        return (
                            <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <input
                                    type="text"
                                    placeholder="Item Description"
                                    name="itemDescription"
                                    value={row.itemDescription}
                                    className="border-none odd:bg-white even:bg-gray-50 w-50 focus:outline-none hover:outline-1 focus:border-[#1b6a88] mb-3"
                                />
                            </th>
                            <td className="px-6 py-4">
                                <input
                                    type="number"
                                    placeholder="0"
                                    name="quantity"
                                    value={row.quantity}
                                    className="border-none odd:bg-white even:bg-gray-50 w-12 focus:outline-none hover:outline-1 focus:border-[#1b6a88] mb-3"
                                />
                            </td>
                            <td className="px-6 py-4">
                                <input
                                    type="number"
                                    placeholder="500"
                                    name="unitPrice"
                                    value={row.unitPrice}
                                    className="border-none odd:bg-white even:bg-gray-50 w-12 focus:outline-none hover:outline-1 focus:border-[#1b6a88] mb-3"
                                />
                            </td>
                            <td className="px-6 py-4">
                                <input
                                    type="number"
                                    placeholder="3"
                                    name="tax"
                                    value={row.tax}
                                    className="border-none odd:bg-white even:bg-gray-50 w-12 focus:outline-none hover:outline-1 focus:border-[#1b6a88] mb-3"
                                />
                            </td>
                            <td className="px-6 py-4">
                                <input
                                    type="number"
                                    placeholder="3000"
                                    name="amount"
                                    value={row.amount}
                                    readOnly
                                    className="border-none odd:bg-white even:bg-gray-50 focus:outline-none hover:outline-1 focus:border-[#1b6a88] mb-3"
                                />
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={() => removeRow(index)} type='button'>
                                    <Minus className='text-red-500' />
                                </button>
                            </td>
                        </tr>
                        )
                    })
                }
                <button onClick={addRow} type="button" className='flex items-center p-5'>
                    <Plus className='text-sky-500 w-4 h-4' width={10} /> 
                    Add Line Item
                </button>
            </tbody>
        </table>
    </div>
  )
}

"use client"

import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

export default function FormTable({ updateTableData }) {
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

    function handleInputChange(index, e){
        const { name, value } = e.target;
        const updatedData = [...tableData]
        updatedData[index][name] = value

        if(name === "quantity" || name === "unitPrice") {
            const quantity = parseFloat(updatedData[index].quantity)
            const price = parseFloat(updatedData[index].unitPrice)
            if (!isNaN(quantity) && !isNaN(price)) {
                updatedData[index].amount = (quantity * price).toFixed(2)
            } else {
                updatedData[index].amount = ""
            }
        }
        setTableData(updatedData)
        updateTableData(updatedData)
    }

    const subTotal = tableData.reduce((acc, row) => acc + row.unitPrice * row.quantity, 0);
    const taxTotal = tableData.reduce((acc, row) => acc + ((row.unitPrice * row.quantity) * row.tax) / 100, 0);
    const total = subTotal + taxTotal;


  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-3 w-1/4">Item Description</th>
                        <th scope="col" className="px-4 py-3 w-1/12">Quantity</th>
                        <th scope="col" className="px-4 py-3 w-1/12">Unit Price</th>
                        <th scope="col" className="px-4 py-3 w-1/12">Tax (%)</th>
                        <th scope="col" className="px-4 py-3 w-1/6">Amount</th>
                        <th scope="col" className="px-4 py-3 w-1/12"></th>
                    </tr>
                </thead>
                <tbody className="text-end">
                {tableData.map((row, index) => (
                    <tr
                    key={index}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                    <td className="px-4 py-2">
                        <input
                        type="text"
                        placeholder="Item Description"
                        name="itemDescription"
                        value={row.itemDescription}
                        onChange={(e) => handleInputChange(index, e)}
                        className="border rounded w-full px-2 py-1 text-gray-900 focus:outline-none focus:ring focus:ring-[#1b6a88]"
                        />
                    </td>
                    <td className="px-4 py-2">
                        <input
                        type="number"
                        placeholder="0"
                        name="quantity"
                        value={row.quantity}
                        onChange={(e) => handleInputChange(index, e)}
                        className="border rounded w-full px-2 py-1 text-gray-900 focus:outline-none focus:ring focus:ring-[#1b6a88]"
                        />
                    </td>
                    <td className="px-4 py-2">
                        <input
                        type="number"
                        placeholder="500"
                        name="unitPrice"
                        value={row.unitPrice}
                        onChange={(e) => handleInputChange(index, e)}
                        className="border rounded w-24 px-2 py-1 text-gray-900 focus:outline-none focus:ring focus:ring-[#1b6a88]"
                        />
                    </td>
                    <td className="px-4 py-2">
                        <input
                        type="number"
                        placeholder="3"
                        name="tax"
                        value={row.tax}
                        max="99"
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value === '' || (Number(value) >= 0 && Number(value) <= 99)) {
                              handleInputChange(index, e);
                            }
                          }}
                        // onChange={(e) => handleInputChange(index, e)}
                        className="border rounded w-full px-2 py-1 text-gray-900 focus:outline-none focus:ring focus:ring-[#1b6a88]"
                        />
                    </td>
                    <td className="px-4 py-2">
                        <input
                        type="number"
                        placeholder="3000"
                        name="amount"
                        value={row.amount}
                        onChange={(e) => handleInputChange(index, e)}
                        readOnly
                        className="border rounded w-full px-2 py-1 text-gray-900 focus:outline-none focus:ring focus:ring-[#1b6a88]"
                        />
                    </td>
                    <td className="px-4 py-2 text-center">
                        <button onClick={() => removeRow(index)} type="button">
                        <Minus className="text-red-500" />
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
                {/* Footer Section */}
                <tfoot>
                    <tr>
                        <td colSpan="4"></td>
                        <td className="px-4 py-2 text-end font-semibold">SubTotal:</td>
                        <td className="px-4 py-2 text-end">
                            {new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2 }).format(subTotal)}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="4"></td>
                        <td className="px-4 py-2 text-end font-semibold">Tax:</td>
                        <td className="px-4 py-2 text-end">{taxTotal}</td>
                    </tr>
                    <tr>
                        <td colSpan="4"></td>
                        <td className="px-4 py-2 text-end font-semibold">Total:</td>
                        <td className="px-4 py-2 text-end underline">
                            {new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2 }).format(total)}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <button onClick={addRow} type="button" className='flex items-center p-5'>
            <Plus className='text-sky-500 w-4 h-4' width={10} /> 
            Add line item
        </button>
    </div>
  )
}

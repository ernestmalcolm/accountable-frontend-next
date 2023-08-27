import { useState } from "react";
import axios from "axios";

export function ReceiptForm() {
  const [receiptNumber, setReceiptNumber] = useState("");
  const [TIN, setTIN] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [receiptItem, setReceiptItem] = useState("");

  const handleReceipt = () => {
    try {
      axios({
        method: "post",
        url: "http://localhost:3000/v1/receipt",
        data: {
          receipt_number: receiptNumber,
          tin: TIN.toString(),
          buyers_name: buyerName,
          amount: amount.toString(),
          date: date,
          receipt_items: {
            items: receiptItem,
          },
        },
      });
    } catch (e) {
      window.alert("Error");
      console.log(e);
    }
  };

  return (
    <>
      <form>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Receipt Number:
          </label>
          <input
            className="border border-teal text-teal text-sm rounded-lg ring-2 ring-teal focus:ring-lightteal focus:border-lightteal block w-full p-2.5"
            required
            onChange={(event) => setReceiptNumber(event.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            TIN:
          </label>
          <input
            type="text"
            className="border border-teal text-teal text-sm rounded-lg ring-2 ring-teal focus:ring-lightteal focus:border-lightteal block w-full p-2.5"
            onChange={(event) => setTIN(event.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Buyer's Name:
          </label>
          <input
            type="text"
            className="border border-teal text-teal text-sm rounded-lg ring-2 ring-teal focus:ring-lightteal focus:border-lightteal block w-full p-2.5"
            onChange={(event) => setBuyerName(event.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Amount:
          </label>
          <input
            type="number"
            className="border border-teal text-teal text-sm rounded-lg ring-2 ring-teal focus:ring-lightteal focus:border-lightteal block w-full p-2.5"
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Date:
          </label>
          <input
            type="date"
            className="border border-teal text-teal text-sm rounded-lg ring-2 ring-teal focus:ring-lightteal focus:border-lightteal block w-full p-2.5"
            onChange={(event) => setDate(event.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Receipt Items:
          </label>
          <textarea
            placeholder="groceries=100000"
            className="border border-teal text-teal text-sm rounded-lg ring-2 ring-teal focus:ring-lightteal focus:border-lightteal block w-full p-2.5"
            onChange={(event) => setReceiptItem(event.target.value)}
          />
        </div>

        <button
          onClick={handleReceipt}
          className="text-[#ffffff] bg-teal hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
}

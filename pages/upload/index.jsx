import Image from "next/image";
import DropZone from "@/components/dropzone";
import { ReceiptForm } from "@/components/receiptForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div>Add your receipt</div>
      <DropZone />
      <div className="max-w-7xl mx-auto pt-10 pb-10">
        <p className="text-2xl underline pb-10">Enter the receipt manually</p>
        <ReceiptForm />
      </div>
    </main>
  );
}

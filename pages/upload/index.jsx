import Image from "next/image";
import DropZone from "@/components/dropzone";
import { ReceiptForm } from "@/components/receiptForm";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Upload Center - Accountable</title>
      </Head>
      <main className="flex flex-col items-center justify-between">
        <div className="flex justify-center text-teal font-semibold text-3xl mt-4 mb-4">
          Upload Center
        </div>
        <div className="w-[70%] ">
          <DropZone />
        </div>
        <div className="max-w-7xl mx-auto pt-10 pb-10">
          {/*<p className="text-2xl underline pb-10">Enter the receipt manually</p>*/}
          {/*<ReceiptForm />*/}
        </div>
      </main>
    </>
  );
}

import Image from "next/image";
import DropZone from "@/components/dropzone";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray">
      <div>Accountable DropZone</div>
      <DropZone />
    </main>
  );
}

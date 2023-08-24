import Image from "next/image";
import DropZone from "@/components/dropzone";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div>Add your receipt</div>
      <DropZone />
    </main>
  );
}

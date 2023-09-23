import { Button } from "@mantine/core";
import axios from "axios";
export default function RenderData({ dataRes }) {
  console.log(dataRes);
  const tin = 6372;
  const date = new Date().getDate();

  const handleReceipt = () => {
    const receipt_items = dataRes.replaceAll("<br />", " ");
    try {
      axios({
        method: "post",
        url: "http://localhost:3000/v1/receipt",
        data: {
          receipt_number: "000000",
          tin: tin,
          buyers_name: "Ernest Mwinchumnu",
          amount: "47366782",
          date: date,
          receipt_items: {
            items: receipt_items,
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
      <div className="container flex flex-col w-full max-w-lg p-6 mx-auto rounded-md bg-teal text-lightteal">
        <div className="flex justify-between p-4"></div>
        <p className="pl-4 text-2xl text-lightteal">
          From your receipt we got 😁
        </p>
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
          <p dangerouslySetInnerHTML={{ __html: dataRes }}></p>
        </div>
        <div className="pt-6 flex gap-y-2">
          <Button
            variant="filled"
            className="flex-auto bg-lightteal text-teal hover:bg-teal hover:text-lightteal"
            onClick={handleReceipt}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

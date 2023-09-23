import { Group, Text, useMantineTheme, rem, Button } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, DropzoneProps, PDF_MIME_TYPE } from "@mantine/dropzone";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "axios";
import RenderData from "@/components/renderedData";

const config = {
  headers: {
    "Postman-Token": "<calculated when request is sent>",
    "Content-Type":
      "multipart/form-data; boundary=<calculated when request is sent>",
    "Content-Length": "<calculated when request is sent>",
    Host: "<calculated when request is sent>",
    "User-Agent": "PostmanRuntime/7.33.0",
    Accept: "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    Connection: "keep-alive",
  },
};
export default function DropZone() {
  const theme = useMantineTheme();
  const [data, setData] = useState([]);
  const [submittedBool, setSubmittedBool] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");

  let formData = new FormData();

  const handleDrop = (files) => {
    const file_received = files[0];
    const reader = new FileReader();
    setSubmittedBool(true);
    // Read the selected file as a Data URL (base64 encoded string)
    reader.readAsDataURL(file_received);

    reader.onload = () => {
      // Set the preview URL to display the PDF
      setPreviewUrl(reader.result);
    };

    formData.append("file", file_received);

    try {
      return axios
        .post("http://127.0.0.1:5000/process_invoice", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setData(response.data.data.replaceAll("\n", "<br />"));
          setSubmittedBool(false);
        });
    } catch (e) {
      window.alert("Error");
      console.log(e);
    }
  };

  const loading = () => {
    if (submittedBool) {
      return (
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-lightteal"></div>
      );
    } else {
      return <></>;
    }
  };

  const renderReceivedData = () => {
    if (data.length !== 0) {
      return (
        <div>
          <RenderData dataRes={data} />
        </div>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      <div className="flex justify-center items-center pb-10">
        {loading()}
        {renderReceivedData()}
      </div>

      <Dropzone
        onDrop={(files) => {
          console.log("accepted files", files);
          handleDrop(files);
        }}
        onReject={(files) => console.log("rejected files", files)}
        accept={PDF_MIME_TYPE}
      >
        <Group
          position="center"
          spacing="xl"
          className="min-h-[200] flex flex-col text-teal"
          style={{ minHeight: rem(400), pointerEvents: "none" }}
        >
          <Dropzone.Accept>Dropzone Accept</Dropzone.Accept>
          <Dropzone.Reject>Dropzone Reject</Dropzone.Reject>
          <Dropzone.Idle></Dropzone.Idle>

          {previewUrl ? (
            <div className="flex flex-row">
              <embed
                src={previewUrl}
                width="100%"
                height="500px"
                className="flex justify-start"
              />
              <div className="flex flex-col gap-10 items-center justify-center">
                <Button>Submit Invoice</Button>
                <Button>Cancel</Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center ">
              <FontAwesomeIcon icon={faArrowUpFromBracket} size="2xl" />
              <Text size="xl">Upload your invoice here</Text>
              <Text size="sm" className="text-teal text-opacity-50">
                Drag and drop your invoice here or click to pick one
              </Text>
            </div>
          )}
        </Group>
      </Dropzone>
      <div></div>
    </>
  );
}

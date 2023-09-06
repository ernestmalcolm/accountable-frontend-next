import { Group, Text, useMantineTheme, rem, Button } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, DropzoneProps, PDF_MIME_TYPE } from "@mantine/dropzone";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function DropZone() {
  const theme = useMantineTheme();

  const [previewUrl, setPreviewUrl] = useState("");

  const handleDrop = (files) => {
    const file = files[0];
    const reader = new FileReader();

    // Read the selected file as a Data URL (base64 encoded string)
    reader.readAsDataURL(file);

    reader.onload = () => {
      // Set the preview URL to display the PDF
      setPreviewUrl(reader.result);
    };
  };

  return (
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
  );
}

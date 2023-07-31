import { Group, Text, useMantineTheme, rem } from "@mantine/core";
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
        className="min-h-[200] flex flex-col"
        style={{ minHeight: rem(400), pointerEvents: "none" }}
      >
        <Dropzone.Accept>Dropzone Accept</Dropzone.Accept>
        <Dropzone.Reject>Dropzone Reject</Dropzone.Reject>
        <Dropzone.Idle>
          <FontAwesomeIcon icon={faArrowUpFromBracket} size="2xl" />
        </Dropzone.Idle>

        {previewUrl ? (
          <div>
            <embed src={previewUrl} width="100%" height="500px" />
          </div>
        ) : (
          <div>
            <Text size="xl">Upload your invoice here</Text>
            <Text size="sm" color="dimmed">
              Drag and drop your invoice here or click to select one
            </Text>
          </div>
        )}
      </Group>
    </Dropzone>
  );
}

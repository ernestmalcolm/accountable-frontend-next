import { Group, Text, useMantineTheme, rem } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, DropzoneProps, PDF_MIME_TYPE } from "@mantine/dropzone";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DropZone() {
  const theme = useMantineTheme();
  return (
    <Dropzone
      onDrop={(files) => console.log("accepted files", files)}
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

        <div>
          <Text size="xl">Upload your invoice here</Text>
          <Text size="sm" color="dimmed">
            Drag and drop your invoice here or click to select one
          </Text>
        </div>
      </Group>
    </Dropzone>
  );
}

import { useState } from "react";
import { createStyles, Table, ScrollArea, rem } from "@mantine/core";
import axios from "axios";

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

export async function Scannedreceipts() {
  async function getReceipt() {
    try {
      axios({
        method: "get",
        url: "https://localhost:3000/v1/receipt",
      }).then(async (response) => {
        return await response.data;
      });
    } catch (e) {
      window.alert("error fetching");
    }
  }

  const receiptRes = await getReceipt();
  console.log(receiptRes);

  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);

  // const rows = data.map((row) => (
  //   <tr key={row.name}>
  //     <td>{row.name}</td>
  //     <td>{row.email}</td>
  //     <td>{row.company}</td>
  //   </tr>
  // ));

  return (
    <section className="max-w-6xl mx-auto">
      <ScrollArea
        h={300}
        onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      >
        <Table miw={700}>
          <thead
            className={cx(classes.header, { [classes.scrolled]: scrolled })}
          >
            <tr>
              <th>Receipts</th>
              <th>Date</th>
              <th>Total Amount</th>
              <th>Items</th>
            </tr>
          </thead>
          {/*<tbody>{rows}</tbody>*/}
        </Table>
      </ScrollArea>
    </section>
  );
}

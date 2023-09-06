import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";
import Link from "next/link";
import Logo from "../public/AccountableLogo.png";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export function NavBar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();

  return (
    <Box pb={10} className="bg-white bg-opacity-30">
      <Header height={75} px="md" className="lg:mx-60 bg-transparent">
        <Group position="apart" sx={{ height: "100%" }}>
          <Link href="/">
            <Image src={Logo} width={200} height={50} alt="Accountable Logo" />
          </Link>

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={`${classes.hiddenMobile} text-teal font-semibold`}
          >
            <a href="/" className={classes.link}>
              Home
            </a>
            <a href="/about" className={classes.link}>
              About
            </a>
            <a href="/team" className={classes.link}>
              Team
            </a>
            <Button
              variant="gradient"
              className="bg-gradient-to-r from-lightteal to-teal outline outline-teal outline-1 "
            >
              <Link href="/upload">Try Accountable</Link>
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <Image src={Logo} width={200} height={50} alt="Accounting Logo" />
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider my="sm" className="text-teal" />
          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={`${classes.hiddenDesktop} text-teal font-semibold`}
          >
            <a href="/" className={classes.link}>
              Home
            </a>
            <a href="/about" className={classes.link}>
              About
            </a>
            <a href="/team" className={classes.link}>
              Team
            </a>
          </Group>

          <Divider my="sm" className="text-teal" />

          <Group position="center" grow pb="xl" px="md">
            <Button
              variant="gradient"
              className="bg-gradient-to-r from-lightteal to-teal outline outline-teal outline-1"
            >
              <Link href="/upload">Try Accountable</Link>
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

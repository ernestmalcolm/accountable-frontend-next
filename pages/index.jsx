import { Group, Button } from "@mantine/core";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Accountable</title>
      </Head>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-extrabold text-teal text-opacity-50 bg-clip-text  bg-gradient-to-r from-lightteal to-teal sm:text-5xl">
              An Accounting software powered by AI?!
            </h1>

            <p className="mt-4 text-teal sm:text-xl/relaxed">
              Yes!! Accountable lets you perform all the conventional accounting
              tasks but with the power of AI. Meaning a smart system with
              automations and many more
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Group position="center" grow pb="xl" px="md">
                <Button
                  variant="gradient"
                  className="bg-gradient-to-r from-lightteal to-teal outline outline-teal outline-1"
                >
                  <Link href="/upload">Try Accountable</Link>
                </Button>
              </Group>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

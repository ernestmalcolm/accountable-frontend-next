import Layout from "../components/layout";
import { MantineProvider } from '@mantine/core';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({
  Component,
  pageProps: { ...pageProps },
}) {
  return (<MantineProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout></MantineProvider>
  );
}



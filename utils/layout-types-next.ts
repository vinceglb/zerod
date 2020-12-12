import { NextComponentType, NextPage, NextPageContext } from 'next'
import type { AppProps } from 'next/app'

// export interface BobAppProps extends AppProps {
//   Component: NextComponentType<NextPageContext, any, unknown> & { Layout: Element }
// }

export type BobAppProps<P = Record<string, unknown>> = AppProps<P> & {
  Component: NextComponentType<NextPageContext, unknown, P> & {
    Layout?: React.FC | null
  }
}

export type BobPage<P = Record<string, unknown>> = NextPage<P> & {
  Layout?: React.FC | null
}

import PageTitle from '@/components/PageTitle'

import type { PropsWithChildren } from 'react'

type LayoutProps = object

function layout({ children }: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <div className="mb-4">
        <PageTitle title="Queue Managers" />
      </div>
      {children}
    </>
  )
}

export default layout

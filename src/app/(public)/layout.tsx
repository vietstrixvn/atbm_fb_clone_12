'use client';

import DefaultLayout from '@/components/layout/default.layout/layout';

export default function LayoutDefault({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DefaultLayout>
        <div>{children}</div>
      </DefaultLayout>
    </>
  );
}

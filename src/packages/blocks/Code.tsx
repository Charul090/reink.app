import 'highlight.js/styles/default.css'
import 'highlight.js/styles/grayscale.css'
// import 'styles/highlight-print.css'

import React, { HTMLAttributes } from 'react'
import clsx from 'clsx'

export function Code({ children, ...props }: React.ComponentProps<'code'>) {
  return (
    <code
      {...props}
      className={clsx(
        props.className,
        'theme-grayscale',
        'whitespace-pre-wrap',
        'inline',
        'hyphens-none',
        'w-full',
        'break-all',
        'p-0'
      )}
    >
      {children}
    </code>
  )
}

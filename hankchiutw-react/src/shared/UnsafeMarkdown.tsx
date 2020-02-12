import React from 'react';
import showdown from 'showdown';

showdown.setOption('openLinksInNewWindow', true);
const mdConverter = new showdown.Converter();

interface Props {
  className?: string;
  markdown: string;
}

function UnsafeMarkdown({
  className,
  markdown
}: Props) {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: mdConverter.makeHtml(markdown)
      }}
    />
  );
}

export default UnsafeMarkdown;

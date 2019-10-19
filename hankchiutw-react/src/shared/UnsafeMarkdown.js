import React from "react";
import showdown from "showdown";

showdown.setOption("openLinksInNewWindow", true);
const mdConverter = new showdown.Converter();

function UnsafeMarkdown({ className, markdown }) {
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

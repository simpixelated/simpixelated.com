import React from "react"
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script data-no-cookie async src="https://cdn.splitbee.io/sb.js" />,
  ])
}

import React from "react"
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script data-no-cookie async data-api="/_hive" src="/bee.js" />,
  ])
}

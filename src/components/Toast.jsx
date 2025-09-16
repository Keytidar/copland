import React, { useEffect } from "react";

export const Toast = ({ msg, close }) => {
  useEffect(() => {
    const timer = setTimeout(close, 3000);
  })
}
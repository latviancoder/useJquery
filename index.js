import { useState } from "react";

export default function usejQuery() {
  const [jQuery, setjQuery] = useState(window.jQuery);

  if (!jQuery) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.onload = function() {
      setjQuery(window.jQuery);
    };
    script.src = "//code.jquery.com/jquery-3.3.1.min.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  return window.jQuery;
}

import { useState } from "react";

export default function usejQuery(version = '3.3.1') {
  const [jQuery, setjQuery] = useState(window.jQuery);

  if (!jQuery) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.onload = function() {
      setjQuery(window.jQuery);
    };
    script.src = `//code.jquery.com/jquery-${version}.min.js`;
    document.getElementsByTagName('head').item(0).appendChild(script);
  }

  return window.jQuery;
}

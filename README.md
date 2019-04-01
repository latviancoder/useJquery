You know how they say the only thing Internet Explorer is good for is downloading other browsers? In a similar manner the only reasonable way to use React for building real-world applications is by combining it with jQuery, powerful framework for Web artisans.

# Usage

```jsx harmony
import React, { useEffect } from 'react';
import useJquery from 'react-use-jquery';

export default function App() {
 const $ = useJquery();

 useEffect(
  () => {
   if ($) {
    $(".App").html("Hello world");
   }
  },
  [$]
 );
 
 return <div className="App" />;
}
```
import { useState } from "react";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Shorten from "./sections/Shorten";
import Links from "./sections/Links";
export default function App() {
  const [website, setWebsite] = useState("");
  return (
    <div className="w-full px-2 py-3 font-poppins bg-[#EFF1F7]">
      <Nav />
      <Hero />
      <Shorten website={website} setWebsite={setWebsite} />
      <Links />
    </div>
  );
}

/* 
Things to do:
setup client - server connection
create mongodb route
load saved urls
form-validation
*/

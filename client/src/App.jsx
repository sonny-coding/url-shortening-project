import { useState } from "react";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Shorten from "./sections/Shorten";
import Links from "./sections/Links";
export default function App() {
  const [input, setInput] = useState("https://github.com/");
  const [addresses, setAddresses] = useState([]);
  const [refresh, setRefresh] = useState(true);
  return (
    <div className="w-full px-2 py-3 font-poppins bg-[#EFF1F7]">
      <Nav />
      <Hero />
      <Shorten input={input} setInput={setInput} setRefresh={setRefresh} />
      <Links
        addresses={addresses}
        setAddresses={setAddresses}
        refresh={refresh}
        setRefresh={setRefresh}
      />
    </div>
  );
}

/* 
Things to do:

copy function
form-validation
*/

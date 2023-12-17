import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Shorten from "./sections/Shorten";
export default function App() {
  // const handleSubmit = () => {
  //   alert("submit");
  // };
  return (
    <div className="w-full px-2 py-3 font-poppins">
      <Nav />
      <Hero />
      <Shorten />
    </div>
  );
}

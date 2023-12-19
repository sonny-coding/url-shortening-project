// eslint-disable-next-line react/prop-types
const Shorten = ({ input, setInput, setRefresh }) => {
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:3000/api/url";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address: input }),
      };
      const response = await fetch(url, options);
      const data = await response.json();
      setRefresh(true);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className=" mt-10 px-6 py-6 w-full h-auto bg-[url('assets/images/bg-shorten-mobile.svg')] bg-no-repeat bg-cover bg-primary-dark-violet rounded-2xl flex items-center justify-center
    "
    >
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full"
      >
        <input
          className="w-full p-4 rounded-lg text-[16px] leading-[20px] font-medium"
          type="text"
          value={input}
          placeholder="Shorten a link here..."
          onChange={handleChange}
        />
        <button
          className="w-full p-4 mt-4 text-white rounded-lg bg-primary-cyan text-[18px] leading-[20px] font-bold"
          type="submit"
        >
          Shorten It!
        </button>
      </form>
    </div>
  );
};

export default Shorten;

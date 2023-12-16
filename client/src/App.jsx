export default function App() {
  const handleSubmit = () => {
    alert("submit");
  };
  return (
    <div className="w-[1110px] h-[168px] flex justify-center items-center font-poppins">
      <form onSubmit={handleSubmit} action="" className="flex gap-5">
        <input className="" type="text" placeholder="Shorten a link here" />
        <button
          className="px-10 py-4 text-xl font-bold text-white rounded-md bg-primary-cyan"
          type="submit"
        >
          Shorten it!
        </button>
      </form>
    </div>
  );
}

const Shorten = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submit");
  };
  return (
    <div className=" mt-10 w-full h-[400px] bg-[url('assets/images/bg-shorten-mobile.svg')] bg-no-repeat bg-cover bg-primary-dark-violet rounded-2xl">
      <form action="" onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Shorten;

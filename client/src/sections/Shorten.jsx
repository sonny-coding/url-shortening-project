import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { urlValidatorString } from "../constants";

// eslint-disable-next-line react/prop-types
const Shorten = ({ input, setInput, setRefresh }) => {
  const schema = yup
    .object({
      userInput: yup
        .string("Must be a string")
        .required("Please enter a website!")
        .matches(urlValidatorString, "Please enter correct url!"),
    })
    .required();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //   const handleChange = (e) => {
  //     setInput(e.target.value);
  //   };

  const onSubmit = async () => {
    // e.preventDefault();

    // console.log(getValues("input"));
    try {
      const url = "http://localhost:3000/api/url";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address: getValues("userInput") }),
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
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center w-full"
      >
        <input
          className="w-full p-4 rounded-lg text-[16px] leading-[20px] font-medium"
          type="text"
          //   value={input}
          //   onChange={handleChange}
          placeholder="Shorten a link here..."
          {...register("userInput", { required: true })}
        />
        <p className="text-[40px]">{errors.userInput?.message}</p>
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

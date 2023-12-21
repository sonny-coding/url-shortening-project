import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { urlValidatorString } from "../constants";

// eslint-disable-next-line react/prop-types
const Shorten = ({ setRefresh }) => {
  const schema = yup
    .object({
      userInput: yup
        .string("Must be a string")
        .required("Please add a link")
        .matches(urlValidatorString, "Please use the correct url format"),
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
        className="flex flex-col items-center justify-center w-full gap-4 md:flex-row"
      >
        <div className="flex flex-col items-start justify-center">
          <input
            className={`w-full p-4 rounded-lg text-[16px] leading-[20px] font-medium  ${
              errors.userInput
                ? "ring-2 focus:ring-secondary-red border:ring-secondary-red"
                : "placeholder:text-neutral-gray"
            } focus:outline-none placeholder:text-secondary-red`}
            type="text"
            //   value={input}
            //   onChange={handleChange}
            placeholder="Shorten a link here..."
            {...register("userInput", { required: true })}
          />
          <div className="self-start w-full mt-2 min-h-[30px] ">
            <p className="text-[12px] leading-[18px] italic font-medium text-secondary-red">
              {errors.userInput?.message}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-auto h-full text-center">
          <button
            className={`w-full md:w-[188px] p-4 text-white rounded-lg bg-primary-cyan text-[18px] leading-[20px] font-bold`}
            type="submit"
          >
            Shorten It!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Shorten;

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
      if (response.ok) {
        setRefresh(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className=" mt-10 px-6 py-6 w-full h-auto bg-[url('assets/images/bg-shorten-mobile.svg')] bg-no-repeat bg-cover bg-primary-dark-violet rounded-2xl flex items-center justify-center
    "
    >
      <form action="" onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col items-start justify-center w-full md:flex-row md:gap-4">
          <input
            className={`w-full p-4 rounded-lg text-base md:text-xl font-medium focus:outline-none focus:ring-0 ring-0 ${
              errors.userInput
                ? "ring-2 focus:ring-2 focus:ring-secondary-red border:ring-secondary-red placeholder:text-secondary-red"
                : "placeholder:text-neutral-gray"
            }`}
            type="text"
            //   value={input}
            //   onChange={handleChange}
            placeholder="Shorten a link here..."
            {...register("userInput", { required: true })}
          />
          <div className="md:hidden self-start w-full mt-2 min-h-[20px]">
            <p className="text-xs italic font-medium text-secondary-red">
              {errors.userInput?.message}
            </p>
          </div>
          <button
            className={`w-full md:w-[188px] p-4 text-white rounded-lg bg-primary-cyan text-[18px] leading-[20px] md:text-xl font-bold mt-2 md:mt-0`}
            type="submit"
          >
            Shorten It!
          </button>
        </div>
        <div className="hidden md:block self-start mt-2 min-h-[24px] ">
          <p className="text-base italic font-medium text-secondary-red">
            {errors.userInput?.message}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Shorten;

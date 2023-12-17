const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <p className="font-bold text-[42px] leading-[48px] text-primary-dark-violet text-center">
        More than just shorter links
      </p>
      <p className="font-medium text-[18px] leading-[30px] text-neutral-gray text-center mt-4">
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <button className="px-10 py-3 mt-4 text-xl text-white rounded-full bg-primary-cyan">
        Get Started
      </button>
    </div>
  );
};

export default Hero;

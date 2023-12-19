import { websites } from "../constants";
const Links = () => {
  return (
    <div>
      {websites.map((each) => {
        return (
          <div
            key={each.index}
            className="flex flex-col items-center justify-center w-full"
          >
            {" "}
            <div className="w-full dividy-y-2"></div>
            <p className="text-[16px] leading-[36px] font-medium text-neutral-dark-violet">
              {each.longUrl}
            </p>
            <p className="text-[16px] leading-[36px] font-medium text-primary-cyan">
              {each.shortUrl}
            </p>
            <button className="w-full py-3 text-base font-bold text-white rounded-lg bg-primary-cyan">
              Copy
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Links;

import { websites } from "../constants";
const Links = () => {
  return (
    <div className="mt-4 space-y-5">
      {websites.map((each) => {
        return (
          <div
            key={each.longUrl}
            className="flex flex-col items-center justify-center w-full p-4 bg-white rounded-lg"
          >
            <div className="flex flex-col items-center justify-center w-full divide-y-[1px] text-[16px] leading-[36px] font-medium text-center [&>*]:w-full">
              <p className="text-neutral-dark-violet">{each.longUrl}</p>
              <p className="text-primary-cyan">{each.shortUrl}</p>
            </div>
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

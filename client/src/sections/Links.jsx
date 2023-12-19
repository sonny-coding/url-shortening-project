/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import copy from "copy-text-to-clipboard";
const Links = ({ addresses, setAddresses, refresh, setRefresh }) => {
  const [isCopiedLink, setIsCopiedLink] = useState("");
  const fetchAddress = async () => {
    try {
      const url = "http://localhost:3000/api/url";
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();
      setAddresses(data.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAddress();
  }, []);

  useEffect(() => {
    if (refresh) {
      fetchAddress();
    }
    setTimeout(() => {
      setRefresh(false);
    });
  }, [refresh]);
  return (
    <div className="mt-4 space-y-5">
      {addresses.map((address) => {
        return (
          <div
            key={address._id}
            className="flex flex-col items-center justify-center w-full p-4 bg-white rounded-lg"
          >
            <div className="flex flex-col items-center justify-center w-full divide-y-[1px] text-[16px] leading-[36px] font-medium text-center [&>*]:w-full">
              <p className="text-neutral-dark-violet">{address.long}</p>
              <p className="text-primary-cyan">{address.short}</p>
            </div>
            <button
              onClick={() => {
                copy(address.short);
                setIsCopiedLink(address._id);
              }}
              className={`w-full py-3 text-base font-bold text-white rounded-lg bg-primary-cyan ${
                address._id === isCopiedLink ? "opacity-50" : "opacity-100"
              }`}
            >
              {address._id === isCopiedLink ? "Copied!" : "Copy"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Links;

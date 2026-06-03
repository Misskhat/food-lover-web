"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const InputSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    let value = form.search.value;
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("search", value);
    router.push(`?${newParams.toString()}`);
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          className="px-1 py-1 border-2 my-5 w-2xs border-amber-400 focus:bg-amber-100  rounded"
          name="search"
          type="text"
          placeholder="Search your item name"
        />
        <input
          className="px-4 py-1 border-2 border-amber-400 mx-2 hover:bg-amber-400 hover:text-white rounded transition-all duration-200"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default InputSearch;

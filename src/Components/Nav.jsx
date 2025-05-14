import React from 'react'

const Nav = () => {
  return (
    <nav className="bg-zinc-100 h-full w-[15%] p-5 flex flex-col gap-1">
        <a
          className="py-3 px-3 border-solid rounded-lg mb-3 text-md text-zinc-500 font-medium"
          href="/create"
        >
          Add new product
        </a>

        <hr />
        <h1 className="text-xl mb-3 w-auto text-zinc-500">Category Filter</h1>
        <ul className="w-[80%]">
          <li className="opacity-60 flex items-center mb-3">
            <span className="text-lg rounded-full mr-2 w-[12px] h-[12px] bg-blue-300"></span>{" "}
            Category 1
          </li>
          <li className="opacity-60 flex items-center mb-3">
            <span className="rounded-full mr-2 w-[12px] h-[12px] bg-red-300"></span>{" "}
            Category 1
          </li>
          <li className="opacity-60 flex items-center mb-3">
            <span className="rounded-full mr-2 w-[12px] h-[12px] bg-green-300"></span>{" "}
            Category 1
          </li>
        </ul>
      </nav>
  )
}

export default Nav
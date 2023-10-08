import { BsCheckSquareFill } from "react-icons/bs";

const Ubuntu = () => {
    return (
        <div
      className="rounded-2xl shadow-md bg-gray-900 bg-opacity-50 backdrop-blur-lg text-white"
      key="3"
    >
      <div className="p-8 px-12 flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold">UBUNTU</h1>
        <p className="font-light">Perfect For Business</p>
        <h1 className="font-bold text-4xl">
          $5000<span className="text-base font-semibold">/month</span>
        </h1>
      </div>

      <div className="border-b border-b-teal-700 w-full"></div>

      <div className="p-8 px-12">
        <ul>
          <li className="flex p-1">
            <BsCheckSquareFill className="mr-2 mt-1 text-amber-400" />
            <span className="align-middle">
              All Access to Asante and Indaba
            </span>
          </li>{" "}
          <li className="flex p-1">
            <BsCheckSquareFill className="mr-2 mt-1 text-amber-400" />
            <span className="align-middle">
              Get sustainability reporting tools
            </span>
          </li>{" "}
          <li className="flex p-1">
            <BsCheckSquareFill className="mr-2 mt-1 text-amber-400" />
            <span className="align-middle">
              Access to cyber securtiy tools{" "}
            </span>
          </li>{" "}
          <li className="flex p-1">
            <BsCheckSquareFill className="mr-2 mt-1 text-amber-400" />
            <span className="align-middle">Product warranty for 1 years </span>
          </li>
        </ul>
      </div>
    </div>
    )
}

export default Ubuntu
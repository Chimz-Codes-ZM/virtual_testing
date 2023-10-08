import { BsCheckSquareFill } from "react-icons/bs";

const Indaba = () => {
  return (
    <div
      className="rounded-2xl shadow-md bg-gray-900 bg-opacity-50 backdrop-blur-lg text-white"
      key="2"
    >
      <div className="p-8 px-12 flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold">INDABA</h1>
        <p className="font-light">Perfect For Personal</p>
        <h1 className="font-bold text-4xl">
          $3500<span className="text-base font-semibold">/month</span>
        </h1>
        {/* <button className="border p-2 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 transition-colors text-white">
          Contact Us
        </button> */}
      </div>

      <div className="border-b border-b-teal-700 w-full"></div>

      <div className="p-8 px-12">
        <ul>
          <li className="flex p-1">
            <BsCheckSquareFill className="mr-2 mt-1 text-amber-400" />
            <span className="align-middle">10 days free trial</span>
          </li>
          <li className="flex p-1">
            <BsCheckSquareFill className="mr-2 mt-1 text-amber-400" />
            <span className="align-middle">
              Get access to unlimited dev teams
            </span>
          </li>
          <li className="flex p-1">
            <BsCheckSquareFill className="mr-2 mt-1 text-amber-400" />
            <span className="align-middle">24/7 customer support services</span>
          </li>
          <li className="flex p-1">
            <BsCheckSquareFill className="mr-2 mt-1 text-amber-400" />
            <span className="align-middle">
              Get real-time product dev insights
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Indaba;

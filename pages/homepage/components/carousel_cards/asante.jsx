import { BsCheckSquareFill } from "react-icons/bs";

const Asante = () => {
  return (
    <div
      className="rounded-2xl shadow-md bg-gray-900 bg-opacity-50 backdrop-blur-lg text-white"
      key="1"
    >
      <div className="p-8 px-12 flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold">ASANTE</h1>
        <p className="font-light">Perfect For Beginners</p>
        <h1 className="font-bold text-4xl">
          $2000<span className="text-base font-semibold">/month</span>
        </h1>

      </div>

      <div className="border-b border-b-teal-700 w-full"></div>

      <div className="p-8 px-12">
        <ul>
          <li className="flex p-1">
            <BsCheckSquareFill className="mr-2 mt-1 text-amber-400" />
            <span className="align-middle">10 days free trial</span>
          </li>{" "}
          <li className="flex p-1">
            <BsCheckSquareFill className="mr-2 mt-1 text-amber-400" />
            <span className="align-middle">
              Get access to customized dev teams
            </span>
          </li>
          <li className="flex p-1">
            <BsCheckSquareFill className="mr-2 mt-1 text-amber-400" />
            <span className="align-middle">24/7 customer support</span>
          </li>
          <li className="flex p-1">
            <BsCheckSquareFill className="mr-2 mt-1 text-amber-400" />
            <span className="align-middle">Free UI/UX product design</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Asante;

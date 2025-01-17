import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInput, setResult, clear } from "../redux/calculatorSlice";
import numbers from "../data/numbers.json";

const Calculator = () => {
  const dispatch = useDispatch();
  const { input, result } = useSelector((state) => state.calculator);

  const handleClick = (btn) => {
    if (btn === "=") {
      try {
        dispatch(setResult(eval(input)));
      } catch {
        dispatch(setResult("Error"));
      }
    } else if (btn === "C") {
      dispatch(clear());
    } else {
      dispatch(setInput(input + btn));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-80 bg-white rounded-lg shadow-md p-4">
        <p className="py-1 font-bold">calc</p>
        {/* Display */}
        <div className="bg-gray-100 rounded-md p-4 mb-4 text-right">
          <div className="text-2xl font-semibold text-gra y-800">
            {/* Result */}
            {result || "0"}
          </div>
          <div className="text-lg text-gray-500">{input || "0"}</div>
        </div>
        {/* Buttons */}
        <div className="grid grid-cols-4 gap-2">
          {numbers.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`py-3 text-lg font-medium rounded-md transition ${
                item === "="
                  ? "bg-green-500 text-white hover:bg-green-600 col-span-4"
                  : item === "0"
                  ? "bg-gray-200 text-gray-800 hover:bg-gray-300 col-span-1"
                  : item === "C"
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : ["+", "-", "*", "/"].includes(item)
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;

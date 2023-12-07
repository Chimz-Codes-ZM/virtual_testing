import React from 'react'
import { GrStatusGood } from "react-icons/gr";


const JobAdded = ({message, alertDismiss}) => {
    return (
        <div className="z-[999] max-w-[500px]">
          <div
            role="alert"
            class="rounded-xl border bg-white px-4 py-1 shadow-xl"
          >
            <div class="flex items-start gap-4">
              <span class="text-green-400 text-2xl">
              <GrStatusGood />
              </span>
    
              <div class="flex-1">
                <strong class="block font-medium text-gray-900">
                  {" "}
                  Success
                </strong>
    
                <p class="mt-1 text-sm text-gray-700">{message}</p>
              </div>
    
              <button
                class="text-gray-500 transition hover:text-gray-600"
                type="button"
                onClick={alertDismiss}
              >
                <span class="sr-only">Dismiss popup</span>
    
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      );
}

export default JobAdded

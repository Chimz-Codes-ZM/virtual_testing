import React from 'react'

function Missing_fields(props) {
  return (
    <div className={`fixed top-10 md:bottom-10 md:left-10 z-50 max-w-[450px] ${props.isRattling ? 'animate-rattle' : ''}`}>
         <div role="alert" class="rounded border-s-4 border-orange-500 bg-orange-50 p-4">
      <div class="flex items-center gap-2 text-orange-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clip-rule="evenodd"
          />
        </svg>

        <strong class="block font-medium"> Something went wrong </strong>
      </div>

      <p class="mt-2 text-sm text-orange-700">
      Some fields may be missing. Please ensure all fields contain valid data.
      </p>
    </div> 
    </div>
  )
}

export default Missing_fields
const size = "28px";

function pencilIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 22 22"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      height="26px"
      width="26px"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
      />
    </svg>
  );
}

function selectionIcon() {
  return (
    <svg
      fill="#000000"
      height={size}
      width={size}
      viewBox="0 0 250 210"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M148,40a4.0002,4.0002,0,0,1-4,4H112a4,4,0,0,1,0-8h32A4.0002,4.0002,0,0,1,148,40Zm-4,172H112a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8ZM208,36H184a4,4,0,0,0,0,8h24a4.00458,4.00458,0,0,1,4,4V71.99951a4,4,0,0,0,8,0V48A12.01375,12.01375,0,0,0,208,36Zm8,71.99951a4.0002,4.0002,0,0,0-4,4v32a4,4,0,0,0,8,0v-32A4.0002,4.0002,0,0,0,216,107.99951Zm0,72a4.0002,4.0002,0,0,0-4,4V208a4.00458,4.00458,0,0,1-4,4H184a4,4,0,0,0,0,8h24a12.01375,12.01375,0,0,0,12-12V183.99951A4.0002,4.0002,0,0,0,216,179.99951Zm-176-32a4.0002,4.0002,0,0,0,4-4v-32a4,4,0,1,0-8,0v32A4.0002,4.0002,0,0,0,40,147.99951ZM72,212H48a4.00458,4.00458,0,0,1-4-4V183.99951a4,4,0,0,0-8,0V208a12.01375,12.01375,0,0,0,12,12H72a4,4,0,0,0,0-8ZM72,36H48A12.01375,12.01375,0,0,0,36,48V71.99951a4,4,0,0,0,8,0V48a4.00458,4.00458,0,0,1,4-4H72a4,4,0,0,0,0-8Z" />
    </svg>
  );
}

function lineIcon() {
  return (
    <svg
      fill="#000000"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.293,20.707a1,1,0,0,1,0-1.414l16-16a1,1,0,1,1,1.414,1.414l-16,16A1,1,0,0,1,3.293,20.707Z" />
    </svg>
  );
}

function circleIcon() {
  return (
    <svg
      height="26px"
      width="26px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function bgColorIcon() {
  return (
    <svg
      width="28px"
      height="28px"
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M125.667 518.667L241 634C322 715 349.667 713.667 429.667 634L615.333 448.333C680 383.667 696.333 340.667 615.333 259.665L500 144.332C413.667 57.9987 376 79.6653 311.333 144.332L125.667 329.999C46 410 39.3334 432.333 125.667 518.667Z"
        stroke="#292D32"
        strokeWidth="40"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M640 559.667L618 596C587 647.667 611 690 671.333 690C731.667 690 755.667 647.667 724.667 596L702.667 559.667C685.333 531 657 531 640 559.667Z"
        stroke="#292D32"
        strokeWidth="40"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M66.6667 408.003C252 357.67 447.333 356.003 633.333 403.67L650 408.003"
        stroke="#292D32"
        strokeWidth="40"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { pencilIcon, selectionIcon, lineIcon, bgColorIcon, circleIcon };

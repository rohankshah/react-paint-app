const size = "28px";

function pencilIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      height={size}
      width={size}
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

export { pencilIcon, selectionIcon };

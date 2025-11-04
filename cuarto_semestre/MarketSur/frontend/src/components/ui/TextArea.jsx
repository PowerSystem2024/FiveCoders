import { forwardRef } from 'react';

export const TextArea = forwardRef(({ children, row, rows, className = '', ...rest }, ref) => {
  const textareaRows = rows || row || undefined;
  return (
    <textarea
      className={"bg-zinc-800 px-3 py-2 block my-2 w-full " + className}
      rows={textareaRows}
      {...rest}
      ref={ref}
    >
      {children}
    </textarea>
  );
});

export default TextArea;
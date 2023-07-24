// import { cn } from "@/lib/utils";
// import { cva, VariantProps } from "class-variance-authority";
// import { InputHTMLAttributes, FC } from "react";

// export const inputVariants = cva(
//   "border-none w-full outline-none rounded-lg focus:outline-none disabled:opacity-50 disabled:pointer-events-none ",
//   {
//     variants: {
//       varirant: {
//         default: " text-white bg-box  ",
//       },
//       size: { default: "px-4 py-[0.63rem] md:py-3 md:px-6" },
//     },
//     defaultVariants: { varirant: "default", size: "default" },
//   }
// );

// export interface InputProps
//   extends InputHTMLAttributes<HTMLInputElement>,
//     VariantProps<typeof inputVariants> {
//   isLoading?: boolean;
// }

// const Input: FC<InputProps> = ({
//   className,
//   children,
//   variant,
//   size,
//   ...props
// }) => {
//   return (
//     <input
//       className={cn(inputVariants({ variant, size, className }))}
//       {...props}
//     />
//   );
// };

// export default Input;

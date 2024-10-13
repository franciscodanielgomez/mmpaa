import { cx } from "@/utils/all";

export default function Container({ children, className, fullWidth, fullScreen, large, alt }) {
  return (
    <div
      className={cx(
        // Base styles
        "w-full mx-auto",

        // FullScreen styles
        fullScreen && "min-h-screen flex flex-col justify-center items-center",

        // Width control
        !fullScreen && !fullWidth && "container px-4 md:px-8",

        // Max width control
        !fullScreen && (large ? "max-w-screen-xl" : "max-w-screen-lg"),

        // Padding for non-fullScreen and non-alt cases
        !fullScreen && !alt && "py-5 lg:py-8",

        // Custom className
        className
      )}
    >
      {children}
    </div>
  );
}
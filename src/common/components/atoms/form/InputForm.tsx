import classNames from "classnames";
import { forwardRef, InputHTMLAttributes, useState } from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  (
    {
      id,
      label,
      icon,
      className,
      labelClasses,
      type,
      inputClasses,
      errors,
      errorClass,
      ...rest
    },
    ref
  ) => {
    const [inputType, setInputType] = useState(type);
    const [showPassword, setShowPassword] = useState(false);

    const isPasswordField = type === "password";

    const togglePassword = () => {
      setShowPassword(!showPassword);
      setInputType(showPassword ? "password" : "text");
    };

    const showInputInfo = label || icon;

    return (
      <>
        <div
          className={classNames(className, "flex flex-col !flex-nowrap gap-2")}
        >
          {showInputInfo && (
            <div className="flex gap-2 !flex-nowrap items-center">
              {label && (
                <label
                  htmlFor={id}
                  className={classNames(labelClasses, "text-sm font-semibold")}
                >
                  {label}
                </label>
              )}
            </div>
          )}
          <div>
            <div className="relative">
              <input
                id={id}
                ref={ref}
                type={inputType}
                className={classNames(
                  { "pr-10": isPasswordField },
                  inputClasses,
                  "w-full p-3 border border-neutral-border rounded-md focus:outline-none focus:border-primary-main"
                )}
                {...rest}
              />
              {isPasswordField && (
                <button
                  onClick={togglePassword}
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {!showPassword && (
                    <FaRegEye
                      className="text-neutral-text"
                      height="20"
                      width="20"
                    />
                  )}
                  {showPassword && (
                    <FaRegEyeSlash
                      className="text-neutral-text"
                      height="20"
                      width="20"
                    />
                  )}
                </button>
              )}
            </div>
            {errors && (
              <p
                className={classNames(
                  errorClass,
                  "text-xs text-red-500 mt-1 mb-0"
                )}
              >
                {errors?.message}
              </p>
            )}
          </div>
        </div>
      </>
    );
  }
);

InputForm.displayName = "InputForm";

type InputFormType = {
  label?: string;
  className?: string;
  labelClasses?: string;
  inputClasses?: string;
  errorClass?: string;
  errors?: FieldError;
  icon?: IconType;
};

type InputFormProps = InputFormType & InputHTMLAttributes<HTMLInputElement>;

export default InputForm;

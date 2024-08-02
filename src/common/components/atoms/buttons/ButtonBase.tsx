import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

const ButtonBase = ({
  text,
  className,
  iconClasses,
  icon: Icon,
  ...rest
}: ButtonBaseProps) => {
  return (
    <button
      className={classNames(
        className,
        "p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      )}
      {...rest}
    >
      <span>{text}</span>
      {Icon && (
        <Icon
          height="1.25em"
          width="1.25em"
          className={classNames(iconClasses)}
        />
      )}
    </button>
  );
};

type ButtonBaseType = {
  text: string | JSX.Element;
  className?: string;
  iconClasses?: string;
  icon?: IconType;
};

type ButtonBaseProps = ButtonBaseType & ButtonHTMLAttributes<HTMLButtonElement>;

export default ButtonBase;

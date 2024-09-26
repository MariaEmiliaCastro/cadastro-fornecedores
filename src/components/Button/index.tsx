import { ButtonWrapper } from "./styles";

export type ButtonProps = {
  text?: string;
  ariaLabel?: string;
  icon?: React.ReactNode;
  rounded?: boolean;
  type?: "button" | "submit" | "reset";
  variant: "primary" | "secondary" | "delete" | "link";
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
};

const Button = ({
  text,
  ariaLabel,
  icon,
  rounded = false,
  variant = "primary",
  type,
  disabled = false,
  href,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonWrapper
      as={href ? "a" : "button"}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      rounded={rounded ? 1 : 0}
      className={`button button--${variant} button--disabled-${disabled}`}
      type={type}
      href={href ? href : undefined}
      target="_blank"
    >
      {icon}
      {text}
    </ButtonWrapper>
  );
};

export default Button;

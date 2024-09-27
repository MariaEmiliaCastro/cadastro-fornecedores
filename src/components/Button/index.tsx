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
  openInNewTab?: boolean;
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
  openInNewTab,
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
      target={openInNewTab ? "_blank" : undefined}
    >
      {icon}
      {text}
    </ButtonWrapper>
  );
};

export default Button;

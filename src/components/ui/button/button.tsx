import { ComponentProps, ReactElement } from "react";

import { Link } from "react-router";

import clsx from "clsx";

import styles from "./button.module.css";

export type ButtonVariant = "default" | "primary" | "danger";
export type ButtonShape = "solid" | "outlined";
export type ButtonSize = "medium" | "large";
export type ButtonPosition = "default" | "inline";

type CommonProps = {
  variant?: ButtonVariant;
  shape?: ButtonShape;
  size?: ButtonSize;
  position?: ButtonPosition;
};

type ButtonProps = ComponentProps<"button"> & CommonProps;

type ButtonLinkProps = ComponentProps<typeof Link> & CommonProps;

export function Button({
  variant = "default",
  shape = "solid",
  size = "medium",
  position = "default",
  className,
  children,
  ...otherProps
}: ButtonProps): ReactElement {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[shape],
        styles[size],
        styles[position],
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "default",
  shape = "solid",
  size = "medium",
  position = "default",
  className,
  to,
  children,
  ...otherProps
}: ButtonLinkProps): ReactElement {
  return (
    <Link
      to={to}
      className={clsx(
        styles.button,
        styles[variant],
        styles[shape],
        styles[size],
        styles[position],
        className
      )}
      {...otherProps}
    >
      {children}
    </Link>
  );
}

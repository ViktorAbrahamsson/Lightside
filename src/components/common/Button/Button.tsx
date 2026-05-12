import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

type ButtonVariant = 'primary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button';
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsAnchor = AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: 'a';
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button({ variant = 'primary', size = 'md', as, ...props }: ButtonProps) {
  const className = [
    styles.button,
    styles[`button--${variant}`],
    size !== 'md' ? styles[`button--${size}`] : '',
    (props as { className?: string }).className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  if (as === 'a') {
    const { ...anchorProps } = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return <a {...anchorProps} className={className} />;
  }

  const { ...buttonProps } = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return <button {...buttonProps} className={className} />;
}

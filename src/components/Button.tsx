import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'hero-cta' | 'form-cta';
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  href,
  onClick,
  type = 'button',
}) => {
  const baseStyles = 'inline-flex items-center justify-center uppercase transition-all duration-300 ease-in-out cursor-pointer text-center whitespace-nowrap';

  const variants = {
    primary: 'font-label-caps text-label-caps bg-on-background text-surface px-6 py-2.5 hover:bg-primary-container hover:scale-105',
    outline: 'font-label-caps text-label-caps border border-surface/30 px-10 py-5 hover:bg-surface hover:text-on-background',
    ghost: 'font-label-caps text-label-caps text-on-background hover:text-primary',
    'hero-cta': 'font-display-lg text-body-lg font-bold tracking-tighter bg-primary-container text-on-primary-container px-10 py-5 border border-transparent hover:bg-on-background hover:text-surface hover:border-surface/30 active:scale-95',
    'form-cta': 'font-label-caps text-label-caps w-full bg-primary-container hover:bg-on-background text-white py-4 tracking-[0.15em] transform hover:scale-[1.01] active:scale-95 mt-2',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button;

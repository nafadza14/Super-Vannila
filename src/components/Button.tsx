import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  target,
  rel,
  className = '',
  ...props
}) => {
  let baseStyles = 'inline-flex items-center justify-center font-sans text-sm md:text-base font-medium transition-all duration-200 cursor-pointer select-none active:scale-[0.98] text-center whitespace-nowrap';

  let variantStyles = '';

  if (variant === 'primary') {
    variantStyles = 'bg-[#051A24] text-white rounded-full px-7 py-3 shadow-button-primary hover:bg-[#092736]';
  } else if (variant === 'secondary') {
    variantStyles = 'bg-white text-[#051A24] rounded-full px-7 py-3 shadow-button-secondary hover:bg-[#F8FAFC]';
  } else if (variant === 'tertiary') {
    variantStyles = 'bg-white text-[#0D212C] rounded-full px-7 py-3 shadow-button-tertiary hover:bg-[#F8FAFC]';
  }

  const combinedClasses = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={combinedClasses}
        id={props.id}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;

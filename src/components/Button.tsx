import { ReactNode } from 'react';
import Image from 'next/image';

// Define button variants and their corresponding styles
const variants = {
    primary: 'bg-purple-700 text-white hover:bg-purple-800',
    secondary: 'text-gray-700 border border-purple-700 hover:bg-purple-200',
};

interface ButtonProps {
    variant?: keyof typeof variants;
    children: ReactNode;
    icon?: string;
    iconAlt?: string;
    className?: string;
    onClick?: () => void;
}

/**
 * Button component that can be used throughout the application
 * Supports primary and secondary variants, optional icons, and custom classes
 */
const Button = ({
    variant = 'primary',
    children,
    icon,
    iconAlt,
    className = '',
    onClick,
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`
        inline-flex items-center justify-center px-6 py-3 cursor-pointer 
        rounded-md font-medium transition-colors duration-200 
        ${variants[variant]} 
        ${className}
      `}
        >
            {icon && (
                <Image
                    src={icon}
                    alt={iconAlt || 'Button icon'}
                    width={20}
                    height={20}
                    className="mr-2"
                />
            )}
            {children}
        </button>
    );
};

export default Button; 
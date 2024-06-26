import React from 'react';
import clsx from 'classnames';

export interface ButtonLinkProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLDivElement
    >,
    React.AriaAttributes {
  //   StartIcon?: React.FC<IconProps>;
  EndIcon?: React.FC<React.SVGAttributes<HTMLOrSVGElement>>;
  size: 1 | 2 | 3 | 4 | 5;
  highContrast?: boolean;
  noUnderline?: boolean;
}

const sizeClasses: Record<number, string> = {
  2: 'medium-3 ',
  3: 'semibold-4',
  4: 'semibold-5',
};

const iconSizeClasses: Record<number, string> = {
  2: 'w-5 h-auto',
};

const contrastClasses: Record<'high' | 'low', string> = {
  high: 'text-neutral-alpha-12 hover:text-neutral-alpha-11 border-neutral-alpha-12 hover:border-neutral-alpha-7',
  low: 'hover:text-neutral-alpha-12 text-neutral-alpha-11 hover:border-neutral-alpha-12 border-neutral-alpha-7',
};
const ButtonLink: React.FC<ButtonLinkProps> = (props) => {
  const { className, highContrast, size, noUnderline, children, EndIcon } =
    props;
  const contrast = highContrast ? 'high' : 'low';
  return (
    <div
      className={clsx(
        noUnderline ? 'flex gap-[6px]' : 'inline-block border-b',
        contrastClasses[contrast],
        sizeClasses[size],
        className
      )}
    >
      {children}

      {EndIcon && (
        <span>
          <EndIcon className={iconSizeClasses[size]} />
        </span>
      )}
    </div>
  );
};

export default ButtonLink;

import React from 'react';

const ServerIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (props) => {
  const { ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      fill='none'
      viewBox='0 0 20 20'
      {...rest}
    >
      <path
        fill={'currentColor'}
        fillRule='evenodd'
        d='M16.667 4.583c0-.628-.36-1.113-.754-1.447-.4-.337-.928-.604-1.508-.81-1.167-.417-2.724-.66-4.405-.66-1.68 0-3.238.243-4.405.66-.58.206-1.108.473-1.508.81-.395.334-.754.82-.754 1.447v3.75c0 .628.36 1.114.754 1.448.4.337.928.603 1.508.81 1.167.417 2.725.659 4.405.659 1.68 0 3.238-.242 4.405-.659.58-.207 1.108-.473 1.508-.81.395-.334.754-.82.754-1.448v-3.75zM5.163 4.41a.624.624 0 00-.158.174.624.624 0 00.158.175c.19.16.517.344.992.514.945.337 2.304.561 3.845.561 1.541 0 2.9-.224 3.845-.561.475-.17.801-.353.992-.514a.623.623 0 00.158-.175.623.623 0 00-.158-.174c-.19-.161-.517-.344-.992-.514-.945-.337-2.304-.562-3.845-.562-1.541 0-2.9.225-3.845.562-.475.17-.801.353-.992.514z'
        clipRule='evenodd'
      ></path>
      <path
        fill={'currentColor'}
        d='M14.966 12.16c.567-.202 1.166-.477 1.7-.857v4.114c0 .628-.358 1.113-.753 1.447-.4.337-.928.603-1.508.81-1.167.417-2.724.66-4.405.66-1.68 0-3.238-.243-4.405-.66-.58-.207-1.108-.473-1.508-.81-.395-.334-.754-.82-.754-1.447v-4.114c.535.38 1.134.655 1.701.858 1.39.496 3.146.756 4.966.756 1.82 0 3.576-.26 4.966-.756z'
      ></path>
    </svg>
  );
};

export default ServerIcon;

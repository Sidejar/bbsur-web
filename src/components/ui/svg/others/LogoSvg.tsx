import React from 'react';

const LogoSvg: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (props) => {
  const { ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='133'
      height='32'
      fill='none'
      viewBox='0 0 133 32'
      {...rest}
    >
      <path
        fill='#1F2327'
        d='M1.148 22V10.36h2.086v4.812h5.407v-4.813h2.086V22H8.64v-5.07H3.234V22H1.148zm11.875 0V10.36h7.618v1.757h-5.532v3.133h5.125v1.734H15.11v3.258h5.563V22h-7.649zm8.883 0l4.07-11.64h2.649L32.773 22h-2.289l-2.062-6.055a59.78 59.78 0 01-.633-2.11c-.219-.78-.463-1.676-.734-2.687h.453c-.26 1.016-.498 1.917-.711 2.704a53.723 53.723 0 01-.61 2.093L24.18 22h-2.274zm2.375-2.875v-1.68h6.11v1.68h-6.11zM34.29 22V10.36h2.086v9.882h5.172V22h-7.258zm6.984-9.883V10.36h9.274v1.758h-3.594V22h-2.078v-9.883h-3.602zM52.32 22V10.36h2.086v4.812h5.407v-4.813h2.085V22h-2.086v-5.07h-5.406V22H52.32z'
      ></path>
      <path
        fill='#E49537'
        d='M68 16c0-8.837 7.163-16 16-16h45a4 4 0 014 4v12c0 8.837-7.163 16-16 16H72a4 4 0 01-4-4V16z'
      ></path>
      <path
        fill='#1F2327'
        d='M77.148 22V10.36h2.086v9.882h5.172V22h-7.258zm13.547.156c-1.02 0-1.935-.237-2.742-.71-.807-.475-1.445-1.157-1.914-2.048-.463-.895-.695-1.966-.695-3.21 0-1.25.232-2.32.695-3.211.469-.896 1.107-1.581 1.914-2.055.807-.48 1.721-.719 2.742-.719s1.933.24 2.735.719c.807.474 1.442 1.159 1.906 2.055.469.89.703 1.96.703 3.21 0 1.245-.234 2.316-.703 3.211-.464.891-1.099 1.573-1.906 2.047-.802.474-1.714.711-2.735.711zm0-1.867c.636 0 1.196-.156 1.68-.469.49-.317.872-.78 1.148-1.39.282-.615.422-1.362.422-2.242 0-.891-.14-1.641-.422-2.25-.276-.615-.658-1.079-1.148-1.391-.484-.318-1.044-.477-1.68-.477-.635 0-1.198.16-1.687.477-.49.312-.875.776-1.156 1.39-.276.615-.415 1.365-.415 2.25 0 .88.139 1.628.415 2.243.28.61.666 1.073 1.156 1.39.49.313 1.052.47 1.687.47zm12.313 1.867c-1.073 0-2.016-.242-2.828-.726-.808-.485-1.438-1.172-1.89-2.063-.454-.896-.68-1.953-.68-3.172 0-1.25.231-2.32.695-3.21.468-.896 1.104-1.584 1.906-2.063.807-.48 1.719-.719 2.734-.719.641 0 1.24.094 1.797.281a4.766 4.766 0 011.485.805 4.388 4.388 0 011.632 2.805h-2.125a3.129 3.129 0 00-.39-.844 2.486 2.486 0 00-1.391-1.04 3.229 3.229 0 00-.976-.14c-.636 0-1.201.16-1.696.477-.495.318-.883.784-1.164 1.398-.276.61-.414 1.354-.414 2.235 0 .875.138 1.62.414 2.234.281.61.669 1.076 1.164 1.398.5.318 1.078.477 1.735.477.593 0 1.109-.115 1.546-.344.438-.229.774-.554 1.008-.976.24-.422.36-.917.36-1.485l.492.07h-3.18v-1.64h4.719v1.399c0 .994-.214 1.854-.641 2.578a4.398 4.398 0 01-1.758 1.68c-.744.39-1.596.585-2.554.585zm9.023-11.797V22h-2.086V10.36h2.086zM113.555 22l4.718-6.727v1.57l-4.382-6.484h2.406l1.414 2.133c.234.35.43.664.586.945.156.277.299.545.43.805l.437.844h-.5c.162-.297.307-.576.438-.836.135-.26.283-.531.445-.813.161-.28.359-.596.594-.945l1.437-2.133h2.352l-4.328 6.375v-1.507L124.234 22h-2.445l-1.766-2.617a27.476 27.476 0 01-.523-.813c-.141-.229-.271-.45-.391-.664l-.39-.734h.351c-.14.265-.271.508-.39.726a19.044 19.044 0 01-.93 1.484L115.953 22h-2.398z'
      ></path>
    </svg>
  );
};

export default LogoSvg;

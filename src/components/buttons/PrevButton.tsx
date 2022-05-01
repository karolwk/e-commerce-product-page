import './PrevButton.css';

interface PrevButtonProps {
  onClick(): void;
  btnClass?: string;
  iconClass?: string;
}

const PrevButton: React.FC<PrevButtonProps> = ({
  onClick,
  btnClass = 'prev-btn',
  iconClass = 'prev-btn-icon',
}) => {
  return (
    <button aria-label="previous" className={btnClass} onClick={onClick}>
      <svg
        className={iconClass}
        width="12"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 1 3 9l8 8"
          stroke="#1D2026"
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default PrevButton;

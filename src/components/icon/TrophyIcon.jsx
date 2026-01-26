export default function TrophyIcon({ className = "" }) {
    return (
        <svg
            viewBox="0 0 64 64"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M22 10h20v10c0 8.284-6.716 15-15 15h-10V10z"
                fill="#E9E9E9"
                stroke="#B9B9B9"
                strokeWidth="2"
            />
            <path
                d="M42 10h6c3.314 0 6 2.686 6 6v2c0 8.837-7.163 16-16 16h-1"
                stroke="#B9B9B9"
                strokeWidth="2"
            />
            <path
                d="M22 10h-6c-3.314 0-6 2.686-6 6v2c0 8.837 7.163 16 16 16h1"
                stroke="#B9B9B9"
                strokeWidth="2"
            />
            <path
                d="M26 35h12v7c0 3.866-3.134 7-7 7h-2c-3.866 0-7-3.134-7-7v-7z"
                fill="#E9E9E9"
                stroke="#B9B9B9"
                strokeWidth="2"
            />
            <path
                d="M22 55h20"
                stroke="#B9B9B9"
                strokeWidth="3"
                strokeLinecap="round"
            />
            <path
                d="M28 49h8v6h-8z"
                fill="#E9E9E9"
                stroke="#B9B9B9"
                strokeWidth="2"
            />
        </svg>
    );
}

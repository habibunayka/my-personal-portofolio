export function OtherIcon({ className = "" }) {
    return (
        <svg
            viewBox="0 0 60 60"
            className={`w-12 h-12 ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
        >
            <path
                d="M22.5 55H37.5C50 55 55 50 55 37.5V22.5C55 10 50 5 37.5 5H22.5C10 5 5 10 5 22.5V37.5C5 50 10 55 22.5 55Z"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M39.9913 30H40.0135"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M29.9888 30H30.0113"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19.9863 30H20.0087"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

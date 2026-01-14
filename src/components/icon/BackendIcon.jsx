export function BackendIcon({ className = "" }) {
    return (
        <svg
            viewBox="0 0 60 60"
            className={`w-12 h-12 ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
        >
            <path
                d="M10 45V15"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
            />
            <path
                d="M50 15V45"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
            />
            <path
                d="M30 25C41.0457 25 50 20.5228 50 15C50 9.47715 41.0457 5 30 5C18.9543 5 10 9.47715 10 15C10 20.5228 18.9543 25 30 25Z"
                stroke="currentColor"
                strokeWidth="5"
            />
            <path
                d="M50 30C50 35.5227 41.0457 40 30 40C18.9543 40 10 35.5227 10 30"
                stroke="currentColor"
                strokeWidth="5"
            />
            <path
                d="M50 45C50 50.5227 41.0457 55 30 55C18.9543 55 10 50.5227 10 45"
                stroke="currentColor"
                strokeWidth="5"
            />
        </svg>
    );
}

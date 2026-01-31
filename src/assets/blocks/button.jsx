export function Button({ children, className }) {
    return (
        <button className={className + " px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-200"}>
            {children}
        </button>
    )
}
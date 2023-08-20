export default function Input({name, ref, label, type}) {
    return (
        <label htmlFor={name}>
            <span className={`${type}-label`}>{label}</span>
            <input ref={ref} type={type} id={name} name={name} />
        </label>
    )
}
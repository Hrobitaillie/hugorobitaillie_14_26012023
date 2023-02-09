export default function InputText({ name, label, isRequired, onChange, type }) {

    const handleChange = (e) => {
        onChange(e.target.value)
    }
  return (
    <div className="w-full flex gap-6 h-8 items-center">
      <label 
        htmlFor={name}
        className=" shrink-0 h-full flex items-center w-28 font-semibold text-sm"
      >
        {label}
        {isRequired && <span className="text-green">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={isRequired}
        className=" w-full shadow-header rounded-md h-full focus-visible:outline-0 px-3 py-2"
        onChange={handleChange}
      />
    </div>
  );
}

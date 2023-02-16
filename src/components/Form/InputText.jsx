import { PropTypes } from "prop-types"

export default function InputText({ name, label, isRequired, onChange, type, isFullfiled }) {

    const handleChange = (e) => {
        onChange(e.target.value)
    }
  return (
    <div className="w-full flex gap-6 items-start">
      <label 
        htmlFor={name}
        className=" shrink-0 flex items-center w-28 font-semibold text-sm h-8"
      >
        {label}
        {isRequired && <span className="text-green">*</span>}
      </label>
      <div className="w-full">
        <input
          type={type}
          id={name}
          name={name}
          required={isRequired}
          className=" w-full shadow-header rounded-md h-full focus-visible:outline-0 px-3 py-2"
          onChange={handleChange}
        />
        {isFullfiled==false && (
          <span className=" text-red ">This field is required</span>
        )}
      </div>
    </div>
  );
}

InputText.propTypes = {
  name : PropTypes.string,
  label : PropTypes.string,
  isRequired : PropTypes.bool,
  onChange : PropTypes.func,
  type : PropTypes.string,
  isFullfiled : PropTypes.func
}
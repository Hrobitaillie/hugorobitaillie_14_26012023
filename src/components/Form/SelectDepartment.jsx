import { MenuItem, Select } from "@mui/material";
import { PropTypes } from "prop-types"

export default function SelectDepartment({ id, label, defaultValue, isRequired, onChange, DepartmentList }) {

    const handleChange = (e) => {
        onChange(e.target.value)
    }
  return (
    <div className="w-full flex gap-6 h-8 items-center">
      <label 
        htmlFor={id}
        className=" shrink-0 h-full flex items-center w-28 font-semibold text-sm"
      >
        {label}
        {isRequired && <span className="text-green">*</span>}
      </label>
      <Select
        id={id}
        label={label}
        defaultValue={defaultValue}
        onChange={handleChange}
        required={isRequired}
        className="w-full shadow-header rounded-md h-full"
        sx={{'& .MuiOutlinedInput-notchedOutline': {
            borderWidth:'0px !important',
            outline:'none'
          },
        }}
      >
        <MenuItem value={defaultValue} disabled>{defaultValue}</MenuItem>

        {DepartmentList.map((department, index)=> {
            return <MenuItem key={index} value={department}>{department}</MenuItem>
        })}
          
      </Select>
    </div>
  );
}
SelectDepartment.propTypes = {
  id : PropTypes.string,
  label : PropTypes.string,
  defaultValue : PropTypes.string,
  isRequired : PropTypes.bool,
  onChange : PropTypes.func,
  StateList : PropTypes.array
}
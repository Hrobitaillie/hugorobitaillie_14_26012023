import { MenuItem, Select } from "@mui/material";

export default function SelectDepartment({ id, label, defaultValue, isRequired, onChange, DepartmentList }) {

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

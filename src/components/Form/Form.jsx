import { useState } from "react";
import InputText from "./InputText";
import StateList from "../../assets/data/StatesList.json"
import DepartmentList from "../../assets/data/DepartmentList.json"
import SelectState from "./SelectState";
import SelectDepartment from "./SelectDepartment";
import { faker } from "@faker-js/faker";
import { PropTypes } from "prop-types";

export default function Form({onClick}){

    // define Employee object to store new employee datas
    const [Employee, SetEmployee] = useState({
        employeeid: faker.datatype.uuid(),
        firstname : "",
        lastname : "",
        birthdate : "",
        startdate : "",
        street : "",
        city : "",
        state : "",
        zipcode : "",
        department : "",
    })

    // define states to validate forms fields
    const [isFirstName, validateFirstName] = useState()
    const [isLastName, validateLastName] = useState()
    const [isBirthDate, validateBirthDate] = useState()
    const [isStartDate, validateStartDate] = useState()
    const [isStreet, validateStreet] = useState()
    const [isCity, validateCity] = useState()
    const [isState, validateState] = useState()
    const [isZipCode, validateZipCode] = useState()
    const [isDepartment, validateDepartment] = useState()

    /*!SECTION
        When a field is changed, update the Employee object and check if should display error message
    */
        function setFirstName(e){
            SetEmployee({...Employee, firstname: e})
            e ? validateFirstName(true) : validateFirstName(false)
        }
        function setLastName(e){
            SetEmployee({...Employee, lastname: e})
            e ? validateLastName(true) : validateLastName(false)
        }
        function setBirthDate(e){
            SetEmployee({...Employee, birthdate: e})
            e ? validateBirthDate(true) : validateBirthDate(false)
        }
        function setStartDate(e){
            SetEmployee({...Employee, startdate: e})
            e ? validateStartDate(true) : validateStartDate(false)
        }
        function setStreet(e){
            SetEmployee({...Employee, street: e})
            e ? validateStreet(true) : validateStreet(false)
        }
        function setCity(e){
            SetEmployee({...Employee, city: e})
            e ? validateCity(true) : validateCity(false)
        }
        function setState(e){
            SetEmployee({...Employee, state: e})
            e ? validateState(true) : validateState(false)
        }
        function setZipCode(e){
            SetEmployee({...Employee, zipcode: e})
            e ? validateZipCode(true) : validateZipCode(false)
        }
        function setDepartment(e){
            SetEmployee({...Employee, department: e})
            e ? validateDepartment(true) : validateDepartment(false)
        }



    function onSubmit(event){
        event.preventDefault();
        /* 
            When form is submited, verify if there is empty fields that are required.
            If there is, then display error message
            if not, update EmployeeList with the new emmployee and save it on local storage
            Then display Confirmation modal
        */
        if(
            !Employee.firstname ||
            !Employee.lastname ||
            !Employee.birthdate ||
            !Employee.startdate
        ){
            Employee.firstname ? validateFirstName(true) : validateFirstName(false)
            Employee.lastname ? validateLastName(true) : validateLastName(false)
            Employee.birthdate ? validateBirthDate(true) : validateBirthDate(false)
            Employee.startdate ? validateStartDate(true) : validateStartDate(false)
        }else{
            let localEmployee = JSON.parse(localStorage.getItem("EmployeesList"));
    
            localEmployee.push(Employee)

            localStorage.setItem("EmployeesList",`${JSON.stringify(localEmployee)}`)

            // display confirmation modal (parent props)
            onClick()
        }

    }

    return(
        <form onSubmit={onSubmit} className="max-w-[800px] w-full mx-auto flex flex-col gap-8">
            <div className=" px-8 w-full flex flex-col gap-4">
                <InputText 
                    name="firstname"
                    label='First Name'
                    isRequired={false}
                    type="text"
                    onChange={setFirstName}
                    isFullfiled={isFirstName}
                />
                <InputText 
                    name="lastname"
                    label='Last Name'
                    isRequired={false}
                    type="text"
                    onChange={setLastName}
                    isFullfiled={isLastName}
                />
                <InputText 
                    name="birthdate"
                    label='Date of Birth'
                    isRequired={false}
                    type="date"
                    onChange={setBirthDate}
                    isFullfiled={isBirthDate}
                />
                <InputText 
                    name="startdate"
                    label='Start Date'
                    isRequired={false}
                    type="date"
                    onChange={setStartDate}
                    isFullfiled={isStartDate}
                />

            </div>
            <div className=" p-8 w-full flex flex-col gap-4 border-green border-2 relative">
                <span className="absolute -top-5 left-5 p-2 bg-[white] font-bold text-sm">Adress</span>
                <InputText 
                    name="street"
                    label='Street'
                    isRequired={false}
                    type="text"
                    onChange={setStreet}
                />
                <InputText 
                    name="city"
                    label='City'
                    isRequired={false}
                    type="text"
                    onChange={setCity}
                />
                <SelectState 
                    id="state"
                    label="State"
                    defaultValue="Choose a state"
                    isRequired={false}
                    onChange={setState}
                    StateList={StateList}
                />
                <InputText 
                    name="zipcode"
                    label='Zip code'
                    isRequired={false}
                    type="text"
                    onChange={setZipCode}
                />
            </div>
            <div className=" px-8 w-full flex flex-col gap-4">
                <SelectDepartment 
                    id="department"
                    label="Department"
                    defaultValue="Choose a department"
                    isRequired={false}
                    onChange={setDepartment}
                    DepartmentList={DepartmentList}
                />
            </div>
            <button type="submit" className=" px-10 py-3 bg-green text-[white] w-fit mx-auto rounded-md">Create Employee</button>
        </form>
    )
}
Form.propTypes = {
    onClick : PropTypes.func,
}
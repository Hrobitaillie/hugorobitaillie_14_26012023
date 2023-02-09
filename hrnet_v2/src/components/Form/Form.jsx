import { useEffect, useState } from "react";
import InputText from "./InputText";
import StateList from "../../assets/data/StatesList.json"
import DepartmentList from "../../assets/data/DepartmentList.json"
import SelectState from "./SelectState";
import SelectDepartment from "./SelectDepartment";
import { faker } from "@faker-js/faker";

export default function Form({onClick}){

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

    function setFirstName(e){
        SetEmployee({...Employee, firstname: e})
    }
    function setLastName(e){
        SetEmployee({...Employee, lastname: e})
    }
    function setBirthDate(e){
        SetEmployee({...Employee, birthdate: e})
    }
    function setStartDate(e){
        SetEmployee({...Employee, startdate: e})
    }
    function setStreet(e){
        SetEmployee({...Employee, street: e})
    }
    function setCity(e){
        SetEmployee({...Employee, city: e})
    }
    function setState(e){
        SetEmployee({...Employee, state: e})
    }
    function setZipCode(e){
        SetEmployee({...Employee, zipcode: e})
    }
    function setDepartment(e){
        SetEmployee({...Employee, department: e})
    }
    function setId(e){
        const uuid = faker.datatype.uuid()
        SetEmployee({...Employee, employeeid: uuid})
    }

    function onSubmit(event){
        event.preventDefault();

        let localEmployee = JSON.parse(localStorage.getItem("EmployeesList"));

        localEmployee.push(Employee)

        localStorage.setItem("EmployeesList",`${JSON.stringify(localEmployee)}`)
        onClick()
    }

    return(
        <form onSubmit={onSubmit} className="max-w-[800px] w-full mx-auto flex flex-col gap-8">
            <div className=" px-8 w-full flex flex-col gap-4">
                <InputText 
                    name="firstname"
                    label='First Name'
                    isRequired={true}
                    type="text"
                    onChange={setFirstName}
                />
                <InputText 
                    name="lastname"
                    label='Last Name'
                    isRequired={true}
                    type="text"
                    onChange={setLastName}
                />
                <InputText 
                    name="birthdate"
                    label='Date of Birth'
                    isRequired={true}
                    type="date"
                    onChange={setBirthDate}
                />
                <InputText 
                    name="startdate"
                    label='Start Date'
                    isRequired={true}
                    type="date"
                    onChange={setStartDate}
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
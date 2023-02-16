import { faker } from '@faker-js/faker';
import DepartmentList from "../../assets/data/DepartmentList.json"

export default function MockEmployeesList(){
    let baseEmployees = []
    function createRandomUser(){
        let newId;
        if (baseEmployees.length) {
            newId = baseEmployees.length + 1 
        }else{
            newId = 1 
        }
        return {
            employeeid: faker.datatype.uuid(),
            firstname : faker.name.firstName(),
            lastname : faker.name.lastName(),
            birthdate : faker.date.birthdate(),
            startdate : faker.date.birthdate(),
            street : faker.address.street(),
            city : faker.address.city(),
            state : faker.address.stateAbbr(),
            zipcode : faker.address.zipCode(),
            department : faker.helpers.arrayElement(DepartmentList),
        };
    }
    
    Array.from({ length: 26 }).forEach(() => {
        baseEmployees.push(createRandomUser());
    });

    localStorage.setItem("EmployeesList",JSON.stringify(baseEmployees))

    console.log(JSON.parse(localStorage.EmployeesList));
}
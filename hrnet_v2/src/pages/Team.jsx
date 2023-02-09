import { useEffect, useMemo, useState } from "react";
import { DataGrid} from '@mui/x-data-grid';
import QuickSearchToolbar from "../components/EmployeesList/QuickSearchToolBar";
import { format } from 'date-fns'
import MockEmployeesList from "../components/EmployeesList/Mock";
import MainButton from "../components/Button";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Team(){
    const [employees, setEmployees] = useState("")

    useEffect(()=>{
        if (!localStorage.EmployeesList) {
            MockEmployeesList()
        }
       setEmployees(JSON.parse(localStorage.getItem("EmployeesList")));
    },[])

    const columns = useMemo(
        () => [
            {
                headerName: 'Id',
                field: 'employeeid',
                flex:1,
            },
            {
                headerName: 'First Name',
                field: 'firstname',
                flex:1,
            },
            {
                headerName: 'Last Name',
                field: 'lastname',
                flex:1,
            },
            {
                headerName: 'Start Date',
                field: 'startdate',
                flex:1,
                valueFormatter: params => format(new Date(params.value), 'dd/MM/yyyy'),
                width: 100
            }, 
            {
                headerName: 'Department',
                field: 'department',
                flex:1,
            },
            {
                headerName: 'Date of Birth',
                field: 'birthdate',
                flex:1,
                valueFormatter: params => format(new Date(params.value), 'dd/MM/yyyy'),
                width: 100
            },
            {
                headerName: 'Street',
                field: 'street',
                flex:1,
            },
            {
                headerName: 'City',
                field: 'city',
                flex:1,
            },
            {
                headerName: 'State',
                field: 'state',
                flex:1,
            },
            {
                headerName: 'Zip Code',
                field: 'zipcode',
                flex:1,
            }
        ]
    )

    if (employees == "") {
        return <h1>wait</h1>
    }


    

    return(
        <section className="h-full min-h-full">
            <div className="container mx-auto min-h-[50vh] h-full flex flex-col">
                <div className="w-full flex justify-end">
                    <MainButton label="Add Employee" link="/" icon={<AddCircleOutlineIcon />}/>
                </div>
                <div className="shadow-header rounded-md flex flex-col h-full flex-grow p-8 mt-10">
                    <DataGrid 
                        rows={employees} 
                        columns={columns} 
                        getRowId={(Employees) => Employees.employeeid} 
                        autoHeight
                        components={{ Toolbar: QuickSearchToolbar }}
                        disableColumnMenu
                        sx={{
                            border: 'none',
                            '.MuiDataGrid-footerContainer':{
                                borderTop:'none',
                                marginTop:'2rem',
                            }
                        }}
                    />
                </div>
            </div>
        </section>
    )
}
import { useEffect, useMemo, useState } from "react";
import { DataGrid} from '@mui/x-data-grid';
import QuickSearchToolbar from "../components/EmployeesList/QuickSearchToolBar";
import { format } from 'date-fns'
import MockEmployeesList from "../components/EmployeesList/Mock";
import MainButton from "../components/Button";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Team(){
    const [employees, setEmployees] = useState("")


    // On page load, check if there is employee in the list, if not create fake employee data
    // And then add it to the local storage to display it
    useEffect(()=>{
        if (!localStorage.EmployeesList) {
            MockEmployeesList()
        }
       setEmployees(JSON.parse(localStorage.getItem("EmployeesList")));
    },[])

    /*
        Defines each collumns you want to display.
        Each collumn have to refer to data keys
    */
    const columns = useMemo(
        () => [
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
                // format date to match with desired display format
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
                // format date to match with desired display format
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
        return <h1> There is not employee </h1>
    }

    return(
        <section className="h-full min-h-full">
            <div className="container mx-auto min-h-[50vh] h-full flex flex-col">
                <div className="w-full flex justify-end">
                    {/* Add Employee button */}
                    <MainButton label="Add Employee" link="/" icon={<AddCircleOutlineIcon />}/>
                </div>
                <div className="shadow-header rounded-md flex flex-col h-full flex-grow p-8 mt-10">
                    {/* 
                        Use Data Grid from  Material UI, defines:
                            Rows with datas you want tot display (have to be array of objects)
                            Cullumns are defined upper in the file
                            getRowId is the unique id of each rows (use the employee id for exemple)
                            Autoheight is to automatically handle the height depending on content height
                            Use components to add more tools to the table like searchBar
                            DisableCollumMenu is to toogle the menu to sort each collumn
                            Then SX is to add custom css to the component
                    */}
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
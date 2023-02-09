import { Link } from "react-router-dom";


export default function MainButton({label, link, icon}){
    return(
        <Link className="bg-green w-fit px-7 py-3 rounded-md font-bold font-Inter text-white" to={link}>
            {icon && icon} {label}
        </Link>
    )
}
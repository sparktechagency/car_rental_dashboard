import { BsArrowLeftShort } from "react-icons/bs"
import { CiSearch } from "react-icons/ci"
import UserDetailsTable from "../Components/UserDetailsTable/UserDetailsTable"




const UserDetails = () => {
    return (
        <div className="p-2 shadow-md">
            <div className="flex justify-between item-center ">
                <div className="flex items-center gap-2">
                    <BsArrowLeftShort />
                    User Details</div>
                <div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="w-full pl-10 pr-4 py-1 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 "
                        />
                        <span className="absolute left-3 top-2.5 text-gray-400">

                            <CiSearch />
                        </span>
                    </div>
                </div>
            </div>

            {/* User Details table */}

            <UserDetailsTable/>


        </div>
    )
}

export default UserDetails
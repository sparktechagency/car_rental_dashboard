import { BsArrowLeftShort } from "react-icons/bs"
import { CiSearch } from "react-icons/ci"
import IncomeCard from "../Components/IncomeCard/IncomeCard"
import img1 from '../assets/images/dollar_gold.png'
import img2 from '../assets/images/dollar_green.png'
import TransactionTable from "../Components/TranstactionTable/TransactionTable"

const Income = () => {

    const IncomeItems = [
        {
            BalanceName: 'Total Balance',
            totalBalance: 2584.54,
            img: img2,
            color: '#3475F1'

        },
        {
            BalanceName: 'Gold-Earned',
            totalBalance: 1245.42,
            img: img1,
            color: '#FAA316'

        },
        {
            BalanceName: 'Platinum-Earned',
            totalBalance: 2584.54,
            img: img1,
            color: '#676767'
        },
        {
            BalanceName: 'Diamond-Earned',
            totalBalance: 2584.54,
            img: img1,
            color: '#77A3F6'
        },
    ]
    return (
        <div className="shadow-lg p-2">

            <div className="flex justify-between item-center ">
                <div className="flex items-center">
                    <BsArrowLeftShort />
                    Total Income</div>
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

            {/* Income Card Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                {
                    IncomeItems.map(income => <IncomeCard income={income} />)
                }
            </div>


            {/* Transaction history */}

            <div className="mt-[39px]">

                <div className="flex justify-between items-center">
                    <h1 className="font-semibold text-[20px]">Transaction History</h1>
                    <p className="border-b cursor-pointer text-[12px] border-[#4E4E4E] text-[#4E4E4E]">View All</p>
                </div>
                {/* Transaction Table */}
                <TransactionTable/>
            </div>




        </div>
    )
}

export default Income
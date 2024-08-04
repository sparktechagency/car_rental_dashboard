import { BsCurrencyDollar } from "react-icons/bs"



// eslint-disable-next-line react/prop-types
const IncomeCard = ({income}) => {
    return (
        <div className={`bg-[${income?.color}] p-[24px] rounded-md text-white`}>
            <img className="bg-white p-2 rounded-full" src={income?.img} alt="" />
            <h1 className="mt-[19px]">{income?.BalanceName} </h1>
            <p className="flex items-center font-semibold text-[20px]"><BsCurrencyDollar /><span>{income?.totalBalance}</span></p>
        </div>
    )
}

export default IncomeCard
import { BsArrowLeftShort } from "react-icons/bs"
import { CiSearch } from "react-icons/ci"
import TransactionHistoryTable from "../Components/TransactionHistoryTable/TransactionHistoryTable"
import TransactionTable from "../Components/TranstactionTable/TransactionTable"
import { ConfigProvider } from "antd"
import YearSelect from "../Components/YearSelect/YearSelect"
import MonthSelect from "../Components/SelectMonth/SelectMonth"

const TransactionHistory = () => {


    return (
        <div className="p-2 shadow-md">
            <div className="flex justify-between item-center ">
                <div className="flex items-center gap-2">
                    <BsArrowLeftShort />
                    Transaction History</div>
                <div className="flex items-center">
                    <div className="flex items-center ">
                        Month :
                        <ConfigProvider>
                            <div style={{ padding: 20 }}>
                                <MonthSelect />
                            </div>
                        </ConfigProvider>
                    </div>
                    <div className="flex items-center ">
                        Year :
                        <ConfigProvider>
                            <div style={{ padding: 20 }}>
                                <YearSelect />
                            </div>
                        </ConfigProvider>
                    </div>
                </div>
            </div>

            {/* User Details table */}

            <TransactionTable pagination={{
                pageSize: 5,
                showTotal: (total, range) => `Showing ${range[0]}-${range[1]} out of ${total}`,
                locale: {
                    items_per_page: '',
                    prev_page: 'Previous',
                    next_page: 'Next',
                },
            }}
              />


        </div>
    )
}
export default TransactionHistory
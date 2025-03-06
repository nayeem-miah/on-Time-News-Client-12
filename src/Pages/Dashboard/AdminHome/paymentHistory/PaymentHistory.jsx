import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Loader from "../../../../Compoents/EmptyState/loader";

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();

    const { data: PaymentHistory = [], isLoading } = useQuery({
        queryKey: ["PaymentHistory"],
        queryFn: async () => {
            const res = await axiosSecure.get('/payment-history');
            return res.data;
        }
    })

    if (isLoading) return <Loader />
    return (
        <div>
            <h3 className="text-center text-3xl my-4 text-purple-500">
                payment history : ({PaymentHistory?.length})
            </h3>

            <div className="overflow-x-auto text-white">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-xs font-bold border-b-2 text-white">
                            <th>serial no</th>
                            <th>author info</th>
                            <th>transactionId</th>
                            <th>date</th>
                            <th>total price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {PaymentHistory?.map((item, i) => (
                            <tr key={item._id} className="bg-gray-800 hover:bg-gray-700">
                                <td> {(i = i + 1)}</td>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">

                                        </div>
                                        <div>
                                            <div className="font-bold">{item?.name}</div>
                                            <div className="text-sm opacity-50">{item.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item?.transactionId}</td>
                                <td>{item?.date}</td>
                                <td>{item?.totalPrice}$</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PaymentHistory;
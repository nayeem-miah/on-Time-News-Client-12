import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Compoents/EmptyState/loader";

function MyPaymentHistory() {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth();

    const { data: paymentHistory = [], isLoading } = useQuery({
        queryKey: ["paymentHistory"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/payment-history/${user.email}`);
            return res.data;
        }
    })
    console.log(paymentHistory);

    if (isLoading) return <Loader />
    return (
        <div className="pt-20 min-h-[calc(100vh-180px)]">
            {/* <h3 className="text-center text-3xl text-purple-500">
                my payment history
            </h3> */}

            <div className="overflow-x-auto pb-9 ">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-xs font-bold border-b-2">
                            <th>serial no</th>
                            <th>author info</th>
                            <th>transactionId</th>
                            <th>date</th>
                            <th>total price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentHistory?.map((item, i) => (
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
    );
}

export default MyPaymentHistory;
import Loader from "../../../Compoents/EmptyState/loader";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
export default function RecentArticles() {
    const axiosPublic = useAxiosPublic();
    const [AllArticles, setAllArticles] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true)
        axiosPublic('/recent-articles')
            .then(res =>
                setAllArticles(res.data)
            );
        setLoading(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // console.log(AllArticles);

    if (loading) return <Loader />
    return (
        <div className="my-8">
            <div className="my-5">
                <div className="flex justify-evenly my-4 mt-1 ">
                    <h2 className="text-3xl text-center text-purple-500">Recent Articles</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr className="text-xs font-bold border-b-2">
                                <th>serial no</th>
                                <th>article title</th>
                                <th>author info</th>
                                <th>status</th>
                                <th>publisher</th>

                            </tr>
                        </thead>
                        <tbody>
                            {AllArticles.map((item, i) => (
                                <tr key={item._id} className="bg-gray-800 hover:bg-gray-600">
                                    <td> {(i = i + 1)}</td>
                                    <td>{item.title}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.photo} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.displayName}</div>
                                                <div className="text-sm opacity-50">{item.email}</div>
                                                <div className="text-sm opacity-50">{item.date}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.status}</td>
                                    <td>{item.publisher}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

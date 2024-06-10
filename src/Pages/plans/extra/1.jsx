// Saiful Islam Molla
import { useQuery } from "@tanstack/react-query";
import UserArticleCard from "./UserArticleCard";
import Select from 'react-select';
import { useState } from "react";
import useAuth from './../../Hooks/useAuth';
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const UserAllArticles = () => {
    const axiosSecure = useAxiosSecure();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPublisher, setSelectedPublisher] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const { user: currentUser } = useAuth();

    const fetchFilteredArticles = async () => {
        const params = new URLSearchParams();
        params.append('status', 'approved'); 
        if (searchTerm) params.append('title', searchTerm);
        if (selectedPublisher) params.append('publisher', selectedPublisher);
        if (selectedTags.length > 0) params.append('tags', selectedTags.map(tag => tag.value).join(','));

        const res = await axiosSecure.get(`/articles/search?${params.toString()}`);
        return res.data;
    };

    const { data: filteredArticles = [], refetch } = useQuery({
        queryKey: ['filteredArticles', searchTerm, selectedPublisher, selectedTags],
        queryFn: fetchFilteredArticles
    });

    const { data: publishers = [] } = useQuery({
        queryKey: ['publishers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/publishers');
            return res.data;
        }
    });

    const tagsOptions = [
        { value: 'National', label: 'National' },
        { value: 'International', label: 'International' },
        { value: 'Sports', label: 'Sports' },
        { value: 'Science', label: 'Science' },
        { value: 'Entertainment', label: 'Entertainment' }
    ];

    // Handle search
    const handleSearch = (e) => {
        e.preventDefault();
        refetch();
    };

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');

            return res.data ;
        },
        
    })

    return (
        <div className='container mx-auto mt-6 p-10'>
            <div className="flex justify-between items-center mt-2 mb-10">
                <div className="text-black mt-10 font-500">
                    <form onSubmit={handleSearch}>
                        <input
                            className="rounded-md border border-[#343090] py-2 px-6"
                            placeholder="Search Here"
                            type="text"
                            name="search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <input className="btn ml-2 text-white hover:bg-[#5f59f7] bg-[#343090]" type="submit" value="Search" />
                    </form>
                </div>

                <div className="flex items-center mt-10">
                    <select
                        className="rounded-md border border-[#343090] py-2 px-6"
                        value={selectedPublisher}
                        onChange={(e) => setSelectedPublisher(e.target.value)}
                    >
                        <option value="">All Publishers</option>
                        {publishers.map(publisher => (
                            <option key={publisher._id} value={publisher.publisher}>{publisher.publisher}</option>
                        ))}
                    </select>
                    <Select
                        className="ml-2"
                        isMulti
                        options={tagsOptions}
                        value={selectedTags}
                        onChange={setSelectedTags}
                    />
                </div>
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                {filteredArticles.map(article => (
                    <UserArticleCard
                        article={article}
                        key={article._id}
                        users={users}
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </div>
    );
};

export default UserAllArticles;
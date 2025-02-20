import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import Loader from '../../../Compoents/EmptyState/loader';

const RecentArticles = () => {
    const axiosPublic = useAxiosPublic();
  const [AllArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true)
    axiosPublic('/searchArticles')
    .then(res =>
      setAllArticles(res.data)
      );
      setLoading(false)
  }, []);
  

if(loading) return <Loader/>
// console.log(AllArticles);
    return (
        <div>
    <div className="md:w-4/12 w-36 mx-auto text-center my-8">
            <h4 className="text-3xl text-purple-500 my-6 text-center uppercase border-b-4 py-4">
              Recent Articles
            </h4>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus perferendis atque molestias voluptatum, velit consectetur id minima aperiam perspiciatis ducimus soluta, vitae, repellat ea unde temporibus sapiente distinctio! Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quos corporis, odit magni autem adipisci mollitia itaque at fuga est consectetur modi odio nobis officiis ipsa voluptate maxime. Assumenda, porro!</p>
          </div>
        
    </div>
    );
};

export default RecentArticles;
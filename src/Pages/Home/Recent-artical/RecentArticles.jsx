/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import Loader from '../../../Compoents/EmptyState/loader';
import ArticlesCard from '../../AllArticles/ArticlesCard/ArticlesCard';

const RecentArticles = () => {
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
  }, []);


  if (loading) return <Loader />
  return (
    <div>
      <div className="md:w-4/12 w-36 mx-auto text-center my-8">
        <h4 className="text-3xl text-purple-500 my-6 text-center uppercase border-b-4 py-4">
          Recent Articles
        </h4>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-10">
        {AllArticles?.map(
          articles =>
            articles.status === "approve" && (
              <ArticlesCard
                key={articles._id}
                articles={articles}
              ></ArticlesCard>
            )
        )}
      </div>

    </div>
  );
};

export default RecentArticles;
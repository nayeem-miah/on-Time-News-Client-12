import AllUsersCount from "./AllUsersCount";

const StatisticPage = () => {
  return (
    <div>
      <div className="md:w-4/12 w-40  mx-auto text-center my-8">
        <h4 className="lg:text-3xl text-2xl text-purple-500 my-6 text-center uppercase border-b-4 py-4">
          Statistic
        </h4>
      </div>
      <AllUsersCount></AllUsersCount>
    </div>
  );
};

export default StatisticPage;

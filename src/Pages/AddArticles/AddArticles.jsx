import axios from "axios";

const AddArticles = () => {
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const publisher = form.publisher.value;
    const tags = form.tags.value;
    const description = form.description.value;
    const image = form.image.files[0];
    console.log({ title, publisher, tags, description, image });
    const formData = new FormData();
    formData.append("image", image);
    try {
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMAGE_HOSTING_KEY
        }`,
        formData
      );
      console.log(data.data.display_url);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="max-w-full py-10 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-center my-10 text-3xl font-semibold text-gray-700 capitalize dark:text-white">
        Add Articles
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 mb-6">
          <div>
            <label className="text-gray-700 dark:text-gray-200">Title</label>
            <input
              type="text"
              name="title"
              required
              placeholder="title"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200">
              publisher
            </label>
            <input
              type="text"
              name="publisher"
              placeholder="publisher"
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200">Tags</label>
            <input
              type="text"
              name="tags"
              placeholder="tags"
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200 ">
              Chose Image
            </label>
            <input
              type="file"
              name="image"
              className="file-input mt-2 h-10 file-input-bordered file-input-error w-full max-w-full items-center  text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div>
          <label className="text-gray-700 dark:text-gray-200 ">
            description
          </label>
          <textarea
            type="text"
            name="description"
            placeholder="description"
            required
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
        <div className="mt-6 w-full">
          <button className="px-8 py-2.5 leading-5 text-white  w-full transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddArticles;

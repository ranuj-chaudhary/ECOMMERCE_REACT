import React, { useState } from 'react';
import Search from '../../components/Search';
import { FaTrashAlt } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';
import Pagination from '../../components/Pagination';
import Button from '../../components/Button';
import { FaRegFileImage } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

const Category = () => {
  const dispatch = useDispatch();
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const [showEdit, setShowEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [state, setState] = useState({
    name: '',
    image: '',
  });
  const [showImage, setShowImage] = useState('');

  function handleEdit(id) {
    setEditId(id);
    setShowEdit((showEdit) => !showEdit);
    // category id
  }

  function handleInputFile(e) {
    const file = e.target.files[0];

    if (!file) {
      showImage('');
      return;
    }
    if (file) {
      const url = URL.createObjectURL(file);
      setShowImage(url);
    }

    setState({
      ...state,
      image: file,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!state.image) return alert('Please select a file');

    const formData = new FormData();
    formData.append('file', state.image);

    // dispatch uploading action
    dispatch('action');

    // reset state
    handleStateReset();
  }

  function handleStateReset() {
    setEditId(null);
    setState({
      name: '',
      image: '',
    });
    setShowImage('');
  }

  function handleDelete(id) {
    // dispatch category id to delete
    dispatch('category id');
  }

  return (
    <div className="w-full flex  text-white gap-2 ">
      {/* Category Table */}
      <div className="w-7/12 bg-[var(--primary-color)] p-4 rounded-md flex flex-col items-center justify-center">
        <Search
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <div className="table flex-1">
          <table className="table-fixed w-full mt-4 text-left border-2 border-white ">
            <thead className="uppercase border border-white">
              <tr className="border border-white">
                <th scope="col" className="py-3 px-4 border border-white">
                  No
                </th>
                <th scope="col" className="py-3 px-4 border border-white">
                  Image
                </th>
                <th scope="col" className="py-3 px-4 border border-white">
                  Name
                </th>
                <th scope="col" className="py-3 px-4 border border-white">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="whitespace-nowrap py-3 px-4 border border-white">
                  1
                </td>
                <td className="whitespace-nowrap py-3 px-4  ">
                  <img
                    src="/images/category/1.jpg"
                    alt=""
                    className="w-[45px] h-[45px]"
                  />
                </td>
                <td className="whitespace-nowrap py-3 px-4 border border-white">
                  Ranuj
                </td>
                <td className="whitespace-nowrap py-3 px-4 border border-white">
                  <span className="flex justify-center gap-4 text-[20px] cursor-pointer">
                    <span onClick={() => handleEdit('id')}>
                      <FaRegEdit />
                    </span>
                    <span onClick={() => handleDelete('id')}>
                      <FaTrashAlt />
                    </span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pagination mt-4">
          <Pagination totalItems={50} itemsPerPage={itemsPerPage} />
        </div>
      </div>
      {/* Add or Edit Category */}
      <div className="w-5/12 bg-[var(--primary-color)] p-4 rounded-md">
        <h1 className="text-center capitalize text-2xl">
          {showEdit ? 'Edit Category' : 'Add Category'}
        </h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            className="p-2 rounded-md w-full"
            placeholder="enter category name"
            onChange={(e) =>
              setState({
                ...state,
                name: e.target.value,
              })
            }
            value={state.name}
            autoComplete="off"
          />
          <div className="w-full border border-white mt-4 h-48 flex justify-center items-center overflow-hidden">
            <label htmlFor="category_image" className="cursor-pointer ">
              {!showImage ? (
                <span className="flex flex-col gap-2">
                  <span>Select Image</span>
                  <span className="text-2xl flex justify-center">
                    <FaRegFileImage />
                  </span>
                </span>
              ) : (
                <img
                  alt=""
                  src={`${showImage}`}
                  className="aspect-auto w-auto h-40"
                />
              )}
            </label>
            <input
              type="file"
              id="category_image"
              name="category_image"
              className="hidden"
              onChange={handleInputFile}
              accept="image/png, image/jpeg"
              autoComplete="off"
            />
          </div>
          <Button className="w-full py-2 bg-blue-500 mt-4">
            {showEdit ? 'Edit Category' : 'Add Category'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Category;

import './App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos, incrementPage, decrementPage } from './redux/actions';
import BasicModal from './components/modal';
import ImageDisplay from './components/image';

function App() {

  const dispatch = useDispatch();
  const photos = useSelector(state => state.photos);
  const page = useSelector(state => state.page);
  const startIndex = useSelector(state => state.startIndex);
  const endIndex = useSelector(state => state.endIndex);
  const category = useSelector(state => state.category);
  const state = useSelector(state => state);
  const [isOpen, setIsOpen] = useState(false);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    dispatch(fetchPhotos()); // Make initial API call to fetch photos
  }, [dispatch]);


  const handlePrevPage = () => { //prev page func
    dispatch(decrementPage()); 
  };

  const handleNextPage = () => { // next page func
    dispatch(incrementPage());
  };

  const openModal = (photo) => { // open the image modal
    setIsOpen(true);
    setPhoto(photo)
  };

  const openCategory = () => { //open category modal
    setIsOpen(true);
    setPhoto(null)
  };

  return (
    <div className='bg-screen'>
      {photo ? <BasicModal isOpen={isOpen} photo={photo} setIsOpen={setIsOpen} /> :
        <BasicModal isOpen={isOpen} setIsOpen={setIsOpen} />} 
        {/* set props to modal if photo exist set props as a image modal else category modal */}
      <div className="grid-container">
        <nav>
          <div>
            <button
              disabled={page === 1}
              onClick={handlePrevPage}
              className="btn-primary">
              PREV
            </button>
          </div>
          <div className='w-48 justify-center items-center flex'>
            <button
              onClick={openCategory}
              className="btn-select">
              {category === '' ? "Choose an option" : category}
            </button>
          </div>
          <div>
            <button
              disabled={Math.ceil(photos.length / 9) === page}
              onClick={handleNextPage}
              className="btn-primary">
              NEXT
            </button>
          </div>
        </nav>

        <div className="grid-style">
          {photos.slice(startIndex, endIndex).map((photo, index) => (
            <ImageDisplay index={index} photo={photo} openModal={openModal} />
          ))}
        </div>
      </div>

    </div >
  );
}

export default App;

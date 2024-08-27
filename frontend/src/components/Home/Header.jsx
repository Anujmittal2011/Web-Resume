import React, { useState } from 'react';
import SlideIn from './SlideIn';
import Menu from './Menu';

const Header = () => {
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const [slideContent, setSlideContent] = useState('');

  const handleOpenSlide = (content) => {
    setSlideContent(content);
    setIsSlideOpen(true);
  };

  const handleCloseSlide = () => {
    setIsSlideOpen(false);
    setSlideContent('');
  };

  return (
    <div>
      <div className="content mb-2 me-0" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div className="row">
          <div className="col-md-6 mt-4">
            <img
              src="https://demoxml.com/html/vcard2/images/avatar.png"
              className="img-fluid mt-5 mb-5"
              style={{ width: '300px', height: '300px' }}
              alt="Avatar"
            />
          </div>
          <div className="col-md-6 text-md-end mt-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-gzPAnJEIzWHf-vXDEHaEH7PmUnWvvQ2QA&s"
              alt="DSA to Development"
              className="img-fluid"
              style={{ width: '80px', height: '80px' }}
              onClick={() => handleOpenSlide(<Menu onMenuItemClick={handleCloseSlide} />)}
            />
          </div>
        </div>
      </div>
      <SlideIn isOpen={isSlideOpen} content={slideContent} handleClose={handleCloseSlide} />
    </div>
  );
};

export default Header;
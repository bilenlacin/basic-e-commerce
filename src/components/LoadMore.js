import React from 'react';

const LoadMore = ({ visible, setVisible }) => {
  return (
    <div className='loadMore'>
      <button onClick={() => setVisible(visible + 10)}>Load more</button>
    </div>
  );
};

export default LoadMore;

import React from 'react';
import Story from './Story';
import useDataFetcher from '../hooks/dataFetcher';
import Loader from './Loader';
// import FlipMove from 'react-flip-move';
const ShowStories = (props) =>  {
  const { type } = props.match.params;
  const { isLoading, stories } = useDataFetcher(type);

  return (
    <React.Fragment>
      <div className='px-5 my-10 sm:grid md:grid-col-3 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
            <Loader show={isLoading}>Loading...</Loader>
              {stories.map(({ data: story }) => (
                  <Story key={story.id} story={story} />
                ))}
      </div>
    </React.Fragment>
    
  );
}

export default ShowStories;




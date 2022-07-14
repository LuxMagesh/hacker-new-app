import React from 'react';

const Link = ({ url, title }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);

const Story = ({ story: { id, by, title, kids, time, url, poster_path } }) => {

  return (
    <div className="story shadow-2xl rounded-lg mx-2 border-slate-300 p-1 group cursor-pointer transition duration-100 ease-in transform sm:hover:scale-105 hover:z-50">
      <div className="story-title mt-1 font-semibold text-l text-white transition-all duration-100 ease-in-out group-hover:font-bold">
        <Link url={url} title={title} />
      </div>
      {/* <img layout="responsive" src={poster_path} alt={poster_path} height={240} width={400}/> */}
      <div className="story-info truncate max-w-md">
        <span>by{' '}<Link url={`https://news.ycombinator.com/user?id=${by}`} title={by} /></span>|
        <span>{new Date(time * 1000).toLocaleDateString('en-US', {hour: 'numeric',minute: 'numeric'})}</span>|
        <span><Link url={`https://news.ycombinator.com/item?id=${id}`} title={`${kids && kids.length > 0 ? kids.length : 0} comments`}/>
        </span>
      </div>
    </div>
  );
};

export default Story;

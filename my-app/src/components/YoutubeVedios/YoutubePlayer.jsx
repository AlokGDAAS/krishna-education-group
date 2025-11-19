const YoutubePlayer = ({src,title,heading}) => {
  return (
    <div className="bg-white md:w-5/12 mx-auto p-2 rounded-lg shadow-lg">
      <h1 className=" text-xs md:text-sm font-medium pb-2">{heading}</h1>
    <div  className="rounded">
      <iframe
        src={src}
        title={title}
        className=" aspect-16/9 rounded shadow-lg"        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    </div>

  );
};

export default YoutubePlayer;
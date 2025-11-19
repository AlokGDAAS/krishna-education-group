const YoutubePlayer = ({src,title,}) => {
  return (
    <div  className="rounded">
      <iframe
        src={src}
        title={title}
        className="md:w-1/3 aspect-16/9 rounded shadow-lg"        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubePlayer;
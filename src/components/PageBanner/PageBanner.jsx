const PageBanner = ({ CoverImg, title, des }) => {
  return (
    <div
      className="bg-cover text-white h-96 relative "
      style={{ backgroundImage: `url(${CoverImg})` }}
    >
      <div className="w-full flex flex-col items-center justify-center gap-6 p-4 md:p-0 mt-16 md:mt-0 absolute inset-0 bg-black opacity-75">
        <h2 className="text-3xl md:text-4xl">{title}</h2>
        <h4 className="text-lg text-center">{des}</h4>
      </div>
    </div>
  );
};

export default PageBanner;

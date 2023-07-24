const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-8">
      <p className="text-[#FFBD00] md:text-lg font-bold">{subHeading}--</p>
      <h3 className="text-2xl md:text-4xl font-extrabold uppercase tracking-wider border-b-2 border-[#FFBD00] pb-2">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;

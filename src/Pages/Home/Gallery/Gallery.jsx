import img1 from '../../../assets/GraduateGallery/1.jpg';
import img2 from '../../../assets/GraduateGallery/2.jpg';
import img3 from '../../../assets/GraduateGallery/3.jpg';
import img4 from '../../../assets/GraduateGallery/4.jpg';
import img5 from '../../../assets/GraduateGallery/5.jpg';
import img6 from '../../../assets/GraduateGallery/6.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Gallery = () => {
    return (
        <div className='mt-24'>
            <SectionTitle subHeading='See College' heading='Graduation'></SectionTitle>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
            </div>
        </div>
    );
};

export default Gallery;
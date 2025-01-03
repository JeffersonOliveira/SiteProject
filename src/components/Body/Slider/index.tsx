import { Autoplay } from 'swiper/modules';
import { SliderContainer } from './styles';
import { useEffect, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import Cert1 from '../../../assets/Certifications/certifiedAssociate.png';
import Cert2 from '../../../assets/Certifications/certifiedPlatformAppBuilder.png';
import Cert3 from '../../../assets/Certifications/certifiedPlatformDevI.png';
import Cert4 from '../../../assets/Certifications/certifiedAdministrator.png';
import Cert5 from '../../../assets/Certifications/googleAnalyticsCertification.png';
import Cert6 from '../../../assets/Certifications/certifiedMarketingCloudEmailSpecialist.png';
import 'swiper/css';
import 'swiper/css/effect-coverflow';


export function Slider() {

  const [swiper, setSwiper] = useState<SwiperClass>();
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [delay, setDelay] = useState(5000);

  useEffect(() => {
    const screenWidth = window.screen.width;

    if(screenWidth <= 768) {
      setSlidesPerView(1)
      setDelay(3000)
    } else if(screenWidth >= 769 &&  screenWidth <= 911) {
      setSlidesPerView(2)
      setDelay(4000)
    } else {
      setSlidesPerView(3)
      setDelay(5000)
    }
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      swiper?.autoplay.start();
    }, delay);

    return () => {
      clearTimeout(timeout);
    };

  }, [swiper?.autoplay, delay]);
  
  return (
    <SliderContainer>
      <Swiper
        onSwiper={setSwiper}
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        slidesPerView={slidesPerView}
        autoplay={{
          delay: delay,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide><img src={Cert1}/></SwiperSlide>
        <SwiperSlide><img src={Cert2}/></SwiperSlide>
        <SwiperSlide><img src={Cert3}/></SwiperSlide>
        <SwiperSlide><img src={Cert4}/></SwiperSlide>
        <SwiperSlide><img src={Cert5} className='googleCert'/></SwiperSlide>
        <SwiperSlide><img src={Cert6}/></SwiperSlide>
      </Swiper>
    </SliderContainer>
  )
}
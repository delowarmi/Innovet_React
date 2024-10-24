
import './App.css'
import Container from './componentes/Container'
import Flex from './componentes/Flex'
import Image from './componentes/Image'
import Logo from '../src/assets/Logo.png'
import Menu from './componentes/Menu'
import Button from './componentes/Button'
import Heading from './componentes/Heading'
import Banner from '../src/assets/bannerimg.png'
import  cort from '../src/assets/cort.png'
import  CORT from '../src/assets/cort2.png'
import Chart from '../src/assets/pik1.png'
import Chart2 from '../src/assets/pik2.png'
import Chart3 from '../src/assets/pik3.png'
import Choose1 from '../src/assets/choose1.png'
import Choose2 from '../src/assets/choose2.png'
import Choose3 from '../src/assets/choose3.png'
import WORK from '../src/assets/work.png'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Red1 from '../src/assets/product.jpg'
import { IoEyeOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import Team1 from '../src/assets/tpik2.png'
import Team2 from '../src/assets/tpik1.png'
import Team3 from '../src/assets/tpik3.png'
import { FaQuoteLeft } from "react-icons/fa";
import vector from '../src/assets/Vector 1.png'
import Women from '../src/assets/12629.png'
import { IoIosStar } from "react-icons/io";
import men from '../src/assets/12630.png'
import Blog from '../src/assets/blog.png'
import { FaCommentAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
function App() {
  

  return (
    <>
    {/* Banner part start  */}
      <div className="bg-bannerColor pt-6">
      <Container>
        <Flex className={'justify-between'}>
          <div className="w-[15%]">
            <Image ImageSrc={Logo}/>
          </div>
          <div className="w-[70%]">
            <ul>
              <li>
                <Flex className={'justify-center gap-24 text-nabColor font-open text-[18px] pt-4'}>
                <Menu menuName={'Home'}/>
                <Menu menuName={'About'}/>
                <Menu menuName={'Service'}/>
                <Menu menuName={'Portfolio'}/>
                <Menu menuName={'Price'}/>
                <Menu menuName={'Blog'}/>
                
                </Flex>
              </li>
            </ul>
          </div>
          <div className="w-[15%]">
            <Button btnText={'Contact Us'} className={'bg-btnColor text-white py-[10px] px-[15px] rounded-xl ml-[70px] mt-2'}/>
          </div>
        </Flex>
        <Flex className={'justify-between py-[200px]'}>
          <div className="w-1/2">
          <Heading as={'h1'} text={'WELCOME!'}className={'text-HeColor text-[64px] font-extrabold font-play'}/>
          <Heading as={'h1'} text={'The Best Hair Saloon'}className={'text-white text-[64px] font-bold font-open'}/>
          <Heading as={'p'} text={'We use quality products and the latest styling techniques to bring out your very best. We promises to provide you with 5-star service.'}className={'text-white text-[22px] font-regular font-pap pr-[100px] pt-[20px]'}/>
          <Button btnText={'Make Appointment'} className={'bg-btnColor text-white py-[10px] px-[15px] mt-[30px]'}/>
          </div>
          <div className="w-1/2 pl-[250px] pt-4">
          <Image ImageSrc={Banner}/>
          </div>
        </Flex>
      </Container>
      {/* Banner Part End  */}
      {/* Clain Part Start  */}
      <div className="bg-white py-[100px]">
        <Container>
          <Flex>
            <div className="w-1/2">
            <Flex>
              <div className="w-1/4 ">
              <Image ImageSrc={cort} className={'pb-9'}/>
              <Image ImageSrc={cort} className={'pb-9'}/>
              <Image ImageSrc={cort}/>
              </div>
              <Image ImageSrc={CORT} className={'pl-9'}/>
            </Flex>
            
            </div>
            <div className="w-1/2 pl-20">
            <Heading as={'h3'} text={"We're Here To Service Your Hair Care Needs"} className={'font-open font-extrabold text-[48px] text-HedColor pr-[100px]'}/>
            <Heading as={'p'} text={"House of Hair Salon & Spa is one of Brooklyn's most trusted salons. Whether you’re looking for a completely new style or want to enhance your existing look, our talented teams are here to make it happen."} className={'font-pap font-regular text-[18px] text-HedColor pr-[110px]'}/>
            <Button btnText={'Learn More'} className={'bg-btnColor text-white py-[10px] px-[15px] mt-[30px]'}/>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Clain Part End */}
      {/* Service Part Start  */}
      <div className="bg-white py-[100px]">
        <Container >
          <Heading as={'h3'} text={'Our Services'} className={'font-open font-extrabold text-[48px] text-HedColor text-center'}/>
          <Heading as={'p'} text={'Whether you are looking for a quick beach side gateway or a pampering day for yourself, we have hair treatments to meet your needs. All of our services are specially designed for restorative, recovery and relaxation.'} className={'font-pap font-regular text-[18px] text-HedColor text-center px-[330px]'}/>
          <Flex className={'pt-8'}>
            <div className="w-1/2">
            <Flex>
              <div className="w-[80%]">
                <Heading as={'h3'} text={'HAIR Cut'} className={'font-open font-bold text-[28px] text-HedColor '}/>
                <Heading as={'p'} text={'Aromatherapy is just another thing to look and feel younger, more energetic and attractive in your body.'} className={'font-pap font-regular text-[18px] text-HedColor pr-[200px] pt-3'}/>
              </div>
              <div className="w-[20%]">
              <Heading as={'h3'} text={'$20'} className={'font-open font-bold text-[28px] text-btnColor '}/>
              </div>
            </Flex>
            </div>
            <div className="w-1/2">
            <Flex>
              <div className="w-[80%] pl-[50px]">
                <Heading as={'h3'} text={'HAIR EXTENTSIONS'} className={'font-open font-bold text-[28px] text-HedColor '}/>
                <Heading as={'p'} text={'The Namaste Massage is a deep, fluid, rhythmic massage that use different part of the body at the same time.'} className={'font-pap font-regular text-[18px] text-HedColor pr-[200px] pt-3'}/>
              </div>
              <div className="w-[20%]">
              <Heading as={'h3'} text={'$230'} className={'font-open font-bold text-[28px] text-btnColor '}/>
              </div>
            </Flex>
            </div>
          </Flex>
          <Flex className={'pt-4'}>
            <div className="w-1/2">
            <Flex>
              <div className="w-[80%]">
                <Heading as={'h3'} text={' HIGHLIGHTS'} className={'font-open font-bold text-[28px] text-HedColor '}/>
                <Heading as={'p'} text={'Aroma therapy is just another thing to look and feel younger, more energetic and attractive in your body.'} className={'font-pap font-regular text-[18px] text-HedColor pr-[200px] pt-3'}/>
              </div>
              <div className="w-[20%]">
              <Heading as={'h3'} text={'$90'} className={'font-open font-bold text-[28px] text-btnColor '}/>
              </div>
            </Flex>
            </div>
            <div className="w-1/2">
            <Flex>
              <div className="w-[80%] pl-[50px]">
                <Heading as={'h3'} text={'HAIR COLOURING'} className={'font-open font-bold text-[28px] text-HedColor '}/>
                <Heading as={'p'} text={'A wide array of facial modalities ranging from European to Thai and Japanese techniques that work.'} className={'font-pap font-regular text-[18px] text-HedColor pr-[190px] pt-3'}/>
              </div>
              <div className="w-[20%]">
              <Heading as={'h3'} text={'$40'} className={'font-open font-bold text-[28px] text-btnColor '}/>
              </div>
            </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Service Part End    */}
      {/* Choose Part Start  */}
      <div className="bg-white py-[100px]">
        <Container>
          <Flex>
            <div className="w-1/2">
            <Heading as={'h3'} text={' Why Choose Us'} className={'font-open font-extrabold text-[48px] text-HedColor '}/>
            <Flex>
              <div className="w-[15%] pt-7">
                <Image ImageSrc={Chart}/>
              </div>
              <div className="w-[85%] pt-7">
              <Heading as={'h3'} text={'WE LOVE YOUR HAIR'} className={'font-open font-bold text-[28px] text-HedColor '}/>
              <Heading as={'h3'} text={'We know-how, and ready to create your best look with natural products.'} className={'font-pap font-regular text-[18px] text-HedColor pr-[200px] pt-4'}/>
              </div>
            </Flex>
            <Flex>
              <div className="w-[15%] pt-2">
                <Image ImageSrc={Chart2}/>
              </div>
              <div className="w-[85%] pt-2">
              <Heading as={'h3'} text={'ONLY NATURAL PRODUCTS'} className={'font-open font-bold text-[28px] text-HedColor '}/>
              <Heading as={'h3'} text={'Hair is our passion, and our passion shows on every client that walks out of our doors.'} className={'font-pap font-regular text-[18px] text-HedColor pr-[200px] pt-4 '}/>
              </div>
            </Flex>
            <Flex>
              <div className="w-[15%] pt-2">
                <Image ImageSrc={Chart3}/>
              </div>
              <div className="w-[85%] pt-2">
              <Heading as={'h3'} text={'PROFESSIONAL STYLISTS'} className={'font-open font-bold text-[28px] text-HedColor '}/>
              <Heading as={'h3'} text={'If you have a look you want, we can work together to form a plan for your hair.'} className={'font-pap font-regular text-[18px] text-HedColor pr-[200px] pt-4'}/>
              </div>
            </Flex>
            </div>
            <div className="w-1/2 relative">
            <Image ImageSrc={Choose1} className={'pl-48 absolute'}/>
            <Image ImageSrc={Choose2} className={'absolute pt-[50px] pl-[140px]'}/>
            <Image ImageSrc={Choose3} className={'absolute pt-[250px] pl-[50px]'}/>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Choose Part End  */}
      {/* Work Part Start  */}
      <div className="bg-bannerColor pt-[100px] pb-[320px] relative">
        <Container>
          <Flex>
          <Heading as={'h3'}text={'Work Showcase'} className={'font-open font-extrabold text-[48px] text-HColor '}/>
            <ul>
              <li>
                <Flex className={'justify-center gap-x-12 pt-6 pl-24'}>
                <Heading as={'p'}text={'Hair Cut'} className={'font-open font-semibold text-[24px] text-HColor hover:text-btnColor '}/>
                <Heading as={'p'}text={'Hair Extentsions'} className={'font-open font-semibold text-[24px] text-HColor hover:text-btnColor '}/>
                <Heading as={'p'}text={'Highltghts'} className={'font-open font-semibold text-[24px] text-HColor hover:text-btnColor'}/>
                <Heading as={'p'}text={'Hair Colouring'} className={'font-open font-semibold text-[24px] text-HColor hover:text-btnColor'}/>
                </Flex>
              </li>
            </ul>
          </Flex>
          <Flex className={'justify-between'}>
            <Image ImageSrc={WORK} className={'absolute pt-[50px]'}/>
            <Image ImageSrc={WORK} className={'absolute pt-[50px] pl-[470px]'}/>
            <Image ImageSrc={WORK} className={'absolute pt-[50px] pl-[940px]'}/>
          </Flex>
        </Container>
      </div>
      {/* Work Part End  */}
      {/* Product Part Start  */}
      <div className="bg-white pt-[190px] pb-[100px]">
        <Container>
          <Flex className={'justify-between'}>
          <Heading as={'h3'}text={'Our Product'} className={'font-open font-extrabold text-[48px] text-HedColor '}/>
          <div className="w">
          <Flex className={'gap-x-3'}>
          <FaArrowLeft className='border border-r-slate-500 text-[48px] text-black hover:bg-btnColor hover:text-white'/>
          <FaArrowRight className='border border-r-slate-500 text-[48px] text-black hover:bg-btnColor hover:text-white'/>
          </Flex>
          </div>
          </Flex>
          <Flex className={'justify-between pt-12'}>
            <div className="w-[274px] bg-proColor group hover:bg-btnColor">
            <Image ImageSrc={Red1} className={'pl-[2px] pt-[2px]'}/>
            <Heading as={'h3'}text={'hair Lotion'} className={'font-open font-bold text-[22px] text-HedColor pt-1 pl-3 group-hover:text-white'}/>
            <Flex className={'justify-between'}>
            <Heading as={'h3'}text={'$ 72.00'} className={'font-open font-bold text-[24px] text-btnColor pt-1 pl-3 group-hover:text-white'}/>
            <Heading as={'p'}text={'4.5 reviews'} className={'font-pap font-regular text-[16px] text-HedColor pt-1 pl-3 pr-3 group-hover:text-white'}/>
            </Flex>
            <Flex className={'justify-between'}>
            <Heading as={'h3'}text={'Add to cart'} className={'font-open font-semibold text-[14px] text-proColor pl-3 group-hover:text-white pb-2'}/>
            <Flex className={'gap-x-5 pr-3 text-proColor'}>
            <FiHeart />
            <IoEyeOutline />
            </Flex>
            </Flex>
            </div>
            <div className="w-[274px] bg-proColor group hover:bg-btnColor">
            <Image ImageSrc={Red1} className={'pl-[2px] pt-[2px]'}/>
            <Heading as={'h3'}text={'hair shampoo'} className={'font-open font-bold text-[22px] text-HedColor pt-1 pl-3 group-hover:text-white'}/>
            <Flex className={'justify-between'}>
            <Heading as={'h3'}text={'$ 48.00 '} className={'font-open font-bold text-[24px] text-btnColor pt-1 pl-3 group-hover:text-white'}/>
            <Heading as={'p'}text={'4.5 reviews'} className={'font-pap font-regular text-[16px] text-HedColor pt-1 pl-3 pr-3 group-hover:text-white'}/>
            </Flex>
            <Flex className={'justify-between'}>
            <Heading as={'h3'}text={'Add to cart'} className={'font-open font-semibold text-[14px] text-proColor pl-3 group-hover:text-white pb-2'}/>
            <Flex className={'gap-x-5 pr-3 text-proColor'}>
            <FiHeart />
            <IoEyeOutline />
            </Flex>
            </Flex>
            </div>
            <div className="w-[274px] bg-proColor group hover:bg-btnColor">
            <Image ImageSrc={Red1} className={'pl-[2px] pt-[2px]'}/>
            <Heading as={'h3'}text={'hair syrum'} className={'font-open font-bold text-[22px] text-HedColor pt-1 pl-3 group-hover:text-white'}/>
            <Flex className={'justify-between'}>
            <Heading as={'h3'}text={'$ 210.00'} className={'font-open font-bold text-[24px] text-btnColor pt-1 pl-3 group-hover:text-white'}/>
            <Heading as={'p'}text={'4.5 reviews'} className={'font-pap font-regular text-[16px] text-HedColor pt-1 pl-3 pr-3 group-hover:text-white'}/>
            </Flex>
            <Flex className={'justify-between'}>
            <Heading as={'h3'}text={'Add to cart'} className={'font-open font-semibold text-[14px] text-proColor pl-3 group-hover:text-white pb-2'}/>
            <Flex className={'gap-x-5 pr-3 text-proColor'}>
            <FiHeart />
            <IoEyeOutline />
            </Flex>
            </Flex>
            </div>
            <div className="w-[274px] bg-proColor group hover:bg-btnColor">
            <Image ImageSrc={Red1} className={'pl-[2px] pt-[2px]'}/>
            <Heading as={'h3'}text={'hair Treatment '} className={'font-open font-bold text-[22px] text-HedColor pt-1 pl-3 group-hover:text-white'}/>
            <Flex className={'justify-between'}>
            <Heading as={'h3'}text={'$ 50.00'} className={'font-open font-bold text-[24px] text-btnColor pt-1 pl-3 group-hover:text-white'}/>
            <Heading as={'p'}text={'4.5 reviews'} className={'font-pap font-regular text-[16px] text-HedColor pt-1 pl-3 pr-3 group-hover:text-white'}/>
            </Flex>
            <Flex className={'justify-between'}>
            <Heading as={'h3'}text={'Add to cart'} className={'font-open font-semibold text-[14px] text-proColor pl-3 group-hover:text-white pb-2'}/>
            <Flex className={'gap-x-5 pr-3 text-proColor'}>
            <FiHeart />
            <IoEyeOutline />
            </Flex>
            </Flex>
            </div>
            
          </Flex>
        </Container>
      </div>
      {/* Product Part End  */}
      {/* Meet Part Start  */}
      <div className="bg-white py-[100px]">
        <Container className={'pb-[100px]'}>
          <Flex>
            <div className="w-1/2 relative">
            <Image ImageSrc={Team1} className={'absolute'}/>
            <Image ImageSrc={Team2} className={'absolute pt-[50px] pl-[50px] '}/>
            <Image ImageSrc={Team3} className={'absolute pt-[350px] pl-[500px]'}/>
            </div>
            <div className="w-1/2 pt-8">
            <Heading as={'h3'} text={'Meet Our Team'} className={'font-open font-extrabold text-[48px] text-HedColor'}/>
            <Heading as={'p'} text={"House of Hair Salon & Spa is one of Brooklyn's most trusted salons. Whether you’re looking for a completely new style or want to enhance your existing look, our talented teams are here to make it happen."} className={'font-pap font-regular text-[18px] text-HedColor pr-[200px]'}/>

            <Flex className={'pl-[30px] gap-x-[30px] pt-[110px]'}>
            <Image ImageSrc={Team3}/>
            <Image ImageSrc={Team3}/>
            </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Meet Part End  */}
      {/* Testimonial Part Start  */}
      <div className="bg-white py-[100px]">
        <Container>
        <Heading as={'h3'} text={'Testimonial'} className={'font-open font-extrabold text-[48px] text-HedColor text-center'}/>
        <Flex>
          <div className="w-1/2 pt-[30px]">
          <FaQuoteLeft className='text-[80px] text-btnColor'/>
          <Heading as={'p'} text={"A very nice massage experience, although I realized while paying that I seemed to have been shorted by about 10 minutes, which was disappointing. "} className={'font-pap font-regular text-[18px] text-HedColor pr-[190px] pt-[30px]'}/>
          <Image ImageSrc={vector}/>
            <Flex>
            <div className="w-[20%]">
            <Image ImageSrc={Women} className={'pl-[-30px]'}/>
            </div>
            <div className="w-[80%]">
            <Heading as={'h3'} text={'Juliann Saucedo'} className={'font-open font-extrabold text-[25px] text-HedColor  pt-[10px]'}/>
            <Heading as={'p'} text={'paypal inc.'} className={'font-pap font-regular text-[18px] text-HedColor  pt-[10px]'}/>
            <Flex className={'pt-[10px]'}>
            <IoIosStar className='text-[18px] text-btnColor '/>
            <IoIosStar className='text-[18px] text-btnColor'/>
            <IoIosStar className='text-[18px] text-btnColor'/>
            <IoIosStar className='text-[18px] text-btnColor'/>
            <IoIosStar className='text-[18px] text-btnColor'/>
            </Flex>
            </div>
            </Flex>
            
           
          </div>
          <div className="w-1/2 pt-[30px]">
          <FaQuoteLeft className='text-[80px] text-btnColor'/>
          <Heading as={'p'} text={"A very nice massage experience, although I realized while paying that I seemed to have been shorted by about 10 minutes, which was disappointing. "} className={'font-pap font-regular text-[18px] text-HedColor pr-[190px] pt-[30px]'}/>
          <Image ImageSrc={vector}/>
            <Flex>
            <div className="w-[20%]">
            <Image ImageSrc={men} className={'pl-[-30px]'}/>
            </div>
            <div className="w-[80%]">
            <Heading as={'h3'} text={'Cristal Travis'} className={'font-open font-extrabold text-[25px] text-HedColor  pt-[10px]'}/>
            <Heading as={'p'} text={'Google Inc.'} className={'font-pap font-regular text-[18px] text-HedColor  pt-[10px]'}/>
            <Flex className={'pt-[10px]'}>
            <IoIosStar className='text-[18px] text-btnColor '/>
            <IoIosStar className='text-[18px] text-btnColor'/>
            <IoIosStar className='text-[18px] text-btnColor'/>
            <IoIosStar className='text-[18px] text-btnColor'/>
            <IoIosStar className='text-[18px] text-btnColor'/>
            </Flex>
            </div>
            </Flex>
          </div>
        </Flex>
        </Container>
      </div>
      {/* Testimonial Part End */}
      {/* Blog Part Start  */}
      <div className="bg-white py-[100px]">
        <Container>
        <Heading as={'h3'} text={'Our Latest Blog'} className={'font-open font-extrabold text-[48px] text-HedColor text-center'}/>
        <Flex className={'justify-between pt-10'}>
          <div className="w-[370px] bg-white hover:border border-btnColor">
          <Image ImageSrc={Blog}/>
          <Flex>
            <div className="w-[20%] pl-[25px]">
              <Heading as={'h3'} text={'02'} className={'text-btnColor font-open font-bold text-[24px]'}/>
              <Heading as={'h3'} text={'Aug'} className={'text-HedColor font-open font-semibold text-[20px]'}/>
              <FaCommentAlt  className='text-HedColor font-open font-semibold text-[14px] pt-1'/>
            </div>
            <div className="w-[54%] ">
            <Heading as={'h3'} text={'Five Tips for your Skin & Hair'} className={'text-HedColor font-open font-semibold text-[24px]  pb-2'}/>
            <Heading as={'h3'} text={'By John  - 5 Comments'} className={'text-HedColor font-pap font-regular text-[18px]border border-b-2 border-slate-600 '}/>
            <Flex className={'justify-between'}>
              <Heading as={'h3'} text={'Read More'} className={'text-btnColor font-nun font-bold text-[16px] pt-6'}/>
              <IoIosArrowForward className='text-btnColor text-[52px] font-bold  pt-6' />
            </Flex>
            </div>
          </Flex>
          </div>
          <div className="w-[370px] bg-white hover:border border-btnColor">
          <Image ImageSrc={Blog}/>
          <Flex>
            <div className="w-[20%] pl-[25px]">
              <Heading as={'h3'} text={'02'} className={'text-btnColor font-open font-bold text-[24px]'}/>
              <Heading as={'h3'} text={'Aug'} className={'text-HedColor font-open font-semibold text-[20px]'}/>
              <FaCommentAlt  className='text-HedColor font-open font-semibold text-[14px] pt-1'/>
            </div>
            <div className="w-[54%] ">
            <Heading as={'h3'} text={'Five Tips for your Skin & Hair'} className={'text-HedColor font-open font-semibold text-[24px]  pb-2'}/>
            <Heading as={'h3'} text={'By John  - 5 Comments'} className={'text-HedColor font-pap font-regular text-[18px]border border-b-2 border-slate-600 '}/>
            <Flex className={'justify-between'}>
              <Heading as={'h3'} text={'Read More'} className={'text-btnColor font-nun font-bold text-[16px] pt-6'}/>
              <IoIosArrowForward className='text-btnColor text-[52px] font-bold  pt-6' />
            </Flex>
            </div>
          </Flex>
          </div>
          <div className="w-[370px] bg-white hover:border border-btnColor">
          <Image ImageSrc={Blog}/>
          <Flex>
            <div className="w-[20%] pl-[25px]">
              <Heading as={'h3'} text={'02'} className={'text-btnColor font-open font-bold text-[24px]'}/>
              <Heading as={'h3'} text={'Aug'} className={'text-HedColor font-open font-semibold text-[20px]'}/>
              <FaCommentAlt  className='text-HedColor font-open font-semibold text-[14px] pt-1'/>
            </div>
            <div className="w-[54%] ">
            <Heading as={'h3'} text={'Five Tips for your Skin & Hair'} className={'text-HedColor font-open font-semibold text-[24px]  pb-2'}/>
            <Heading as={'h3'} text={'By John  - 5 Comments'} className={'text-HedColor font-pap font-regular text-[18px]border border-b-2 border-slate-600 '}/>
            <Flex className={'justify-between'}>
              <Heading as={'h3'} text={'Read More'} className={'text-btnColor font-nun font-bold text-[16px] pt-6'}/>
              <IoIosArrowForward className='text-btnColor text-[52px] font-bold  pt-6' />
            </Flex>
            </div>
          </Flex>
          </div>
        </Flex>
        </Container>
      </div>
      {/* Blog Part End */}
      {/* last PArt start  */}
      <div className="bg-bannerColor pt-[110px] pb-[60px]">
        <Container>
          <Flex className={'justify-between'}>
            <div className="w-[450px]">
              <Image ImageSrc={Logo}/>
              <Heading as={'h3'} text={'Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.'} className={'text-white font-nun font-regular text-[18px]  pt-8'}/>
              <Heading as={'h3'} text={'@20201 Innovate.All rights reserved.'} className={'text-white font-nun font-regular text-[18px] pt-[160px] '}/>
            </div>
            <div className="w-[103px]">
            <Heading as={'h3'} text={'Features'} className={'text-white font-open font-semibold text-[24px]'}/>
            <ul>
              <li className='pt-5'>
              <Heading as={'h3'} text={'Home'} className={'text-white font-nun font-semibold text-[20px] '}/>
              <Heading as={'h3'} text={'About'} className={'text-white font-nun font-semibold text-[20px] pt-3'}/>
              <Heading as={'h3'} text={'Benifit'} className={'text-white font-nun font-semibold text-[20px] pt-3'}/>
              <Heading as={'h3'} text={'Pricing'} className={'text-white font-nun font-semibold text-[20px] pt-3'}/>
              <Heading as={'h3'} text={'Blog'} className={'text-white font-nun font-semibold text-[20px] pt-3'}/>
              </li>
            </ul>
            </div>
            <div className="w-[168px]">
            <Heading as={'h3'} text={'Products'} className={'text-white font-open font-semibold text-[24px]'}/>
            <ul>
              <li className='pt-5'>
              <Heading as={'h3'} text={'Task Management'} className={'text-white font-nun font-semibold text-[20px]'}/>
              <Heading as={'h3'} text={'Company growth'} className={'text-white font-nun font-semibold text-[20px] pt-3'}/>
              <Heading as={'h3'} text={'Time tracking'} className={'text-white font-nun font-semibold text-[20px] pt-3'}/>
              <Heading as={'h3'} text={'Privacy policy'} className={'text-white font-nun font-regular text-[18px] pt-[170px] pl-[57px]'}/>
              
              </li>
            </ul>
            </div>
            <div className="w-[162px]">
            <Heading as={'h3'} text={'Support'} className={'text-white font-open font-semibold text-[24px]'}/>
            <ul>
              <li className='pt-5'>
              <Heading as={'h3'} text={'Customer service'} className={'text-white font-nun font-semibold text-[20px]'}/>
              <Heading as={'h3'} text={'Accessibility'} className={'text-white font-nun font-semibold text-[20px] pt-3'}/>
              <Heading as={'h3'} text={'Contact us'} className={'text-white font-nun font-semibold text-[20px] pt-3'}/>
              <Heading as={'h3'} text={'Terms & condition'} className={'text-white font-nun font-regular text-[18px] pt-[170px]'}/>
              
              </li>
            </ul>
            </div>
          </Flex>
        </Container>
      </div>
      {/* last PArt End */}
      </div>
    </>
    
  )
}

            

export default App

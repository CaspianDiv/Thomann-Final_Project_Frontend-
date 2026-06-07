import {  useThomman } from "../context/DataContext"
import {  useState } from "react"
import { HiMiniXMark } from "react-icons/hi2"


function CatalogSideBar({catalogStatus , setCatalogSideBar}) {

  const {products} = useThomman();

  const [activeTab, setActiveTab] = useState('products');

  const getTabContent = () => {
    switch(activeTab) {
      case 'products': 
      return products ? 
      products 
      .filter((item , index , array) => 
        array.findIndex(t => t.category === item.category) === index
      ) 
      .map(item => item.category || item.head_categ) : [];
      
      case 'service' :
      return [
        'OverView',
        'Contact us',
        'Frequently asked questions',
        'Newsletter',
        'Shipping Costs and Delivery Times',
        'Maintenance and repair',
        'Fret alignment - with Plek',
        'Return Product',
        'Our added values →',
        'The Thomann App',
        'Wallpapers',
        '',
        'Guides',
        'Classfied Ads'
      ];

      case 'aboutUs': 
      return [
        'Information about Thomann →',
        'Our Specialist Departments →',
        'Thomann Universe',
        'Fine Print →'
      ];
      default: [];
    }
  }
  
  return (
    <>
      <div onClick={() => setCatalogSideBar(false)} className={`${catalogStatus ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} bg-black/50 fixed inset-0 transition-all duration-500 z-10`}>
            <div onClick={(e) => e.stopPropagation()} className={`${catalogStatus ? 'translate-x-0' : '-translate-x-full'} xl:w-125 md:w-125  lg:w-125 h-full w-150  bg-[#fff] dark:bg-gray-800 dark:text-[#01b4bc] top-0 left-0 fixed duration-700 transform transition-transform ease-in-out overflow-auto z-50`}>
              <div className="absolute right-5 top-5">
                  <HiMiniXMark onClick={() => setCatalogSideBar(false)} className="hover:text-[#7E00F3] transition-colors cursor-pointer p-2" size={70} />
              </div>
              <div className="flex pt-20 px-5 items-center gap-5">
                  <p onClick={() => setActiveTab('products')} className={`${activeTab === 'products' ? 'border-b-2  border-b-[#7E00F3] text-[#7E00F3] font-semibold' : ''} hover:border-[#7E00F3] hover:border-b-2 py-2 hover:text-[#7E00F3] transition-colors lg:text-lg xl:text-lg cursor-pointer text-[2rem] ease-in-out duration-500`}>Products</p>
                  <p onClick={() => setActiveTab('service')} className={`${activeTab === 'service' ? 'border-b-2  border-b-[#7E00F3] text-[#7E00F3] font-semibold' : ''} hover:border-[#7E00F3] hover:border-b-2 py-2 hover:text-[#7E00F3] transition-colors lg:text-lg xl:text-lg cursor-pointer text-[2rem]   ease-in-out duration-500`}>Service</p>
                  <p onClick={() => setActiveTab('aboutUs')} className={`${activeTab === 'aboutUs' ? 'border-b-2  border-b-[#7E00F3] text-[#7E00F3] font-semibold' : ''} hover:border-[#7E00F3] hover:border-b-2 py-2 hover:text-[#7E00F3] transition-colors lg:text-lg xl:text-lg cursor-pointer  text-[2rem]  ease-in-out duration-500`}>About Us</p>
              </div>
              <div className="px-2 py-6">
                  <div className="space-y-4">
                      {
                        getTabContent().map((item , i) =>  
                            item === '' ? (
                                <div key={i} className="border-b border-gray-200 my-4"></div>
                            ) : (
                              <div key={i} className="py-2 cursor-pointer hover:text-[#7E00F3] font-semibold lg:text-lg xl:text-lg text-[2rem] px-2 transition-colors duration-300">{item}</div>
                            )
                        )
                      }
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default CatalogSideBar
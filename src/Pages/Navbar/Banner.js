import React from 'react';

const Banner = () => {
    return (
        <section className='lg:flex justify-center gap-96 pl-11'>
            <div className='w-72  lg:w-96 mt-20 text-xl lg:text-2xl font-medium mb-4 'data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <h2>
                “The laptop market is a highly competitive and dynamic industry, with new models and features being introduced constantly. With a plethora of options available for different budgets and requirements, there has never been a better time to purchase a laptop.”
                </h2>
            </div>
    
            <div>
           <div class="h-96 w-80 mt-20    carousel carousel-vertical rounded-box" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <div class="carousel-item h-full">
          <img src="https://i.ibb.co/89fnd82/Apple-Macbook-Pro-MPXV2-Price-in-Pakistan.jpg"  alt=''/>
        </div> 
        <div class="carousel-item h-full">
          <img src="https://i.ibb.co/Gvvy6cm/macbook-pro-2021-02.webp" alt='' />
        </div> 
        <div class="carousel-item h-full">
          <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt='' />
        </div> 
        <div class="carousel-item h-full">
          <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" alt='' />
        </div> 
       
      </div>
     </div>

        </section>
     
    );
};

export default Banner;

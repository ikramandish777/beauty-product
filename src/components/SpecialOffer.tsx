export default function SpecialOffer() {
    return (
   
    <section
  className="relative bg-cover bg-center h-[400px] md:h-[500px] text-[#111633] flex flex-col justify-between p-6 "
  style={{ backgroundImage: "url('/DiscountImage.png')" }}
>

  <div>
    <h1 className="text-4xl md:text-[64px] leading-[75px] font-medium text-[#111633] font-Roboto-Condensed">Special Offer!</h1>
    <p className="text-2xl md:text-4xl leading-9 font-normal">30% Discount</p>
  </div>


  <div className="self-start">
    <button className="text-2xl md:text-4xl leading-9 font-normal   mb-5 rounded-md ">
      Order Now →
    </button>
  </div>
</section>

    );
  }
  
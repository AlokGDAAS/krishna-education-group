import React from "react";
import Container from "./Container";
import { qualified } from "./students-data/Pcspre2025";

const ImageCard = ({img="./blank.webp", name}) => {
  return (
    <div>
      <div className="bg-blue-200 w-fit p-1 rounded shadow-lg">
        <img src={img} alt={name} className="w-17 mx-auto rounded shadow-lg" />
        <p className="text-center py-1 text-[8px] font-bold">{name}</p>
      </div>
    </div>
  );
};

const Pcspre2025q = () => {


  return (
    <div>
      <section className=" sm:py-12 bg-gradient-to-b from-white to-slate-50 my-4 rounded shadow-lg ">
          <div className="bg-blue-200 pl-4 py-2">
            <h1>Our Menbers Qualified for PCS pre 2025</h1>
            <div className="my-2 flex flex-wrap gap-1 ">

                {qualified.map((item , i)=>(
                    <ImageCard key={item.id} img={item.img} name={item.name}/>
                ))}

            </div>
          </div>
        
      </section>
    </div>
  );
};

export default Pcspre2025q;

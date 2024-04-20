import React from 'react'
import CreateForm from '../components/CreateForm'

const page = () => {
    return (
      <div className="max-w-[1450px] w-[90%] mx-auto">
        <div className="w-full mt-5 text-center">
          <h1 className="md:text-6xl text-4xl font-extrabold uppercase mb-1">
            Publier une{" "}
            <span className="text-purple-600">offre</span>
          </h1>
          <span className="w-full text-center">
            Actuellement, 100 utilisateurs recherchent activement un emploi
          </span>
        </div>
        <CreateForm />
      </div>
    );
  };
  
  export default page;
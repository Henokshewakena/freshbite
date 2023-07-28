import React from "react";

const Subscribe = () => {
  return (
    <div className="flex flex-row bg-leafy-green p-10 justify-between align-middle">
      <div className="flex gap-10">
        <h2 className="font-merriweather">New deal!</h2>
        <h1 className="font-imprima text-2xl w-2/4">
          Subscribe now and save 30% on your first order
        </h1>
      </div>

      <input type="text" className="w-1/3 h-12 ml-32 rounded-full" />
    </div>
  );
};

export default Subscribe;

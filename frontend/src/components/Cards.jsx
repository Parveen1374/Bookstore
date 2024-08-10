import React from 'react'

function Cards({bookDetails}) {

  return (
    <>
      <div className="mt-5 mb-5 p-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border">
            <figure>
                <img
                src={bookDetails.imgUrl}
                alt={bookDetails.name} />
            </figure>
            <div className="card-body" >
                <h2 className="card-title text-sm">
                      {bookDetails.name}
                      <div className="badge badge-secondary text-sm">{bookDetails.category}</div>
                </h2>
                <p className='text-sm'>{bookDetails.title}</p>
                <div className="card-actions justify-between mt-2">
                    <div className="badge badge-outline">{`$ ${bookDetails.price}`}</div>
                    <div className="badge badge-outline hover:bg-pink-500 hover:text-white cursor-pointer duration-200">Buy Now</div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Cards

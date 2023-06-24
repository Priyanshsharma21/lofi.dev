"use client"; // This is a client component 👈🏽
import withContainer from '@/hof/hof';
import React from 'react'

const ProductHunt = () => {
  return (
    <div className="w-full justify-center flex mt-10">
       <div className="product_hunt mt-5">
        <a
            href="https://www.producthunt.com/posts/lofi-dev?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-lofi&#0045;dev"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=401274&theme=dark"
            alt="lofi&#0046;dev - relax&#0032;chill&#0032;code | Product Hunt"
            style={{ width: '230px', height: '50px' }}
            width="230"
            height="50"
            />
        </a>
      </div>
    </div>
  )
}

export default withContainer(ProductHunt)
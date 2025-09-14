import React from 'react'
import Hero from '../components/layout/Hero'
import ProductCarousel from '../components/layout/ProductCarousel'
import CategoryList from '../components/layout/CategoryList'

export const Home = () => {
    return (
        <>
           <div className=''>
             <Hero/>
             <CategoryList/>
            <ProductCarousel/>
           </div>

        </>
    )
}

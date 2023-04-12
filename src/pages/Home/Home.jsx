import React from 'react';
import HomeBanner from '../../Components/HomeBanner/HomeBanner';
import JobCategory from '../../Components/JobCategory/JobCategory';
import FeaturedJob from '../../Components/FeaturedJob/FeaturedJob';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  // const data = useLoaderData();
  return (
    <>
      <HomeBanner></HomeBanner>
      <JobCategory></JobCategory>
      <FeaturedJob></FeaturedJob>
    </>
  )
}

export default Home
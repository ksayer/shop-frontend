import React from 'react';
import {Section} from "@/components/Section";
import {Banner, IBanner} from "@/components/Section/BannerBlock/Banner";


export function BannerBlock({banners}: {banners?: IBanner[] }) {
  return (
    <Section>
      {banners?.map(data => (
        <Banner
          key={data.id}
          imageUrl={data.imageUrl}
          title={data.title}
          text={data.text}
          imageSecond={data.imageSecond}
          button={data.button}
        />
      ))}
    </Section>
  );
}

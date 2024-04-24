import Image from "next/image";
import { Inter } from "next/font/google";
import Heading from "./components/Heading";
import getEntry from "./repo/getEntry";

import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data} : {data: any}) {

  const updatedEntries = useContentfulLiveUpdates(data);

  console.log('data is: ', data)
  return (
    <Heading text={updatedEntries.postName}></Heading>
  )
}

export async function getStaticProps() {
  const data = await getEntry();
  return {
    props: {
      data,
    },
  };

}

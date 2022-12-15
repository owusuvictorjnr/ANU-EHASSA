import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Link from "next/link";
import SubHeaders from "../../components/SubHeaders";
import jsonData from "../../utils/data.json";

export async function getServerSideProps(context) {
  console.log(context.params);
  return {
    props: {
      params: context.params,
    },
  };
}

const HomeScreen = () => {
  const [data, setData] = useState(jsonData);
  const { query } = useRouter();
  const { slug } = query;
  // const myData = data[slug];
  // const departments = myData.homeScreens.find((x) => x.slug === slug);
  // if (!departments) {
  //   return <div>Department Not Found</div>;
  // }

  // props for departmental executives

  useEffect(() => {
    const dept = jsonData[slug];
    setData(dept);
  }, [jsonData]);

  console.log(data);

  return (
    <ul>
      <li>Hello</li>
    </ul>
  );
};

export default HomeScreen;

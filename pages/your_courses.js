import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import Photofolia from '../components/photofolia'
import MainHeader_Train from '../components/MainHeader_Train'
import MediaItem from '../components/mediaitem'

export default function Your_Cources() {
  return (
    <Layout>
      <Head>
        <title>Instructors</title>
      </Head>

      <MainHeader_Train nobutton src="/images/yoga.png"	width="1656" height="1112" title="YOUR COURSES" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

			<div className="w-full flex px-2 md:px-20">
				<div className="flex flex-row flex-wrap mt-2 md:mt-12 text-white">
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
					<div className="flex w-1/2 md:w-1/5 p-4">
						<MediaItem />
					</div>
					))}
				</div>
			</div>
			<div className="h-4 md:h-12"></div>
		</Layout>
  )
}
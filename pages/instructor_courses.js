import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import Photofolia from '../components/photofolia'
import MainHeader_Train from '../components/MainHeader_Train'
import MediaItem from '../components/mediaitem'

function UserInfo() {
  return (
    <div className="flex flex-col -mt-20 md:-mt-8">
      <div className="flex flex-col items-center md:w-40 text-white">
        <div className="w-40 h-40 flex">
          <Photofolia src="/images/user.jpg" width="480" height="480" />
        </div>
        <div className="flex pt-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <div className="flex px-1">
              <Image
                priority
                src="/images/star.png"
                width="21"
                height="22"
              />
            </div>
          ))}
        </div>
        <div className="flex pt-4 text-sm">
          ( 36 reviews )
        </div>
        <div className="flex md:flex-col items-center pt-4">
          <div className="flex mx-4 my-2 text-sm md:text-lg">
            Rate - $20/hr
          </div>
          <Link href="">
            <a>
              <div className="px-4 py-1 mx-4 my-2 text-sm md:text-md rounded-full bg-yellow-500 md:bg-blue-600">
                Reserve a Class
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div splitter className="md:hidden flex w-40 h-px my-4 mx-auto bg-yellow-500"></div>
      <div className="flex flex-col md:w-40 mt-2 md:mt-8 px-6 md:px-0 md:ml-0 text-white text-sm">
        <p className="py-2 text-lg font-bold">Discription</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis consectetur cursus risus et massa turpis ornare. Tellus nec id commodo tellus aliquam. Lacus commodo pulvinar faucibus aenean .
        </p>
      </div>
    </div>
  )
}

export default function Instructor_Courses() {
  return (
    <Layout>
      <Head>
        <title>Instructors</title>
      </Head>

      <MainHeader_Train second src="/images/profile.png"	width="1656" height="1412" title="JHON CARTER" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

			<div className="w-full flex flex-col md:flex-row md:px-44">
				<UserInfo />
				<div className="flex flex-row overflow-x-auto md:flex-wrap px-2 mt-2 md:mt-12 md:pl-20 text-white">
					{[1, 2, 3, 4, 5, 6].map((num) => (
					<div className="flex md:w-1/3 p-4">
						<MediaItem />
					</div>
					))}
				</div>
			</div>
			<div className="h-4 md:h-12"></div>
		</Layout>
  )
}
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import Photofolia from '../components/photofolia'
import MainHeader_User from '../components/mainheader_user'
import MediaItem from '../components/mediaitem'
import Calendar from 'react-calendar'

function UserInfo() {
  return (
    <div className="flex flex-col -mt-20 md:-mt-8">
      <div className="flex flex-col items-center md:w-48 text-white">
        <div className="w-48 h-42 flex">
          <Photofolia src="/images/jason.png" width="828" height="702" />
        </div>
        <div className="flex items-center pt-2">
          <p className="text-xl font-bold">Jason Brown</p>
          <div imageWrapper className="flex pl-1">
            <Image src="/images/edit.png" width="13" height="13" />
          </div>
        </div>
        <div className="flex items-center pt-2">
          <p className="text-sm font-medium">Age : 24</p>
          <div imageWrapper className="flex pl-1">
            <Image src="/images/edit.png" width="13" height="13" />
          </div>
        </div>
        <p className="px-6 md:px-0 pt-6 text-center text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </p>
      </div>
      <div className="hidden md:flex flex-col md:w-48 mt-2 md:mt-16 px-6 md:px-0 md:ml-0 text-white text-sm">
        <div search className="flex items-center w-full p-2 h-6 rounded-full bg-gray-400">
          <Image src="/images/search.png" width="12" height="12" />
        </div>
        <div info className="flex flex-col w-full mt-6 p-4 rounded-lg bg-blue-500 text-white">
          <p className="text-lg font-bold pb-2"> Information </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit lectus tristique elit. Quisque nec at lorem varius ac in ac. Ut magna ut vehicula enim, senectus. Nec habitant ut blandit sit eu adipiscing arcu aliquet elementum. Lectus sed non nulla accumsan, neque, faucibus. Cum varius sed in dignissim odio id fringilla.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function User_Profile() {
  return (
    <Layout>
      <Head>
        <title>Instructors</title>
      </Head>

      <MainHeader_User first src="/images/jason.png"	width="1656" height="1412" title="HI!! JASON" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

			<div className="w-full flex flex-col md:flex-row md:px-44">
				<UserInfo />
        <div rightSect className="flex flex-col pl-2 pr-2 md:pl-8 mt-8">
          <p className="pl-4 text-white text-xl font-bold"> My Courses </p>
          <div className="flex w-10 h-0.5 ml-4 my-2 bg-yellow-500 md:bg-blue-500"></div>
          <div courseList className="flex flex-row overflow-x-auto md:flex-wrap text-white">
            {[1, 2, 3, 4].map((num) => (
            <div className="md:w-1/4 p-4">
              <MediaItem />
            </div>
            ))}
          </div>
          <div className="flex md:hidden flex-col mt-2 px-4 text-white text-sm">
            <div search className="flex items-center w-full p-2 h-6 rounded-full bg-gray-400">
              <Image src="/images/search.png" width="12" height="12" />
            </div>
            <div info className="flex flex-col w-full mt-6 p-4 rounded-lg bg-fore text-white">
              <p className="text-lg font-bold pb-2"> Information </p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit lectus tristique elit. Quisque nec at lorem varius ac in ac. Ut magna ut vehicula enim, senectus. Nec habitant ut blandit sit eu adipiscing arcu aliquet elementum. Lectus sed non nulla accumsan, neque, faucibus. Cum varius sed in dignissim odio id fringilla.
              </p>
            </div>
          </div>
          <div rBottom className="flex flex-col md:flex-row">
            <div appointment className="flex flex-col md:w-1/2 p-4">
              <div arrowSect className="flex items-center justify-between w-full">
                <div title className="flex flex-col">
                  <p className="text-white text-xl font-bold"> My Appointments </p>
                  <div className="flex w-10 h-0.5 my-2 bg-yellow-500 md:bg-blue-500"></div>
                </div>
                <div buttons className="flex flex-row">
                  <div leftArrow className="mr-4 px-2 py-1 bg-blue-500 rounded-md">
                    <div imageWrapper className="flex">
                      <Image src="/images/left.png" width="15" height="14" />
                    </div>
                  </div>
                  <div rightArrow className="px-2 py-1 bg-blue-500 rounded-md">
                    <div imageWrapper className="flex">
                      <Image src="/images/right.png" width="15" height="14" />
                    </div>
                  </div>                  
                </div>
              </div>
              <div fromTo className="flex my-6">
                <div className="flex flex-col w-1/2 px-4 py-2 mr-2 bg-fore rounded-lg">
                  <p>From</p>
                  <p>3:00 pm</p>
                </div>
                <div className="flex flex-col w-1/2 px-4 py-2 ml-2 bg-fore rounded-lg">
                  <p>To</p>
                  <p>4:00 pm</p>
                </div>
              </div>
              <div calendar className="flex w-full p-4 bg-white rounded-xl">
                <Calendar />
              </div>
            </div>
            <div location className="flex flex-col items-center md:w-1/2 p-4">
              <div title className="flex items-center">
						    <div imageWrapper className="flex">
							    <Image priority src="/images/pos.png" width="24" height="24" />
						    </div>
						    <div className="pl-4 text-white font-bold">Location</div>
					    </div>
					    <div imageWrapper className="flex h-64 md:h-80 py-6 rounded-xl overflow-hidden">
						    <Image priority src="/images/googleMap.png" width="401" height="470" />
					    </div>
              <div updateButton className="flex px-4 py-2 rounded-full bg-yellow-500 md:bg-blue-500 text-white font-bold">
                Update Location
              </div>
            </div>
          </div>
        </div>

			</div>
			<div className="h-4 md:h-12"></div>
		</Layout>
  )
}
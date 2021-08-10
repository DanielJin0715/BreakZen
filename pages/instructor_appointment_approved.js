import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import MainHeader_Train from '../components/MainHeader_Train'
import Photofolia from '../components/photofolia'

function UserLesson() {
	return (
		<div className="flex flex-col text-white text-sm mt-8 ml-0">
			<p className="text-lg font-bold py-2">What course do you want?</p>
			<div className="flex items-center pb-6">
				<div className="p-3 pr-10 bg-blue-500 rounded-2xl">Face-to-face</div>
				<div className="p-4 -ml-7 bg-gray-100 text-black rounded-2xl">Face-to-face</div>
			</div>
			<p className="text-lg font-bold py-2">Who is this lesson for?</p>
			<div className="flex items-center pb-6">
				<div className="z-10 p-4 px-8 bg-gray-100 text-black rounded-2xl">You</div>
				<div className="z-0 p-3 -ml-4 pl-7 bg-blue-500 rounded-2xl">Someone else</div>
			</div>
			<p className="text-lg font-bold py-2">Date of first class</p>
			<div className="flex items-center pb-6">
				<div className="z-10 p-4 bg-gray-100 text-black rounded-2xl">As soon as possible</div>
				<div className="z-0 p-3 -ml-4 pl-7 bg-blue-500 rounded-2xl">Suggest a date</div>
			</div>
		</div>
	)
}

function UserInfo() {
	return (
		<div className="flex flex-col flex-none -mt-20 md:-mt-8">
			<div className="flex flex-col items-center md:w-40 text-white">
				<div className="flex w-40 h-40">
					<Photofolia src="/images/user.jpg" width="480" height="480" />
				</div>
				<div className="flex pt-4">
					{[1, 2, 3, 4, 5].map(() => (
						<div className="flex px-1">
							<Image priority	src="/images/star.png" width="21"	height="22"	/>
						</div>
					))}
				</div>
				<div className="flex pt-4 text-sm">
					( 36 reviews )
				</div>
				<div className="flex flex-col items-center pt-4">
					<div className="flex text-sm md:text-lg mx-4 my-2">
						Rate - $20/hr
					</div>
				</div>
				<div splitter className="flex md:hidden w-32 h-px my-4 bg-yellow-500"></div>
			</div>
			<div className="hidden md:flex mt-8">
				<UserLesson />
			</div>
		</div>
	)
}

export default function Instructor_Appointment() {
  return (
    <Layout>
      <Head>
        <title>Instructors</title>
      </Head>

			<div className="z-20 flex items-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
				<div className="flex flex-col w-full items-center">
					<div className="flex flex-col items-center w-3/5 md:w-1/2 pb-4 rounded-xl bg-fore md:bg-blue-600 text-white">
						<div className="py-8">
							<Image priority src="/images/check_big.png" width="106" height="106" />
						</div>
						<p className="text-xl md:text-3xl font-bold text-center">Appointment scheduled</p>
						<p className="text-xs md:text-base py-6">On march 1st, 2022 at 4:30 pm</p>
					</div>
				</div>
			</div>

      <MainHeader_Train src="/images/profile.png"	width="1656" height="1412" title="JHON CARTER" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

			<div className="w-full flex flex-col md:flex-row md:px-44">
				<UserInfo />
				<div schedule className="flex flex-col w-full px-6 md:pl-20 text-white">
					<p className="text-3xl font-black my-4">Schedule</p>
					<p className="font-medium">Your first class with Mr. Carter</p>
					<div className="my-6">
						<p className="font-bold">Introduce yourself to Jhon and tell him what you want to learn</p>
						<p className="font-bold">(optional)</p>
					</div>
					<div className="w-full h-48 p-4 rounded-xl bg-gray-300 text-gray-800">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p>Curabitur quis consectetur cursus risus et massa turpis ornare.</p>
						<p>Tellus nec id commodo tellus aliquam</p>
					</div>
					<div className="flex md:hidden">
						<UserLesson />
					</div>
					<div className="md:px-4">
						<p className="pt-4 text-lg font-bold"> Contact Information </p>
						<p className="pt-2"> This information will never appear on the website & will only be given to the teachers you select. </p>
						<div className="flex flex-col md:flex-row py-8">
							<div className="flex flex-col">
								<p>Address</p>
								<div className="w-56 md:w-44 mt-2 h-12 md:h-8 rounded-3xl md:rounded-full bg-gray-200"></div>
							</div>
							<div className="flex flex-col mt-6 md:mt-0 md:pl-8">
								<p>Phone Number</p>
								<input className="w-36 mt-2 h-8 rounded-full bg-gray-200"></input>
							</div>
						</div>
						<div className="flex">
							<div className="mx-auto md:mx-0 px-14 py-4 my-1 rounded-full bg-yellow-500 md:bg-blue-500 text-black md:text-white font-bold">
								Schedule Appointment
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-8 md:h-12"></div>
		</Layout>
  )
}
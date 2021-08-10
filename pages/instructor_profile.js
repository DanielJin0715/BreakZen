import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import Photofolia from '../components/photofolia'
import MainHeader_Train from '../components/mainheader_train'

function UserProfile() {
	return (
		<div className="flex flex-col md:flex-row -mt-20 md:-mt-8">
			<div leftSect className="flex flex-col items-center text-white">
				<div photo className="flex w-40 h-40">
					<Photofolia src="/images/user.jpg" width="480" height="480" />
				</div>
				<div star className="flex pt-4">
					{[1, 2, 3, 4, 5].map((num) => (
						<div className="flex px-1">
							<Image priority	src="/images/star.png" width="21"	height="22"	/>
						</div>
					))}
				</div>
				<div review className="flex pt-4 text-sm">
					( 36 reviews )
				</div>
				<div rate className="flex md:flex-col items-center pt-4">
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
			<div className="md:hidden flex flex-col items-center py-4">
				<div className="flex bg-yellow-500 rounded-full w-36 h-px"></div>
			</div>
			<div rightSect className="flex items-center px-6 md:px-8 md:pr-0 md:pt-8 text-white">
				<div className="text-sm md:text-2xl">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus nibh aliquam nullam purus fames. Odio ultrices tristique amet in amet, odio habitasse felis. Pharetra molestie at et id orci vitae commodo. Tincidunt venenatis dui pretium, augue rutrum.</p>
					<p className="md:pt-4">
						Nulla amet a nulla purus metus sed. Hac egestas ullamcorper aliquet condimentum et. Et faucibus bibendum dolor sit enim, augue mauris. In tellus dictumst in lectus urna. Erat pharetra nibh tincidunt scelerisque eget lacus. Habitant volutpat montes eu.
						<Link href="">
							<a>
								<div className="md:inline md:px-12 md:mt-0 mt-2 text-sm font-bold">
									Read more...
								</div>
							</a>
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}

function MainContent() {
	return (
		<div className="flex flex-col md:flex-row md:mt-12">
			<div firstSect className="order-2 md:order-1 flex flex-col grid justify-items-stretch md:w-52 md:pt-0 pt-6 px-6 md:px-0">
				<div location className="flex flex-col md:items-center">
					<div title className="flex items-center">
						<div imageWrapper className="flex">
							<Image priority src="/images/pos.png" width="24" height="24" />
						</div>
						<div className="pl-4 text-white font-bold">Location</div>
					</div>
					<div imageWrapper className="flex h-48 md:h-auto pt-4 rounded-xl overflow-hidden">
						<Image priority src="/images/googleMap.png" width="401" height="470" />
					</div>
				</div>
				<div splitter className="flex md:hidden flex-col items-center py-6 pb-0">
					<div className="flex bg-yellow-500 rounded-full w-36 h-px"></div>
				</div>
				<div review className="self-end flex-grow hidden md:flex h-72 mt-6 p-4 bg-gray-200 rounded-xl">
					Write a review...
				</div>
			</div>
			<div secondSect className="order-1 md:order-2 flex flex-col grid justify-items-stretch md:px-6 text-white">
				<div buttonGroup className="self-start flex justify-between md:flex-col px-6 md:px-0 md:p-4 my-4 md:my-0 text-sm md:text-md font-bold md:bg-fore rounded-xl">
					<div button1 className="flex flex-col md:flex-row items-center justify-between mr-2 md:mr-0 px-4 md:px-4 md:p-0 py-2 bg-green-600 md:bg-transparent rounded-xl">
						<div className="order-2 md:order-1 flex text-center">
							Certified Instructor 
						</div>
						<div className="order-1 md:order-2 flex">
							<Image priority src="/images/vector_check.png" width="12" height="12" />
						</div>
					</div>
					<div splitter className="hidden md:flex bg-white h-px my-4"></div>
					<div button2 className="flex flex-col md:flex-row items-center justify-between ml-2 md:ml-0 py-2 px-4 md:px-4 md:p-0 bg-fore rounded-xl">
						<div className="order-2 md:order-1 flex text-center">
							Response Time 
						</div>
						<div className="order-1 md:order-2 flex">
							<p className="pr-2"> 1hr </p>
							<div imageWrapper className="flex">
								<Image priority src="/images/vector_lightening.png" width="9" height="16" />
							</div>
						</div>
					</div>
				</div>
				<div className="md:hidden flex flex-col p-6 pt-2 rounded-xl">
					<div className="text-xl text-white font-bold mx-auto">
						Methodology
					</div>
					<div className="pt-4 text-base text-white font-light">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis consectetur cursus risus et massa turpis ornare. Tellus nec id commodo tellus aliquam. Lacus commodo pulvinar faucibus aenean dignissim viverra urna. Sagittis dolor non urna, diam urna, nunc.
						Quis consequat quam nec adipiscing aliquam etiam urna. At gravida vel maecenas.
					</div>
				</div>
				<div className="flex md:hidden flex-col items-center py-2">
					<div className="flex bg-yellow-500 rounded-full w-36 h-px">
					</div>
				</div>
				<div className="md:hidden flex flex-col p-6 pt-2 rounded-xl">
					<div className="text-xl text-white font-bold mx-auto">
						Background
					</div>
					<div className="pt-4 text-base text-white font-light">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis consectetur cursus risus et massa turpis ornare. Tellus nec id commodo tellus aliquam. Lacus commodo pulvinar faucibus aenean dignissim viverra urna. Sagittis dolor non urna, diam urna, nunc.
						Quis consequat quam nec adipiscing aliquam etiam urna. At gravida vel maecenas.
					</div>
				</div>
				<div splitter className="flex md:hidden flex-col items-center py-2">
					<div className="flex bg-yellow-500 rounded-full w-36 h-px">	</div>
				</div>
				<div offered className="flex flex-col w-full px-6 md:p-4 mt-2 md:mt-6 text-white text-md font-bold md:bg-fore rounded-xl">
					<div className="mb-2 md:mb-0">Classes Offered</div>
					<div individual className="flex flex-col md:flex-row w-full p-4 md:p-0 md:pt-2 bg-fore md:bg-transparent rounded-xl"> 
						<div className="flex md:hidden mx-auto">
							<Image priority src="/images/file-person.png" width="36" height="36" />
						</div>
						<p className="mx-auto md:mx-0 px-2 py-1 md:rounded-full md:bg-blue-500 text-xs font-light"> Individual </p> 
					</div>
					<div atWhich className="pt-6 md:pt-10">
						<div className="md:ml-0 md:mb-0 mb-2">The classes will be held</div>
						<div className="flex flex-row justify-between flex-wrap">
							<div hisHome className="w-1/4 md:w-auto flex flex-col pt-2 bg-fore rounded-xl md:bg-transparent">
								<div className="flex md:hidden mx-auto">
									<Image priority src="/images/vector_his.png" width="36" height="28" />
								</div>
								<p className="px-2 py-1 mx-auto rounded-full md:bg-blue-500 text-xs font-light"> at his home </p>
							</div>
							<div yourHome className="w-1/4 md:w-auto flex flex-col pt-2 bg-fore rounded-xl md:bg-transparent mx-2">
								<div className="flex md:hidden mx-auto">
									<Image priority src="/images/vector_your.png" width="32" height="28" />
								</div>
								<p className="px-2 py-1 mx-auto rounded-full md:bg-blue-500 text-xs font-light"> your home </p> 
							</div>
							<div online className="w-1/4 flex flex-col pt-2 bg-fore rounded-xl md:bg-transparent">
								<div className="flex md:hidden mx-auto">
									<Image priority src="/images/vector_online.png" width="40" height="28" />
								</div>
								<p className="px-2 py-1 mx-auto rounded-full md:bg-blue-500 text-xs font-light"> online </p> 
							</div>
						</div>
					</div>
					<div className="pt-6 md:pt-4">
						<div>Taught subjects</div>
						<div className="flex flex-row flex-wrap">
							<div className="flex pt-2"> <p className="px-6 py-2 md:px-2 md:py-1 rounded-full bg-blue-500 text-xs font-light"> yoga </p> </div>
							<div className="flex pt-2 mx-2"> <p className="px-6 py-2 md:px-2 md:py-1 rounded-full bg-blue-500 text-xs font-light"> fitness </p> </div>
						</div>
					</div>
					<div className="pt-6 md:pt-10">
						<div>Levels</div>
						<div className="flex pt-2"> <p className="px-6 py-2 md:px-2 md:py-1 rounded-full bg-blue-500 text-xs font-light"> all levels </p> </div>
					</div>
					<div className="md:hidden pt-4 text-xl text-white font-bold">
						Rates
					</div>
					<div className="md:hidden pt-4 text-sm text-white font-light">
						<p>Rate for online classes : <div className="inline font-medium">$20/hr</div></p>
						<p>Rate for 5 hours of classes : <div className="inline font-medium">$90</div></p>
						<p>Rate for 10 hours of classes : <div className="inline font-medium">$170</div></p>
					</div>
				</div>
			</div>
			<div thirdSect className="order-3 flex flex-col grid justify-items-stretch md:w-8/12">
				<div methodology className="hidden md:flex flex-col p-4 bg-blue-500 rounded-xl">
					<div className="text-xl text-white font-bold">
						Methodology
					</div>
					<div className="pt-4 text-base text-white font-light">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis consectetur cursus risus et massa turpis ornare. Tellus nec id commodo tellus aliquam. Lacus commodo pulvinar faucibus aenean dignissim viverra urna. Sagittis dolor non urna, diam urna, nunc.
						Quis consequat quam nec adipiscing aliquam etiam urna. At gravida vel maecenas.
					</div>
				</div>
				<div background className="hidden self-end md:flex flex-col p-4 mt-6 bg-blue-500 rounded-xl">
					<div className="text-xl text-white font-bold">
						Background
					</div>
					<div className="pt-4 text-base text-white font-light">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis consectetur cursus risus et massa turpis ornare. Tellus nec id commodo tellus aliquam. Lacus commodo pulvinar faucibus aenean dignissim viverra urna. Sagittis dolor non urna, diam urna, nunc.
						Quis consequat quam nec adipiscing aliquam etiam urna. At gravida vel maecenas.
					</div>
					<div className="pt-4 text-xl text-white font-bold">
						Rates
					</div>
					<div className="pt-4 text-sm text-white font-light">
						<p>Rate for online classes : $20/hr</p>
						<p>Rate for 5 hours of classes : $90</p>
						<p>Rate for 10 hours of classes : $170</p>
					</div>
				</div>
			</div>
		</div>
	)
}

function Review() {
	return (
		<div className="flex md:flex-row flex-col pt-2 pb-0 px-4 md:p-4 my-1 md:my-4 bg-gray-300 border-fore rounded-xl">
			<div userWrapper className="flex items-start">
				<div className="flex items-center">
					<div className="flex items-center w-12 h-12 bg-pink-700 md:bg-gray-700 rounded-full overflow-hidden">
						<div className="flex mx-auto">
							<Image priority src="/images/P.png" width="14" height="17" />
						</div>
					</div>
					<p className="pl-2 my-4 font-bold text-xl">Parul</p>
				</div>				
			</div>
			<div className="flex flex-col pt-4 md:pt-0 md:pl-6 md:ml-6 md:border-l-2 border-gray-500">
				<p>
					<div className="font-bold inline">Lorem ipsum</div> dolor sit amet, consectetur adipiscing elit. Tortor etiam sit sit consectetur ultrices volutpat nullam tortor volutpat. Orci sapien nullam non nulla mauris consectetur aliquet 
				</p>
				<div className="flex flex-col pt-4 md:pt-0 px-16 md:px-0">
					<div className="flex flex-row items-center">
						<div className="flex rounded-full overflow-hidden">
							<Image className="rounded-full" priority src="/images/user.jpg" width="34" height="34" />
						</div>
						<p className="pl-2 my-4 font-bold">Jhon's response</p>
					</div>
					<p className="px-0">
						<div className="font-bold inline">Lorem ipsum</div> dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
			</div>
			<div splitter className="flex md:hidden w-full h-px mt-8 bg-gray-600"></div>
		</div>
	)
}

export default function Instructor_Profile() {
  return (
    <Layout>
      <Head>
        <title>Instructor Profile</title>
      </Head>

			<MainHeader_Train first src="/images/profile.png"	width="1656" height="1412" title="JHON CARTER" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

			<div className="w-full flex flex-col md:px-44">
				<UserProfile />
				<MainContent />
				<div className="px-6 md:px-0 flex flex-col mt-4 md:mt-12">
					<p className="text-white text-2xl font-bold mb-4 md:mb-0">Reviews</p>
					<div className="bg-gray-300 pb-12 md:pb-0 md:bg-transparent rounded-xl">
						{[1, 2, 3, 4].map(()=>(
							<Review />
						))}
					</div>
					<div className="flex md:hidden md:w-52 h-48 bg-gray-200 mt-4 p-4 rounded-xl">
						Write a review...
					</div>
				</div>
				<div className="h-4 md:h-12"></div>
			</div>
		</Layout>
  )
}
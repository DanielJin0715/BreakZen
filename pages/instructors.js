import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import Photofolia from '../components/photofolia'
import {useState} from 'react'

function MenuItem(props) {
	return (
		<Link href="">
			<a>
				<div className="px-5 text-white">
					{ props.title }
				</div>
			</a>
		</Link>
	)
}

function LinkMenuItem(props) {
	return (
		<Link href="">
			<a>
				<div className="flex items-center w-8 h-8 mx-4 border-2 border-fore rounded-full overflow-hidden">
					<div imageWrapper className="flex mx-auto">
						<Image
							priority
							src={props.src}
							width={props.width}
							height={props.height}
						/>
					</div>
				</div>
			</a>
		</Link>
	)
}

function MainFooter() {
	return (
		<div className="hidden md:flex flex-col items-center w-full bg-black mt-8">
		<div className="flex items-center text-md text-white font-medium pt-24">
			<MenuItem title="Policy" />
			<MenuItem title="Features" />
			<MenuItem title="Resources" />
			<Link href="">
				<a>
					<div className="px-8 flex">
						<Image priority	src="/images/Breakzen Elevate.png" width="186"	height="52"	/>
					</div>
				</a>
			</Link>
			<MenuItem title="About" />
			<MenuItem title="Blog" />
			<MenuItem title="Support" />
		</div>
		<div className="flex-col items-center w-full px-56 pt-8">
			<div className="w-full h-1 bg-gray-500 rounded-full"></div>
		</div>
		<div className="flex items-center text-md text-white font-medium pt-12">
			<LinkMenuItem src="/images/linkItem1.png" width="13" height="22" />
			<LinkMenuItem src="/images/linkItem2.png" width="27" height="26" />
			<LinkMenuItem src="/images/linkItem3.png" width="24" height="24" />
		</div>
		<div className="pt-16 pb-8 text-white">
			&copy; 2010 - 2020 Privacy - Terms
		</div>
	</div>
	)
}

function MainHeader(props) {
	return (
		<div className="flex relative items-center w-full h-64">
			<div className="z-0">
				<Image src={props.src} layout="fill" objectFit="cover" />
			</div>
			<div className="z-10 flex flex-col items-center w-full">
				<div className="px-9 text-center text-white">
					<p className="text-3xl md:text-5xl font-black">
						{ props.title }
					</p>
					<p className="text-center pt-8">
						{ props.comment }
					</p>
				</div>
			</div>
		</div>
	)
}

export default function Instructors() {
	const [users, setUsers] = useState([{name: "JOHN CARTER"}, {}, {name: "JOHN CARTER"}, {}, {},
																			{}, {}, {}, {}, {},
																			{}, {name: "JOHN CARTER"}, {}, {}, {name: "EMILY ROSS"},
																			{}, {name: "JOHN CARTER"}, {}, {}, {name: "JOHN CARTER"},]);

  return (
    <Layout>
      <Head>
        <title>Instructors</title>
      </Head>
			
			<MainHeader src="/images/instructor.png" title="INSTRUCTORS" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
			
			<div className="flex flex-wrap px-4 md:px-40 py-4 md:mt-16">
				{users.map((user) => (
					<div className="w-1/2 md:w-1/5 px-4 py-4">
						<Photofolia src="/images/user.jpg" width="480" height="480" name={user.name && user.name} />
					</div>
				))}
			</div>
			
			<MainFooter />
    
		</Layout>
  )
}

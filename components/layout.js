import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function MenuItem(props) {
	return (
		<Link href="/instructors">
			<a>
				<div className={"px-6 py-2 md:px-12 md:py-0" + (props.selected ? " text-fore" : "")}>
					{ props.title }
				</div>
			</a>
		</Link>
	)
}

function MainMenu() {
	return (
		<div className="flex flex-col md:flex-row md:items-center text-base md:text-lg text-white font-medium md:font-bold">
			<MenuItem title="Instructor" selected />
			<MenuItem title="Online Tranining" />
			<MenuItem title="Contact us" />
		</div>
	)
}

export default function Layout({ children, index }) {
	const [navMenu, setNavMenu] = useState(false);
	const navMenuClick = () => {
		setNavMenu(navMenu ? false : true);
	}

  return (
    <div className="bg-back">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
			
			<div className="hidden md:flex justify-between h-24 pl-6 pr-16">
				<div className="pt-6">
					<Image src="/images/logo.png"	width="39" height="38" />
				</div>
				<div className="flex items-center">
					<MainMenu />
					<Link href="">
						<a>
							<div className="flex ml-52 border-2 border-fore rounded-full overflow-hidden">
								<Image src="/images/user.jpg"	width="40" height="40" />
							</div>
						</a>
					</Link>
				</div>
			</div>
			
			<div className="md:hidden flex items-center justify-between h-8 px-4">
				<div className="flex text-white font-bold">
					<div className="text-fore">BREAK</div>ZEN
				</div>
				<div className="flex text-white font-bold">
					<a onClick={()=>navMenuClick()}>
						<Image src="/images/ham-menu.png"	width="18" height="12" />
					</a>
				</div>
			</div>
			
			{ navMenu && <MainMenu /> }

			{children}

    </div>
  )
}
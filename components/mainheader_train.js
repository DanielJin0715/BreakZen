import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function MainHeader_Train(props) {
	return (
		<div className="flex relative w-full md:h-96 overflow-hidden">
			<div className="z-0 w-full">
				<Image priority	src={props.src}	width={props.width} height={props.height} />
			</div>
			<div className="z-10 flex flex-col items-center absolute w-full">
				<div className="px-9 pt-16 md:pt-28 text-center text-white">
					<p className="text-3xl md:text-5xl font-bold">
						{props.title}
					</p>
					<p className="pt-4 md:pt-8 text-center">
						{props.comment}
					</p>
				</div>
				<div className={"flex items-center pt-8 md:pt-20 text-sm md:text-lg text-white font-bold" + (props.nobutton && " hidden")}>
					<Link href="/instructor_appointment">
						<a>
							<div className={"px-4 py-1 mx:4 md:mx-10" + (props.first && " rounded-full bg-yellow-500 md:bg-blue-600")}>
								Appointments
							</div>
						</a>
					</Link>
					<Link href="/instructor_courses">
						<a>
							<div className={"px-4 py-1 mx:4 md:mx-10" + (props.second && " rounded-full bg-yellow-500 md:bg-blue-600")}>
								Courses
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}
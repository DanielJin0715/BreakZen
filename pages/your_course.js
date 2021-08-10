import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'

function TopBar() {
	return (
		<div className="flex justify-between mt-8 md:mt-0">
			<div leftSect className="flex flex-col text-white">
				<p className="text-sm md:text-xl font-normal"> Videos </p>
				<p className="md:py-2 text-lg md:text-4xl font-bold"> Fitness Training </p>
				<div className="w-16 h-1 mt-1 bg-yellow-500 md:bg-blue-500"></div>
			</div>
			<div rightSect className="md:self-end flex items-center">
				<div imageWrapper className="hidden md:flex mr-16">
					<Image src="/images/heart.png" width="30" height="26"/>
				</div>
				<div imageWrapper className="md:hidden flex mr-6">
					<Image src="/images/heart.png" width="20" height="18"/>
				</div>
				<div circleButton className="flex items-center w-8 h-8 md:w-12 md:h-12 bg-yellow-300 md:bg-blue-600 rounded-full">
					<div horizonCenter className="flex flex-col w-full items-center">
						<div imageWrapper className="hidden md:flex">
							<Image src="/images/play_next.png" width="28" height="25"/>
						</div>
						<div imageWrapper className="flex md:hidden">
							<Image src="/images/play_next.png" width="18" height="16"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function MenuItem(props) {
	return (
		<div className="flex items-center pt-12">
			<div imageWrapper className="flex">
				<Image src={props.src} width={props.width} height={props.height} />
			</div>
			<p className="pl-2">{props.title}</p>
		</div>
	)
}

function LeftSideBar() {
	return (
		<div className="flex flex-col text-white text-base">
			<div title className="flex flex-col">
				<p className="text-2xl font-bold"> Library </p>
				<div className="w-20 h-px bg-white"></div>
			</div>
			<MenuItem src="/images/book_open.png" width="22" height="17" title="courses" />
			<MenuItem src="/images/play_small.png" width="20" height="20" title="My Videos" />
			<MenuItem src="/images/book_open.png" width="22" height="17" title="courses" />
			<MenuItem src="/images/play_small.png" width="20" height="20" title="My Videos" />
		</div>
	)
}

function PreviewItem(props) {
	return (
		<div className="flex w-full mb-8 md:mb-0 relative rounded-3xl overflow-hidden">
			<div imageWrapper className="flex">
				<Image src={props.src} width={props.width} height={props.height} />
			</div>
			<div bottomWrapper className="absolute flex w-full h-full px-8 py-8">
				<div bottomMenu className="self-end flex w-full items-center justify-between">
					<div leftSect className="flex flex-col text-white">
						<p className="text-2xl font-bold"> Lesson 1 </p>
						<p className="pt-2 text-lg"> 5:30 min </p>
					</div>
					<div rightButton className="flex">
						<Image src="/images/play.png" width="38" height="38" />
					</div>
				</div>
			</div>
		</div>
	)
}

function LessonItem(props) {
	return (
		<div className={ "flex items-center px-4 py-2 rounded-xl justify-between" + (props.selected ? " bg-gray-400" : "") }>
			<div leftSect className="flex items-center">
				<div imageWrapper className="flex relative w-12 h-12 mr-4 rounded-lg overflow-hidden">
					<Image src="/images/instructor.png" layout="fill" objectFit="cover" />
				</div>
				<div lessonInfo className="flex flex-col">
					<p className="text-white text-lg font-bold"> Lesson1 </p>
					<p className="text-black text-sm font-medium"> 5:30 min </p>
				</div>
			</div>
			<div rightSect className="flex items-center">
				<div imageWrapper className="flex mr-4">
					<Image src="/images/queue.png" width="20" height="20" />
				</div>
				<div imageWrapper className="flex">
					<Image src="/images/play.png" width="30" height="30" />
				</div>
			</div>
		</div>
	)
}

function PreviewLesson() {
	return (
		<div className="flex flex-col md:flex-row md:bg-fore rounded-xl md:px-4 md:py-8">
			<div previewWrapper className="flex md:w-1/2">
				<PreviewItem src="/images/instructor.png" width="828" height="552" />
			</div>
			<div scrollWrapper className="flex flex-col md:w-1/2 md:pl-8">
				<div container className="flex flex-col h-full overflow-y-auto">
					<div itemList className="flex flex-col md:h-20">
						<LessonItem />
						<LessonItem selected />
						<LessonItem />
						<LessonItem />
						<LessonItem />
						<LessonItem />
						<LessonItem />
						<LessonItem />
						<LessonItem />
					</div>
				</div>
			</div>
		</div>
	)
}

function VideoItem(props) {
	return (
		<div wrapper className="flex mr-4">
			<div className="flex w-64 h-full relative border border-4 border-white rounded-lg overflow-hidden">
				<Image src="/images/instructor.png" layout="fill" objectFit="cover" />
				<div comment className="flex absolute w-full h-full items-center">
					<div horizonCenter className="flex flex-col w-full items-center">
						<div className="flex px-2 rounded-full bg-gray-500">
							Lesson 1
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function VideoList() {
	return (
		<div className="flex flex-col w-full text-white">
			<p className="md:py-2 text-xl md:text-3xl font-bold"> Syllabus </p>
			<div className="w-16 h-1 mt-1 bg-yellow-500 md:bg-blue-500"></div>
			<div filmWrapper className="flex h-48 md:px-4 md:py-4 mt-8 rounded-xl md:bg-fore">
				<div container className="flex w-full h-full overflow-x-auto">
					<div videoFilm className="flex w-20 h-full">
						<VideoItem />
						<VideoItem />
						<VideoItem />
						<VideoItem />
						<VideoItem />
					</div>
				</div>
			</div>
		</div>
	)
}

export default function Course_Discription() {
  return (
    <Layout>
      <Head>
        <title>Instructors</title>
      </Head>
			<div className="flex flex-row px-6 md:px-20 pb-10">
				<div className="hidden md:flex flex-none mr-20 mt-28">
					<LeftSideBar />	
				</div>
				<div className="flex flex-col w-full">
					<TopBar />
					<div className="mt-8">
						<PreviewLesson />
					</div>
					<div className="flex w-full mt-8">
						<VideoList />
					</div>
				</div>
			</div>
		</Layout>
  )
}
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import Photofolia from '../components/photofolia'
import MainHeader_User from '../components/mainheader_user'

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
      <div className="flex flex-col md:w-48 mt-2 md:mt-16 px-6 md:px-0 md:ml-0 text-white text-sm">
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

function InvoiceItem(props) {
  return (
    <tr>
      <td>
        <div className={"flex items-center pl-2 py-2" + (props.selected ? " bg-blue-500 rounded-tl-lg rounded-bl-lg" : "")}>
          <div imageWrapper className="flex pr-1">
            <Image src="/images/checkbox.png" width="13" height="14" />
          </div>
          <p> #ID002 </p>
        </div>
      </td>
      <td>
        <div className={"py-2" + (props.selected && " bg-blue-500")}>
          Jane Cooper
        </div>
      </td>
      <td>
        <div className={"py-2" + (props.selected && " bg-blue-500")}>
          Nov 1, 2020, 9:43 AM
        </div>
      </td>
      <td>
        <div className={"py-2" + (props.selected && " bg-blue-500")}>
          Google Pay
        </div>
      </td>
      <td>
        <div className={"py-2 font-bold " + (props.selected && " bg-blue-500")}>
          <div className={props.success ? "text-green-900" : "text-red-900"}> 
            <p className={props.pending ? "text-white" : ""}>
              {props.pending ? "Pending" : (props.success ? "Successful" : "Unsuccessful")}
            </p>
          </div>
        </div>
      </td>
      <td>
        <div className={"py-2" + (props.selected && " bg-blue-500 rounded-tr-lg rounded-br-lg")}>
          Rs 3290
        </div>
      </td>
    </tr>
  )
}

function InvoiceTable() {
  return (
    <div className="flex flex-col h-20">
      <table class="table-auto text-white text-center">
        <thead>
          <tr>
            <th>
              <div className="flex items-center pl-2">
                <div imageWrapper className="flex pr-1">
                  <Image src="/images/checkbox.png" width="13" height="14" />
                </div>
                <p> Order Id </p>
              </div>
              <div className="flex w-full h-px bg-white my-2"></div>
            </th>
            <th>
              Customer
              <div className="flex w-full h-px bg-white my-2"></div>
            </th>
            <th>
              Date
              <div className="flex w-full h-px bg-white my-2"></div>
            </th>
            <th>
              Payment Method
              <div className="flex w-full h-px bg-white my-2"></div>
            </th>
            <th>
              Status
              <div className="flex w-full h-px bg-white my-2"></div>
            </th>
            <th>
              Total
              <div className="flex w-full h-px bg-white my-2"></div>
            </th>
          </tr>
        </thead>
        <div className="py-2"></div>
        <tbody>
          <InvoiceItem success />
          <InvoiceItem selected />
          <InvoiceItem success />
          <InvoiceItem />
          <InvoiceItem pending />
          <InvoiceItem />
          <InvoiceItem />
          <InvoiceItem success />
          <InvoiceItem />
          <InvoiceItem />
          <InvoiceItem />
          <InvoiceItem pending />
          <InvoiceItem />
          <InvoiceItem pending />
        </tbody>  
      </table>
    </div>
  )
}

function ListItem(props) {
  return (
    <div className={"flex flex-col p-2 my-2 rounded-lg" + (props.selected && " bg-fore")}>
      <div className="flex items-center justify-between">
        <p className="font-bold">OrderId</p>
        <p>#10002</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-bold">Customer</p>
        <p>Jane Cooper</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-bold">Date</p>
        <p>Nov 1, 2020, 9:43 PM</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-bold">Payment Method</p>
        <p>Google Pay</p>
      </div>
      <div className="flex items-center justify-between font-bold">
        <p className="font-bold">Status</p>
        <p className={props.success ? "text-green-900" : "text-red-900"}>
          <div className={props.pending && "text-white"}>
            {props.pending ? "Pending" : (props.success ? "Successful" : "UnSuccessful")}
          </div>
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-bold">Total</p>
        <p>RS. 3290</p>
      </div>
    </div>
  )
}

export default function Invoice() {
  return (
    <Layout>
      <Head>
        <title>Instructors</title>
      </Head>

      <MainHeader_User second src="/images/jason.png"	width="1656" height="1412" title="HI!! JASON" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

			<div className="w-full flex flex-col md:flex-row md:px-44">
				<UserInfo />
        <div rightSect className="hidden md:flex flex-col w-full pl-16">
          <div title className="flex justify-between pt-8 pb-4">
            <p className="text-white text-lg font-bold"> My invoices </p>
            <div search className="self-end flex items-center w-36 p-2 h-6 rounded-full border border-1 border-gray-400">
              <Image src="/images/search.png" width="12" height="12" />
            </div>
          </div>
          <div className="flex flex-col h-full overflow-y-auto">
            <InvoiceTable />
          </div>
        </div>
        <div rightSect className="flex flex-col md:hidden mt-4 px-6 text-white">
          <ListItem success/>
          <ListItem selected />
          <ListItem pending/>
          <ListItem success/>
          <ListItem pending/>
        </div>
			</div>
			<div className="h-4 md:h-12"></div>
		</Layout>
  )
}
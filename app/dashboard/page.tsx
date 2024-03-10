'use client';
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
	{
	  name: 'Strawberry',
	  revenue: 4000,
	  quantity: 2400,
	  amt: 2400,
	},
	{
	  name: 'Melon',
	  revenue: 3000,
	  quantity: 1398,
	  amt: 2210,
	},
	{
	  name: 'Berries',
	  revenue: 2000,
	  quantity: 9800,
	  amt: 2290,
	},
	{
	  name: 'Squash',
	  revenue: 2780,
	  quantity: 3908,
	  amt: 2000,
	},
	{
	  name: 'Corn',
	  revenue: 1890,
	  quantity: 4800,
	  amt: 2181,
	},
	{
	  name: 'Potato',
	  revenue: 2390,
	  quantity: 3800,
	  amt: 2500,
	},
	{
	  name: 'Tomato',
	  revenue: 3490,
	  quantity: 4300,
	  amt: 2100,
	},
  ];


export default function DocsPage() {
	return (
		<div>
			<div className="pb-10">
				<h1 className={title()}>Your Dashboard</h1>
			</div>
			<section>
				<div className="grid grid-cols-5 grid-rows-5 gap-4">
					<div className="col-span-3 row-span-2 col-start-3 row-start-4 bg-gray-100 rounded-lg p-6">
						control monthly stats
						<div className="flex flex-row gap-3">
							idkidkidk
						</div>
					</div>
					<div className="col-span-3 row-span-3 col-start-3 row-start-1 bg-gray-100 rounded-lg p-6">
						<div className="flex flex-col justify-center gap-3">
							<h1 className="text-2xl  pb-3 text-left font-bold">MONTHLY SALES</h1>
							<BarChart
							width={650}
							height={300}
							data={data}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5
							}}
							>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Bar dataKey="quantity" fill="#8884d8" />
								<Bar dataKey="revenue" fill="#82ca9d" />
							</BarChart>
							<div className="flex flex-row gap-3">
								<Button>Sell</Button>
								<Button></Button>
								<Button></Button>
							</div>
						</div>
					</div>
					<div className="col-span-2 col-start-1 row-start-1 bg-gray-100 rounded-lg p-6">
						<div className="flex flex-col justify-center">
							<h1 className="text-2xl  pb-3 text-left font-bold">ACTIONS</h1>
							<div className="flex flex-row gap-3">
								<Button>Sell</Button>
								<Button></Button>
								<Button></Button>
							</div>
						</div>
					</div>
					<div className="col-span-2 row-span-4 col-start-1 row-start-2 bg-gray-100 rounded-lg p-6">
						<div className="flex flex-col justify-center">
							<h1 className="text-2xl  pb-3 text-left font-bold">STATISTICS</h1>
							<div className="flex gap-2">
								<h2>Lifetime Earnings:</h2>
								<p>{"$"+10128392}</p>
							</div>
							<hr className=" w-full h-1 mx-auto my-4 "></hr>
							<div className="flex gap-2">
								<h2>Most Sold Item (2024):</h2>
								<p>{"Strawberries"}</p>
							</div>
							<div className="flex gap-2">
								<h2>Yearly Earnings (2024):</h2>
								<p>{"$"+10128392}</p>
							</div>
						</div>	
					</div>
				</div>
					
			</section>
		</div>
	);
}
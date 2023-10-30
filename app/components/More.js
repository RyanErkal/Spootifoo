import Image from "next/image";
import orange from "../assets/orange.webp";
import mbdtf from "../assets/mbdtf.jpeg";
import pablo from "../assets/pablo.jpeg";

export default function More() {
	return (
		<div className="flex items-center justify-center ">
			<div className="mt-4 max-w-7xl w-full">
				<h2 className="text-2xl font-bold px-2">More by...</h2>
				<div className="flex flex-row justify-between gap-2 overflow-x-scroll lg:overflow-auto lg:grid lg:grid-cols-6">
					<div className="bg-slate-800 text-slate-100 p-3 mt-4 rounded-lg flex flex-col min-w-[30vw] lg:min-w-[10vw]">
						<Image src={orange} className="rounded-md" />
						<h2 className="text-lg font-bold mt-3">
							Channel Orange
						</h2>
					</div>
					<div className="bg-slate-800 text-slate-100 p-3 mt-4 rounded-lg flex flex-col min-w-[30vw] lg:min-w-[10vw]">
						<Image src={mbdtf} className="rounded-md" />
						<h2 className="text-lg font-bold mt-3">
							My Beautiful Dark Twiste...
						</h2>
					</div>
					<div className="bg-slate-800 text-slate-100 p-3 mt-4 rounded-lg flex flex-col min-w-[30vw] lg:min-w-[10vw]">
						<Image src={pablo} className="rounded-md" />
						<h2 className="text-lg font-bold mt-3">
							The Life of Pablo
						</h2>
					</div>
					<div className="bg-slate-800 text-slate-100 p-3 mt-4 rounded-lg flex flex-col min-w-[30vw] lg:min-w-[10vw]">
						<Image src={orange} className="rounded-md" />
						<h2 className="text-lg font-bold mt-3">
							Channel Orange
						</h2>
					</div>
					<div className="bg-slate-800 text-slate-100 p-3 mt-4 rounded-lg flex flex-col min-w-[30vw] lg:min-w-[10vw]">
						<Image src={mbdtf} className="rounded-md" />
						<h2 className="text-lg font-bold mt-3">
							My Beautiful Dark Twiste...
						</h2>
					</div>
					<div className="bg-slate-800 text-slate-100 p-3 mt-4 rounded-lg flex flex-col min-w-[30vw] lg:min-w-[10vw]">
						<Image src={pablo} className="rounded-md" />
						<h2 className="text-lg font-bold mt-3">
							The Life of Pablo
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

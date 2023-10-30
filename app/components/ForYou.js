import Image from "next/image";
import Blonde from "../assets/blonde.webp";

export default function ForYou() {
	return (
		<div className="flex items-center justify-center ">
			<div className="mt-4 px-2 max-w-7xl w-full">
				<h2 className="text-2xl font-bold">Picked for you</h2>
				<div className="bg-slate-800 text-slate-100 p-4 mt-4 rounded-lg flex justify-start items-start">
					<Image src={Blonde} className="rounded-md max-w-[15vh]" />
					<div className="flex flex-col justify-start items-start ml-4">
						<h2 className="text-3xl font-bold">Blond</h2>
						<p className="text-xl">Frank Ocean</p>
					</div>
				</div>
			</div>
		</div>
	);
}

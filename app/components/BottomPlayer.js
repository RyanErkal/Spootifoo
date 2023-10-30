import Image from "next/image";
import blonde from "../assets/blonde.webp";

export default function BottomPlayer() {
	return (
		<div className="bg-slate-700 fixed bottom-0 w-full flex justify-between pl-2 pr-6 py-2">
			<div className="flex">
				<Image
					src={blonde}
					alt="blonde"
					width={50}
					height={50}
					className="rounded-sm"
				/>
				<div className="ml-4">
					<h1 className="text-xl">White Ferrari</h1>
					<h2 className="text-md">Frank Ocean</h2>
				</div>
			</div>
			<div className="flex items-center text-slate-100">
				<svg
					width="24px"
					height="24px"
					viewBox="0 0 24 24"
					fill="inherit"
					className="fill-slate-100 mr-2"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z" />
				</svg>
				<svg
					width="24px"
					height="24px"
					viewBox="0 0 24 24"
					fill="inherit"
					className="fill-slate-100"
					xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M5.60439 4.23093C4.94586 3.73136 4 4.20105 4 5.02762V18.9724C4 19.799 4.94586 20.2686 5.60439 19.7691L14.7952 12.7967C15.3227 12.3965 15.3227 11.6035 14.7952 11.2033L5.60439 4.23093ZM2 5.02762C2 2.54789 4.83758 1.13883 6.81316 2.63755L16.004 9.60993C17.5865 10.8104 17.5865 13.1896 16.004 14.3901L6.81316 21.3625C4.83758 22.8612 2 21.4521 2 18.9724V5.02762Z"
						fill="inherit"
					/>
					<path
						d="M20 3C20 2.44772 20.4477 2 21 2C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21V3Z"
						fill="inherit"
					/>
				</svg>
			</div>
		</div>
	);
}

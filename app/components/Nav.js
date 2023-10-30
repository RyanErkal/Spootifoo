import React from "react";

export default function Nav() {
	return (
		<div className="flex items-center justify-center">
			<ul className="flex flex-row gap-2 px-2 pt-4">
				<li className="text-lg bg-green-500 text-slate-900 py-1 px-4 rounded-full">
					All
				</li>
				<li className="text-lg bg-slate-800 py-1 px-4 rounded-full">
					Songs
				</li>
				<li className="text-lg bg-slate-800 py-1 px-4 rounded-full">
					Podcasts
				</li>
				<li className="text-lg bg-slate-800 py-1 px-4 rounded-full">
					Audiobooks
				</li>
			</ul>
		</div>
	);
}

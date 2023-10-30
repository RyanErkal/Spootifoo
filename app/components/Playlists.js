import React from "react";

export default function Playlists() {
	return (
		<div className="flex items-center justify-center ">
			<div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-4 px-2 max-w-7xl w-full">
				<div className="bg-slate-800 text-slate-100 p-4 rounded-lg">
					<h2 className="text-2xl font-bold">Playlist 1</h2>
				</div>
				<div className="bg-slate-800 text-slate-100 p-4 rounded-lg">
					<h2 className="text-2xl font-bold">Playlist 2</h2>
				</div>
				<div className="bg-slate-800 text-slate-100 p-4 rounded-lg">
					<h2 className="text-2xl font-bold">Playlist 3</h2>
				</div>
				<div className="bg-slate-800 text-slate-100 p-4 rounded-lg">
					<h2 className="text-2xl font-bold">Playlist 4</h2>
				</div>
				<div className="bg-slate-800 text-slate-100 p-4 rounded-lg">
					<h2 className="text-2xl font-bold">Playlist 5</h2>
				</div>
				<div className="bg-slate-800 text-slate-100 p-4 rounded-lg">
					<h2 className="text-2xl font-bold">Playlist 6</h2>
				</div>
			</div>
		</div>
	);
}

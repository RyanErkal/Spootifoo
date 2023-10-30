import Nav from "./components/Nav";
import Playlists from "./components/Playlists";
import ForYou from "./components/ForYou";
import Trending from "./components/Trending";
import More from "./components/More";
import BottomPlayer from "./components/BottomPlayer";

export default function Home() {
	return (
		<>
			<div className="bg-slate-900 text-slate-100 px-2 min-h-screen pb-24">
				<Nav />
				<Playlists />
				<ForYou />
				<Trending />
				<More />
				<More />
			</div>
			<BottomPlayer />
		</>
	);
}

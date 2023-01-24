import Seo from "../components/Seo";
import FriendsSearch from "../components/friendsSearch";
import DarkModeToggleButton from "../components/dark-mode";
import mainLogo from "../public/img/mainLogo.png";
import Image from 'next/image';


export default function Home() {
	return (
		<>
			<Seo title="Home"/>

			<div style={{display:"flex", justifyContent:"center"}}>
			<Image
			src={mainLogo}
			alt="sibal"
			/>
			</div>

			<div>	
				<FriendsSearch/>
			</div>
		</>
	);
}

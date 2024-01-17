import ParticlesBox from "./components/boxes/particles-box";
import AboutContainer from "./containers/about.container";
import BannerContainer from "./containers/banner.container";
import ContactsContainer from "./containers/contacts.container";
import NavbarContainer from "./containers/navbar.container";
import SkillsContainer from "./containers/skills.container";

function App() {
	return (
		<div className=" overflow-x-hidden ">
			<ParticlesBox />
			<NavbarContainer>
				<BannerContainer />
				<AboutContainer />
				<SkillsContainer />
				{/* <ResumeContainer /> */}
				<ContactsContainer />
			</NavbarContainer>
		</div>
	);
}

export default App;

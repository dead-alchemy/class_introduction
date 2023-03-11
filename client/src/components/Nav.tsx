import {useState} from "react";

import {Box} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";

const Nav = () => {
	const tabs = [
		{href: "/", display: "About Me"},
		{href: "/course", display: "Course"},
		{href: "/hobbies", display: "Hobbies"},
		{href: "/where", display: "Where To Find Me"},
	];

	const [nav, setNav] = useState(0);

	const onNavHandler = (i: number) => {
		setNav(i);
	};
	return (
		<Box
			as="nav"
			display={"flex"}
			width="100vw"
			px={2}
			py={1}
			gridGap={4}
			justifyContent="center"
		>
			{tabs.map((tab, index) => (
				<Box
					key={tab.href}
					color={nav === index ? "red.300" : "blue.500"}
					fontWeight="700"
					fontSize={"xl"}
					_hover={{
						textDecoration: "underline",
					}}
				>
					<NavLink
						to={`${tab.href}`}
						onClick={() => {
							onNavHandler(index);
						}}
					>
						{tab.display}
					</NavLink>
				</Box>
			))}
		</Box>
	);
};

export default Nav;

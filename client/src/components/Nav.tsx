import {useLocation} from "react-router-dom";
import {Box} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";

const Nav = () => {
	const {pathname} = useLocation();

	const tabs = [
		{href: "/", display: "About Me"},
		{href: "/course", display: "Course"},
		{href: "/hobbies", display: "Hobbies"},
		{href: "/where", display: "Where To Find Me"},
	];

	return (
		<Box as="nav" display={"flex"} gridGap={4} justifyContent="center">
			{tabs.map((tab, index) => (
				<Box
					key={tab.href}
					color={pathname === tab.href ? "red.300" : "blue.500"}
					fontWeight="700"
					fontSize={"xl"}
					_hover={{
						textDecoration: "underline",
					}}
				>
					<NavLink to={`${tab.href}`}>{tab.display}</NavLink>
				</Box>
			))}
		</Box>
	);
};

export default Nav;

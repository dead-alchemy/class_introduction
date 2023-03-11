import {Box} from "@chakra-ui/react";
import Nav from "./Nav";

const Display = (props: any) => {
	return (
		<Box
			minHeight={"100vh"}
			minWidth={"100vw"}
			backgroundColor="black.200"
			my={0}
			mx={"auto"}
		>
			<Nav />
			{props.children}
		</Box>
	);
};

export default Display;

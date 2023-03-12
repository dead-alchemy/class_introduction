import {Box} from "@chakra-ui/react";
import Nav from "./Nav";

const Display = (props: any) => {
	return (
		<Box minHeight={"100vh"} backgroundColor="black.200">
			<Nav />
			{props.children}
		</Box>
	);
};

export default Display;

import picture from "../../assets/pictures/IMG_1633.jpg";
import wedding from "../../assets/pictures/IMG_3186.jpg";

import {Box, Image, Heading} from "@chakra-ui/react";

const App = () => {
	return (
		<Box
			display={"grid"}
			justifyContent="center"
			textAlign={"center"}
			gridGap={8}
		>
			<Heading
				border="solid"
				borderRadius=".5rem"
				background="blue.200"
				mx="4rem"
				py="1rem"
			>
				Hello CSC350
			</Heading>

			<Heading fontSize="3xl">About Me!</Heading>
			<Box display={"flex"} gridGap={4}>
				<Box>
					<Image
						borderRadius="40px"
						boxSize="25rem"
						objectFit="cover"
						src={picture}
						boxShadow="0 1px 8px rgba(0, 0, 0, 0.25)"
						mb={4}
					/>
					<Image
						borderRadius="40px"
						boxSize="25rem"
						objectFit="cover"
						src={wedding}
						boxShadow="0 1px 8px rgba(0, 0, 0, 0.25)"
					/>
				</Box>
				<Box pl="4" fontSize={"lg"}>
					<Box my="4">David Nicholas</Box>
					<Box my="4">Salt Lake City, Utah</Box>
					<Box my="4">Software Developer</Box>
					<Box my="4">Married</Box>
					<Box my="4">3 dogs and 2 cats</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default App;

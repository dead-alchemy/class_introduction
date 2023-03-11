import accordion from "../../assets/pictures/accordion.jpg";
import denver from "../../assets/pictures/IMG_3186.jpg";
import Aquarium from "../../assets/pictures/Aquarium.jpg";
import camping from "../../assets/pictures/camping.jpg";
import camping2 from "../../assets/pictures/IMG_1101.jpeg";
import hawaii from "../../assets/pictures/hawaii.jpg";

import {Box, Image, Heading} from "@chakra-ui/react";

const Hobbies = () => {
	return (
		<Box
			display={"grid"}
			justifyContent="center"
			textAlign={"center"}
			gridGap={8}
		>
			<Heading fontSize="3xl">What Hobbies Do I Have?</Heading>
			<Box>
				<Heading fontSize="xl">Travelling</Heading>
				<Box display="flex" gridGap={8} justifyContent="center">
					<Image
						borderRadius="40px"
						boxSize="25rem"
						objectFit="cover"
						src={Aquarium}
						boxShadow="0 1px 8px rgba(0, 0, 0, 0.25)"
					/>
					<Image
						borderRadius="40px"
						boxSize="25rem"
						objectFit="cover"
						src={hawaii}
						boxShadow="0 1px 8px rgba(0, 0, 0, 0.25)"
					/>
					<Image
						borderRadius="40px"
						boxSize="25rem"
						objectFit="cover"
						src={denver}
						boxShadow="0 1px 8px rgba(0, 0, 0, 0.25)"
					/>
				</Box>
			</Box>
			<Box>
				<Heading fontSize="xl">Camping</Heading>
				<Box display="flex" gridGap={8} justifyContent="center">
					<Image
						borderRadius="40px"
						boxSize="25rem"
						objectFit="cover"
						src={camping}
						boxShadow="0 1px 8px rgba(0, 0, 0, 0.25)"
					/>
					<Image
						borderRadius="40px"
						boxSize="25rem"
						objectFit="cover"
						src={camping2}
						boxShadow="0 1px 8px rgba(0, 0, 0, 0.25)"
					/>
				</Box>
			</Box>
			<Box>
				<Heading fontSize="xl">Accordion</Heading>
				<Box display="flex" gridGap={8} justifyContent="center">
					<Image
						borderRadius="40px"
						objectFit="cover"
						src={accordion}
						boxShadow="0 1px 8px rgba(0, 0, 0, 0.25)"
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default Hobbies;

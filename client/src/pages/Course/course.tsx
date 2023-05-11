import {Box, Heading, ListItem, UnorderedList} from "@chakra-ui/react";

const Course = () => {
	return (
		<Box
			display={"grid"}
			justifyContent="center"
			textAlign={"center"}
			gridGap={8}
			color="gray.800"
		>
			<Heading fontSize="3xl">What I Hope to Learn</Heading>
			<UnorderedList fontSize={"xl"} styleType="none">
				<ListItem>
					Learn more about interactive design and accesiblity.
				</ListItem>
				<ListItem>
					Better understand how to layout data and functionality.
				</ListItem>
			</UnorderedList>
		</Box>
	);
};

export default Course;

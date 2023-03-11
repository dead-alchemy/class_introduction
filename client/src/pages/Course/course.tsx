import {Box, Heading, ListItem, UnorderedList} from "@chakra-ui/react";

const Course = () => {
	return (
		<Box
			display={"grid"}
			justifyContent="center"
			textAlign={"center"}
			gridGap={8}
		>
			<Heading fontSize="3xl">What I Hope to Learn</Heading>
			<UnorderedList fontSize={"xl"} styleType="none">
				<ListItem>Build Better Apps</ListItem>
				<ListItem>Better Understand UX / UI</ListItem>
			</UnorderedList>
		</Box>
	);
};

export default Course;

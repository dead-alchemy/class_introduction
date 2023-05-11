import {Box, Heading, ListItem, UnorderedList, Link} from "@chakra-ui/react";

const Where = () => {
	return (
		<Box
			display={"grid"}
			justifyContent="center"
			textAlign={"center"}
			gridGap={8}
		>
			<Heading fontSize="3xl" color="gray.800">
				Where to Find Me!
			</Heading>
			<UnorderedList fontSize={"xl"} styleType="none" color={"blue.600"}>
				<ListItem>
					<Link href="https://dnicholas.me/" isExternal>
						dnicholas.me
					</Link>
				</ListItem>
				<ListItem>
					<Link href="https://github.com/dead-alchemy/" isExternal>
						github.com/dead-alchemy
					</Link>
				</ListItem>
				<ListItem>
					<Link
						href="https://www.linkedin.com/in/david-nicholas-820129225/"
						isExternal
					>
						linkedin.com/in/david-nicholas-820129225/
					</Link>
				</ListItem>
			</UnorderedList>
		</Box>
	);
};

export default Where;

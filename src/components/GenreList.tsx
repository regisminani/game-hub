import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}
const GenreList = ({selectedGenre, onSelectGenre}: Props) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <List.Root listStyle={"none"}>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize={"32px"}
              borderRadius={8}
            />
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal' } onClick={()=>onSelectGenre(genre)} _hover={{textDecorationLine: 'underline'}} variant={'plain'} fontSize="lg">{genre.name}</Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;

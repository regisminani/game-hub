import bullsEye from '../assets/bullsEye.webp'
import thumbsUp from '../assets/thumbsup.webp'
import meh from '../assets/meh.webp'
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  rating: number;
}

const Emoji = ({rating}:Props) => {
    if(rating < 3) return null;
    const emojiMap: {[key:number]: ImageProps} = {
        3: {src: meh, alt: 'meh'},
        4: {src: thumbsUp, alt: 'recommended'},
        5: {src: bullsEye, alt: 'exceptional'},
    }
  return <Image {...emojiMap[rating]} mixBlendMode={'unset'} boxSize='25px' marginTop={1} rounded={'l3'}/>;
};

export default Emoji;

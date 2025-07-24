import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProfileImage from "../assets/img/profile.png"
import { Image } from 'react-bootstrap';
import SocialMediaIcons from './SocialMediaIcons';

function CustomerCard() {
  return (
    <Card style={{ width: '22rem' }} className='card d-flex align-items-center justify-content-center'>
      <Image src={ProfileImage} width={80} className='mt-4'/>
      <Card.Body>
        <Card.Title>Sara Dole</Card.Title>
        <Card.Title className='text-muted fs-6'>Front End Engineer @ Mirosoft</Card.Title>
        <Card.Text className='w-100'>
          I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.
        </Card.Text>
        <Button className='w-100 border-0' style={{ backgroundColor: "#4338CA" }}>Contact me</Button>
      </Card.Body>
      <SocialMediaIcons />
    </Card>
  );
}

export default CustomerCard;
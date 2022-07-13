
import { StyledHeader, Nav, Logo, Image } from "./styles/header.styled"
import { Button } from "./styles/button.style"
import { Container } from "./styles/container.style"
import { Flex } from "./styles/Flex.styled"


export default function Header(){
    return (
        <StyledHeader>
            <Container >
                <Nav>
                    <Logo src='./images/logo.svg' alt=''/>
                    <Button > Try it free
                
                    </Button>
                </Nav>
                <Flex>
                    <div>
                        <h1> Build comunity your fans will love it</h1>
                 
                    <p>
                        Huddle re-imagines the way we build comunities. You 
                        have a voice, 
                        but so does your audience. Create conections with your
                        users as
                        your engage in genuine discussion.
                    </p>
                    <Button bg='#ff0099' color= '#fff'>
                        Get started for free
                    </Button>
             
                    </div>
                    <Image src='./images/illustration-mockups.svg' alt=''/>

                </Flex>
            </Container>
        </StyledHeader>
    )
}
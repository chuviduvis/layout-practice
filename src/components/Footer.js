import SocialIcons from "./SocialIcons"
import { Container } from "./styles/container.style"
import { Flex } from "./styles/Flex.styled"
import { StyledFooter } from "./styles/Footer.styled"
export default function Footer() {
    return(
        <StyledFooter>
            <Container>
            <img src="./images/logo_white.svg" alt=''/>
            <Flex>
                <ul>
                    <li>
                        Information
                        More information
                        And more information
                        A little more information.
                    </li>
                    <li>+1-543-123-4567</li>
                    <li>example@huddle.com</li>
                </ul>
                <ul>
                    <li>About Us</li>
                    <li>What We Do</li>
                    <li>FAQ</li>
                </ul>
                <ul>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
                <SocialIcons />
            </Flex>
            <p>&copy; 2022 Huddle. All rights reserved</p>
            </Container>
        </StyledFooter>
    )
}
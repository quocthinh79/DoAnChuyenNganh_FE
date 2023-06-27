import { Button, ContainerFixed, Flex, Image } from "@components";
import { RESUME_LINK } from "@constant";
import { EButtonTypes, EDirectionFlex, EJustifyFlex } from "@core";
const Resume = require("../../images/resume.png");

export function AboutUs() {
  return (
    <>
      <Flex
        justify={EJustifyFlex.Center}
        direction={EDirectionFlex.Column}
        gap={10}
      >
        <Button type={EButtonTypes.Primary} target="_blank" href={RESUME_LINK}>
          Click to view my resume
        </Button>
        <Image preview={false} width="100%" height="100%" src={Resume} />
      </Flex>
    </>
  );
}

export default AboutUs;

import React from "react";
import { Text, SocialIcons } from "styles/reusableStyles";

const ContactTab = () => {
  return (
    <>
      <Text expandedText>Hi everyone!</Text>
      <Text expandedText>
        My name is Mario Merino and I am a web developer from Houston.
      </Text>
      <Text expandedText>
        Feel free to reach out to me if you have ay questions or would like to
        contribute. I completed this project in 2018 with my friend as a
        challenge for us to do :)
      </Text>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/solarstar101/React-Sorting-Algorithm-Visualizer"
      >
        <SocialIcons.Github />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/mario-a-merino/"
      >
        <SocialIcons.Linkedin />
      </a>
    </>
  );
};

export default ContactTab;

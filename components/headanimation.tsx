"use client";

import React from "react";
import Typewriter from "typewriter-effect";

type HeadAnimationProps = {
    head1: string;
    head2: string;
  };
  
  const HeadAnimation: React.FC<HeadAnimationProps> = ({head1,head2}) => {
    return (
      <>
        <Typewriter
          options={{
            strings: [head1, head2],
            autoStart: true,
            loop: true,
          }}
        />
      </>
    );
  };
  
  export default HeadAnimation;

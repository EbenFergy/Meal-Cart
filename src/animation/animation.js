import { keyframes } from "styled-components";

export const transthisguy = keyframes`
0%{
    transform: scale(1);
    opacity: 0;

}
20%{
    opacity: 1;

}
40% {

}
100%{
    transform: scale(1.2);
    opacity: 1;

}
`;

export const IncreaseHeight = keyframes`
0%{
   height: 0

}

100%{
    height: auto

}
`;

export const slideUp = keyframes`
0%{
  transform: translateY(20px);
    opacity: 0;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
`;

export const zoomIn = keyframes`
0%{
  transform: scale(1);

  }
  100%{
    transform: scale(1.03);

  }
`;

export const fadeIn = keyframes`
0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;
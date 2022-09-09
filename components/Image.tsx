import { JSX } from "preact";
import { css, tw } from "@twind";

interface ImageProps {
  src: string;
  sizes: string;
  srcset: string;
  width: number;
  height: number;
  title: string;
  highPriority?: boolean;
}

const ImageWrapperStyle = css({
  height: "100%",
  // transform: "scale3d(1.05, 1.05, 1)",
  transition: "transform 0.7s",

  "&:before": {
    content: "''",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    background: "linear-gradient(\
      to bottom,\
      rgba(0, 0, 0, 0) 10%,\
      rgba(0, 0, 0, 0.7) 100%\
    )",
    transition: "background-color 0.3s ease",
  },

  "&:hover, &:focus": {
    transform: "scale3d(1.1, 1.1, 1)",

    "&:before": {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
  },
});

const ImageStyle = css({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export function Image(
  { src, sizes, srcset, width, height, title, highPriority = false }:
    ImageProps,
): JSX.Element {
  return (
    <div class={tw`${ImageWrapperStyle}`}>
      <picture>
        <source
          srcset={srcset}
          sizes={sizes}
        />
        <img
          class={tw`${ImageStyle}`}
          sizes={sizes}
          srcset={srcset}
          src={src}
          alt={title}
          width={width}
          height={height}
          loading={highPriority ? "eager" : "lazy"}
          // @ts-ignore-ignore
          fetchpriority={highPriority && "high"}
        />
      </picture>
    </div>
  );
}

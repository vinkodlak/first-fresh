/** @jsx h */
import { h, JSX } from "preact";
import { tw } from "@twind";

interface HeroFeaturedProps {
  uri: string;
  src?: string;
  srcset?: string;
  srcOri: string;
  srcsetOri: string;
  title: string;
  date: string;
}

const heroItems = [
  {
    uri: "/test",
    src: "/images/1.webp",
    srcset:
      "/images/1_200x133.webp 200w, /images/1_400_267.webp 700w, /images/1_800x533.webp 800w",
    srcOri:
      "https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjIvMDgvYW50ZS1zYW1hcnppamEtQ1k0RUNOaDNlRVktdW5zcGxhc2gtMi5qcGcifQ==",
    srcsetOri:
      "https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjIvMDgvYW50ZS1zYW1hcnppamEtQ1k0RUNOaDNlRVktdW5zcGxhc2gtMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjIwMCwiZml0IjoiaW5zaWRlIn19fQ== 200w,https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjIvMDgvYW50ZS1zYW1hcnppamEtQ1k0RUNOaDNlRVktdW5zcGxhc2gtMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiZml0IjoiaW5zaWRlIn19fQ== 400w,https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjIvMDgvYW50ZS1zYW1hcnppamEtQ1k0RUNOaDNlRVktdW5zcGxhc2gtMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwMCwiZml0IjoiaW5zaWRlIn19fQ== 800w",
    title: "Koja su najbolja europska odredišta u jesen 2022.?",
    date: "1.9.2022",
  },
  {
    uri: "/test2",
    src: "/images/2.webp",
    srcset:
      "/images/1_200x133.webp 200w, /images/1_400_267.webp 700w, /images/1_800x533.webp 800w",
    srcOri:
      "https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjEvMDkvZ2lhbmFuZHJlYS12aWxsYS1SY3VxT2p4VFkydy11bnNwbGFzaC1zY2FsZWQtZTE2MzIzNDg3NDM2OTMuanBnIn0=",
    srcsetOri:
      "https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjEvMDkvZ2lhbmFuZHJlYS12aWxsYS1SY3VxT2p4VFkydy11bnNwbGFzaC1zY2FsZWQtZTE2MzIzNDg3NDM2OTMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyMDAsImZpdCI6Imluc2lkZSJ9fX0= 200w,https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjEvMDkvZ2lhbmFuZHJlYS12aWxsYS1SY3VxT2p4VFkydy11bnNwbGFzaC1zY2FsZWQtZTE2MzIzNDg3NDM2OTMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImZpdCI6Imluc2lkZSJ9fX0= 400w,https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjEvMDkvZ2lhbmFuZHJlYS12aWxsYS1SY3VxT2p4VFkydy11bnNwbGFzaC1zY2FsZWQtZTE2MzIzNDg3NDM2OTMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MDAsImZpdCI6Imluc2lkZSJ9fX0= 800w",
    title: "Kako biti dobar turist?",
    date: "31.8.2022",
  },
  {
    uri: "/test3",
    src: "/images/3.webp",
    srcset:
      "/imag3_200x133.webp 200w, /imag3_400_267.webp 700w, /imag3_800x533.webp 800w",
    srcOri:
      "https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjIvMDgvSU1HXzIwMjIwNjIwXzExMzIyOS5qcGcifQ==",
    srcsetOri:
      "https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjIvMDgvSU1HXzIwMjIwNjIwXzExMzIyOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjIwMCwiZml0IjoiaW5zaWRlIn19fQ== 200w,https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjIvMDgvSU1HXzIwMjIwNjIwXzExMzIyOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiZml0IjoiaW5zaWRlIn19fQ== 400w,https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjIvMDgvSU1HXzIwMjIwNjIwXzExMzIyOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwMCwiZml0IjoiaW5zaWRlIn19fQ== 800w",
    title: "Sova nas generacijama uči stranim jezicima",
    date: "31.8.2022",
  },
  {
    uri: "/test4",
    src: "/images/4.webp",
    srcset:
      "/images/4_200x140.webp 200w, /images/4_400_281.webp 700w, /images/4_800x561.webp 800w",
    srcOri:
      "https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMTgvMDkvb2t0b2JlcmZlc3QtMjc2Mjk3M18xMjgwLWUxNTM3Njg4MDcxMTA5LmpwZyJ9",
    srcsetOri:
      "https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMTgvMDkvb2t0b2JlcmZlc3QtMjc2Mjk3M18xMjgwLWUxNTM3Njg4MDcxMTA5LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjAwLCJmaXQiOiJpbnNpZGUifX19 200w,https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMTgvMDkvb2t0b2JlcmZlc3QtMjc2Mjk3M18xMjgwLWUxNTM3Njg4MDcxMTA5LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDAwLCJmaXQiOiJpbnNpZGUifX19 400w,https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMTgvMDkvb2t0b2JlcmZlc3QtMjc2Mjk3M18xMjgwLWUxNTM3Njg4MDcxMTA5LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAwLCJmaXQiOiJpbnNpZGUifX19 800w",
    title: "Oktoberfest je najveća zabava u Europi",
    date: "31.8.2022",
  },
  {
    uri: "/test5",
    src: "/images/5.webp",
    srcset:
      "/images/5_200x145.webp 200w, /images/5_400_289.webp 700w, /images/5_800x578.webp 800w",
    srcOri:
      "https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjIvMDgvdW5uYW1lZC0xLTUucG5nIn0=",
    srcsetOri:
      "https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjIvMDgvdW5uYW1lZC0xLTUucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyMDAsImZpdCI6Imluc2lkZSJ9fX0= 200w,https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjIvMDgvdW5uYW1lZC0xLTUucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImZpdCI6Imluc2lkZSJ9fX0= 400w,https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjIvMDgvdW5uYW1lZC0xLTUucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MDAsImZpdCI6Imluc2lkZSJ9fX0= 800w",
    title: "Istražite čudesni Jadran u rujnu",
    date: "31.8.2022",
  },
  {
    uri: "/test6",
    src: "/images/6.webp",
    srcset:
      "/images/6_200x133.webp 200w, /images/6_400_266.webp 700w, /images/6_800x532.webp 800w",
    srcOri:
      "https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjIvMDgvRFNDNzgxOS5qcGcifQ==",
    srcsetOri:
      "https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjIvMDgvRFNDNzgxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjIwMCwiZml0IjoiaW5zaWRlIn19fQ== 200w,https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjIvMDgvRFNDNzgxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiZml0IjoiaW5zaWRlIn19fQ== 400w,https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjIvMDgvRFNDNzgxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwMCwiZml0IjoiaW5zaWRlIn19fQ== 800w",

    title: "Šibensko čudesno svjetlo – Light is life 2022.",
    date: "31.8.2022",
  },
  {
    uri: "/test7",
    src: "/images/7.webp",
    srcset:
      "/images/7_200x267.webp 200w, /images/7_400_533.webp 700w, /images/7_600x800.webp 800w",
    srcOri:
      "https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjIvMDgvdmVydGlrYWxuaS12cnRvdmktaG9ydGlhcnQxLmpwZyJ9",
    srcsetOri:
      "https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjIvMDgvdmVydGlrYWxuaS12cnRvdmktaG9ydGlhcnQxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjAwLCJmaXQiOiJpbnNpZGUifX19 200w,https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjIvMDgvdmVydGlrYWxuaS12cnRvdmktaG9ydGlhcnQxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDAwLCJmaXQiOiJpbnNpZGUifX19 400w,https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjIvMDgvdmVydGlrYWxuaS12cnRvdmktaG9ydGlhcnQxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjAwLCJmaXQiOiJpbnNpZGUifX19 600w",

    title: "Vertikalni vrtovi: Zelenilo za male prostore",
    date: "31.8.2022",
  },
];

const HeroFeatured = (
  { uri, src, srcOri, srcset, srcsetOri, title, date }: HeroFeaturedProps,
): JSX.Element => {
  return (
    <div
      class={tw`col-span-5 h-[370px] overflow-hidden relative`}
    >
      <a href={`/${uri}`}>
        <picture>
          <source
            srcset={srcset}
            sizes="(max-width: 800px) 100vw, 800px"
          />
          <img
            class={tw`absolute t-0 l-0 w-full h-full object-cover object-center`}
            loading="eager"
            sizes="(max-width: 800px) 100vw, 800px"
            srcset={srcset}
            src={src}
            alt={title}
            // @ts-ignore-ignore
            fetchpriority="high"
          />
        </picture>
        <div class={tw`absolute text-white bottom-0 w-full z-10 p-2.5`}>
          <div>{title}</div>
          {/* <Published date={date} /> */}
        </div>
      </a>
    </div>
  );
};

const HeroItem = (
  { uri, src, title, date }: HeroFeaturedProps,
): JSX.Element => {
  return (
    <div
      class={tw`col-span-2 h-[140px] overflow-hidden relative`}
    >
      <a href={`/${uri}`}>
        <img
          class={tw`absolute t-0 l-0 w-full h-full object-cover object-center`}
          src={src}
          loading="eager"
          // @ts-ignore-ignore
          fetchpriority="high"
          alt={title}
        />
        <div class={tw`absolute text-white bottom-0 w-full z-10 p-2.5`}>
          <div>{title}</div>
          {/* <Published date={date} /> */}
        </div>
      </a>
    </div>
  );
};

export default function Home() {
  return (
    <div class={tw`col-start-2 col-span-12 grid grid-cols-10 gap-[3px] mb-10`}>
      {heroItems.map((
        hero,
        index,
      ) =>
        (index < 2) &&
          <HeroFeatured key={index} {...hero} /> ||
        <HeroItem key={index} {...hero} />
      )}
    </div>
  );
}

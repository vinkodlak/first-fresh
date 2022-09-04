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
      "/images/1_200x133.webp 200w, /images/1_400x267.webp 400w, /images/1_800x533.webp 800w",
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
      "/images/2_200x133.webp 200w, /images/2_400x267.webp 400w, /images/2_800x533.webp 800w",
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
    srcset: " \
    https://placehold.jp/150x112.png 150w, \
    https://placehold.jp/200x150.png 200w, \
    https://placehold.jp/250x188.png 250w, \
    https://placehold.jp/300x224.png 300w, \
    https://placehold.jp/350x262.png 350w, \
    https://placehold.jp/400x300.png 400w, \
    https://placehold.jp/450x338.png 450w, \
    https://placehold.jp/500x376.png 500w, \
    https://placehold.jp/550x412.png 550w, \
    https://placehold.jp/600x448.png 600w, \
    https://placehold.jp/650x487.png 650w, \
    https://placehold.jp/700x524.png 700w, \
    https://placehold.jp/750x563.png 750w, \
    https://placehold.jp/800x600.png 800w, \
    https://placehold.jp/850x638.png 850w, \
    https://placehold.jp/900x672.png 900w, \
    https://placehold.jp/950x420.png 950w, \
    https://placehold.jp/1000x752.png 1000w, \
    https://placehold.jp/1050x787.png 1050w, \
    https://placehold.jp/1100x824.png 1100w, \
    https://placehold.jp/100x75.png 100w\
    ",
    // "/images/3_200x150.webp 200w, /images/3_400x300.webp 400w, /images/3_800x600.webp 800w",
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
      "/images/4_200x140.webp 200w, /images/4_400x281.webp 400w, /images/4_800x561.webp 800w",
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
    srcset: "/images/5_200x145.webp 200w, \
            /images/5_400x289.webp 400w, \
            /images/5_800x578.webp 800w",
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
      "/images/6_200x133.webp 200w, /images/6_400x266.webp 400w, /images/6_800x532.webp 800w",
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
      "/images/7_200x267.webp 200w, /images/7_400x533.webp 400w, /images/7_600x800.webp 800w",
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
      class={tw`col-span-full md:col-span-5 h-[370px] overflow-hidden relative`}
    >
      <a href={`/${uri}`}>
        <picture>
          <source
            srcset={srcset}
            sizes="(min-width: 768px) 46vw, 100vw"
          />
          <img
            class={tw`absolute t-0 l-0 w-full h-full object-cover object-center`}
            loading="eager"
            sizes="(min-width: 768px) 46vw, 100vw"
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
  { uri, src, srcset, title, date }: HeroFeaturedProps,
): JSX.Element => {
  return (
    <div
      class={tw`col-span-full md:col-span-2 h-[140px] overflow-hidden relative`}
    >
      <a href={`/${uri}`}>
        <picture>
          {
            /* <source
            srcset={srcset}
            sizes="(max-width: 768px) 100vw, 220px"
          /> */
          }
          <img
            class={tw`absolute t-0 l-0 w-full h-full object-cover object-center`}
            loading="lazy"
            // sizes="100vw"
            //       sizes="(max-width: 100px) 100px,\
            //       (max-width: 200px) 200px,\
            //       (max-width: 300px) 300px,\
            //       (max-width: 400px) 400px,\
            //       (max-width: 500px) 500px,\
            //       (max-width: 600px) 600px,\
            //       (max-width: 700px) 700px,\
            //       (max-width: 767px) 800px,\
            //  220px"
            sizes="(min-width: 768px) 12vw, 100vw"
            srcset={srcset}
            src={src}
            alt={title}
            width="1100"
            height="824"
            // @ts-ignore-ignore
            // fetchpriority="high"
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

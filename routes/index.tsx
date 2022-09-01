/** @jsx h */
import { h, JSX } from "preact";
import { tw } from "@twind";

interface HeroFeaturedProps {
  uri: string;
  src: string;
  title: string;
  date: string;
}

const heroItems = [];

const HeroFeatured = (
  { uri, src, title, date }: HeroFeaturedProps,
): JSX.Element => {
  return (
    <div
      class={tw`col-span-5 h-[370px] overflow-hidden relative`}
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
const HeroFeatured2 = (
  { uri, src, title, date }: HeroFeaturedProps,
): JSX.Element => {
  return (
    <div
      class={tw`col-span-5 h-[370px] overflow-hidden relative`}
    >
      <a href={`/${uri}`}>
        <picture>
          <source
            srcset="https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjEvMDkvZ2lhbmFuZHJlYS12aWxsYS1SY3VxT2p4VFkydy11bnNwbGFzaC1zY2FsZWQtZTE2MzIzNDg3NDM2OTMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyMDAsImZpdCI6Imluc2lkZSJ9fX0= 200w,https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjEvMDkvZ2lhbmFuZHJlYS12aWxsYS1SY3VxT2p4VFkydy11bnNwbGFzaC1zY2FsZWQtZTE2MzIzNDg3NDM2OTMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImZpdCI6Imluc2lkZSJ9fX0= 400w,https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjEvMDkvZ2lhbmFuZHJlYS12aWxsYS1SY3VxT2p4VFkydy11bnNwbGFzaC1zY2FsZWQtZTE2MzIzNDg3NDM2OTMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MDAsImZpdCI6Imluc2lkZSJ9fX0= 800w"
            sizes="(max-width: 800px) 100vw, 800px"
          />
          <img
            // loading="eager"
            sizes="(max-width: 800px) 100vw, 800px"
            srcset="https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjEvMDkvZ2lhbmFuZHJlYS12aWxsYS1SY3VxT2p4VFkydy11bnNwbGFzaC1zY2FsZWQtZTE2MzIzNDg3NDM2OTMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyMDAsImZpdCI6Imluc2lkZSJ9fX0= 200w,https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjEvMDkvZ2lhbmFuZHJlYS12aWxsYS1SY3VxT2p4VFkydy11bnNwbGFzaC1zY2FsZWQtZTE2MzIzNDg3NDM2OTMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImZpdCI6Imluc2lkZSJ9fX0= 400w,https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjEvMDkvZ2lhbmFuZHJlYS12aWxsYS1SY3VxT2p4VFkydy11bnNwbGFzaC1zY2FsZWQtZTE2MzIzNDg3NDM2OTMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MDAsImZpdCI6Imluc2lkZSJ9fX0= 800w"
            src="https://images-ta.vinko.me/eyJidWNrZXQiOiJpbWFnZXMtdGEiLCJrZXkiOiJ1cGxvYWRzLzIwMjEvMDkvZ2lhbmFuZHJlYS12aWxsYS1SY3VxT2p4VFkydy11bnNwbGFzaC1zY2FsZWQtZTE2MzIzNDg3NDM2OTMuanBnIn0="
            alt={title}
            style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"
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
    <div class={tw`grid grid-cols-10 gap-[3px] mb-10`}>
      <HeroFeatured
        uri="/"
        src="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQcA/8QAJBAAAQIGAgEFAAAAAAAAAAAAAQACAwQFERIhBhPRFTFBYZL/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/EAB0RAAICAQUAAAAAAAAAAAAAAAECAAMxETJSodH/2gAMAwEAAhEDEQA/AAqfPcfh4iJGGR1tqZk6txpxd2PIY3eRYbWspFTql14gy0u4e+2BMwasWOLmy0AOHziES0sRmJpVAcSqGrcUZoTUMfRafCymXrkYi/VC/I8LKWarNd568lIMnET/2Q=="
        title="title"
        date="date"
      />
      <HeroFeatured2
        uri="/"
        src="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQcA/8QAJBAAAQIGAgEFAAAAAAAAAAAAAQACAwQFERIhBhPRFTFBYZL/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/EAB0RAAICAQUAAAAAAAAAAAAAAAECAAMxETJSodH/2gAMAwEAAhEDEQA/AAqfPcfh4iJGGR1tqZk6txpxd2PIY3eRYbWspFTql14gy0u4e+2BMwasWOLmy0AOHziES0sRmJpVAcSqGrcUZoTUMfRafCymXrkYi/VC/I8LKWarNd568lIMnET/2Q=="
        title="title"
        date="date"
      />
      <HeroItem
        uri="/"
        src="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQcA/8QAJBAAAQIGAgEFAAAAAAAAAAAAAQACAwQFERIhBhPRFTFBYZL/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/EAB0RAAICAQUAAAAAAAAAAAAAAAECAAMxETJSodH/2gAMAwEAAhEDEQA/AAqfPcfh4iJGGR1tqZk6txpxd2PIY3eRYbWspFTql14gy0u4e+2BMwasWOLmy0AOHziES0sRmJpVAcSqGrcUZoTUMfRafCymXrkYi/VC/I8LKWarNd568lIMnET/2Q=="
        title="title"
        date="date"
      />
      <HeroItem
        uri="/"
        src="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQcA/8QAJBAAAQIGAgEFAAAAAAAAAAAAAQACAwQFERIhBhPRFTFBYZL/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/EAB0RAAICAQUAAAAAAAAAAAAAAAECAAMxETJSodH/2gAMAwEAAhEDEQA/AAqfPcfh4iJGGR1tqZk6txpxd2PIY3eRYbWspFTql14gy0u4e+2BMwasWOLmy0AOHziES0sRmJpVAcSqGrcUZoTUMfRafCymXrkYi/VC/I8LKWarNd568lIMnET/2Q=="
        title="title"
        date="date"
      />
      <HeroItem
        uri="/"
        src="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQcA/8QAJBAAAQIGAgEFAAAAAAAAAAAAAQACAwQFERIhBhPRFTFBYZL/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/EAB0RAAICAQUAAAAAAAAAAAAAAAECAAMxETJSodH/2gAMAwEAAhEDEQA/AAqfPcfh4iJGGR1tqZk6txpxd2PIY3eRYbWspFTql14gy0u4e+2BMwasWOLmy0AOHziES0sRmJpVAcSqGrcUZoTUMfRafCymXrkYi/VC/I8LKWarNd568lIMnET/2Q=="
        title="title"
        date="date"
      />
      <HeroItem
        uri="/"
        src="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQcA/8QAJBAAAQIGAgEFAAAAAAAAAAAAAQACAwQFERIhBhPRFTFBYZL/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/EAB0RAAICAQUAAAAAAAAAAAAAAAECAAMxETJSodH/2gAMAwEAAhEDEQA/AAqfPcfh4iJGGR1tqZk6txpxd2PIY3eRYbWspFTql14gy0u4e+2BMwasWOLmy0AOHziES0sRmJpVAcSqGrcUZoTUMfRafCymXrkYi/VC/I8LKWarNd568lIMnET/2Q=="
        title="title"
        date="date"
      />
      <HeroItem
        uri="/"
        src="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQcA/8QAJBAAAQIGAgEFAAAAAAAAAAAAAQACAwQFERIhBhPRFTFBYZL/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/EAB0RAAICAQUAAAAAAAAAAAAAAAECAAMxETJSodH/2gAMAwEAAhEDEQA/AAqfPcfh4iJGGR1tqZk6txpxd2PIY3eRYbWspFTql14gy0u4e+2BMwasWOLmy0AOHziES0sRmJpVAcSqGrcUZoTUMfRafCymXrkYi/VC/I8LKWarNd568lIMnET/2Q=="
        title="title"
        date="date"
      />
    </div>
  );
}

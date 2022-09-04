/** @jsx h */
import { h } from "preact";
import { tw } from "../utils/twind.ts";

export default function ResponsiveImage() {
  return (
    <div class={tw`grid grid-cols-12`}>
      <img
        class={tw`col-span-full md:col-span-6 w-full`}
        src="https://placehold.jp/1800x1800.png"
        srcset="
      https://placehold.jp/500x500.png 500w,
      https://placehold.jp/600x600.png 600w,
      https://placehold.jp/700x700.png 700w,
      https://placehold.jp/800x800.png 800w,
      https://placehold.jp/900x900.png 900w,
      https://placehold.jp/1000x1000.png 1000w,
      https://placehold.jp/1100x1100.png 1100w,
      https://placehold.jp/1200x1200.png 1200w,
      https://placehold.jp/1300x1300.png 1300w,
      https://placehold.jp/1400x1400.png 1400w,
      https://placehold.jp/1500x1500.png 1500w,
      https://placehold.jp/1600x1600.png 1600w,
      https://placehold.jp/1700x1700.png 1700w,
      "
        width="1800"
        height="1800"
        sizes="(min-width: 768px) 50vw, 100vw"
        alt="Responsive image try to figure out."
      />
    </div>
  );
}

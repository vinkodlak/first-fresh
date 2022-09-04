/** @jsx h */
import { h } from "preact";
import { tw } from "../utils/twind.ts";

export default function ResponsiveImage() {
  return (
    <div class={tw`grid grid-cols-12`}>
      <img
        class={tw`col-span-full md:col-span-6 w-full`}
        src="https://placehold.jp/2700x524.png"
        srcset="
      https://placehold.jp/700x524.png 700w,
      https://placehold.jp/800x524.png 800w,
      https://placehold.jp/900x524.png 900w,
      https://placehold.jp/1000x524.png 1000w,
      https://placehold.jp/1100x524.png 1100w,
      https://placehold.jp/1200x524.png 1200w,
      https://placehold.jp/1300x524.png 1300w,
      https://placehold.jp/1400x524.png 1400w,
      https://placehold.jp/1500x524.png 1500w,
      https://placehold.jp/1600x524.png 1600w,
      https://placehold.jp/1700x524.png 1700w,
      "
        sizes="(min-width: 768px) 50vw, 100vw"
        alt="Responsive image try to figure out."
      />
    </div>
  );
}

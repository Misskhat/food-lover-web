import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold ">
        Welcome to{" "}
        <span className="font-bold text-8xl italic animate-pulse text-cyan-600">
          Food Lover
        </span>{" "}
        Website
      </h1>
      <p className="text-2xl w-2/3 text-justify m-5 capitalize text-wrap italic">
        "Food Lover is your one‑stop destination for discovering, enjoying, and
        ordering delicious food online. From local favorites to international
        cuisines, we bring a wide variety of dishes together in one place —
        complete with names, prices, and detailed descriptions so you know
        exactly what you’re getting. With powerful search and filter options,
        you can quickly find the meal you’re craving, add it to your cart, and
        check out with ease. Our community of food lovers also shares honest
        reviews, helping you choose the best dishes every time. More than just a
        website, Food Lover is a hub for exploring flavors, celebrating culinary
        creativity, and making every meal an unforgettable experience."
      </p>
    </div>
  );
}

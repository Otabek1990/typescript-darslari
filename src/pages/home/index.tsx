import {
  useRef,
  useState,
  type ChangeEvent,
  type MouseEvent,
  type SubmitEvent,
} from "react";
import type { HomeProps } from "./types";
function Home({ user }: HomeProps) {
  const [query, setQuery] = useState("");
  const titleRef = useRef<HTMLInputElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  // event;
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };
  const handleChangeLanguage = (
    event: ChangeEvent<HTMLSelectElement>,
  ): void => {
    alert(event.target.value);
  };

  const enter = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.type);
  };
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const forma = new FormData(event.currentTarget);
    const user = Object.fromEntries(forma.entries());
    console.log(user);
  };
  const touch = (event: MouseEvent<HTMLImageElement>) => {
    console.log(event.currentTarget.alt);
  };
  const rasmdanChiqish = (event: MouseEvent<HTMLImageElement>) => {
    console.log(event.currentTarget.src);
  };
  return (
    <div className="px-16 py-5 text-2xl">
      <h1>home sahifa:{user.ism}</h1>
      <h1>{query}</h1>
      <video ref={videoRef} src=""></video>
      <input type="text" placeholder="" />
    
      <img
        onMouseLeave={rasmdanChiqish}
        onMouseOver={touch}
        src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/z/u/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=1300&hei=715&scl=2.313846153846154"
        alt="tabiat"
      />
      <input
        ref={titleRef}
        type="text"
        className="border p-2"
        placeholder="title kiriting"
      />
      <button type="reset" onClick={enter} className="btn">
        enter
      </button>
      <form onSubmit={handleSubmit}>
        <input
          className="border p-2"
          name="ism"
          type="text"
          placeholder="ism"
        />
        <input
          className="border p-2"
          name="yosh"
          type="number"
          placeholder="yosh"
        />
        <button className="btn" type="submit">
          kiritish
        </button>
      </form>

      <input
        onChange={handleChange}
        className="p-2 border"
        type="text"
        placeholder="qidirish..."
      />
      <select
        onChange={handleChangeLanguage}
        className="border p-2"
        name="lang"
        id="lang"
      >
        <option value="uz">uzbek</option>
        <option value="ru">rus</option>
        <option value="en">english</option>
      </select>
    </div>
  );
}

export default Home;

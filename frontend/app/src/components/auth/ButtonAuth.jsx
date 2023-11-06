export default function ButtonAuth({ title, textcolor, bgstart, bgend }) {
  return (
    <button
      className={`${textcolor} bg-gradient-to-b ${bgstart} ${bgend} px-4 py-2 rounded-2xl w-full`}
    >
      {title}
    </button>
  );
}

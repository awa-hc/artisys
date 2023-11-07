export default function ButtonAuth({ title, textcolor, bgcolor}) {
  return (
    <button
      className={`${textcolor} ${bgcolor} px-4 py-2 rounded-2xl w-full font-semibold`}
    >
      {title}
    </button>
  );
}

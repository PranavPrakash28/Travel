function Privacy({ onclose }) {
  return (
    <div className="bg-white text-black border-4 border-black  opacity-100 font-oswald px-2">
      <div className="flex flex-col">
        <p
          className="justify-end flex cursor-pointer font-extrabold"
          onClick={onclose}
        >
          X
        </p>
        <h1 className="flex text-red-600 ">Privacy Policy</h1>
        <p className="min-w-fit ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio sed
          vero eum explicabo aperiam, magni, beatae quae doloribus quod eveniet
          earum repellat assumenda commodi vel similique eaque at aspernatur
          numquam!
        </p>
      </div>
    </div>
  );
}

export default Privacy;

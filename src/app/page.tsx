import { notFound } from "next/navigation";

export default function Page() {
  // const userExists = false;

  // if (!userExists) {
  //   notFound();
  // }
  return (

    <div className="flex flex-col gap-2 h-full p-20 box-border justify-center items-center">
      <h1 className="text-5xl">Cal State Underground</h1>
    </div>
  );
}
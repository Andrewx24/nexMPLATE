import Link from "next/link";


export default function Page({ searchParams }: { searchParams: { id: number; name: string; email: string } }) {
  const { id, name, email } = searchParams;

  return (
    <div>
      <h2>Hello there, {name}!</h2>
      <p>Your user ID is: {id}</p>
      consol.log({id})
      <p>Your email address is: {email}</p>
 <Link href="/apiexample"> Back to the list</Link>
    </div>
  );
}



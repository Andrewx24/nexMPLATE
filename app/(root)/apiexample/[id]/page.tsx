export default function Page({ searchParams }: { searchParams: { id: string; name: string; email: string } }) {
  const { id, name, email } = searchParams;

  return (
    <div>
      <h2>Hello there, {name}!</h2>
      <p>Your user ID is: {id}</p>
      <p>Your email address is: {email}</p>
    </div>
  );
}



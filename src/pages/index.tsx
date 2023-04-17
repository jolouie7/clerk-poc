import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserProfile,
  UserButton,
  useUser,
} from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();
  return (
    <main className="flex items-center">
      <h1 className="text-4xl font-bold underline text-red-700 md:ml-12">
        Logo Here!
      </h1>
      <div className="ml-auto sm: mr-2 md:mr-8">
        {user && <div>{user.fullName}</div>}
      </div>
      <div className="flex justify-end md:mr-12">
        <UserButton />
      </div>
    </main>
  );
}

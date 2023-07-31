import NavBar from "@/components/navbar";


export default function Layout({ children }) {
  return (
    <>
      <NavBar/>
      {children}
    </>
  );
}

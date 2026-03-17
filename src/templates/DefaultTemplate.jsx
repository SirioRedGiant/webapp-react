import { Outlet } from "react-router";

export default function DefaultTemplate() {
  return (
    <>
      <main>
        main start
        <Outlet />
        main end
      </main>
    </>
  );
}

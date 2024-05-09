import {APP_NAME} from "@repo/config";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {APP_NAME}
    </main>
  );
}

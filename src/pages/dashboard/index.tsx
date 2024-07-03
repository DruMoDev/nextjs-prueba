import { createClient } from "@/utils/supabase/component";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

const Dashboard = () => {
  const router = useRouter();
  const supabase = createClient();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        router.push("/login");
        return;
      }

      console.log("User found:", user);
      setUser(user);
    };
    fetchUser();
  });

  return (
    <main className="flex min-h-screen flex-col  container mx-auto pt-36">
      <div className="flex justify-between">
        <h1 className="text-5xl font-bold">Dashboard</h1>
        <button
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 px-7 rounded text-2xl transition-all"
          onClick={async () => {
            const supabase = createClient();
            await supabase.auth.signOut();
            router.push("/login");
          }}>
          Logout
        </button>
      </div>

      <h3 className="text-3xl mt-6">
        Welcome{" "}
        <span className="text-teal-500 font-semibold">{user?.email}</span>
      </h3>
    </main>
  );
};

export default Dashboard;

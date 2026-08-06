import { Link, useLocation } from "wouter";
import { Crown, Leaf, Sprout, Upload, User } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { persistSelectedRole } from "@/lib/auth-preferences";

export default function AuthRolePage() {
  const [, setLocation] = useLocation();

  function continueAsGuest() {
    persistSelectedRole("guest");
    setLocation("/");
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_12%_10%,rgba(36,159,94,0.24),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(245,181,56,0.22),transparent_25%),linear-gradient(135deg,#f8fbf6,#eef8f0_46%,#fffaf0)]">
      <div className="container flex min-h-screen flex-col px-4 py-8">
        <Link href="/" className="inline-flex w-fit items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-bold text-primary shadow-sm backdrop-blur-md">
          <Sprout className="h-4 w-4" />
          Farmora
        </Link>

        <div className="flex flex-1 items-center justify-center py-12">
          <div className="w-full max-w-5xl space-y-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mx-auto max-w-2xl space-y-4"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-xl shadow-primary/20">
                <Leaf className="h-7 w-7" />
              </div>
              <h1 className="text-4xl font-black md:text-6xl">Welcome to Farmora</h1>
              <p className="text-lg text-muted-foreground md:text-xl">Choose how you want to continue</p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              <RoleCard
                href="/login/user"
                icon={<User className="h-7 w-7" />}
                accentIcon={<Leaf className="h-4 w-4" />}
                title="User"
                text="Learn farming, explore kits, get recommendations"
                button="Continue as User"
                delay={0.06}
                onClick={() => persistSelectedRole("user")}
              />
              <RoleCard
                href="/login/creator"
                icon={<Upload className="h-7 w-7" />}
                accentIcon={<Crown className="h-4 w-4" />}
                title="Creator"
                text="Upload tutorials, grow audience, earn trust"
                button="Continue as Creator"
                creator
                delay={0.14}
                onClick={() => persistSelectedRole("creator")}
              />
            </div>

            <Button
              variant="outline"
              className="h-14 rounded-full border-white/80 bg-white/70 px-8 font-bold shadow-sm backdrop-blur-md"
              onClick={continueAsGuest}
            >
              Continue as Guest
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function RoleCard({
  href,
  icon,
  accentIcon,
  title,
  text,
  button,
  creator,
  delay,
  onClick,
}: {
  href: string;
  icon: React.ReactNode;
  accentIcon: React.ReactNode;
  title: string;
  text: string;
  button: string;
  creator?: boolean;
  delay: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -6 }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="group block h-full rounded-[2rem] border border-white/70 bg-white/70 p-6 text-left shadow-xl shadow-black/5 backdrop-blur-xl transition-all hover:shadow-2xl md:p-8"
      >
        <div className="flex items-start justify-between gap-6">
          <div className={creator ? "flex h-16 w-16 items-center justify-center rounded-2xl bg-stone-950 text-amber-200" : "flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white"}>
            {icon}
          </div>
          <div className={creator ? "flex h-9 w-9 items-center justify-center rounded-full bg-amber-200 text-stone-950" : "flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary"}>
            {accentIcon}
          </div>
        </div>
        <div className="mt-8 space-y-3">
          <h2 className="text-3xl font-black">{title}</h2>
          <p className="min-h-14 text-lg leading-7 text-muted-foreground">{text}</p>
        </div>
        <Button className={creator ? "mt-8 h-14 w-full rounded-2xl bg-stone-950 text-amber-200 hover:bg-stone-800" : "mt-8 h-14 w-full rounded-2xl bg-primary text-white hover:bg-primary/90"}>
          {button}
        </Button>
      </Link>
    </motion.div>
  );
}

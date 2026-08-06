import AuthForm from "@/components/auth/auth-form";
import AuthShell from "@/components/auth/auth-shell";

export function UserLoginPage() {
  return (
    <AuthShell
      variant="user"
      eyebrow="Nature-powered learning"
      title="Grow smarter with Farmora"
      subtitle="A clean, modern login for learners who want tutorials, organic kits, and tailored farm recommendations."
    >
      <AuthForm role="user" mode="login" />
    </AuthShell>
  );
}

export function CreatorLoginPage() {
  return (
    <AuthShell
      variant="creator"
      eyebrow="Creator studio access"
      title="Build trust from every tutorial"
      subtitle="A premium creator entrance for publishing lessons, tracking audience growth, and preparing future rewards."
    >
      <AuthForm role="creator" mode="login" />
    </AuthShell>
  );
}

export function UserSignupPage() {
  return (
    <AuthShell
      variant="user"
      eyebrow="Join Farmora"
      title="Start your organic farming journey"
      subtitle="Create a learner profile for saved tutorials, better recommendations, and smoother shopping."
    >
      <AuthForm role="user" mode="signup" />
    </AuthShell>
  );
}

export function CreatorSignupPage() {
  return (
    <AuthShell
      variant="creator"
      eyebrow="Creator onboarding"
      title="Turn practical farming knowledge into reach"
      subtitle="Create a branded creator profile for tutorials, expertise, and future monetization."
    >
      <AuthForm role="creator" mode="signup" />
    </AuthShell>
  );
}

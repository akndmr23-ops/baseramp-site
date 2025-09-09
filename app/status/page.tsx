import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Status — BaseRamp",
  description: "BaseRamp servis durumu ve son dağıtım bilgileri.",
};

// Sayfayı her istek için taze üret (durum sayfası için uygun).
export const revalidate = 0;

export default function StatusPage() {
  const buildTime = new Date().toISOString();

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-8">
      <h1 className="text-3xl md:text-4xl font-semibold">Status</h1>

      <div className="rounded-2xl border border-white/10 p-5 bg-black/40">
        <p className="text-green-400 font-medium">All systems operational ✅</p>
        <p className="mt-2 text-sm text-gray-400">
          Build time: <code className="text-gray-300">{buildTime}</code>
        </p>
      </div>

      <p className="text-gray-300">
        Herhangi bir sorun görürseniz lütfen GitHub Issues üzerinden bildirin.
      </p>
    </main>
  );
}

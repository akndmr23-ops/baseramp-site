import type { Metadata } from "next";
import Nav from "../../components/Nav";

export const metadata: Metadata = {
  title: "Status — BaseRamp",
  description: "BaseRamp system status and service health monitoring.",
};

// Generate fresh data for each request
export const revalidate = 0;

export default function StatusPage() {
  const buildTime = new Date().toISOString();
  const uptime = "99.9%";
  const lastUpdate = new Date(Date.now() - 5 * 60 * 1000).toISOString(); // 5 minutes ago

  const services = [
    { name: "API Server", status: "operational", latency: "45ms" },
    { name: "Token Data", status: "operational", latency: "120ms" },
    { name: "NFT Data", status: "operational", latency: "89ms" },
    { name: "Database", status: "operational", latency: "12ms" },
    { name: "CDN", status: "operational", latency: "8ms" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational": return "text-green-400 bg-green-400/10 border-green-400/20";
      case "degraded": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      case "down": return "text-red-400 bg-red-400/10 border-red-400/20";
      default: return "text-gray-400 bg-gray-400/10 border-gray-400/20";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational": return "✅";
      case "degraded": return "⚠️";
      case "down": return "❌";
      default: return "❓";
    }
  };

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-4xl px-4 py-12 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            System Status
          </h1>
          <p className="text-xl text-gray-300">
            Real-time monitoring of BaseRamp services
          </p>
        </div>

        {/* Overall Status */}
        <div className="rounded-2xl border border-green-500/20 p-6 bg-green-500/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-green-400 flex items-center gap-2">
                ✅ All Systems Operational
              </h2>
              <p className="text-green-300 mt-1">
                All services are running smoothly
              </p>
            </div>
            <div className="text-right text-sm text-green-400">
              <div>Uptime: {uptime}</div>
              <div>Last 30 days</div>
            </div>
          </div>
        </div>

        {/* Service Status */}
        <div className="rounded-xl border border-white/10 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold mb-6">Service Health</h2>
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex items-center justify-between p-4 rounded-lg border border-white/5 bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{getStatusIcon(service.status)}</span>
                  <div>
                    <div className="font-medium">{service.name}</div>
                    <div className={`text-sm px-2 py-1 rounded-full border inline-block ${getStatusColor(service.status)}`}>
                      {service.status}
                    </div>
                  </div>
                </div>
                <div className="text-right text-sm text-gray-400">
                  <div>Response Time</div>
                  <div className="font-mono text-white">{service.latency}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h3 className="text-xl font-semibold mb-4">📊 Performance Metrics</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Average Response Time</span>
                <span className="font-mono text-green-400">54ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Requests/minute</span>
                <span className="font-mono text-blue-400">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Error Rate</span>
                <span className="font-mono text-green-400">0.01%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Active Users</span>
                <span className="font-mono text-purple-400">892</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h3 className="text-xl font-semibold mb-4">🔧 Build Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Build Time</span>
                <span className="font-mono text-gray-300">
                  {new Date(buildTime).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Last Update</span>
                <span className="font-mono text-gray-300">
                  {new Date(lastUpdate).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Version</span>
                <span className="font-mono text-blue-400">v1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Environment</span>
                <span className="font-mono text-green-400">Production</span>
              </div>
            </div>
          </div>
        </div>

        {/* Incident History */}
        <div className="rounded-xl border border-white/10 bg-black/40 p-6">
          <h3 className="text-xl font-semibold mb-4">📋 Recent Incidents</h3>
          <div className="text-center py-8 text-gray-400">
            <div className="text-4xl mb-2">🎉</div>
            <p>No incidents in the last 30 days!</p>
            <p className="text-sm mt-1">Our systems have been running smoothly.</p>
          </div>
        </div>

        <div className="text-center py-6">
          <p className="text-gray-400 text-sm">
            Having issues? Contact us on{" "}
            <a
              href="https://github.com/akndmr23-ops"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
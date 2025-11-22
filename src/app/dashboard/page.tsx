"use client";

import { ProtectedRoute } from "@/components/protected-route";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const DashboardScene = dynamic(
  () => import("@/components/dashboard/DashboardScene"),
  { ssr: false }
);

const SalesChart = dynamic(
  () => import("@/components/dashboard/SalesChart"),
  { ssr: false }
);

const VisitorFlowChart = dynamic(
  () => import("@/components/dashboard/VisitorFlowChart"),
  { ssr: false }
);

type StatCardProps = {
  label: string;
  value: string;
  helper: string;
  accent: string;
};

type ActivityItemProps = {
  color: string;
  title: string;
  subtitle: string;
};

type SidebarItemProps = {
  children: React.ReactNode;
  active?: boolean;
};

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-neutral-950 text-neutral-50 flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-neutral-800 bg-neutral-950/90 backdrop-blur flex flex-col">
          <div className="h-16 flex items-center px-6 border-b border-neutral-800">
            <div className="h-9 w-9 rounded-xl bg-emerald-500 flex items-center justify-center font-bold text-neutral-900 mr-3">
              RX
            </div>
            <div>
              <div className="text-sm font-semibold">Rodix Cloud</div>
              <div className="text-xs text-neutral-400">
                E-commerce Control Center
              </div>
            </div>
          </div>

          <nav className="flex-1 py-4 px-2 text-sm space-y-1">
            <div className="px-3 text-[11px] uppercase tracking-wider text-neutral-500 mb-1">
              Dashboard
            </div>

            <SidebarItem active>Global overview</SidebarItem>
            <SidebarItem>Stores</SidebarItem>
            <SidebarItem>Customers</SidebarItem>
            <SidebarItem>Billing</SidebarItem>

            <div className="px-3 text-[11px] uppercase tracking-wider text-neutral-500 mt-4 mb-1">
              Analytics
            </div>

            <SidebarItem>Reports</SidebarItem>
          </nav>

          <div className="border-t border-neutral-800 px-4 py-3 text-[11px] text-neutral-400">
            <div className="flex items-center justify-between">
              <span>Plan: Growth</span>
              <span className="text-emerald-400">14-day trial</span>
            </div>
            <div className="text-[10px] mt-1 text-neutral-500">
              You are using Rodix Growth. After trial: $199/mo.
            </div>
          </div>
        </aside>

        {/* Main area */}
        <main className="flex-1 flex flex-col">
          {/* Top bar */}
          <header className="h-16 border-b border-neutral-800 px-8 flex items-center justify-between bg-neutral-950/90 backdrop-blur">
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                Dashboard
              </span>
              <span className="text-lg font-semibold text-neutral-50">
                Global overview
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs text-neutral-400">
              <button className="px-3 py-1.5 rounded-full border border-neutral-700 hover:bg-neutral-800 transition">
                EN
              </button>
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-neutral-800 flex items-center justify-center text-[11px]">
                  AD
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-neutral-500">
                    Logged in as
                  </div>
                  <div className="text-xs text-neutral-200">
                    admin@example.com
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <section className="flex-1 px-8 py-6 space-y-6">
            {/* Stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <StatCard
                  label="MRR (Monthly Recurring Revenue)"
                  value="$8,420"
                  helper="+18.3% vs last 30 days"
                  accent="text-emerald-400"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <StatCard
                  label="Active stores"
                  value="46"
                  helper="+7 stores this week"
                  accent="text-emerald-400"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <StatCard
                  label="Active customers"
                  value="1,238"
                  helper="+92 new signups"
                  accent="text-emerald-400"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <StatCard
                  label="Churn rate"
                  value="1.2%"
                  helper="-0.4% better than last month"
                  accent="text-rose-400"
                />
              </motion.div>
            </div>

            {/* 3D Globe + Visitor Flow */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* 3D Globe Visualization */}
              <motion.div
                className="lg:col-span-2 bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-xl p-4 overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs text-neutral-400">
                      Live visitor map
                    </div>
                    <div className="text-xs text-neutral-500">
                      Real-time global traffic
                    </div>
                  </div>
                </div>
                <div className="w-full h-80 md:h-96">
                  <DashboardScene />
                </div>
              </motion.div>

              {/* Visitor Flow Chart */}
              <motion.div
                className="bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-xl p-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs text-neutral-400">
                      Visitor funnel
                    </div>
                    <div className="text-xs text-neutral-500">
                      Conversion breakdown
                    </div>
                  </div>
                </div>
                <div className="w-full h-72">
                  <VisitorFlowChart />
                </div>
              </motion.div>
            </div>

            {/* Timeline + Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Revenue timeline */}
              <div className="lg:col-span-2 bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-xl p-4 flex flex-col hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs text-neutral-400">
                      Revenue timeline
                    </div>
                    <div className="text-xs text-neutral-500">
                      Last 30 days
                    </div>
                  </div>
                  <button className="px-3 py-1.5 rounded-full border border-neutral-700 text-xs text-neutral-300 hover:bg-neutral-800/80 transition-colors">
                    Live data coming from backend soon
                  </button>
                </div>

                <div className="flex-1 w-full h-64 md:h-72">
                  <SalesChart />
                </div>
              </div>

              {/* Recent activity */}
              <div className="bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-xl p-4 flex flex-col hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-xs text-neutral-400">
                      Recent activity
                    </div>
                    <div className="text-xs text-neutral-500">
                      Last updates across all connected stores
                    </div>
                  </div>
                </div>

                <ul className="mt-1 space-y-3 text-xs">
                  <ActivityItem
                    color="bg-emerald-400"
                    title="New store onboarded"
                    subtitle='"Morocco Streetwear" just finished setup.'
                  />
                  <ActivityItem
                    color="bg-sky-400"
                    title="Pixel connected"
                    subtitle="Meta + TikTok pixels synced for 12 stores."
                  />
                  <ActivityItem
                    color="bg-violet-400"
                    title="n8n automation deployed"
                    subtitle="WooCommerce → Shopify product sync active."
                  />
                  <ActivityItem
                    color="bg-amber-400"
                    title="High-value customer"
                    subtitle="Customer from Qatar upgraded."
                  />
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </ProtectedRoute>
  );
}

/* Components */

function SidebarItem({ children, active }: SidebarItemProps) {
  return (
    <button
      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${active
        ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
        : "text-neutral-300 hover:bg-neutral-900/80 border border-transparent"
        }`}
    >
      <span className="text-[13px]">{children}</span>
      {active && (
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
      )}
    </button>
  );
}

function StatCard({ label, value, helper, accent }: StatCardProps) {
  return (
    <div className="group bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 cursor-pointer">
      <div className="text-[11px] uppercase tracking-wide text-neutral-400">
        {label}
      </div>
      <div className="mt-3 text-2xl font-semibold text-neutral-50 group-hover:text-emerald-400 transition-colors">
        {value}
      </div>
      <div className={`mt-2 text-xs ${accent}`}>{helper}</div>
    </div>
  );
}

function ActivityItem({ color, title, subtitle }: ActivityItemProps) {
  return (
    <li className="flex items-start">
      <span className="relative mt-1 flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-75`} />
        <span className={`relative inline-flex rounded-full h-2 w-2 ${color}`} />
      </span>
      <div className="ml-3">
        <div className="text-neutral-100 text-[13px]">{title}</div>
        <div className="text-neutral-500 text-[11px]">{subtitle}</div>
      </div>
    </li>
  );
}

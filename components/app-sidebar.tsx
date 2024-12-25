"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Command,
  Frame,
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { useParams } from "next/navigation";

const data = {
  user: {
    name: "상운",
    email: "sangwoonin@gmail.com",
    avatar: "https://ui.shadcn.com/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "가계부",
      logo: GalleryVerticalEnd,
      plan: "엔터프라이즈",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],

  projects: [
    {
      name: "가계부 프로젝트",
      url: "#",
      icon: Frame,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const params = useParams();
  const locale = params.locale;

  const navMain = [
    {
      title: "대시보드",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "자산 현황",
          url: `/${locale}/dashboard/assetDashboard`,
          active: true,
        },
        {
          title: "연간 결산",
          url: `/${locale}/dashboard/yearlySettlement`,
        },
        {
          title: "연간 리포트",
          url: `/${locale}/dashboard/yearlyReport`,
        },
      ],
    },
    {
      title: "가계부",
      url: "#",
      icon: BookOpen,
      isActive: true,
      items: [
        {
          title: "월별 가계부",
          url: `/${locale}/dashboard/kakeibo/monthlyLedger`,
        },
      ],
    },

    {
      title: "자산 관리",
      url: "#",
      icon: Settings2,
      isActive: true,
      items: [
        {
          title: "목적 통장",
          url: `/${locale}/dashboard/assetsManagement/purposeAccount`,
        },
      ],
    },
  ];

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

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

// This is sample data.
const data = {
  user: {
    name: "상운",
    email: "sangwoonin@gmail.com",
    // avatar: "/avatars/shadcn.jpg",
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
  navMain: [
    // {
    //   title: "가계부 관리",
    //   url: "#",
    //   icon: Bot,
    //   isActive: true,
    //   items: [
    //     {
    //       title: "항목 설정",
    //       url: "#",
    //     },
    //   ],
    // },
    {
      title: "대시보드",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "자산 현황",
          url: "/dashboard/assetDashboard",
          active: true,
        },
        {
          title: "연간 결산",
          url: "/dashboard/yearlySettlement",
        },
        {
          title: "연간 리포트",
          url: "/dashboard/yearlyReport",
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
          url: "/dashboard/kakebo/monthlyLedger",
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
          url: "/dashboard/assetsManagement/purposeAccount",
        },
      ],
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
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

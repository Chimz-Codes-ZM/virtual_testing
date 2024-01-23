import React from "react";
import Link from "next/link";
import Layout from "../../components/layouts/layout";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"


import { Project_teams } from "@/pages/data";

const index = () => {
  return (
    <Layout sideHighlight="Insight">
      <div className="p-14 relative">
        <Table>
          <TableCaption>A list of ongoing projects.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead className="">Project Name</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead className="w-[150px] truncate">
                Project Description
              </TableHead>
              <TableHead>Date Started</TableHead>
              <TableHead className="text-right"># of Team Members</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Project_teams.map((team) => (
              <TableRow key={team.projectId}>
                <TableCell>{team.number}</TableCell>
                <TableCell className="font-medium">
                  <Link href={"/virtual_tech_village/admin/teams/project"}>
                    {team.projectName}
                  </Link>
                </TableCell>
                <TableCell>{team.teamOwner}</TableCell>
                <TableCell className="w-[150px] truncate">
                  {team.projectDescription}
                </TableCell>
                <TableCell>{team.dateStarted}</TableCell>
                <TableCell className="text-right">
                  {team.numberOfTeamMembers}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="z-[999] fixed left-32 bottom-10">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">+ New Team</Button>
            </SheetTrigger>
            <div className="">
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Add New Team</SheetTitle>
                  <SheetDescription>
                    Fill out the form below to create a new team
                  </SheetDescription>
                </SheetHeader>

                <div className="flex flex-col gap-4">
              <div className="">
                <Label htmlFor="name" className="text-right">
                  Project Name
                </Label>
                <Input id="name" value="" className="col-span-3" />
              </div>
              <div className="">
                <Label htmlFor="username" className="text-right">
                  Project Description
                </Label>
                <Textarea/>
              </div>
              <div className="">
                <Label htmlFor="username" className="text-right">
                  Start Date
                </Label>
                <Input id="username" value="" className="col-span-3" />
              </div>
              <div className="">
                <Label htmlFor="username" className="text-right">
                  Number of Team Members
                </Label>
                <Input id="username" type="number" className="col-span-3" />
              </div>
            </div>
              </SheetContent>
            </div>
          </Sheet>
        </div>
      </div>
    </Layout>
  );
};

export default index;
